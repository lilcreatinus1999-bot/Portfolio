import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={cn("flex flex-wrap justify-center", className)} style={style}>
      {words.map((word, i) => {
        const chars = word.split("");
        return (
          <span key={i} className="inline-block mr-[0.25em] relative">
            {chars.map((char, j) => {
              // Calculate roughly where this character falls in the total string
              const charIndex = text.indexOf(word) + j;
              const progressStart = charIndex / text.length;
              const progressEnd = progressStart + (1 / text.length);
              
              return (
                <Character 
                  key={j} 
                  char={char} 
                  progress={scrollYProgress} 
                  range={[progressStart, progressEnd]} 
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
}

function Character({ 
  char, 
  progress, 
  range 
}: { 
  char: string, 
  progress: any, 
  range: [number, number] 
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  
  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span 
        style={{ opacity }} 
        className="absolute left-0 top-0"
      >
        {char}
      </motion.span>
    </span>
  );
}
