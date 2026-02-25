import { ChatInitResponse } from "@/RAG-api/interfaces/chat-init.interface";
import { GUID } from "@/RAG-api/types/guid.type";
import { KeyValuePairs } from "@/RAG-api/types/key-value-pairs.type";
import { generateApiKey } from "@/RAG-api/utils/key-generator";
import { ChatBotMessage } from "../components/teacher/ChatMessages";

export interface ChatResponse {
  response: string;
  suggestions?: string[];
}

export interface SendChatMessageParameters {
  messageContent: string;
  pageContent: string;
  conversationHistory: ChatBotMessage[];
  chatApi: string;
  assistantId: string;
}

export interface ChatRequestPayload {
  assistantId: string;
  message: string;
  sourceFilter?: GUID[];
  userValues?: KeyValuePairs;
  chatId?: GUID;
}

/**
 * Send a message to the chat API
 * @param messageContent - The message to send
 * @param pageContent - The loaded page/PDF content
 * @param loadedUrl - The loaded URL (if any)
 * @param conversationHistory - Previous messages
 * @param provider - The AI provider to use (default: "claude")
 * @returns The assistant's response and optional suggestions (for RAG)
 */
export const sendChatMessage = async (
  chatApi: string,
  message: string,
  assistantId: GUID,
  sourceFilter?: GUID[] | undefined,
  userValues?: KeyValuePairs | undefined,
  chatId?: GUID | undefined
): Promise<{
    reader: ReadableStreamDefaultReader<string>;
    xChatId: GUID | undefined;
    xChatToken: string | null | undefined;
  }|undefined> => {
  if (message && chatApi) {
    try {
      const payload: ChatRequestPayload = {
        assistantId,
        message,
        sourceFilter,
        userValues,
        chatId,
      };

      const response = await fetch(chatApi, {
        method: "POST",
        credentials: "include",
        headers: await getRequestHeader(),
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      if (!response.body) {
        return undefined;
      }

      const reader = response.body
        .pipeThrough(new TextDecoderStream())
        .getReader();

        console.log("Reader::: ", reader)
      return {
        reader,
        xChatId:
          response.headers.has("X-Chat-Id") &&
          response.headers.get("X-Chat-Id") !== null
            ? (response.headers.get("X-Chat-Id") as GUID)
            : undefined,
        xChatToken:
          response.headers.has("X-Chat-Token") &&
          response.headers.get("X-Chat-Token") !== null
            ? response.headers.get("X-Chat-Token")
            : undefined,
      };
    } catch (err) {
      console.log("Chat POST message failed: ", err);
    }
  }
  return undefined;
};

async function getRequestHeader(accessToken?: string): Promise<HeadersInit> {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Content-Type", "application/json; charset=utf-8");
  if (accessToken) {
    requestHeaders.set("Authorization", "Bearer " + accessToken);
  }
  const apiKey = await generateApiKey();
  requestHeaders.set("X-API-Key", apiKey);

  const chatToken = localStorage.getItem("lruRagChatToken");

  if (chatToken) {
    requestHeaders.set("X-Chat-Token", chatToken);
  }

  return requestHeaders;
}

export async function getChatInit(
  chatApi: string | undefined = undefined,
  assistantId: string | undefined = undefined
): Promise<ChatInitResponse | undefined> {
  if (assistantId && chatApi) {
    try {
      const response = await fetch(`${chatApi}/${assistantId}`, {
        method: "GET",
        credentials: "include",
        headers: await getRequestHeader(),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      if (!response.body) {
        throw new Error(`Response body missing`);
      }

      return await response.json();
    } catch (err) {
      console.log("Chat GET init failed: ", err);
    }
  }
  return undefined;
}
