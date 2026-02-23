import { MessageType } from "../types/message.type";

export interface Message {
  isChatbot: boolean;
  type: MessageType; // Stores the chunk type (e.g., "ChatCompletion", "Citations", "FunctionCompletion", etc)
  message: string;
  continued?: boolean;
  isStreamingStill?: boolean;
}
