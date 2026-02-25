"use client";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  language: "en" | "da";
  onLanguageChange: (lang: "en" | "da") => void;
}

export function Header({
  title,
  subtitle,
  language,
  onLanguageChange,
}: HeaderProps) {
  return (
    <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold rainbow-text">{title}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {subtitle}
          </p>
        </div>
        <button
          onClick={() => onLanguageChange(language === "en" ? "da" : "en")}
          className="relative inline-flex h-10 w-20 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Toggle language"
        >
          <span
            className={`absolute text-xl opacity-60 ${
              language === "en" ? "right-2.5" : "left-2.5"
            }`}
          >
            {language === "en" ? "🇩🇰" : "🇬🇧"}
          </span>
          <span
            className={`inline-flex h-8 w-8 transform items-center justify-center rounded-full bg-white shadow-lg transition-transform ${
              language === "en" ? "translate-x-1" : "translate-x-11"
            }`}
          >
            <span className="text-xl">
              {language === "en" ? "🇬🇧" : "🇩🇰"}
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
