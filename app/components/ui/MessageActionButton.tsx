"use client";

interface MessageActionButtonProps {
  onClick: () => void;
  title: string;
  children: React.ReactNode;
}

export function MessageActionButton({ onClick, title, children }: MessageActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="p-1.5 cursor-pointer rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
    >
      {children}
    </button>
  );
}
