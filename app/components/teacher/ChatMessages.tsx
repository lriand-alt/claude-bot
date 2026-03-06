"use client";

import { useRef, useEffect } from "react";
import { GUID } from "@/RAG-api/types/guid.type";
import { MessageType } from "@/RAG-api/types/message.type";
import UserMessage from "./UserMessage";
import AssistantMessage from "./AssistantMessage";
import { ChatInitResponse } from "@/RAG-api/interfaces/chat-init.interface";
import WelcomeMessage from "./WelcomeMessage";
import { Loading } from "../ui/Loading";

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
  onSuggestionClick?: (suggestion: string) => void;
}

export function ChatMessages({
  messages,
  chatbotInitData,
  onSuggestionClick,
}: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log(messages)
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto space-y-4 mb-6 min-h-0">
        {chatbotInitData?.welcomeMessage && <WelcomeMessage welcomeMessage={chatbotInitData.welcomeMessage} />}

        {messages.map((message, index) => {
          if(message.isStreamingStill === true) {
            return <Loading/>
          } else {

          if(message.isChatbot && (message.type === 'ChatCompletion' || message.type === 'QuestionSuggestion')) { 
          return <AssistantMessage
            item={message}
            key={index}
            index={index}
            onSuggestionClick={onSuggestionClick}
          /> 
          } else if (!message.isChatbot && message.type === 'ChatCompletion') {
            return <UserMessage
              index={index}
              key={index}
              messages={message}
            />
          }
          }
        })}
      <div ref={messagesEndRef} />
    </div>
  );
}
