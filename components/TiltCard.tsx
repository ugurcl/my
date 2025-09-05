"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  perspective?: number;
  scale?: number;
}

export default function TiltCard({
  children,
  className = "",
  tiltMaxAngleX = 15,
  tiltMaxAngleY = 15,
  perspective = 1000,
  scale = 1.05,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [tiltMaxAngleX, -tiltMaxAngleX]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-tiltMaxAngleY, tiltMaxAngleY]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      animate={{
        scale: isHovering ? scale : 1,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`relative ${className}`}
    >
      <div
        style={{
          transform: `translateZ(75px)`,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-lg blur-xl -z-10"
        animate={{
          opacity: isHovering ? 0.6 : 0,
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-lg pointer-events-none"
        style={{
          background: `linear-gradient(
            ${useTransform(mouseXSpring, [-0.5, 0.5], [0, 90])}deg,
            transparent 0%,
            rgba(255,255,255,0.1) 50%,
            transparent 100%
          )`,
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}