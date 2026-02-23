import { ChatInitResponse } from "../interfaces/chat-init.interface";
import { GUID } from "../types/guid.type";
import { generateApiKey } from "../utils/key-generator";
import {
  ChatRequestPayloadWithApplicationId,
  ChatRequestPayloadWithAssistantId,
} from "../interfaces/chat-request-payload.interface";
import { SendMessagePayload } from "../types/send-message-payload.type";

export type AssistantOrApplicationId =
  | {
      assistantId: GUID;
      applicationId?: undefined;
    }
  | { assistantId?: undefined; applicationId: string };

export class LruRagChatbotApi {
  private readonly chatApi: string;
  private readonly assistantId: GUID | undefined;
  private readonly applicationId: string | undefined;

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
    { assistantId, applicationId }: AssistantOrApplicationId,
  ) {
    this.chatApi = chatApi;
    this.assistantId = assistantId;
    this.applicationId = applicationId;

    if (!assistantId && !applicationId) {
      throw new Error(
        "Missing required property `assistantId` or `applicationId`",
      );
    }
  }

  public async getChatInit(): Promise<ChatInitResponse | undefined> {
    try {
      const response = await fetch(
        `${this.chatApi}/${this.applicationId ?? this.assistantId}`,
        {
          method: "GET",
          credentials: "include",
          headers: await this.getRequestHeader(),
        },
      );

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

  /**
   * Sends the given chat message to the API.
   * Any excess keys in the payload will also be send to the API.
   *
   * @param payload.message The message to send tho the chatbot
   * @param payload.chatId ID of the chat session, if continuing an existing session
   * @throws Error The promise rejects with an error if the API call fails
   */
  public async sendChatMessage(
    payload: SendMessagePayload,
  ): Promise<
    | { reader: ReadableStreamDefaultReader<string>; xChatId: GUID | undefined }
    | undefined
  > {
    const completePayload = this.assistantId
      ? ({
          ...payload,
          assistantId: this.assistantId,
        } as ChatRequestPayloadWithAssistantId)
      : ({
          ...payload,
          applicationId: this.applicationId,
        } as ChatRequestPayloadWithApplicationId);

    const response = await fetch(this.chatApi, {
      method: "POST",
      credentials: "include",
      headers: await this.getRequestHeader(),
      body: JSON.stringify(completePayload),
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

    return {
      reader,
      xChatId:
        response.headers.has("X-Chat-Id") &&
        response.headers.get("X-Chat-Id") !== null
          ? (response.headers.get("X-Chat-Id") as GUID)
          : undefined,
    };
  }

  private async getRequestHeader(accessToken?: string): Promise<HeadersInit> {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json; charset=utf-8");
    if (accessToken) {
      requestHeaders.set("Authorization", "Bearer " + accessToken);
    }
    const apiKey = await generateApiKey();
    requestHeaders.set("X-API-Key", apiKey);
    return requestHeaders;
  }
}
