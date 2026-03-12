"use client";

import Image from "next/image";
import expandIcon from "../icons/Expand.png";
import closeIcon from "../icons/Close.png";
import translations from "../../locales/translations.json";

interface HeaderProps {
  title?: string;
  handleChatSizeChange?: () => void;
  handleOpenAndClose?: () => void;
}

export function Header({ title, handleChatSizeChange, handleOpenAndClose }: HeaderProps) {
  const t = translations.da;

  return (
    <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold rainbow-text">{title}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {t.header.subtitle}
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={handleChatSizeChange} className="flex cursor-pointer justify-center items-center w-10 h-10 bg-gray-800 rounded-full">
            <Image className="invert" src={expandIcon} alt="Expand" width={24} height={24}/>
          </button>
          <button onClick={handleOpenAndClose} className="flex cursor-pointer justify-center items-center w-10 h-10 bg-gray-800 rounded-full">
            <Image className="invert" src={closeIcon} alt="Expand" width={24} height={24}/>
          </button>
        </div>
      </div>
    </div>
  );
}
