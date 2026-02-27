"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { sendChatMessageViaProxy } from "../lib/chatApi";
import { Header } from "./teacher/Header";
import { Suggestions } from "./teacher/Suggestions";
import { ChatBotMessage, ChatMessages } from "./teacher/ChatMessages";
import { InputArea } from "./teacher/InputArea";
import { GUID } from "@/RAG-api/types/guid.type";
import { ChatInitResponse } from "@/RAG-api/interfaces/chat-init.interface";
import { chatInit } from "../lib/chat-init";

export interface TeacherToolProps {
  /** URL of LRU RAG assistant admin - i.e. https://admin.lrurag.dk/api/v1/chat */
  chatApi: string;
  /** The GUID of the assistant or the custom application id */
  chatAssistantId: string;
}

export default function TeacherTool({ chatApi, chatAssistantId }: TeacherToolProps) {
    const [chatbotInit, setChatbotInit] = useState<ChatInitResponse | undefined>(
    undefined
  );
  const { language, setLanguage, t } = useLanguage();
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
  }, []);

  const sendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return;

    const userMessage: ChatBotMessage = { isChatbot: false, message: messageContent, id: undefined, type: "UserInput" };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await sendChatMessageViaProxy(
        messageContent,
        chatAssistantId as GUID,
        pageContent,
      );
      const assistantMessage: ChatBotMessage = {
        isChatbot: true,
        message: response.response,
        id: undefined,
        type: "ChatCompletion",
      };
      setMessages((prev) => [...prev, assistantMessage]);
      
      // Update question suggestions if provided (from RAG)
      // if (suggestions && suggestions.length > 0) {
      //   setQuestionSuggestions(suggestions);
      // }
    }catch (error) {
      console.error("Error sending message:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      // setMessages((prev) => [
      //   ...prev,
      //   {
      //     isChatbot: true,
      //     message: t.errors.apiError.replace("{error}", errorMessage),
      //   },
      // ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <Header
        title={chatbotInit?.name}
        subtitle={t.header.subtitle}
        language={language}
        onLanguageChange={setLanguage}
      />

      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-8 py-6">
        <div className="flex justify-between items-center mb-4">
            <Suggestions
              loading={loading}
              translations={{
                title: t.quickActions.title,
                labels: {
                  summarize: t.quickActions.summarize,
                  createPodcast: t.quickActions.createPodcast,
                  generateQuestions: t.quickActions.generateQuestions,
                  studyGuide: t.quickActions.studyGuide,
                  quiz: t.quickActions.quiz,
                },
                prompts: {
                  summarize: t.suggestions.summarize,
                  createPodcast: t.suggestions.createPodcast,
                  generateQuestions: t.suggestions.generateQuestions,
                  studyGuide: t.suggestions.studyGuide,
                  quiz: t.suggestions.quiz,
                },
              }}
              onSuggestionClick={handleSuggestionClick}
            />
          <div className="flex-1" />
        </div>
        
        <ChatMessages
          messages={messages}
          loading={loading}
          welcomeMessage={chatbotInit?.welcomeMessage}
          copyTooltip={t.chat.copyTooltip}
          copiedTooltip={t.chat.copiedTooltip}
          readAloudTooltip={t.chat.readAloudTooltip}
          stopReadingTooltip={t.chat.stopReadingTooltip}
          onSuggestionClick={sendMessage}
        />

        <InputArea
          input={input}
          loading={loading}
          pageContent={pageContent}
          placeholderWithContent={t.chat.inputPlaceholder}
          placeholderEmpty={t.chat.inputPlaceholderEmpty}
          sendButtonText={t.chat.sendButton}
          onInputChange={setInput}
          onSendMessage={() => sendMessage(input)}
        />
      </div>
    </div>
  );
}
