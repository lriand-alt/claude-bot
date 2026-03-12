import { Dispatch } from "react";
import { ChatInitResponse } from "@/RAG-api/interfaces/chat-init.interface";
import { getChatInit } from './chatApi';

export const chatInit = async (
  chatApi: string,
  chatAssistantId: string,
  setChatbotInit: Dispatch<React.SetStateAction<ChatInitResponse | undefined>>
) => {
  if (!chatApi) {
    console.warn("Missing chat-api. Stop.");
    return;
  }
  if (!chatAssistantId) {
    console.warn( "Missing chat-assistant-id. At least one of them should be provided. Stop." );
    return;
  }

  try {
    const data = await getChatInit(chatApi, chatAssistantId);
    console.log('chatInit data:', data);
    setChatbotInit(data);
  } catch (error) {
    console.error('chatInit failed:', error);
  }
};
