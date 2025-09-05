"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users, Server, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import TiltCard from "@/components/TiltCard";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript ve modern web teknolojileri ile responsive ve performanslı uygulamalar geliştiriyorum.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Node.js ve Django ile güçlü, ölçeklenebilir backend sistemleri ve RESTful API'ler geliştiriyorum.",
  },
  {
    icon: Database,
    title: "Database & DevOps",
    description: "PostgreSQL, MongoDB ile veritabanı yönetimi, Docker ve bulut teknolojileri ile deployment süreçlerini optimize ediyorum.",
  },
  {
    icon: Rocket,
    title: "Web Scraping & Automation",
    description: "Python, Selenium, Scrapy ile veri çekme sistemleri ve iş süreçlerini otomatikleştiren çözümler geliştiriyorum.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Kullanıcı deneyimi odaklı, minimal ve modern tasarımlar ile estetik arayüzler oluşturuyorum.",
  },
  {
    icon: Users,
    title: "İşbirliği & Yönetim",
    description: "Agile metodolojiler ve modern geliştirme araçları ile takım çalışmasına uyumlu projeler yürütüyorum.",
  },
];

const techStack = [
  "HTML", "CSS", "JavaScript", "TypeScript", 
  "React", "Next.js", "Tailwind CSS", 
  "Node.js", "Express.js", "Django", "Python", "C#", ".NET",
  "PostgreSQL", "MongoDB", "SQL Server",
  "Scrapy", "Selenium", "BeautifulSoup", "Puppeteer",
  "Docker", "Git", "GitHub", "Vercel"
];

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4" role="region" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-4">Hakkımda</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer, Backend Uzmanı, Web Scraping Specialist ve Otomasyon Çözümleri Mimarı
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard className="h-full">
                <Card className="p-6 h-full glass hover:glow transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <skill.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">{skill.title}</h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Teknoloji Yığını</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="px-4 py-2 rounded-full glass hover:glow transition-all duration-300 cursor-pointer hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <span className="font-medium">{tech}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}