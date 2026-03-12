"use client";

import { useState, useRef, useEffect } from "react";
import { Header } from "./teacher/Header";
import { Suggestions } from "./teacher/Suggestions";
import { ChatBotMessage, ChatMessages } from "./teacher/ChatMessages";
import { InputArea } from "./teacher/InputArea";
import { GUID } from "@/RAG-api/types/guid.type";
import { ChatInitResponse } from "@/RAG-api/interfaces/chat-init.interface";
import { chatInit } from "../lib/chat-init";
import classNames from "classnames";
import { readerType, sendChatBotMessage } from "../lib/formatResponse2";

export interface TeacherToolProps {
  /** URL of LRU RAG assistant admin - i.e. https://admin.lrurag.dk/api/v1/chat */
  chatApi: string;
  /** The GUID of the assistant or the custom application id */
  chatAssistantId: string;
  /** Determines whether or not the teacher tool is visible */
  open?: boolean;
  /** Determines size on the screen */
  size?: "medium" | "large";
}

export default function TeacherTool({ chatApi, chatAssistantId, open, size }: TeacherToolProps) {
    const [chatbotInit, setChatbotInit] = useState<ChatInitResponse | undefined>(
    undefined
  );
  const [pageContent, setPageContent] = useState("");
  // const [messages, setMessages] = useState<ChatBotMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [readerRef, setReaderRef] = useState<readerType | undefined>(undefined);
  const [messageHistory, setMessageHistory] = useState<ChatBotMessage[]>([]);
  const [chatSize, setChatSize] = useState<"medium" | "large" | undefined>(size);
  const [isOpen, setIsOpen] = useState<boolean>(open || false);

  useEffect(() => {
    if(chatApi && chatAssistantId) {
      //Setting reader from ChatBotHelper to undefined to be sure it is undefined when going through different pages in admin project
      // setReaderToUndefined();
      // initialization logic if needed, e.g. fetching assistant configuration
      chatInit(chatApi, chatAssistantId, setChatbotInit);
      
      // If there is already a chatId, get the history of the chat
      // const urlStr = window.location.href;
      // const chatIdPos = urlStr.indexOf("#chatId=");
      
      // If a chat is already running get the history api
      // if (chatIdPos > 0) {
      //   sendMessage(true);
      // }
    }
  }, []);

  // Ensure if the open prop changes from the parent component, the TeacherTool will reflect that change
  useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  const sendMessage = async (
    getMessagesHistory: boolean,
    inputText?: string
  ) => {
    await sendChatBotMessage(
      getMessagesHistory,
      inputRef,
      setMessageHistory,
      setReaderRef,
      // resetChat,
      chatApi,
      chatAssistantId as GUID,
      inputText
    );
    setReaderRef(undefined);
  };

  const handleSuggestionClick = (prompt: string) => {
    sendMessage(false, prompt);
  };

  const handleChatSizeChange = () => {
    if(chatSize === "medium") {
      setChatSize('large');
    } else {
    setChatSize('medium');
    }
  };

  const handleOpenAndClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classNames({'fixed z-1000': isOpen, 'hidden': !isOpen, 'w-1/2': chatSize === 'medium', 'w-full': chatSize === 'large'}, "bg-white right-0 inset-y-0 transition-all duration-500 dark:bg-gray-950 flex flex-col overflow-y-scroll shadow-md shadow-gray-300 border-l border-gray-200")}>
      <Header
        title={chatbotInit?.name}
        handleChatSizeChange={handleChatSizeChange}
        handleOpenAndClose={handleOpenAndClose}
      />

      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-8 py-6">
        <div className="flex justify-between items-center mb-4">
            <Suggestions
              suggestions={chatbotInit?.suggestedQuestions || []}
              loading={loading}
              onSuggestionClick={handleSuggestionClick}
            />
        </div>
        <ChatMessages
          messages={messageHistory}
          chatbotInitData={chatbotInit}
          onSuggestionClick={handleSuggestionClick}
        />

        <InputArea
          ref={inputRef}
          input={input}
          loading={loading}
          pageContent={pageContent}
          onInputChange={setInput}
          onSendMessage={() => {sendMessage(false, input); setInput("")}}
        />
      </div>
    </div>
  );
}
