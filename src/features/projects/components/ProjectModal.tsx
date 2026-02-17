// src/features/projects/components/ProjectModal.tsx
"use client";
import { ExternalLink, Github } from "lucide-react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-5xl bg-raycart-navy rounded-2xl overflow-hidden shadow-2xl border border-raycart-card/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-3 bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Vidéo ou placeholder */}
            <div className="aspect-video bg-black">
              {project.video && project.videoType ? (
                project.videoType === "youtube" ? (
                  <iframe
                    src={project.video}
                    title={`Démo ${project.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <video
                    src={project.video}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                )
              ) : (
                <div className="h-full flex items-center justify-center text-raycart-muted text-lg">
                  Pas de vidéo de démo pour ce projet
                </div>
              )}
            </div>

            {/* Contenu */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h2>
              <p className="text-raycart-muted mb-6 text-base md:text-lg leading-relaxed">{project.longDesc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm rounded-full bg-raycart-card text-raycart-text border border-raycart-card/50">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-raycart-accent hover:underline flex items-center gap-2">
                    <Github size={18} /> GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-raycart-accent hover:underline flex items-center gap-2">
                    <ExternalLink size={18} /> Démo live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}