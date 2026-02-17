// src/data/skills.ts
// ────────────────────────────────────────────────────────────────
// Fichier central pour les compétences (technique + soft)
// Ajoute/modifie UNIQUEMENT ici
// ────────────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  level: number;           // 0–100
  category: "mobile" | "backend" | "ai" | "cloud-devops" | "tools" | "project-management" | "soft-skills";
  description?: string;    // optionnel, tooltip ou sous-texte
}

export const skills: Skill[] = [
  // Mobile
  { name: "Flutter (Dart)", level: 92, category: "mobile" },
  { name: "Gestion d'état (GetX)", level: 88, category: "mobile" },
  { name: "Android (Java)", level: 78, category: "mobile" },

  // Backend
  { name: "FastAPI (Python)", level: 85, category: "backend" },
  { name: "Spring Boot (Java)", level: 82, category: "backend" },
  { name: "REST API Design", level: 90, category: "backend" },
  { name: "Microservices", level: 75, category: "backend" },

  // IA / ML
  { name: "Hugging Face / Transformers", level: 80, category: "ai" },
  { name: "CLIP (Recherche par image)", level: 78, category: "ai" },
  { name: "Azure AI Services (Speech)", level: 82, category: "ai" },
  { name: "Chatbots & Prompt Engineering", level: 76, category: "ai" },

  // Cloud & DevOps
  { name: "Microsoft Azure (VM, AI)", level: 85, category: "cloud-devops" },
  { name: "Docker & Conteneurisation", level: 80, category: "cloud-devops" },
  { name: "PostgreSQL", level: 82, category: "cloud-devops" },

  // Outils & Autres
  { name: "Git / GitHub (Issues & Projects)", level: 95, category: "tools" },
  { name: "Swagger / OpenAPI", level: 88, category: "tools" },
  { name: "OpenStreetMap", level: 75, category: "tools" },

  // Gestion de projet & Soft skills
  { name: "Méthodes Agiles (Scrum/Kanban)", level: 85, category: "project-management" },
  { name: "Analyse des besoins & Priorisation", level: 88, category: "project-management" },
  { name: "Pilotage de produit numérique", level: 82, category: "project-management" },
  { name: "Travail en équipe & Leadership", level: 90, category: "soft-skills" },
  { name: "Sens de l'initiative", level: 92, category: "soft-skills" },
];