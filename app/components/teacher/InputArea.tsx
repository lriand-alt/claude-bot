"use client";

import { Button } from "../ui/Button";
import { useLanguage } from "../../contexts/LanguageContext";

interface InputAreaProps {
  ref: React.Ref<HTMLInputElement>;
  input: string;
  loading: boolean;
  pageContent: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
}

export function InputArea({
  ref,
  input,
  loading,
  pageContent,
  onInputChange,
  onSendMessage,
}: InputAreaProps) {
  const { t } = useLanguage();

  return (
    <div className="sticky bottom-0 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-4 pb-2">
      <div className="flex gap-3">
        <input
          className='flex-1 w-full border rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 dark:border-gray-700 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 px-4 py-3 text-base'
          type="text"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSendMessage()}
          placeholder={
            pageContent ? t.chat.inputPlaceholder : t.chat.inputPlaceholderEmpty
          }
          disabled={loading}
          ref={ref}
        />
        <Button
          onClick={onSendMessage}
          disabled={loading || !input.trim()}
          variant="secondary"
          size="lg"
        >
          {t.chat.sendButton}
        </Button>
      </div>
    </div>
  );
}
