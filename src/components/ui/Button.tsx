import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "yellow" | "blue" | "dark" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  className,
  variant = "yellow",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variants = {
    yellow:
      "bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 focus:ring-amber-400",
    blue:
      "bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-md shadow-blue-600/25 hover:shadow-blue-600/35 focus:ring-blue-500",
    dark:
      "bg-slate-900 hover:bg-black text-white font-semibold shadow-md shadow-slate-900/20 focus:ring-slate-900",
    outline:
      "border border-slate-300 hover:border-amber-500 hover:text-amber-600 text-slate-700 bg-white hover:bg-amber-50/50 shadow-sm focus:ring-amber-400/50",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 rounded-lg",
    md: "text-sm px-4 py-2 gap-2 rounded-xl",
    lg: "text-base px-6 py-2.5 gap-2.5 rounded-xl",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
