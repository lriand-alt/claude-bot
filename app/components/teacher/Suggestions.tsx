"use client";

import { SuggestionButton } from "../ui/SuggestionButton";
import translations from "../../locales/translations.json";

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

  const t = translations.da;

  return (
    <div className="flex flex-col gap-3">          
      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mt-1">
        {t.quickActions.title}
      </p>
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
      </div>
  );
}
