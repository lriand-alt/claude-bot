"use client";

interface ProviderSelectorProps {
  provider: "claude" | "openai" | "rag";
  onProviderChange: (provider: "claude" | "openai" | "rag") => void;
  claudeLabel: string;
  openaiLabel: string;
  ragLabel: string;
}

export function ProviderSelector({
  provider,
  onProviderChange,
  claudeLabel,
  openaiLabel,
  ragLabel,
}: ProviderSelectorProps) {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-sm text-gray-600 dark:text-gray-400">AI Provider:</span>
      <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1 bg-gray-50 dark:bg-gray-900">
        <button
          onClick={() => onProviderChange("claude")}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            provider === "claude"
              ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          }`}
        >
          {claudeLabel}
        </button>
        <button
          onClick={() => onProviderChange("openai")}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            provider === "openai"
              ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          }`}
        >
          {openaiLabel}
        </button>
        <button
          onClick={() => onProviderChange("rag")}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            provider === "rag"
              ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          }`}
        >
          {ragLabel}
        </button>
      </div>
    </div>
  );
}
