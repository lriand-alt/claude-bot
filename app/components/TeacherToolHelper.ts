import { GUID } from "@/RAG-api/types/guid.type";
import { ChatBotMessage } from "./teacher/ChatMessages";
import { sendChatMessage } from "../lib/chatApi";

export interface readerType {
  reader: ReadableStreamDefaultReader<string>;
  xChatId: GUID | undefined;
  xChatToken?: string;
}

let getReader: readerType | undefined = undefined;
export const chatIdVariableName = "#chatId=";

// const findReadMoreCollection =
//   useReadMoreStore.getState().findReadMoreCollection;
// const addNewCollection = useReadMoreStore.getState().addNewCollection;
// const addNewReadMoreLink = useReadMoreStore.getState().addNewReadMoreLink;
// const setCurrentChatId = useReadMoreStore.getState().setCurrentChatId;

export const sendChatBotMessage = async (
  getMessagesHistory: boolean,
  inputRef: React.RefObject<HTMLTextAreaElement | null>,
  setMessageHistory: React.Dispatch<React.SetStateAction<ChatBotMessage[]>>,
  setReaderRef: React.Dispatch<readerType | undefined> | undefined,
  resetChat: (closeWindow?: boolean) => void,
  chatApi: string,
  assistantId: string,
  inputText?: string
) => {
  const text = inputText
    ? inputText
    : (inputRef.current?.value.trim() as string);
  if (text === "" && !getMessagesHistory) {
    return;
  }

  const messageId = crypto.randomUUID() as GUID;

  if (!getMessagesHistory) {
    setMessageHistory((prev) => {
      const removedPrevQuestionSuggestions = prev.filter(
        (message) => message.type !== "QuestionSuggestion"
      );
      return [
        ...removedPrevQuestionSuggestions,
        {
          id: messageId,
          isChatbot: false,
          type: "ChatCompletion",
          message: text,
        },
        {
          id: messageId,
          isChatbot: true,
          type: "ChatCompletion",
          message: "",
          continued: true,
          isStreamingStill: true,
        },
      ];
    });
  }

  inputRef.current!.value = "";
  inputRef.current!.disabled = true;

  const urlStr = window.location.href;
  const chatIdPos = urlStr.indexOf(chatIdVariableName);

  const chatId: GUID | undefined =
    chatIdPos > 0
      ? (urlStr.substring(chatIdPos + chatIdVariableName.length) as GUID)
      // : useReadMoreStore.getState().currentChatId
      // ? useReadMoreStore.getState().currentChatId
      : getReader?.xChatId;

  try {
    const data = !getMessagesHistory
      ? await sendChatMessage(
          chatApi,
          text,
          assistantId,
          undefined,
          undefined,
          chatId
        )
      : await getChatHistory(chatApi, chatId);
    if (data instanceof Error) {
      throw new Error(data.message);
    } else {
      getReader = data;
    }
  } catch (err) {
    console.log(err);
    resetChat(true);
    return;
  }

  if (setReaderRef) {
    setReaderRef(getReader);
  }

  if (!getReader?.reader) {
    setMessageHistory((prev) => [
      ...prev,
      {
        id: messageId,
        message: "Something went wrong - did not get reader for chatbot",
        type: "StatusUpdate",
        isChatbot: true,
        continued: true,
        isStreamingStill: false,
      },
    ]);
    inputRef.current!.disabled = false;
    inputRef.current!.focus();
    return;
  }

  let buffer = "";

  while (true) {
    const { value, done } = await getReader.reader.read();

    if (done) {
      if (buffer.trim()) {
        try {
          const parsed = JSON.parse(buffer.trim());
          if (parsed.content) {
            setMessageHistory((prev) => {
              if (prev.length > 0 && prev.at(-1)?.isChatbot) {
                const newPrev = [...prev];
                const _messageFixed = mdTargetBlankRemoval(
                  newPrev.at(-1)!.message + parsed.content
                );
                newPrev.at(-1)!.message = _messageFixed;
                newPrev.at(-1)!.type = newPrev.at(-1)!.type || "ChatCompletion";
                return newPrev;
              }
              console.warn(
                "Received final stream data but no chatbot message found to append to."
              );
              return prev;
            });
          }
        } catch (error) {
          console.error(
            "Error parsing final buffer chunk:",
            error,
            "Buffer:",
            buffer
          );
        }
      }

      inputRef.current!.disabled = false;
      inputRef.current!.focus();
      setMessageHistory((prev) => {
        const lastMessage = prev
          .slice()
          .reverse()
          .find((message) => message.type === "ChatCompletion");
        if (lastMessage?.isChatbot) {
          // Set the chat Id in the URL
          if (getReader) {
            const chatId: GUID | undefined = getReader?.xChatId;
            const chatToken: string | undefined = getReader?.xChatToken;

            setCurrentChatId(chatId);

            if (chatToken) {
              localStorage.setItem("lruRagChatToken", chatToken);
            }

            window.location.href =
              window.location.pathname +
              (chatId ? chatIdVariableName + chatId : "#");
          }

          return prev.map((msg) =>
            lastMessage.message === msg.message
              ? {
                  ...msg,
                  message: msg.message ?? "",
                  isStreamingStill: false,
                }
              : msg
          );
        }
        console.warn(
          "Stream ended but no chatbot message found to mark as complete."
        );
        return prev;
      });
      break;
    }

    buffer += value;

    let newlineIndex;
    while ((newlineIndex = buffer.indexOf("\n")) >= 0) {
      const line = buffer.substring(0, newlineIndex).trim();
      buffer = buffer.substring(newlineIndex + 1);

      if (line) {
        try {
          const parsed = JSON.parse(line);

          if (parsed.type === "ChatCompletion") {
            if (parsed.content) {
              setMessageHistory((prev) => {
                if (prev.length > 0 && prev.at(-1)!.isChatbot) {
                  const newPrev = [...prev];
                  const _messageFixed = mdTargetBlankRemoval(
                    newPrev.at(-1)!.message + parsed.content
                  );
                  newPrev.at(-1)!.message = _messageFixed;
                  newPrev.at(-1)!.type = "ChatCompletion";
                  return newPrev;
                } else {
                  console.warn(
                    "Received ChatCompletion stream data but no chatbot message found to append to."
                  );
                  return [
                    ...prev,
                    {
                      id: getMessagesHistory ? parsed.id : messageId,
                      isChatbot: true,
                      type: "ChatCompletion",
                      message: parsed.content,
                      continued: getMessagesHistory ? false : true,
                      isStreamingStill: getMessagesHistory ? false : true,
                    },
                  ];
                }
              });
            }
          } else if (parsed.type === "Images") {
            setMessageHistory((prev) => [
              ...prev,
              {
                id: getMessagesHistory ? parsed.id : messageId,
                isChatbot: true,
                type: "Images",
                message: "",
                imageUrl: parsed.content,
                isStreamingStill: false,
              },
            ]);
          } else if (parsed.type === "QuestionSuggestion") {
            setMessageHistory((prev) => [
              ...prev,
              {
                id: getMessagesHistory ? parsed.id : messageId,
                isChatbot: true,
                type: "QuestionSuggestion",
                message: parsed.content,
                isStreamingStill: false,
              },
            ]);
          } else if (parsed.type === "UserInput") {
            setMessageHistory((prev) => [
              ...prev,
              {
                id: getMessagesHistory ? parsed.id : messageId,
                isChatbot: false,
                type: "UserInput",
                message: parsed.content,
              },
            ]);
          } else if (parsed.type === "Citations") {
            const readMoreLink: ReadMoreLink = JSON.parse(parsed.content);
            const foundCollection = findReadMoreCollection(
              getMessagesHistory ? parsed.id : messageId
            );
            if (foundCollection) {
              addNewReadMoreLink(
                getMessagesHistory ? parsed.id : messageId,
                readMoreLink
              );
            } else {
              addNewCollection(
                getMessagesHistory ? parsed.id : messageId,
                readMoreLink
              );
            }
          } else if (
            parsed.type === "StatusUpdate" &&
            parsed.content === "Samtale fuldført!"
          ) {
            setMessageHistory((prev) => [
              ...prev,
              {
                id: getMessagesHistory ? parsed.id : messageId,
                isChatbot: true,
                type: "StatusUpdate",
                message: parsed.content,
                isStreamingStill: false,
              },
            ]);
          } else {
            console.log("Received other chunk type:", parsed);
          }
        } catch (error) {
          console.error("Error parsing streamed JSON:", error, "Line:", line);
        }
      }
    }
  }
};

export function setReaderToUndefined() {
  getReader = undefined;
}
