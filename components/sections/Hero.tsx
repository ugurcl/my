"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterText, MorphText } from "@/components/AdvancedText";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4" role="banner" aria-label="Hero bölümü">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6 max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="text-4xl md:text-6xl lg:text-7xl hero-title-raleway gradient-text text-center relative"
          aria-label="Uğur Çalışkan"
        >
          <motion.span
            animate={{ 
              textShadow: [
                "0 0 20px oklch(0.75 0.18 250 / 50%)",
                "0 0 40px oklch(0.55 0.25 190 / 60%)",
                "0 0 60px oklch(0.65 0.20 310 / 40%)",
                "0 0 20px oklch(0.75 0.18 250 / 50%)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            UĞUR
          </motion.span>
          <br />
          <motion.span
            animate={{ 
              textShadow: [
                "0 0 60px oklch(0.65 0.20 310 / 40%)",
                "0 0 20px oklch(0.75 0.18 250 / 50%)",
                "0 0 40px oklch(0.55 0.25 190 / 60%)",
                "0 0 60px oklch(0.65 0.20 310 / 40%)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            ÇALIŞKAN
          </motion.span>
          
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          />
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground"
        >
          <MorphText 
            texts={[
              "Full Stack Developer",
              "UI/UX Designer",
              "Problem Solver",
              "Code Artisan"
            ]}
            className="font-medium"
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Modern web teknolojileri ile kullanıcı deneyimi odaklı, 
          performanslı ve estetik dijital çözümler geliştiriyorum.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 justify-center items-center pt-4"
        >
          <Button 
            variant="default" 
            size="lg" 
            onClick={() => scrollToSection("projects")}
            className="relative overflow-hidden group"
          >
            <span className="relative z-10">Projelerimi Gör</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => scrollToSection("contact")}
            className="relative border-2 border-transparent bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 hover:glow transition-all duration-300 overflow-hidden group"
          >
            <span className="relative z-10">İletişime Geç</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-6 justify-center items-center pt-8"
        >
          <motion.a
            href="https://github.com/ugurcl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            aria-label="GitHub profili"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/u%C4%9Furcal%C4%B1%C5%9Fkan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-110"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            aria-label="LinkedIn profili"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="mailto:ugurcalsskan@gmail.com"
            className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            aria-label="E-posta gönder"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}