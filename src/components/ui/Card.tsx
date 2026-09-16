import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-slate-200/90 bg-white/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:border-amber-400/60 hover:bg-white hover:shadow-[0_12px_35px_rgb(0,0,0,0.08)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
