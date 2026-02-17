// src/features/skills/SkillsSection.tsx
"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

const categories = [
  { key: "mobile", label: "Développement Mobile" },
  { key: "backend", label: "Backend & API" },
  { key: "ai", label: "Intelligence Artificielle" },
  { key: "cloud-devops", label: "Cloud & DevOps" },
  { key: "tools", label: "Outils & Écosystème" },
  { key: "project-management", label: "Gestion de Projet" },
  { key: "soft-skills", label: "Soft Skills" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-28 lg:py-32 relative">
      <div className="absolute inset-0 bg-raycart-navy/10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="section-title mb-4">Compétences</h2>
          <p className="text-raycart-muted text-lg max-w-3xl mx-auto">
            Stack technique fullstack + IA, cloud et gestion de produit – avec un fort accent sur la livraison de valeur utilisateur.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat.key);
            if (catSkills.length === 0) return null;

            return (
              <div key={cat.key}>
                <h3 className="text-2xl sm:text-3xl font-bold text-raycart-text mb-6 sm:mb-8 text-center md:text-left">
                  {cat.label}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {catSkills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.06 }}
                      className={cn(
                        "rounded-xl p-4 sm:p-6 transition-all group",
                        "border border-gray-200 dark:border-raycart-card/30",
                        "bg-white/80 dark:bg-white/5",
                        "backdrop-blur-md",
                        "shadow-sm hover:shadow-md dark:shadow-none",
                        "hover:border-raycart-accent/50",
                        "hover:-translate-y-1"
                      )}
                    >
                      <div className="flex justify-between items-center mb-3 sm:mb-4">
                        <h4 className="text-base sm:text-lg font-semibold text-raycart-text group-hover:text-raycart-accent transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-raycart-accent font-bold text-sm sm:text-base">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="relative h-2 sm:h-3 bg-gray-200 dark:bg-raycart-card rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.2,
                          }}
                          className="absolute inset-y-0 left-0 bg-raycart-accent rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
