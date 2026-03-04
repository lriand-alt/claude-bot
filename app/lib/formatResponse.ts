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
