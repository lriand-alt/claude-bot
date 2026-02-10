import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message, pageContent, url, conversationHistory = [] } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY || process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          response:
            "⚠️ API key not configured. Please set ANTHROPIC_API_KEY or OPENAI_API_KEY in your environment variables.\n\nFor this demo, here's a mock response: I would help you create educational content based on the webpage you provided. To enable real AI responses, please configure your API key.",
        },
        { status: 200 }
      );
    }

    // Try Anthropic Claude first if API key is available
    if (process.env.ANTHROPIC_API_KEY) {
      // Build messages array from conversation history
      const messages = [];
      
      // Add conversation history
      for (const msg of conversationHistory) {
        messages.push({
          role: msg.role,
          content: msg.content,
        });
      }
      
      // Add current message with context if it's the first message
      if (conversationHistory.length === 0 && pageContent) {
        messages.push({
          role: "user",
          content: `You are a helpful teaching assistant. A teacher has provided you with content from a webpage and wants you to help create educational materials.

Website URL: ${url}

Webpage Content:
${pageContent}

Teacher's Request: ${message}

Please provide a helpful, detailed response that addresses the teacher's request based on the webpage content.`,
        });
      } else {
        messages.push({
          role: "user",
          content: message,
        });
      }

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-3-haiku-20240307",
          max_tokens: 4096,
          messages: messages,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Anthropic API error:", errorData);
        const errorMsg = errorData.error?.message || "Failed to get response from Claude";
        return NextResponse.json(
          { error: `Anthropic API Error: ${errorMsg}` },
          { status: response.status }
        );
      }

      const data = await response.json();
      return NextResponse.json({
        response: data.content[0].text,
      });
    }

    // Try OpenAI if available
    if (process.env.OPENAI_API_KEY) {
      const systemMessage = pageContent
        ? `You are a helpful teaching assistant helping teachers create educational materials from web content. The teacher has loaded content from ${url}.\n\nWebpage Content:\n${pageContent}`
        : "You are a helpful teaching assistant helping teachers create educational materials from web content.";

      const messages = [
        {
          role: "system",
          content: systemMessage,
        },
        ...conversationHistory.map((msg: { role: string; content: string }) => ({
          role: msg.role,
          content: msg.content,
        })),
        {
          role: "user",
          content: message,
        },
      ];

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: messages,
          max_tokens: 4096,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("OpenAI API error:", errorData);
        const errorMsg = errorData.error?.message || "Failed to get response from OpenAI";
        return NextResponse.json(
          { error: `OpenAI API Error: ${errorMsg}` },
          { status: response.status }
        );
      }

      const data = await response.json();
      return NextResponse.json({
        response: data.choices[0].message.content,
      });
    }

    return NextResponse.json(
      { error: "No API key configured" },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error processing chat:", error);
    const errorMsg = error instanceof Error ? error.message : "Failed to process request";
    return NextResponse.json(
      { error: errorMsg },
      { status: 500 }
    );
  }
}
