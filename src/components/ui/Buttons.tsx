import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function ContactButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full uppercase tracking-widest font-medium text-white",
        "px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4",
        "text-xs sm:text-sm md:text-base",
        className
      )}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid white",
        outlineOffset: "-3px"
      }}
      {...props}
    >
      Contact Me
    </button>
  );
}

export function LiveProjectButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest",
        "px-8 py-3 sm:px-10 sm:py-3.5",
        "text-sm sm:text-base",
        "hover:bg-[#D7E2EA]/10 transition-colors duration-300",
        className
      )}
      {...props}
    >
      Live Project
    </button>
  );
}
