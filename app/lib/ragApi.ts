import { ChatInitResponse } from "@/RAG-api/interfaces/chat-init.interface";
import { GUID } from "@/RAG-api/types/guid.type";
import { generateApiKey } from "@/RAG-api/utils/key-generator";

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
export const formatRagResponse =(rawStream: string): RagApiResponse => {
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
  requestAssistantId?: string,
): Promise<RagApiResponse> {
  const apiUrl = process.env.LRU_RAG_API_URL;
  const assistantId = requestAssistantId || process.env.LRU_RAG_ASSISTANT_ID;

  if (!apiUrl) {
    throw new Error("LRU_RAG_API_URL environment variable is not set");
  }

  if (!assistantId) {
    throw new Error(
      "Either LRU_RAG_APPLICATION_ID or LRU_RAG_ASSISTANT_ID must be set",
    );
  }

  const payload: {
    assistantId: string;
    message: string;
    chatId?: string;
  } = {
    assistantId,
    message,
  };

  if (chatId) {
    payload.chatId = chatId;
  }

  const apiKey = await generateApiKey();
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-API-Key": apiKey,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`RAG API error: ${response.status}`);
  }

  const rawResponse = await response.text();

  // Format the raw streaming response into readable text
  return formatRagResponse(rawResponse);
}

export async function getRagChatInit(
  requestAssistantId?: string,
): Promise<ChatInitResponse> {
  const apiUrl = process.env.LRU_RAG_API_URL;
  const assistantId = requestAssistantId || process.env.LRU_RAG_ASSISTANT_ID;

  if (!apiUrl) {
    throw new Error("LRU_RAG_API_URL environment variable is not set");
  }

  if (!assistantId) {
    throw new Error("LRU_RAG_ASSISTANT_ID environment variable is not set");
  }

  const apiKey = await generateApiKey();
  const response = await fetch(`${apiUrl}/${assistantId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-API-Key": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error(`RAG init API error: ${response.status}`);
  }

  return (await response.json()) as ChatInitResponse;
}
