import { GUID } from "./guid.type";

export type SendMessagePayload = { [key: string]: string | string[] } & {
  message: string;
  chatId?: GUID;
};
