"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export function TypewriterText({ text, delay = 0, className = "" }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50 + Math.random() * 50);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={className}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-primary"
      >
        |
      </motion.span>
    </motion.span>
  );
}

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GlitchText({ children, className = "" }: GlitchTextProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        textShadow: [
          "0 0 0 transparent",
          "2px 0 0 #ff0040, -2px 0 0 #00ffff",
          "0 0 0 transparent",
        ],
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function SplitText({ children, className = "", delay = 0 }: SplitTextProps) {
  const words = children.split(" ");

  return (
    <motion.div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.1,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          className="inline-block mr-2"
        >
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -5,
                color: "var(--primary)",
                transition: { duration: 0.2 }
              }}
              transition={{
                duration: 0.3,
                delay: delay + i * 0.1 + j * 0.03,
              }}
              viewport={{ once: true }}
              className="inline-block hover:cursor-pointer"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface MorphTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export function MorphText({ texts, className = "", interval = 3000 }: MorphTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative ${className}`}>
      {texts.map((text, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 0.8,
          }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 ${index === currentIndex ? 'gradient-text' : ''}`}
        >
          {text}
        </motion.span>
      ))}
      <span className="opacity-0">{texts[0]}</span>
    </div>
  );
}

interface WaveTextProps {
  children: string;
  className?: string;
}

export function WaveText({ children, className = "" }: WaveTextProps) {
  return (
    <motion.div className={className}>
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}