"use client";

import { Button } from "../ui/Button";

interface Suggestion {
  label: string;
  prompt: string;
}

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
          <Button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            disabled={loading}
            variant="outline"
            size="sm"
            className="rounded-full"
          >
            {suggestion}
          </Button>
        ))}
      </div>
  );
}
