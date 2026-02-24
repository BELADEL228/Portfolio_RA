// src/features/projects/components/ProjectCard.tsx
"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Lock } from "lucide-react";
import Image from "next/image";
import { Project } from "../data/projects";
import { cn, localize } from "@/lib/utils";
import { useI18n } from "@/app/providers";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { locale, t } = useI18n();

  const title = localize(project.title, locale);
  const shortDesc = localize(project.shortDesc, locale);
  const categoryLabel = t(`project.category.${project.category}`) || project.category;

  // Gestion automatique play/pause au hover
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleMouseEnter = () => {
      if (video.paused) {
        video.play().catch(() => {}); // ignore les erreurs autoplay (ex: mobile sans interaction)
      }
    };

    const handleMouseLeave = () => {
      video.pause();
      // Optionnel : remettre au début pour que le hover suivant reparte du début
      // video.currentTime = 0;
    };

    const card = video.closest(".group"); // on attache les events au parent .group
    if (card) {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [project.video]); // re-exécute si la vidéo change

  const hasVideo = !!project.video && !!project.videoType;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -12, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      role="button"
      tabIndex={0}
      aria-label={title}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.();
        }
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl project-card glass cursor-pointer border border-raycart-card/30",
        project.featured && "ring-1 ring-raycart-accent/40 ring-offset-2 ring-offset-raycart-dark"
      )}
      onClick={onClick}
    >
      {/* Conteneur image + vidéo overlay */}
      <div className="relative h-56 md:h-64 lg:h-72 w-full overflow-hidden">
        {/* Vidéo (seulement si existe) */}
        {hasVideo && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="metadata"
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out z-10",
              "opacity-0 group-hover:opacity-100"
            )}
          />
        )}

        {/* Image principale */}
        <Image
          src={project.image}
          alt={title}
          fill
          className={cn(
            "object-cover transition-all duration-700 ease-out z-0",
            hasVideo && "group-hover:opacity-0", // ← l'image disparaît quand vidéo apparaît
            "group-hover:scale-[1.08] group-hover:brightness-110 group-hover:contrast-[1.08]"
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay gradient */}
        <div
          className="
            absolute inset-0 z-20
            bg-gradient-to-t from-black/75 via-black/45 to-transparent/10 
            transition-opacity duration-700 ease-out
            group-hover:opacity-15
          "
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-30">
          {project.featured && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-raycart-accent text-raycart-dark shadow-sm">
              {t("project.badge.featured")}
            </span>
          )}
          {project.isPrivate && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-600/90 text-white flex items-center gap-1 shadow-sm">
              <Lock size={12} /> {t("project.badge.private")}
            </span>
          )}
        </div>

        {/* Info bas */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-30">
          <span className="text-xs uppercase tracking-wider text-white/90 font-medium drop-shadow">
            {categoryLabel} • {project.date}
          </span>
        </div>
      </div>

      {/* Contenu texte (inchangé) */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-white text-raycart-text group-hover:text-raycart-accent transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm md:text-base text-raycart-muted line-clamp-3 min-h-[4rem] md:min-h-[4.5rem] transition-colors duration-300 group-hover:text-raycart-text/90">
          {shortDesc}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-raycart-card text-raycart-text border border-raycart-card/50 transition-colors group-hover:bg-raycart-card/80"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-3 py-1 text-xs rounded-full bg-raycart-card/50 text-raycart-muted">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="flex gap-4 pt-4 opacity-70 group-hover:opacity-100 transition-opacity duration-400">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-raycart-muted hover:text-raycart-accent transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-raycart-muted hover:text-raycart-accent transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Accent bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-raycart-accent to-raycart-highlight opacity-70 group-hover:opacity-100 transition-opacity duration-500 group-hover:h-1.5" />
    </motion.div>
  );
}