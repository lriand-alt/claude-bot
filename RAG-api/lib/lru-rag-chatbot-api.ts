import { ChatInitResponse } from "../interfaces/chat-init.interface";
import { GUID } from "../types/guid.type";
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
