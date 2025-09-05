"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function BackgroundEffects() {
  const particles = useMemo(() => 
    [...Array(8)].map((_, i) => ({
      id: i,
      left: 20 + (i * 7.5) % 60,
      top: 20 + (i * 5.5) % 60,
      duration: 6 + (i * 0.5),
      delay: i * 0.5,
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Subtle gradient orbs - reduced count and slower animation */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, oklch(0.75 0.18 250 / 20%), transparent)",
          filter: "blur(60px)",
          top: "10%",
          left: "10%",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.20 310 / 20%), transparent)",
          filter: "blur(60px)",
          bottom: "20%",
          right: "10%",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.75 0.18 250) 1px, transparent 1px),
                           linear-gradient(90deg, oklch(0.75 0.18 250) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Minimal floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-primary/20"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}