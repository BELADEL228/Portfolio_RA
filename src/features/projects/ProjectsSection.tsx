// src/features/images/ProjectsSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import { cn } from "@/lib/utils";
import { useI18n } from "@/app/providers";

type Filter = "all" | "mobile" | "backend" | "ai" | "contribution" | "algorithmique" | "featured";

export default function ProjectsSection() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "featured") return p.featured;
    return p.category === filter;
  });

  const filters: { label: string; value: Filter }[] = [
    { label: t("projects.filter.all"), value: "all" },
    { label: t("projects.filter.featured"), value: "featured" },
    { label: "Mobile", value: "mobile" },
    { label: "Backend", value: "backend" },
    { label: "AI / IA", value: "ai" },
    { label: "Contributions", value: "contribution" },
    { label: "Algo", value: "algorithmique" },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 lg:py-32 relative">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-raycart-navy/10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Titre section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="section-title mb-4">{t("projects.title")}</h2>
          <p className="text-raycart-muted text-lg max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={cn(
                "px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
                filter === f.value
                  ? "bg-raycart-accent text-raycart-dark shadow-lg shadow-raycart-accent/30"
                  : "bg-raycart-card/60 text-raycart-muted hover:bg-raycart-card hover:text-raycart-text border border-raycart-card/40"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 sm:py-20 text-raycart-muted">
            {t("projects.filter.none")}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}