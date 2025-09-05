"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, AlertCircle, CheckCircle, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { validateContactForm, sanitizeInput, FormErrors } from "@/lib/validation";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "ugurcalsskan@gmail.com",
    link: "mailto:ugurcalsskan@gmail.com",
  },
  {
    icon: MapPin,
    title: "Çalışma Şekli",
    value: "Remote",
    link: "#",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/ugurcl",
    link: "https://github.com/ugurcl",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/ugurcaliskan",
    link: "https://www.linkedin.com/in/u%C4%9Furcal%C4%B1%C5%9Fkan/",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const sanitized = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [id]: sanitized }));
    // Clear error for this field when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      toast.success("Mesajınız başarıyla gönderildi!", {
        description: "En kısa sürede size dönüş yapacağım.",
      });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      toast.error("Bir hata oluştu", {
        description: "Lütfen daha sonra tekrar deneyin.",
      });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4" role="region" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-4">İletişim</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projeleriniz için benimle iletişime geçebilir, GitHub ve LinkedIn üzerinden çalışmalarımı inceleyebilirsiniz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur h-full">
              <h3 className="text-2xl font-bold mb-6">Mesaj Gönderin</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" aria-label="İsim alanı">
                    İsim
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    aria-required="true"
                    aria-label="Adınız ve soyadınız"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 transition-all ${
                      errors.name 
                        ? "border-destructive focus:ring-destructive/50" 
                        : "border-border focus:ring-primary/50"
                    }`}
                    placeholder="Adınız Soyadınız"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" aria-label="E-posta alanı">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 transition-all ${
                      errors.email 
                        ? "border-destructive focus:ring-destructive/50" 
                        : "border-border focus:ring-primary/50"
                    }`}
                    placeholder="ornek@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message 
                        ? "border-destructive focus:ring-destructive/50" 
                        : "border-border focus:ring-primary/50"
                    }`}
                    placeholder="Mesajınızı buraya yazın..."
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Gönder
                    </>
                  )}
                </Button>
                
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-600 dark:text-green-400"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Mesajınız başarıyla gönderildi!</span>
                  </motion.div>
                )}
                
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-destructive"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">Bir hata oluştu. Lütfen tekrar deneyin.</span>
                  </motion.div>
                )}
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur">
              <h3 className="text-2xl font-bold mb-6">İletişim Bilgileri</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={info.link}
                      className="flex items-start gap-4 group hover:text-primary transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}