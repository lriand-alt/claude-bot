"use client";

import { useRef, useEffect } from "react";
import Markdown from "react-markdown";
import { GUID } from "@/RAG-api/types/guid.type";
import { MessageType } from "@/RAG-api/types/message.type";
import remarkGfm from "remark-gfm";

export interface ChatBotMessage {
  id: GUID | undefined;
  isChatbot: boolean;
  type: MessageType;
  message: string;
  imageUrl?: string;
  continued?: boolean;
  isStreamingStill?: boolean;
}

interface ChatMessagesProps {
  messages: ChatBotMessage;
  index: number;
  onSuggestionClick?: (suggestion: string) => void;
}

const UserMessage =({ messages }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log(messages)
  }, [messages]);



  return (
          <div className="flex justify-end">
            <div className="max-w-3xl px-5 py-3 rounded-2xl bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800" >
              <div className="flex items-start gap-3">
                <Markdown remarkPlugins={[remarkGfm]}>
                  {messages.message}
                </Markdown>
              </div>
            </div>
          </div>
  )
}

export default UserMessage;
