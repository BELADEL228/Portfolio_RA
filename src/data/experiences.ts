// src/data/experiences.ts
// ────────────────────────────────────────────────────────────────
// Fichier data-driven pour TOUTES les expériences professionnelles,
// rôles associatifs, leadership communautaire, etc.
// Ajoute/modifie UNIQUEMENT dans le tableau experiences[]
// ────────────────────────────────────────────────────────────────

export interface Experience {
  id: string;                     // slug-friendly
  title: string;                  // poste / rôle principal
  organization: string;           // entreprise / orga / communauté
  period: string;                 // ex: "Février 2025 – Aujourd'hui"
  location?: string;              // optionnel
  description: string[];          // points clés (bullet points)
  technologies?: string[];        // si pertinent (ex: outils utilisés)
  type: "professional" | "community" | "leadership" | "volunteer" | "other";
  featured?: boolean;             // pour mettre en avant sur la page d'accueil
  link?: string;                  // lien LinkedIn, article, etc.
}

export const experiences: Experience[] = [
  {
    id: "founder-ijeaf",
    title: "Fondateur et CEO – IJEAF",
    organization: "IJEAF",
    period: "Février 2025 – Aujourd'hui",
    location: "Lomé, Togo",
    description: [
      "Fondateur et responsable IT d'une plateforme orientée solutions numériques innovantes",
      "Pilotage complet du produit : vision, roadmap, priorisation des fonctionnalités",
      "Coordination technique, structuration du produit et gestion des priorités",
      "Amélioration continue de l'expérience utilisateur et alignement sur les besoins réels",
    ],
    technologies: ["Flutter", "FastAPI", "Product Management"],
    type: "professional",
    featured: true,
  },
  {
    id: "lead-msa-togo",
    title: "Lead – Microsoft Student Ambassadors",
    organization: "MSA Togo",
    period: "2025 – Aujourd'hui",
    location: "Togo",
    description: [
      "Lead national de la communauté MSA Togo",
      "Organisation, coordination et animation d'activités autour des technologies Microsoft",
      "Planification d'événements, gestion d'équipes et accompagnement des membres",
      "Promotion de l'innovation numérique et des technologies cloud Microsoft",
    ],
    technologies: ["Microsoft Azure", "Community Management", "Event Planning"],
    type: "leadership",
    featured: true,
  },
  {
    id: "lead-msa-ul",
    title: "Lead – Microsoft Student Ambassadors UL",
    organization: "MSA Université de Lomé",
    period: "2024 – Aujourd'hui",
    location: "Université de Lomé, Togo",
    description: [
      "Animation et coordination d'une communauté technologique étudiante",
      "Organisation d'activités, événements et sessions de partage technique",
      "Collaboration avec étudiants, partenaires et intervenants externes",
      "Suivi opérationnel et animation de la communauté",
    ],
    type: "leadership",
    featured: true,
  },
  {
    id: "dev-mobile-ijeaf",
    title: "Développeur Mobile",
    organization: "IJEAF",
    period: "2024 – Aujourd'hui",
    description: [
      "Développement de la plateforme mobile en Flutter (cross-platform)",
      "Conception d'interfaces utilisateur modernes et intuitives",
      "Intégration de fonctionnalités, gestion d'état (GetX), correction de bugs",
      "Optimisation des performances et de la stabilité de l'application",
    ],
    technologies: ["Flutter", "Dart", "GetX"],
    type: "professional",
  },
  {
    id: "vice-president-club-genie-info",
    title: "Vice-Président",
    organization: "Club Génie Informatique – Université de Lomé",
    period: "Septembre 2024 – Aujourd'hui",
    description: [
      "Responsable de la planification stratégique et du suivi opérationnel",
      "Coordination des projets techniques et animation de la communauté étudiante",
      "Mobilisation des membres et organisation d'activités régulières",
    ],
    type: "leadership",
  },
  {
    id: "ambassadeur-miabe-hackathon",
    title: "Ambassadeur Officiel",
    organization: "Miabé Hackathon",
    period: "Décembre 2024 – Aujourd'hui",
    description: [
      "Représentant officiel du hackathon au sein de l'université",
      "Promotion de l'événement et mobilisation massive des étudiants",
      "Encouragement à la participation et à l'innovation technologique",
    ],
    type: "volunteer",
  },
  {
    id: "gdg-lome",
    title: "Membre & Volontaire Actif",
    organization: "GDG Lomé (Google Developer Group)",
    period: "2024 – Aujourd'hui",
    description: [
      "Participation active aux événements et activités du GDG Lomé",
      "Volontariat lors des meetups, workshops et conférences",
      "Contribution à la communauté tech locale",
    ],
    type: "community",
  },
];

export const featuredExperiences = experiences.filter(e => e.featured);