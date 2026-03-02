"use client";

import { Button } from "../ui/Button";
import { useLanguage } from "../../contexts/LanguageContext";

interface Suggestion {
  label: string;
  prompt: string;
}

interface SuggestionsProps {
  loading: boolean;
  onSuggestionClick: (prompt: string) => void;
}

export function Suggestions({
  loading,
  onSuggestionClick,
}: SuggestionsProps) {
  const { t } = useLanguage();

  const suggestions: Suggestion[] = [
    {
      label: t.quickActions.summarize,
      prompt: t.suggestions.summarize,
    },
    {
      label: t.quickActions.createPodcast,
      prompt: t.suggestions.createPodcast,
    },
    {
      label: t.quickActions.generateQuestions,
      prompt: t.suggestions.generateQuestions,
    },
    {
      label: t.quickActions.studyGuide,
      prompt: t.suggestions.studyGuide,
    },
    {
      label: t.quickActions.quiz,
      prompt: t.suggestions.quiz,
    },
  ];

  return (
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            onClick={() => onSuggestionClick(suggestion.prompt)}
            disabled={loading}
            variant="outline"
            size="sm"
            className="rounded-full"
          >
            {suggestion.label}
          </Button>
        ))}
      </div>
  );
}
