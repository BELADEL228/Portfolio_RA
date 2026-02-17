// src/features/experience/ExperienceSection.tsx
"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Calendar, MapPin } from "lucide-react";
import { experiences, Experience } from "@/data/experiences";
import { cn } from "@/lib/utils";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Fond */}
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
          <h2 className="section-title mb-4">Parcours & Expériences</h2>
          <p className="text-raycart-muted text-lg max-w-3xl mx-auto">
            De la fondation de produits à la direction de communautés tech, en passant par le développement fullstack et IA.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-raycart-accent/20 hidden md:block" />

          <div className="space-y-12 md:space-y-16 lg:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={cn(
                  "flex flex-col md:flex-row items-center gap-6 sm:gap-8 relative",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Carte expérience */}
                <div className="w-full md:w-5/12 glass rounded-2xl p-5 sm:p-6 lg:p-8 border border-raycart-card/30 hover:border-raycart-accent/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-raycart-text mb-1">{exp.title}</h3>
                      <p className="text-raycart-accent font-medium text-sm sm:text-base">{exp.organization}</p>
                    </div>
                    <span className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full bg-raycart-card/70 text-raycart-muted flex items-center gap-2">
                      <Calendar size={14} className="sm:size-16" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 text-raycart-muted text-sm sm:text-base">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-raycart-accent flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-raycart-card/30">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-full bg-raycart-card text-raycart-text border border-raycart-card/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.location && (
                    <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-raycart-muted flex items-center gap-2">
                      <MapPin size={14} className="sm:size-16" />
                      {exp.location}
                    </div>
                  )}
                </div>

                {/* Cercle timeline (desktop) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full bg-raycart-navy border-4 border-raycart-accent z-10">
                  <div className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 rounded-full bg-raycart-accent flex items-center justify-center">
                    {exp.type === "professional" ? (
                      <Briefcase size={14} className="sm:size-16 lg:size-18 text-raycart-dark" />
                    ) : exp.type === "leadership" || exp.type === "community" ? (
                      <Users size={14} className="sm:size-16 lg:size-18 text-raycart-dark" />
                    ) : (
                      <Calendar size={14} className="sm:size-16 lg:size-18 text-raycart-dark" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}