import { GUID } from "@/RAG-api/types/guid.type";
import { ChatBotMessage } from "../components/teacher/ChatMessages";
import { getChatHistory, sendChatMessage } from "./chatApi";
import { mdTargetBlankRemoval } from "./md-target-blank-removal";


export interface readerType {
  reader: ReadableStreamDefaultReader<string>;
  xChatId: GUID | undefined;
  xChatToken?: string;
}

let getReader: readerType | undefined = undefined;
let streamGeneration = 0;
let isStreaming = false;

const chatIdVariableName = "#chatId=";

export const sendChatBotMessage = async (
  getMessagesHistory: boolean,
  inputRef: React.RefObject<HTMLInputElement | null>,
  setMessageHistory: React.Dispatch<React.SetStateAction<ChatBotMessage[]>>,
  setReaderRef: React.Dispatch<readerType | undefined> | undefined,
//   resetChat: (closeWindow?: boolean) => void,
  chatApi: string,
  assistantId: GUID,
  inputText?: string
) => {
  const text = inputText
    ? inputText
    : (inputRef.current?.value.trim() as string);
  if (text === "" && !getMessagesHistory) {
    return;
  }

  // Cancel any in-progress stream
  if (isStreaming) {
    streamGeneration++;
    isStreaming = false;
  }

  const messageId = crypto.randomUUID() as GUID;
  const currentGeneration = ++streamGeneration;
  isStreaming = true;

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
    // resetChat(true);
    return;
  }

  if (setReaderRef) {
    setReaderRef(getReader);
  }

  // Capture a local reference so this loop always reads from its own reader,
  // even if getReader is overwritten by a concurrent call.
  const localReader = getReader;

  if (!localReader?.reader) {
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
    if (currentGeneration !== streamGeneration) {
      break;
    }
    const { value, done } = await localReader.reader.read();
    if (currentGeneration !== streamGeneration) {
      break;
    }

    if (done) {
      if (buffer.trim()) {
        try {
          const parsed = JSON.parse(buffer.trim());
          if (parsed.content) {
            setMessageHistory((prev) => {
              if (prev.length > 0 && prev.at(-1)?.isChatbot) {
                const last = prev.at(-1)!;
                const _messageFixed = mdTargetBlankRemoval(last.message + parsed.content);
                return [
                  ...prev.slice(0, -1),
                  { ...last, message: _messageFixed, type: last.type || "ChatCompletion" },
                ];
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
          if (localReader) {
            const chatId: GUID | undefined = localReader?.xChatId;
            const chatToken: string | undefined = localReader?.xChatToken;
            // setCurrentChatId(chatId);

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
                  const last = prev.at(-1)!;
                  const _messageFixed = mdTargetBlankRemoval(last.message + parsed.content);
                  return [
                    ...prev.slice(0, -1),
                    { ...last, message: _messageFixed, type: "ChatCompletion" },
                  ];
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
        //   } else if (parsed.type === "Citations") {
        //     const readMoreLink: ReadMoreLink = JSON.parse(parsed.content);
        //     const foundCollection = findReadMoreCollection(
        //       getMessagesHistory ? parsed.id : messageId
        //     );
        //     if (foundCollection) {
        //       addNewReadMoreLink(
        //         getMessagesHistory ? parsed.id : messageId,
        //         readMoreLink
        //       );
        //     } else {
        //       addNewCollection(
        //         getMessagesHistory ? parsed.id : messageId,
        //         readMoreLink
        //       );
        //     }
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
  isStreaming = false;
};

export function setReaderToUndefined() {
  getReader = undefined;
  isStreaming = false;
}
