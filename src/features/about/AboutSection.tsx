// src/features/about/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import { Briefcase, Cpu, Sparkles } from "lucide-react";
import { useI18n } from "@/app/providers";

export default function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-raycart-navy/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">{t("about.title")}</h2>
          <p className="text-raycart-muted text-lg max-w-3xl mx-auto">
            {t("about.subtitle").split("\n")[0]}
            <br className="hidden md:block" />
            {t("about.subtitle").split("\n")[1]}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass rounded-2xl p-8 border border-raycart-card/30"
            >
              <div className="w-12 h-12 rounded-2xl bg-raycart-accent/15 flex items-center justify-center mb-6">
                {i === 0 ? (
                  <Briefcase className="text-raycart-accent" size={22} />
                ) : i === 1 ? (
                  <Cpu className="text-raycart-accent" size={22} />
                ) : (
                  <Sparkles className="text-raycart-accent" size={22} />
                )}
              </div>

              <h3 className="text-xl font-bold text-raycart-text mb-3">{t(`about.card.${i}.title`)}</h3>
              <p className="text-raycart-muted leading-relaxed">{t(`about.card.${i}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
