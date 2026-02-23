type Message = {
  role: "user" | "assistant";
  content: string;
};

export type AIProvider = "claude" | "openai" | "rag";

export interface ChatResponse {
  response: string;
  suggestions?: string[];
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
  messageContent: string,
  pageContent: string,
  loadedUrl: string,
  conversationHistory: Message[],
  provider: AIProvider = "claude",
): Promise<ChatResponse> => {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pageContent,
      url: loadedUrl,
      conversationHistory,
      provider,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to get response");
  }

  return {
    response: data.response,
    suggestions: data.suggestions,
  };
};
