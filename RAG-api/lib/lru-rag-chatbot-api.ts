import { ChatInitResponse } from "../interfaces/chat-init.interface";
import { GUID } from "../types/guid.type";
import { generateApiKey } from "../utils/key-generator";
import {
  ChatRequestPayloadWithApplicationId,
  ChatRequestPayloadWithAssistantId,
} from "../interfaces/chat-request-payload.interface";
import { SendMessagePayload } from "../types/send-message-payload.type";
import { getChatInit, sendChatMessage } from "@/app/lib/chatApi";
import { KeyValuePairs } from "../types/key-value-pairs.type";

  export type SendChatMessageParameters = {
  message: string;
  sourceFilter?: GUID[];
  userValues?: KeyValuePairs;
  chatId?: GUID;
};

export class LruRagChatbotApi {
  private readonly chatApi: string;
  private readonly assistantId: string;

  /**
   * API class for communicating with an LRU Rag assistant.
   *
   * Only one of {@link assistantId} or {@link applicationId} should be provided.
   *
   * @param chatApi The URL of the server where he LRU Rag assistant lives
   * @param assistantId The GUID of the assistant to use
   * @param applicationId The custom application ID of the assistant to use
   */
  constructor(
    chatApi: string,
    assistantId: string,
  ) {
    this.chatApi = chatApi;
    this.assistantId = assistantId;

    if (!assistantId) {
      throw new Error(
        "Missing required property `assistantId` or `applicationId`",
      );
    }
  }

  public async getChatInit(): Promise<ChatInitResponse | undefined> {
    return getChatInit(this.chatApi, this.assistantId);
  }

  /**
   * Sends the given chat message to the API.
   * Any excess keys in the payload will also be send to the API.
   *
   * @param payload.message The message to send tho the chatbot
   * @param payload.chatId ID of the chat session, if continuing an existing session
   * @throws Error The promise rejects with an error if the API call fails
   */
  // public async sendChatMessage(
  //   payload: SendMessagePayload,
  // ): Promise<
  //   | { reader: ReadableStreamDefaultReader<string>; xChatId: GUID | undefined }
  //   | undefined
  // > {
  //   const completePayload = this.assistantId
  //     ? ({
  //         ...payload,
  //         assistantId: this.assistantId,
  //       } as ChatRequestPayloadWithAssistantId)
  //     : ({
  //         ...payload,
  //         applicationId: this.applicationId,
  //       } as ChatRequestPayloadWithApplicationId);

  //   const response = await fetch(this.chatApi, {
  //     method: "POST",
  //     credentials: "include",
  //     headers: await getRequestHeader(),
  //     body: JSON.stringify(completePayload),
  //   });

  //   if (!response.ok) {
  //     throw new Error(`Response status: ${response.status}`);
  //   }

  //   if (!response.body) {
  //     return undefined;
  //   }

  //   const reader = response.body
  //     .pipeThrough(new TextDecoderStream())
  //     .getReader();

  //   return {
  //     reader,
  //     xChatId:
  //       response.headers.has("X-Chat-Id") &&
  //       response.headers.get("X-Chat-Id") !== null
  //         ? (response.headers.get("X-Chat-Id") as GUID)
  //         : undefined,
  //   };
  // }

  //   /**
  //  * Sends the given chat message to the API
  //  * @param message The message to send tho the chatbot
  //  * @param chatId ID of the chat session, if continuing an existing session
  //  * @param sourceFilter
  //  * @param userValues
  //  */
  // public async sendChatMessage({
  //   messageContent,
  //   pageContent,
  //   conversationHistory,
  //   provider = "rag",
  //   chatApi,
  //   assistantId
  // }: SendChatMessageParameters) {
  //   return sendChatMessage(
  //     messageContent,
  //     pageContent,
  //     conversationHistory,
  //     provider,
  //     chatApi,
  //     assistantId,
  //   );
  // }


    /**
   * Sends the given chat message to the API
   * @param message The message to send tho the chatbot
   * @param chatId ID of the chat session, if continuing an existing session
   * @param sourceFilter
   * @param userValues
   */
  public async sendChatMessage({
    message,
    chatId,
    sourceFilter,
    userValues,
  }: SendChatMessageParameters) {
    return sendChatMessage(
      this.chatApi,
      message,
      this.assistantId as GUID,
      sourceFilter,
      userValues,
      chatId
    );
  }
}
