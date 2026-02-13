"use client";

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

interface InputAreaProps {
  input: string;
  loading: boolean;
  pageContent: string;
  placeholderWithContent: string;
  placeholderEmpty: string;
  sendButtonText: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
}

export function InputArea({
  input,
  loading,
  pageContent,
  placeholderWithContent,
  placeholderEmpty,
  sendButtonText,
  onInputChange,
  onSendMessage,
}: InputAreaProps) {
  return (
    <div className="sticky bottom-0 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-4 pb-2">
      <div className="flex gap-3">
        <Input
          type="text"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSendMessage()}
          placeholder={pageContent ? placeholderWithContent : placeholderEmpty}
          disabled={loading}
          inputSize="md"
          className="flex-1"
        />
        <Button
          onClick={onSendMessage}
          disabled={loading || !input.trim()}
          variant="secondary"
          size="lg"
        >
          {sendButtonText}
        </Button>
      </div>
    </div>
  );
}
