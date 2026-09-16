"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function ThemeToggle({ className, ...props }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        disabled
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 bg-white/[0.05] text-slate-300 transition-all opacity-50",
          className
        )}
        {...props}
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 bg-white/[0.05] text-slate-300 backdrop-blur-md transition duration-200 hover:border-amber-400 hover:bg-amber-400/10 hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400/40 active:scale-95",
        className
      )}
      {...props}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 transition-all" />
      ) : (
        <Moon className="h-4 w-4 transition-all" />
      )}
    </button>
  );
}
