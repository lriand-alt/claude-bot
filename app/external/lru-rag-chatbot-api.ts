import { LruRagChatbotApi } from "@/RAG-api";


declare global {
  interface Window {
    LruRagChatbotApi: typeof LruRagChatbotApi;
  }
}

window.LruRagChatbotApi = LruRagChatbotApi;
