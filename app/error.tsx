"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center space-y-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 mx-auto bg-destructive/10 rounded-full flex items-center justify-center"
        >
          <AlertCircle className="w-10 h-10 text-destructive" />
        </motion.div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Bir hata oluştu!</h1>
          <p className="text-muted-foreground">
            Beklenmeyen bir sorun meydana geldi. Lütfen tekrar deneyin.
          </p>
        </div>

        {process.env.NODE_ENV === "development" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-muted/50 rounded-lg p-4 text-left"
          >
            <p className="text-sm font-mono text-destructive">
              {error.message || "Bilinmeyen hata"}
            </p>
            {error.digest && (
              <p className="text-xs text-muted-foreground mt-2">
                Hata ID: {error.digest}
              </p>
            )}
          </motion.div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} variant="default" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Tekrar Dene
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            Ana Sayfaya Dön
          </Button>
        </div>
      </motion.div>
    </div>
  );
}