import { NextResponse } from "next/server";
import { sendToRagApi } from "@/app/lib/ragApi";

export async function POST(request: Request) {
  try {
    const {
      pageContent,
      url,
      assistantId,
      conversationHistory = [],
    } = await request.json();

    if (!conversationHistory || conversationHistory.length === 0) {
      return NextResponse.json(
        { error: "Conversation history is required" },
        { status: 400 },
      );
    }

    try {
      const lastMessage = conversationHistory[conversationHistory.length - 1];
      const lastMessageContent = lastMessage?.content ?? lastMessage?.message;

      if (!lastMessageContent) {
        return NextResponse.json(
          { error: "Last message content is required" },
          { status: 400 },
        );
      }

      let messageWithContext = lastMessageContent;
      if (pageContent) {
        const sourceInfo = url ? `Website URL: ${url}` : "";
        messageWithContext = `Context:\n${sourceInfo ? sourceInfo + "\n\n" : ""}Content:\n${pageContent}\n\nUser question: ${lastMessageContent}`;
      }

      const ragResponse = await sendToRagApi(
        messageWithContext,
        undefined,
        assistantId,
      );
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
  } catch (error) {
    console.error("Error processing chat:", error);
    const errorMsg =
      error instanceof Error ? error.message : "Failed to process request";
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
