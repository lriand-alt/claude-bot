"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { speakText, stopSpeaking, copyToClipboard } from "../../lib/speechUtils";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLanguage } from "../../contexts/LanguageContext";
import { CheckIcon } from "../icons/CheckIcon";
import { CopyIcon } from "../icons/CopyIcon";
import { PauseCircleIcon } from "../icons/PauseCircleIcon";
import { VolumeIcon } from "../icons/VolumeIcon";
import { ChatBotMessage } from "./ChatMessages";

interface ChatMessagesProps {
  item: ChatBotMessage;
  index:number;
  onSuggestionClick?: (suggestion: string) => void;
}

const AssistantMessage = ({
  item,
  index,
  onSuggestionClick,
}: ChatMessagesProps) => {
  const { t } = useLanguage();
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

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
      {item.type === 'ChatCompletion' && (
      <div>
      <div className="max-w-3xl px-5 py-3 rounded-2xl bg-gray-800 dark:bg-gray-700 text-white">
        <div className="flex flex-col items-start gap-3">
          <Markdown remarkPlugins={[remarkGfm]}>
            {item.message}
          </Markdown>

            <div className="flex gap-1">
              <Button
                onClick={() => handleCopy(item.message, index)}
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
                onClick={() => handleSpeak(item.message, index)}
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
      </div>

      {/* <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-3 ml-3">Suggested follow-up questions:</p> */}
      </div>
    )}
        
      {/* Question suggestions from RAG */}
      <div className="space-y-2">
        {item.type === 'QuestionSuggestion' && (
          <button
            onClick={() => onSuggestionClick?.(item.message)}
            className="max-w-3xl px-5 py-3 rounded-2xl border border-gray-700 dark:bg-gray-700 dark:text-white"
          >
            {item.message}
          </button>
        )}
      </div>
    </div> 
  );
}

export default AssistantMessage;