"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChatBotMessage } from "./ChatMessages";

interface ChatMessagesProps {
  messages: ChatBotMessage;
  index: number;
  onSuggestionClick?: (suggestion: string) => void;
}

const UserMessage =({ messages }: ChatMessagesProps) => {
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
