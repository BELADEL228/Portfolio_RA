// src/data/skills.ts
// ────────────────────────────────────────────────────────────────
// Fichier central pour les compétences (technique + soft)
// Ajoute/modifie UNIQUEMENT ici
// ────────────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  level: number;           // 0–100
  category: "mobile" | "backend" | "ai" | "cloud-devops" | "tools" | "project-management" | "soft-skills";
  iconName: string;        // nom du fichier SVG sans extension (ex: "flutter")
  description?: string;    // optionnel, tooltip ou sous-texte
}

export const skills: Skill[] = [
  // Mobile
  { name: "Flutter (Dart)", level: 92, category: "mobile", iconName: "flutter" },
  { name: "Gestion d'état (GetX)", level: 88, category: "mobile", iconName: "getx" },
  { name: "Android (Java)", level: 78, category: "mobile", iconName: "android" },

  // Backend
  { name: "FastAPI (Python)", level: 85, category: "backend", iconName: "fastapi" },
  { name: "Spring Boot (Java)", level: 82, category: "backend", iconName: "springboot" },
  { name: "REST API Design", level: 90, category: "backend", iconName: "api" },
  { name: "Microservices", level: 75, category: "backend", iconName: "microservices" },

  // IA / ML
  { name: "Hugging Face / Transformers", level: 80, category: "ai", iconName: "huggingface" },
  { name: "CLIP (Recherche par image)", level: 78, category: "ai", iconName: "clip" },
  { name: "Azure AI Services (Speech)", level: 82, category: "ai", iconName: "azure-ai" },
  { name: "Chatbots & Prompt Engineering", level: 76, category: "ai", iconName: "chatbot" },

  // Cloud & DevOps
  { name: "Microsoft Azure (VM, AI)", level: 85, category: "cloud-devops", iconName: "azure" },
  { name: "Docker & Conteneurisation", level: 80, category: "cloud-devops", iconName: "docker" },
  { name: "PostgreSQL", level: 82, category: "cloud-devops", iconName: "postgresql" },

  // Outils & Autres
  { name: "Git / GitHub (Issues & Projects)", level: 95, category: "tools", iconName: "github" },
  { name: "Swagger / OpenAPI", level: 88, category: "tools", iconName: "swagger" },
  { name: "OpenStreetMap", level: 75, category: "tools", iconName: "openstreetmap" },

  // Gestion de projet & Soft skills
  { name: "Méthodes Agiles (Scrum/Kanban)", level: 85, category: "project-management", iconName: "agile" },
  { name: "Analyse des besoins & Priorisation", level: 88, category: "project-management", iconName: "analysis" },
  { name: "Pilotage de produit numérique", level: 82, category: "project-management", iconName: "product" },
  { name: "Travail en équipe & Leadership", level: 90, category: "soft-skills", iconName: "teamwork" },
  { name: "Sens de l'initiative", level: 92, category: "soft-skills", iconName: "initiative" },
];