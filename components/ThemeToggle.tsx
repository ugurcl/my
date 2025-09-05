"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved) {
      setIsDark(saved === "dark");
      document.documentElement.className = saved;
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const theme = isDark ? "dark" : "light";
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [isDark, mounted]);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed top-20 right-4 z-50"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsDark(!isDark)}
        className="glass hover:glow transition-all duration-300 relative overflow-hidden group"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "dark" : "light"}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-primary group-hover:rotate-180 transition-transform duration-300" />
            ) : (
              <Moon className="h-5 w-5 text-primary group-hover:rotate-180 transition-transform duration-300" />
            )}
          </motion.div>
        </AnimatePresence>
      </Button>
    </motion.div>
  );
}