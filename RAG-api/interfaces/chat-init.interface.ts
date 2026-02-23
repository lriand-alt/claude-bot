import { GUID } from "../types/guid.type";

export interface ChatInitResponse {
  name: string;
  welcomeMessage: string;
  sources: SourceResponse[];
  suggestedQuestions: string[];
}

interface SourceResponse {
  id: GUID;
  name: string;
}
