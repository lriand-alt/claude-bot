import { NextResponse } from "next/server";
import { sendToRagApi } from "@/app/lib/ragApi";

export async function POST(request: Request) {
  try {
    const { pageContent, url, conversationHistory = [], provider = "claude" } = await request.json();

    if (!conversationHistory || conversationHistory.length === 0) {
      return NextResponse.json(
        { error: "Conversation history is required" },
        { status: 400 },
      );
    }

    // Use LRU RAG API if provider is set to 'rag'
    if (provider === "rag") {
      const apiUrl = process.env.LRU_RAG_API_URL;
      const applicationId = process.env.LRU_RAG_APPLICATION_ID;
      const assistantId = process.env.LRU_RAG_ASSISTANT_ID;

      if (!apiUrl || (!applicationId && !assistantId)) {
        return NextResponse.json(
          {
            response:
              "⚠️ RAG API not configured. Please set LRU_RAG_API_URL and either LRU_RAG_APPLICATION_ID or LRU_RAG_ASSISTANT_ID in your environment variables.",
          },
          { status: 200 },
        );
      }

      try {
        // Get the last user message
        const lastMessage = conversationHistory[conversationHistory.length - 1];
        
        // Add context to the message if pageContent exists
        let messageWithContext = lastMessage.content;
        if (pageContent) {
          const sourceInfo = url ? `Website URL: ${url}` : "";
          messageWithContext = `Context:\n${sourceInfo ? sourceInfo + "\n\n" : ""}Content:\n${pageContent}\n\nUser question: ${lastMessage.content}`;
        }

        const ragResponse = await sendToRagApi(messageWithContext);
        return NextResponse.json({
          response: ragResponse.content,
          suggestions: ragResponse.suggestions,
        });
      } catch (error) {
        console.error("RAG API error:", error);
        const errorMsg =
          error instanceof Error ? error.message : "Failed to get response from RAG API";
        return NextResponse.json(
          { error: `RAG API Error: ${errorMsg}` },
          { status: 500 },
        );
      }
    }

    const apiKey = process.env.ANTHROPIC_API_KEY || process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          response:
            "⚠️ API key not configured. Please set ANTHROPIC_API_KEY or OPENAI_API_KEY in your environment variables.\n\nFor this demo, here's a mock response: I would help you create educational content based on the webpage you provided. To enable real AI responses, please configure your API key.",
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { error: "No API key configured" },
      { status: 500 },
    );
  } catch (error) {
    console.error("Error processing chat:", error);
    const errorMsg =
      error instanceof Error ? error.message : "Failed to process request";
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
