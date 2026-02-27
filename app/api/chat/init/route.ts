import { NextResponse } from "next/server";
import { getRagChatInit } from "@/app/lib/ragApi";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const assistantId = searchParams.get("assistantId") || undefined;

    const data = await getRagChatInit(assistantId);
    return NextResponse.json(data);
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : "Failed to initialize chat";
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
