"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/Button";
import { speakText, stopSpeaking, copyToClipboard } from "../../lib/speechUtils";
import Markdown from "react-markdown";
import { GUID } from "@/RAG-api/types/guid.type";
import { MessageType } from "@/RAG-api/types/message.type";
import remarkGfm from "remark-gfm";
import { Assistant } from "next/font/google";
import UserMessage from "./UserMessage";
import AssistantMessage from "./AssistantMessage";
import { formatRagResponse } from "@/app/lib/ragApi";
import { ChatInitResponse } from "@/RAG-api/interfaces/chat-init.interface";
import WelcomeMessage from "./WelcomeMessage";

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
  messages: ChatBotMessage[];
  chatbotInitData?: ChatInitResponse;
  loading: boolean;
  onSuggestionClick?: (suggestion: string) => void;
}

export function ChatMessages({
  messages,
  chatbotInitData,
  loading,
  onSuggestionClick,
}: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

    let fullMessage = '';
    const [fullMsg, setFullMsg] = useState("");

    // make this work
    const formatResponses = () => {
      let combinedMessage = '';

      // if ChatBot response is split into multiple messages, combine them and format as one message
      // Filter out the suggestion messages and only combine the actual chatbot response messages
      const chatbotMessages = messages.filter(message => message.isChatbot && message.type !== 'QuestionSuggestion');
      chatbotMessages.forEach(element => {
        combinedMessage += formatRagResponse(element.message).content;
      });

      const suggestionMessages = messages.filter(message => message.isChatbot && message.type === 'QuestionSuggestion');

      setFullMsg(combinedMessage);
    }
  
    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      messages.forEach(element => {
        fullMessage += formatRagResponse(element.message);
      });
      console.log("Formatted RAG response:::: ", fullMessage)
      setFullMsg(fullMessage);
    }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log(messages)
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto space-y-4 mb-6 min-h-0">
        {chatbotInitData?.welcomeMessage && <WelcomeMessage welcomeMessage={chatbotInitData.welcomeMessage} />}

        {messages.map((message, index) => (
          message.isChatbot ? 
          <AssistantMessage
            messages={message}
            key={index}
            index={index}
            onSuggestionClick={onSuggestionClick}
          /> 
          : <UserMessage
            index={index}
            key={index}
            messages={message}
          />
        ))}

      {loading && (
        <div className="flex justify-start">
          <div className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-5 py-3 rounded-2xl">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
