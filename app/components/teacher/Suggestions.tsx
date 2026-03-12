"use client";

import { SuggestionButton } from "../ui/SuggestionButton";

interface SuggestionsProps {
  suggestions: string[];
  loading: boolean;
  onSuggestionClick: (prompt: string) => void;
}

export function Suggestions({
  suggestions,
  loading,
  onSuggestionClick,
}: SuggestionsProps) {

  return (
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <SuggestionButton
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            disabled={loading}
          >
            {suggestion}
          </SuggestionButton>
        ))}
      </div>
  );
}
