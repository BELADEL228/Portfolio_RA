// src/features/achievements/AchievementsSection.tsx
"use client";

import { motion } from "framer-motion";
import { Award, Medal, Star, Users } from "lucide-react";
import { achievements, Achievement } from "@/data/achievements";
import { cn } from "@/lib/utils";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-raycart-navy/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Distinctions & Engagements</h2>
          <p className="text-raycart-muted text-lg max-w-3xl mx-auto">
            Reconnaissances académiques, artistiques, techniques et leadership communautaire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 border border-raycart-card/30 hover:border-raycart-accent/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {ach.type === "prize" && <Award className="text-raycart-accent" size={32} />}
                  {ach.type === "finalist" && <Medal className="text-amber-400" size={32} />}
                  {ach.type === "leadership" && <Star className="text-raycart-highlight" size={32} />}
                  {ach.type === "community" && <Users className="text-raycart-accent" size={32} />}
                  <div>
                    <h3 className="text-xl font-bold text-raycart-text group-hover:text-raycart-accent transition-colors">
                      {ach.title}
                    </h3>
                    <p className="text-raycart-muted">{ach.year}</p>
                  </div>
                </div>

                {ach.rank && (
                  <span className="px-4 py-2 text-sm font-semibold rounded-full bg-raycart-accent/20 text-raycart-accent border border-raycart-accent/30">
                    {ach.rank}
                  </span>
                )}
              </div>

              <p className="text-raycart-muted mb-6">{ach.description}</p>

              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-raycart-accent hover:text-raycart-highlight transition-colors text-sm font-medium"
                >
                  Voir la source <span aria-hidden="true">→</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}