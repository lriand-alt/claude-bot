"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/Button";
import { speakText, stopSpeaking, copyToClipboard } from "../../lib/speechUtils";
import Markdown from "react-markdown";
import { GUID } from "@/RAG-api/types/guid.type";
import { MessageType } from "@/RAG-api/types/message.type";
import remarkGfm from "remark-gfm";
import { formatRagResponse } from "@/app/lib/ragApi";

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
  index:number;
  copyTooltip: string;
  copiedTooltip: string;
  readAloudTooltip: string;
  stopReadingTooltip: string;
  onSuggestionClick?: (suggestion: string) => void;
}

const AssistantMessage = ({
  messages,
  index,
  copyTooltip,
  copiedTooltip,
  readAloudTooltip,
  stopReadingTooltip,
  onSuggestionClick,
}: ChatMessagesProps) => {
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  let fullMessage = '';
  const [fullMsg, setFullMsg] = useState("");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    fullMessage += formatRagResponse(messages.message).content;
    console.log("Formatted RAG response:::: ", fullMessage)
    setFullMsg(fullMessage);
  }, [messages]);

  const handleSpeak = (text: string, index: number) => {
    if (speakingIndex !== null) {
      stopSpeaking();
      if (speakingIndex === index) {
        setSpeakingIndex(null);
        return;
      }
    }

    speakText(text, () => setSpeakingIndex(null));
    setSpeakingIndex(index);
  };

  const handleCopy = async (text: string, index: number) => {
    try {
      await copyToClipboard(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
          <div
            key={index}
            className="flex justify-start"
          >
            <div className="max-w-3xl px-5 py-3 rounded-2xl bg-gray-800 dark:bg-gray-700 text-white">
              <div className="flex flex-col items-start gap-3">
                <Markdown remarkPlugins={[remarkGfm]}>
                  {messages.message}
                </Markdown>

                  <div className="flex gap-1">
                    <Button
                      onClick={() => handleCopy(messages.message, index)}
                      variant="ghost"
                      size="icon"
                      className="rounded-lg"
                      title={copiedIndex === index ? copiedTooltip : copyTooltip}
                    >
                      {copiedIndex === index ? (
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                    </Button>
                    <Button
                      onClick={() => handleSpeak(messages.message, index)}
                      variant="ghost"
                      size="icon"
                      className="rounded-lg"
                      title={
                        speakingIndex === index
                          ? stopReadingTooltip
                          : readAloudTooltip
                      }
                    >
                      {speakingIndex === index ? (
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </Button>
                  </div>
          
              </div>
              
              {/* Question suggestions from RAG */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Suggested follow-up questions:</p>
                  <div className="space-y-2">
                    {messages.type === 'QuestionSuggestion' && (
                      <button
                        onClick={() => onSuggestionClick?.(messages.message)}
                        className="block w-full text-left text-sm px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                      >
                        {messages.message}
                      </button>
                    )}
                  </div>
                </div>
            </div>
          </div>
        
  );
}

export default AssistantMessage;