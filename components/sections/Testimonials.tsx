"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    role: "CEO",
    company: "Tech Startup",
    content: "Uğur ile çalışmak harika bir deneyimdi. Projemizi zamanında ve beklentilerimizin üzerinde teslim etti. Teknik bilgisi ve problem çözme yeteneği olağanüstü.",
    rating: 5,
    image: "AY"
  },
  {
    name: "Zeynep Kaya",
    role: "Product Manager",
    company: "Digital Agency",
    content: "Mükemmel iletişim becerileri ve detaylara gösterdiği özen ile projelerimizde büyük fark yarattı. Kesinlikle tekrar çalışmak isterim.",
    rating: 5,
    image: "ZK"
  },
  {
    name: "Mehmet Demir",
    role: "CTO",
    company: "E-commerce Platform",
    content: "Uğur'un modern teknolojilere hakimiyeti ve clean code prensipleri sayesinde ölçeklenebilir ve sürdürülebilir bir platform geliştirdik.",
    rating: 5,
    image: "MD"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Referanslar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Birlikte çalıştığım kişilerin değerli görüşleri
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass p-6 hover:glow transition-all duration-300 group relative overflow-hidden">
                <motion.div
                  className="absolute -top-8 -right-8 text-8xl text-primary/5"
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Quote />
                </motion.div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {testimonial.image}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} @ {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-4 h-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}