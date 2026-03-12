"use client";

interface SuggestionButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export function SuggestionButton({ onClick, disabled, children }: SuggestionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 text-sm cursor-pointer rounded-full border-2 border-green-500 text-green-700 dark:text-green-400 bg-white dark:bg-gray-900 hover:bg-green-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
    >
      {children}
    </button>
  );
}
