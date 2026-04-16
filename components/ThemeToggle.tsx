"use client";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
      className={`
        relative w-8 h-8 flex items-center justify-center rounded-lg
        text-slate-500 dark:text-slate-400
        hover:bg-slate-100 dark:hover:bg-white/10
        hover:text-slate-700 dark:hover:text-slate-700 dark:text-slate-200
        transition-all duration-200
        ${className}
      `}
    >
      {/* Sun icon — visible in dark mode (click to go light) */}
      <Sun
        className={`
          w-4 h-4 absolute transition-all duration-300
          ${theme === "dark"
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-50 rotate-90"}
        `}
      />
      {/* Moon icon — visible in light mode (click to go dark) */}
      <Moon
        className={`
          w-4 h-4 absolute transition-all duration-300
          ${theme === "light"
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-50 -rotate-90"}
        `}
      />
    </button>
  );
}
