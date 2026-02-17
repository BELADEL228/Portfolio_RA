// src/features/hero/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // suppose que tu as un dossier ui/ avec des composants shadcn-like
import { useI18n } from "@/app/providers";

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fond dynamique avec gradient + particules légères (optionnel via CSS) */}
      <div className="absolute inset-0 bg-raycart-dark" />
      <div className="absolute inset-0 bg-raycart-navy/10" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center pt-16 sm:pt-24 md:pt-28">
          {/* Badge / sous-titre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 sm:mb-8 border border-raycart-accent/30"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-raycart-accent">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Nom principal avec couleur solide */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 sm:mb-6 leading-tight"
          >
            <span className="text-raycart-text">ASSOUN</span>{" "}
            <span className="text-raycart-accent">
              Rodrigue
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-raycart-muted max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed"
          >
            {t("hero.tagline").split("\n")[0]}
            <br className="hidden md:block" />
            {t("hero.tagline").split("\n")[1]}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-raycart-accent hover:bg-raycart-accent/90 text-raycart-dark font-semibold px-6 sm:px-10 py-4 sm:py-7 text-base sm:text-lg rounded-xl shadow-lg shadow-raycart-accent/25 transition-all group"
            >
              <Link href="#projects">
                {t("hero.cta.projects")}
                <ArrowDown className="ml-2 sm:ml-3 group-hover:translate-y-1 transition-transform" size={18} />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-raycart-accent/60 text-raycart-accent hover:bg-raycart-accent/10 px-6 sm:px-10 py-4 sm:py-7 text-base sm:text-lg rounded-xl transition-all"
              asChild
            >
              <Link href="#contact">
                {t("hero.cta.contact")}
              </Link>
            </Button>
          </motion.div>

          {/* Réseaux sociaux icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center gap-6 sm:gap-8 mt-12 sm:mt-16"
          >
            <a
              href="https://github.com/HordRicJr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-raycart-muted hover:text-raycart-accent transition-colors transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/hordric"
              target="_blank"
              rel="noopener noreferrer"
              className="text-raycart-muted hover:text-raycart-accent transition-colors transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:assounrodrigue5@gmail.com"
              className="text-raycart-muted hover:text-raycart-accent transition-colors transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </motion.div>

          {/* Scroll down indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-xs sm:text-sm text-raycart-muted">{t("hero.more")}</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="text-raycart-accent" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}