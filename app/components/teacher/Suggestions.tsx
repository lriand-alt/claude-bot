"use client";

import { Button } from "../ui/Button";

interface Suggestion {
  label: string;
  prompt: string;
}

interface SuggestionsProps {
  loading: boolean;
  translations: {
    title: string;
    labels: {
      summarize: string;
      createPodcast: string;
      generateQuestions: string;
      studyGuide: string;
      quiz: string;
    };
    prompts: {
      summarize: string;
      createPodcast: string;
      generateQuestions: string;
      studyGuide: string;
      quiz: string;
    };
  };
  onSuggestionClick: (prompt: string) => void;
}

export function Suggestions({
  loading,
  translations: t,
  onSuggestionClick,
}: SuggestionsProps) {
  const suggestions: Suggestion[] = [
    {
      label: t.labels.summarize,
      prompt: t.prompts.summarize,
    },
    {
      label: t.labels.createPodcast,
      prompt: t.prompts.createPodcast,
    },
    {
      label: t.labels.generateQuestions,
      prompt: t.prompts.generateQuestions,
    },
    {
      label: t.labels.studyGuide,
      prompt: t.prompts.studyGuide,
    },
    {
      label: t.labels.quiz,
      prompt: t.prompts.quiz,
    },
  ];

  return (
    <div className="mb-6">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        {t.title}
      </p>
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
    </div>
  );
}
