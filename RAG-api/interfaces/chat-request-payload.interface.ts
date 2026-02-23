import { GUID } from "../types/guid.type";
import { KeyValuePairs } from "../types/key-value-pairs.type";
interface ChatRequestPayload {
  message: string;
  sourceFilter?: GUID[];
  userValues?: KeyValuePairs;
  chatId?: GUID;
}
export interface ChatRequestPayloadWithAssistantId extends ChatRequestPayload {
  assistantId: GUID;
}
export interface ChatRequestPayloadWithApplicationId
  extends ChatRequestPayload {
  applicationId: string;
}
