// src/features/contact/ContactSection.tsx
"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import { useI18n } from "@/app/providers"; // ton hook i18n
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const { t } = useI18n();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      form.current.reset();

      // Reset status après 5 secondes
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMessage(t("contact.error") || "Une erreur est survenue. Veuillez réessayer.");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Fond subtil */}
      <div className="absolute inset-0 bg-raycart-navy/10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="section-title mb-4">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-raycart-muted max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
          {/* Infos rapides + réseaux */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6 sm:space-y-8"
          >
            <div className="rounded-2xl p-5 sm:p-6 lg:p-8 border border-raycart-card/30">
              <h3 className="text-xl sm:text-2xl font-bold text-raycart-text mb-4 sm:mb-6">
                {t("contact.keep_in_touch")}
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-raycart-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-raycart-accent sm:size-5" size={20} />
                  </div>
                  <div>
                  <p className="text-xs sm:text-sm text-raycart-muted">{t("contact.email")}</p>
                  <a
                    href="mailto:assounrodrigue5@gmail.com"
                    className="text-raycart-text hover:text-raycart-accent transition-colors text-sm sm:text-base"
                  >
                    assounrodrigue5@gmail.com
                  </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-raycart-accent/20 flex items-center justify-center">
                    <Linkedin className="text-raycart-accent sm:size-5" size={8} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-raycart-muted">{t("contact.linkedin")}</p>
                    <a
                      href="https://linkedin.com/in/hordric"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-raycart-text hover:text-raycart-accent transition-colors text-sm sm:text-base"
                    >
                      linkedin.com/in/hordric
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-raycart-accent/20 flex items-center justify-center">
                    <Github className="text-raycart-accent sm:size-6" size={8} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-raycart-muted">{t("contact.github")}</p>
                    <a
                      href="https://github.com/HordRicJr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-raycart-text hover:text-raycart-accent transition-colors text-sm sm:text-base"
                    >
                      github.com/HordRicJr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left text-raycart-muted text-xs sm:text-sm">
              Lomé, Togo
              <br />
              Disponible pour projets freelance, CDI, collaborations open-source ou conseils produit/tech.
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="glass rounded-2xl p-6 md:p-8 border border-raycart-card/30 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-raycart-text">
                    {t("contact.full_name")}
                  </Label>
                  <Input
                    id="name"
                    name="from_name"
                    required
                    placeholder={t("contact.full_name_ph")}
                    className="bg-raycart-card/50 border-raycart-card focus:border-raycart-accent focus:ring-raycart-accent/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-raycart-text">
                    {t("contact.email_label")}
                  </Label>
                  <Input
                    id="email"
                    name="from_email"
                    type="email"
                    required
                    placeholder={t("contact.email_ph")}
                    className="bg-raycart-card/50 border-raycart-card focus:border-raycart-accent focus:ring-raycart-accent/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-raycart-text">
                  {t("contact.subject")}
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder={t("contact.subject_ph")}
                  className="bg-raycart-card/50 border-raycart-card focus:border-raycart-accent focus:ring-raycart-accent/30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-raycart-text">
                  {t("contact.message")}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder={t("contact.message_ph")}
                  className="min-h-[140px] md:min-h-[180px] bg-raycart-card/50 border-raycart-card focus:border-raycart-accent focus:ring-raycart-accent/30"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className={cn(
                  "w-full font-semibold text-lg transition-all",
                  status === "sending" && "opacity-70 cursor-not-allowed",
                  status === "success" && "bg-green-600 hover:bg-green-600",
                  status === "error" && "bg-red-600 hover:bg-red-600"
                )}
              >
                {status === "sending" ? (
                  t("contact.sending")
                ) : status === "success" ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={20} /> {t("contact.success")}
                  </span>
                ) : status === "error" ? (
                  <span className="flex items-center gap-2">
                    <AlertCircle size={20} /> {t("contact.error")}
                  </span>
                ) : (
                  <>
                    {t("contact.send")} <Send className="ml-2" size={18} />
                  </>
                )}
              </Button>

              {status === "success" && (
                <p className="text-center text-sm text-green-400 mt-2">
                  {t("contact.response_time")}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}