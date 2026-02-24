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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {catSkills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className={cn(
                        "flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg group cursor-default",
                        "bg-gradient-to-br from-white/40 to-white/20 dark:from-white/5 dark:to-white/0",
                        "border border-raycart-accent/20",
                        "transition-all duration-300",
                        "hover:border-raycart-accent/50 hover:shadow-md hover:shadow-raycart-accent/15",
                        "hover:bg-gradient-to-br hover:from-white/60 hover:to-white/40",
                        "dark:hover:from-white/10 dark:hover:to-white/5"
                      )}
                    >
                      <div className={cn(
                        "relative w-12 h-12 sm:w-14 sm:h-14 rounded-md flex-shrink-0",
                        "bg-gradient-to-br from-raycart-accent/15 to-raycart-accent/5",
                        "border border-raycart-accent/30",
                        "flex items-center justify-center",
                        "transition-all duration-300",
                        "group-hover:border-raycart-accent/60 group-hover:shadow-md group-hover:shadow-raycart-accent/20",
                        "dark:bg-gradient-to-br dark:from-raycart-accent/8 dark:to-raycart-accent/0"
                      )}>
                        <img
                          src={`/icons/${skill.iconName}.svg`}
                          alt={skill.name}
                          className="w-6 h-6 sm:w-7 sm:h-7 object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-sm sm:text-base text-raycart-text font-medium group-hover:text-raycart-accent transition-colors flex-1 line-clamp-2">
                        {skill.name}
                      </p>
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
