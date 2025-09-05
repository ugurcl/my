"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState("Başlatılıyor");

  useEffect(() => {
    // Simulate real loading stages
    const stages = [
      { progress: 20, text: "Stiller yükleniyor" },
      { progress: 40, text: "Bileşenler hazırlanıyor" },
      { progress: 60, text: "İçerik yükleniyor" },
      { progress: 80, text: "Animasyonlar ayarlanıyor" },
      { progress: 100, text: "Tamamlandı" }
    ];

    let currentStage = 0;
    
    const timer = setInterval(() => {
      if (currentStage < stages.length) {
        const stage = stages[currentStage];
        setProgress(stage.progress);
        setLoadingStage(stage.text);
        currentStage++;
        
        if (stage.progress === 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 400);
        }
      }
    }, 400);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center"
          >
            <motion.div
              className="text-6xl md:text-8xl font-bold gradient-text mb-4 text-center"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              UC
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-muted-foreground mb-4"
            >
              {loadingStage}
            </motion.p>
            
            <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <motion.p
              className="text-sm text-muted-foreground mt-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {progress < 30 && "Initializing..."}
              {progress >= 30 && progress < 60 && "Loading assets..."}
              {progress >= 60 && progress < 90 && "Almost there..."}
              {progress >= 90 && "Welcome!"}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}