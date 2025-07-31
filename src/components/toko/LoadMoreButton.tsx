"use client";

import { ChevronDown } from "lucide-react";

interface LoadMoreButtonProps {
  onClick: () => void;
  loading?: boolean;
  text?: string;
  loadingText?: string;
  className?: string;
}

export function LoadMoreButton({
  onClick,
  loading = false,
  text = "Muat Lebih Banyak",
  loadingText = "Memuat...",
  className = "flex justify-center mt-12 mb-8",
}: LoadMoreButtonProps) {
  return (
    <div className={className}>
      <button
        onClick={onClick}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 flex items-center gap-2 disabled:cursor-not-allowed"
      >
        <span>{loading ? loadingText : text}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            loading ? "animate-spin" : ""
          }`}
        />
      </button>
    </div>
  );
}
