"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
}

export default function ParallaxText({ 
  children, 
  baseVelocity = 100,
  className = ""
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, baseVelocity]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={ref} className="overflow-hidden whitespace-nowrap">
      <motion.div
        className={`inline-block ${className}`}
        style={{ x, opacity }}
      >
        {children}
      </motion.div>
    </div>
  );
}