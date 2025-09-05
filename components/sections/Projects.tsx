"use client";

import { motion } from "framer-motion";
import { Globe, Server, Database, Code2, Briefcase, FileSearch } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Global Haber Platformu",
    description: "Django ile geliştirilmiş, yabancı haber sitelerinden içerikleri çekip otomatik Türkçe'ye çeviren global haber agregasyon platformu. Web scraping, çeviri API'leri ve responsive tasarım.",
    icon: Globe,
    tags: ["Django", "Python", "BeautifulSoup", "Selenium", "PostgreSQL", "Redis", "Celery", "REST API"],
    category: "Web Scraping & Django",
    highlights: [
      "Günlük 10.000+ haber otomatik çeviri",
      "15+ global haber kaynağı entegrasyonu",
      "Real-time içerik güncelleme",
      "Akıllı kategorizasyon sistemi"
    ],
  },
  {
    title: "Kurumsal Otomasyon Sistemleri",
    description: "C# ve .NET ile geliştirilmiş kapsamlı masaüstü otomasyon çözümleri paketi. Kütüphane yönetimi, ATM sistemi, personel izin takibi ve demirbaş yönetimi modülleri.",
    icon: Briefcase,
    tags: ["C#", ".NET Framework", "WinForms", "WPF", "SQL Server", "Entity Framework", "Crystal Reports"],
    category: "Masaüstü Otomasyon",
    highlights: [
      "Kütüphane Yönetim Sistemi - 50.000+ kitap kaydı",
      "ATM Simülasyon Sistemi - Güvenli işlem altyapısı",
      "Personel İzin Takip - Entegre onay mekanizması",
      "Demirbaş Takip Sistemi - QR kod entegrasyonu"
    ],
  },
  {
    title: "Web Scraping Araçları",
    description: "Node.js, Python ve C# ile geliştirilmiş profesyonel web scraping araçları. E-ticaret fiyat takibi, veri madenciliği ve otomatik raporlama sistemleri.",
    icon: FileSearch,
    tags: ["Node.js", "Puppeteer", "Python", "Scrapy", "BeautifulSoup", "C#", "HtmlAgilityPack", "MongoDB"],
    category: "Web Scraping",
    highlights: [
      "E-ticaret fiyat karşılaştırma botu",
      "Sosyal medya veri analizi",
      "SEO rakip analiz aracı",
      "Otomatik form doldurma sistemi"
    ],
  },
  {
    title: "Python Otomasyon Araçları",
    description: "Günlük işleri kolaylaştıran Python scriptleri ve araçları. Dosya organizasyonu, toplu mail gönderimi, veri işleme ve sistem yönetimi araçları.",
    icon: Code2,
    tags: ["Python", "Pandas", "NumPy", "Selenium", "PyAutoGUI", "Schedule", "OpenCV"],
    category: "Python Tools",
    highlights: [
      "Otomatik dosya organizatörü",
      "Toplu mail gönderim sistemi",
      "Excel/CSV veri işleme araçları",
      "Sistem performans monitörü"
    ],
  },
  {
    title: "Kurumsal Web Siteleri",
    description: "Modern teknolojilerle geliştirilmiş, SEO optimizeli ve responsive kurumsal web siteleri. Admin paneli, çoklu dil desteği ve entegre yönetim sistemleri.",
    icon: Server,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Strapi CMS"],
    category: "Kurumsal Web",
    highlights: [
      "10+ kurumsal site projesi",
      "Özel admin panel geliştirmeleri",
      "E-ticaret entegrasyonları",
      "SEO ve performans optimizasyonu"
    ],
  },
  {
    title: "Veri Analiz Platformları",
    description: "Büyük veri işleme ve görselleştirme platformları. Real-time dashboard'lar, raporlama sistemleri ve makine öğrenmesi entegrasyonları.",
    icon: Database,
    tags: ["Python", "Django", "FastAPI", "React", "D3.js", "PostgreSQL", "ElasticSearch", "Docker"],
    category: "Data Analytics",
    highlights: [
      "Real-time veri görselleştirme",
      "Otomatik rapor oluşturma",
      "Tahminleme modelleri",
      "API entegrasyonları"
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projelerim</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Web scraping, otomasyon sistemleri, kurumsal çözümler ve veri analizi alanlarında geliştirdiğim projeler
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden glass hover:glow transition-all duration-300 group cursor-pointer hover:scale-[1.02] h-full flex flex-col">
                <div className="relative p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-8 h-8 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Öne Çıkan Özellikler:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4 mt-auto">
                    {project.tags.slice(0, 5).map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="text-xs bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 hover:from-primary/20 hover:to-secondary/20 transition-all"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 5 && (
                      <Badge 
                        variant="secondary"
                        className="text-xs bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20"
                      >
                        +{project.tags.length - 5}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}