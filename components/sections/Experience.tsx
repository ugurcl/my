"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Code2, Database, Globe, Server } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer & Tech Lead",
    company: "Freelance & Consulting",
    location: "İstanbul, Türkiye",
    period: "2020 - Present",
    icon: Code2,
    description: "Kurumsal projeler, web scraping sistemleri ve otomasyon çözümleri geliştirme. Python, Node.js, C# ve modern web teknolojileri ile kapsamlı çözümler sunuyorum.",
    technologies: ["Python", "Django", "Node.js", "Next.js", "C#", ".NET", "PostgreSQL", "MongoDB"],
    achievements: [
      "25+ kurumsal proje teslim etti",
      "Global haber platformu - günlük 10K+ otomatik çeviri",
      "Web scraping sistemleri - 100+ kaynak entegrasyonu",
      "Otomasyon sistemleri ile %80 iş süreci iyileştirmesi"
    ]
  },
  {
    title: "Software Developer - Otomasyon Uzmanı",
    company: "Various Corporate Clients",
    location: "İstanbul, Türkiye", 
    period: "2018 - 2020",
    icon: Database,
    description: "Kurumlar için özel masaüstü uygulamaları ve otomasyon sistemleri geliştirme. Kütüphane yönetimi, personel takip, demirbaş yönetimi gibi sektörel çözümler.",
    technologies: ["C#", ".NET Framework", "WPF", "SQL Server", "Entity Framework", "Crystal Reports"],
    achievements: [
      "15+ masaüstü uygulama geliştirdi",
      "Kütüphane sistemi - 50K+ kitap kayıt yönetimi",
      "ATM simülasyon sistemi - güvenli işlem altyapısı",
      "Personel izin sistemi - otomatik onay mekanizması"
    ]
  },
  {
    title: "Web Scraping & Data Analysis Specialist",
    company: "Tech Solutions & E-commerce",
    location: "İstanbul, Türkiye",
    period: "2017 - Present",
    icon: Globe,
    description: "E-ticaret, haber siteleri ve sosyal medya platformları için veri çekme ve analiz sistemleri. Otomatik fiyat takibi, içerik agregasyonu ve rekabet analizi araçları.",
    technologies: ["Python", "Scrapy", "BeautifulSoup", "Selenium", "Node.js", "Puppeteer"],
    achievements: [
      "50+ web scraping projesi tamamladı",
      "Günlük 1M+ veri noktası işleme kapasitesi",
      "15+ global haber kaynağı entegrasyonu",
      "E-ticaret fiyat karşılaştırma sistemleri"
    ]
  },
  {
    title: "Python Automation Developer",
    company: "Various Industries",
    location: "İstanbul, Türkiye",
    period: "2016 - Present",
    icon: Server,
    description: "Günlük iş süreçlerini otomatikleştiren Python araçları ve scriptler geliştirme. Dosya yönetimi, veri işleme, mail otomasyonu ve sistem monitoring çözümleri.",
    technologies: ["Python", "Pandas", "NumPy", "OpenCV", "PyAutoGUI", "Schedule", "Tkinter"],
    achievements: [
      "100+ otomasyon scripti geliştirdi",
      "Dosya organizasyon sistemi - 10K+ dosya otomatik sınıflandırma",
      "Toplu mail gönderim sistemi - 5K+ alıcı kapasitesi",
      "Sistem performans monitörü - real-time uyarı sistemi"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Deneyim</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Web scraping, otomasyon sistemleri, veri analizi ve kurumsal çözümler alanında 7+ yıllık deneyimim
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50 hidden md:block" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2" />
              
              <motion.div
                className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary z-10"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="md:w-1/2 glass p-6 rounded-lg hover:glow transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold gradient-text">{exp.title}</h3>
                    <p className="text-lg font-medium text-foreground/80">{exp.company}</p>
                  </div>
                  <motion.div
                    className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <exp.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Başlıca Başarılar:</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}