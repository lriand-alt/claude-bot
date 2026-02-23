import { LruRagChatbotApi } from "@/RAG-api";

export interface RagApiResponse {
  content: string;
  suggestions: string[];
}

/**
 * Formats the RAG API streaming response by parsing JSON lines and
 * separating ChatCompletion content from QuestionSuggestions.
 * 
 * @param rawStream - Raw streamed response from RAG API
 * @returns Object with formatted content and question suggestions
 */
function formatRagResponse(rawStream: string): RagApiResponse {
  const lines = rawStream.split("\n").filter((line) => line.trim());
  let formattedText = "";
  const suggestions: string[] = [];

  console.log("Raw RAG response lines:", rawStream);

  for (const line of lines) {
    try {
      const parsed = JSON.parse(line);
      
      // Process ChatCompletion messages for the main response
      if (parsed.type === "ChatCompletion" && parsed.content) {
        formattedText += parsed.content;
      }
      
      // Collect QuestionSuggestion items separately
      if (parsed.type === "QuestionSuggestion" && parsed.content) {
        suggestions.push(parsed.content);
      }
    } catch (error) {
      // Skip lines that aren't valid JSON
      console.warn("Failed to parse RAG response line:", line);
    }
  }
  
  console.log("Formatted RAG response:", formattedText);
  console.log("Question suggestions:", suggestions);
  
  return {
    content: formattedText,
    suggestions,
  };
}

export async function sendToRagApi(
  message: string,
  chatId?: string,
): Promise<RagApiResponse> {
  const apiUrl = process.env.LRU_RAG_API_URL;
  const applicationId = process.env.LRU_RAG_APPLICATION_ID;
  const assistantId = process.env.LRU_RAG_ASSISTANT_ID;

  if (!apiUrl) {
    throw new Error("LRU_RAG_API_URL environment variable is not set");
  }

  if (!applicationId && !assistantId) {
    throw new Error(
      "Either LRU_RAG_APPLICATION_ID or LRU_RAG_ASSISTANT_ID must be set",
    );
  }

  const api = new LruRagChatbotApi(apiUrl, {
    applicationId,
    assistantId,
  } as any);

  const payload: any = { message };
  if (chatId) {
    payload.chatId = chatId;
  }

  const result = await api.sendChatMessage(payload);

  if (!result) {
    throw new Error("Failed to get response from RAG API");
  }

  const { reader, xChatId } = result;

  // Read the stream and collect all chunks
  let rawResponse = "";
  let done = false;

  while (!done) {
    const { value, done: streamDone } = await reader.read();
    done = streamDone;

    if (value) {
      rawResponse += value;
    }
  }

  // Format the raw streaming response into readable text
  return formatRagResponse(rawResponse);
}
