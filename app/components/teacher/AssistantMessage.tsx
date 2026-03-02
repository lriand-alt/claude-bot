"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/Button";
import { speakText, stopSpeaking, copyToClipboard } from "../../lib/speechUtils";
import Markdown from "react-markdown";
import { GUID } from "@/RAG-api/types/guid.type";
import { MessageType } from "@/RAG-api/types/message.type";
import remarkGfm from "remark-gfm";
import { formatRagResponse } from "@/app/lib/ragApi";
import { useLanguage } from "../../contexts/LanguageContext";
import { CheckIcon } from "../icons/CheckIcon";
import { CopyIcon } from "../icons/CopyIcon";
import { PauseCircleIcon } from "../icons/PauseCircleIcon";
import { VolumeIcon } from "../icons/VolumeIcon";

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
  onSuggestionClick?: (suggestion: string) => void;
}

const AssistantMessage = ({
  messages,
  index,
  onSuggestionClick,
}: ChatMessagesProps) => {
  const { t } = useLanguage();
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
                      title={
                        copiedIndex === index
                          ? t.chat.copiedTooltip
                          : t.chat.copyTooltip
                      }
                    >
                      {copiedIndex === index ? (
                        <CheckIcon className="w-5 h-5 text-green-600" />
                      ) : (
                        <CopyIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      )}
                    </Button>
                    <Button
                      onClick={() => handleSpeak(messages.message, index)}
                      variant="ghost"
                      size="icon"
                      className="rounded-lg"
                      title={
                        speakingIndex === index
                          ? t.chat.stopReadingTooltip
                          : t.chat.readAloudTooltip
                      }
                    >
                      {speakingIndex === index ? (
                        <PauseCircleIcon className="w-5 h-5 text-green-600" />
                      ) : (
                        <VolumeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
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