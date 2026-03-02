"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const WelcomeMessage = ({ welcomeMessage }: {welcomeMessage: string}) => {
  return (
    <div className="flex justify-start">
        <div className="max-w-3xl px-5 py-3 rounded-2xl bg-gray-800 dark:bg-gray-700 text-white">
            <div className="flex flex-col items-start gap-3">
                <Markdown remarkPlugins={[remarkGfm]}>
                    {welcomeMessage}
                </Markdown>
            </div>
        </div>
    </div>
  );
}

export default WelcomeMessage;