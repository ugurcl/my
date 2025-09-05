"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SoundManagerProps {
  enabled?: boolean;
}

export default function SoundManager({ enabled = true }: SoundManagerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [mounted, setMounted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    setMounted(true);
    const savedMute = localStorage.getItem("soundMuted");
    if (savedMute !== null) {
      setIsMuted(JSON.parse(savedMute));
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("soundMuted", JSON.stringify(isMuted));
  }, [isMuted, mounted]);

  const createAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  };

  const playTone = (frequency: number, duration: number, volume: number = 0.1) => {
    if (isMuted || !enabled) return;

    const audioContext = createAudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  };

  // Add global sound effects
  useEffect(() => {
    if (!mounted || isMuted) return;

    const handleClick = () => playTone(800, 0.1, 0.05);
    const handleHover = () => playTone(600, 0.05, 0.03);

    // Add event listeners to buttons and interactive elements
    const buttons = document.querySelectorAll('button, a[href], [role="button"]');
    const cards = document.querySelectorAll('[class*="Card"], [class*="card"]');

    buttons.forEach(button => {
      button.addEventListener('click', handleClick);
      button.addEventListener('mouseenter', handleHover);
    });

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => playTone(400, 0.1, 0.02));
    });

    // Cleanup
    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', handleClick);
        button.removeEventListener('mouseenter', handleHover);
      });
      cards.forEach(card => {
        card.removeEventListener('mouseenter', () => playTone(400, 0.1, 0.02));
      });
    };
  }, [mounted, isMuted, enabled]);

  // Haptic feedback for mobile
  const triggerHaptic = (type: "light" | "medium" | "heavy" = "light") => {
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      const patterns = {
        light: [10],
        medium: [20],
        heavy: [30, 10, 30],
      };
      navigator.vibrate(patterns[type]);
    }
  };

  // Add haptic feedback to interactions
  useEffect(() => {
    if (!mounted) return;

    const handleButtonClick = () => triggerHaptic("light");
    const handleCardHover = () => triggerHaptic("light");

    const buttons = document.querySelectorAll('button, a[href]');
    const cards = document.querySelectorAll('[class*="Card"], [class*="card"]');

    buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });

    cards.forEach(card => {
      card.addEventListener('mouseenter', handleCardHover);
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', handleButtonClick);
      });
      cards.forEach(card => {
        card.removeEventListener('mouseenter', handleCardHover);
      });
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-20 right-4 z-50 md:bottom-8 md:right-20"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMuted(!isMuted)}
        className="glass hover:glow transition-all duration-300 group"
      >
        <motion.div
          animate={{ scale: isMuted ? 1 : [1, 1.2, 1] }}
          transition={{ duration: 0.3 }}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-muted-foreground" />
          ) : (
            <Volume2 className="h-5 w-5 text-primary" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
}