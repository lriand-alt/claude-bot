"use client";

import { useState, useRef, useEffect } from "react";
import { sendChatMessage } from "../lib/chatApi";
import { Header } from "./teacher/Header";
import { Suggestions } from "./teacher/Suggestions";
import { ChatBotMessage, ChatMessages } from "./teacher/ChatMessages";
import { InputArea } from "./teacher/InputArea";
import { GUID } from "@/RAG-api/types/guid.type";
import { ChatInitResponse } from "@/RAG-api/interfaces/chat-init.interface";
import { chatInit } from "../lib/chat-init";
import classNames from "classnames";

export interface TeacherToolProps {
  /** URL of LRU RAG assistant admin - i.e. https://admin.lrurag.dk/api/v1/chat */
  chatApi: string;
  /** The GUID of the assistant or the custom application id */
  chatAssistantId: string;
  /** Determines whether or not the teacher tool is visible */
  open?: boolean;
  /** Determines size on the screen */
  size?: "small" | "medium" | "large";
}

export default function TeacherTool({ chatApi, chatAssistantId, open = true, size = "large" }: TeacherToolProps) {
    const [chatbotInit, setChatbotInit] = useState<ChatInitResponse | undefined>(
    undefined
  );
  const [pageContent, setPageContent] = useState("");
  const [messages, setMessages] = useState<ChatBotMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(chatApi && chatAssistantId) {
      // initialization logic if needed, e.g. fetching assistant configuration
      chatInit(chatApi, chatAssistantId, setChatbotInit);
    }

    // If there is already a chatId, get the history of the chat
    
  }, []);

  const sendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return;

    const userMessage: ChatBotMessage = { isChatbot: false, message: messageContent, id: undefined, type: "UserInput" };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await sendChatMessage(
        chatApi,
        messageContent,
        chatAssistantId as GUID
      );
      const assistantMessage: ChatBotMessage = {
        isChatbot: true,
        message: response ? JSON.stringify(response.reader) : "",
        id: undefined,
        type: "ChatCompletion",
      };
      setMessages((prev) => [...prev, assistantMessage]);
      
    }catch (error) {
      console.error("Error sending message:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      setMessages((prev) => [
        ...prev,
        {
          isChatbot: true,
          message: errorMessage,
          id: undefined,
          type: "ChatCompletion",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <div className={classNames({'block': open, 'hidden': !open, 'w-1/2': size === 'medium', 'w-screen': size === 'large'}, "min-h-screen bg-white dark:bg-gray-950 flex flex-col z-1000")}>
      <Header
        title={chatbotInit?.name}
      />

      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-8 py-6">
        <div className="flex justify-between items-center mb-4">
            <Suggestions
              suggestions={chatbotInit?.suggestedQuestions || []}
              loading={loading}
              onSuggestionClick={handleSuggestionClick}
            />
          <div className="flex-1" />
        </div>
        <ChatMessages
          messages={messages}
          loading={loading}
          chatbotInitData={chatbotInit}
          onSuggestionClick={sendMessage}
        />

        <InputArea
          input={input}
          loading={loading}
          pageContent={pageContent}
          onInputChange={setInput}
          onSendMessage={() => sendMessage(input)}
        />
      </div>
    </div>
  );
}
