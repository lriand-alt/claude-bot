type Message = {
  role: "user" | "assistant";
  content: string;
};

/**
 * Send a message to the chat API
 * @param messageContent - The message to send
 * @param pageContent - The loaded page/PDF content
 * @param loadedUrl - The loaded URL (if any)
 * @param conversationHistory - Previous messages
 * @returns The assistant's response
 */
export const sendChatMessage = async (
  messageContent: string,
  pageContent: string,
  loadedUrl: string,
  conversationHistory: Message[],
): Promise<string> => {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      pageContent,
      url: loadedUrl,
      conversationHistory,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to get response");
  }

  return data.response;
};
