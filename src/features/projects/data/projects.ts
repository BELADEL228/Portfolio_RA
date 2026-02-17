// src/data/projects.ts
// ────────────────────────────────────────────────────────────────
// FICHIER CENTRAL → Ajoute/modifie UNIQUEMENT dans le tableau projects[]
// Tous les projets du CV + ceux mentionnés explicitement + GitHub publics
// ────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  image: string;                  // → /public/images/[nom].jpg ou .png
  technologies: string[];
  category: "mobile" | "backend" | "ai" | "web" | "contribution" | "algorithmique" | "other";
  date: string;
  github?: string;
  live?: string;
  featured?: boolean;
  isPrivate?: boolean;
  video?: string;                 // ← optionnel : URL YouTube embed ou /videos/xxx.mp4
  videoType?: "youtube" | "local" | "vimeo"; // ← optionnel, à préciser si video existe
}

export const projects: Project[] = [
  // ────────────────────────────────────────────────
  // Projets prioritaires (tes mentions spécifiques)
  // ────────────────────────────────────────────────
  {
    id: "raycart",
    title: "Raycart",
    slug: "raycart",
    shortDesc: "Application mobile de location de voitures avec interfaces client et admin complètes.",
    longDesc: "Solution complète de location de véhicules en Java : recherche, réservation, paiement, suivi pour clients + gestion flotte, utilisateurs, statistiques et modération pour administrateurs.",
    image: "/images/raycart.jpg",
    technologies: ["Java", "Android SDK", "SQLite", "Material Design"],
    category: "mobile",
    date: "2025",
    featured: true,
    isPrivate: true,
  },
  {
    id: "super-quiz",
    title: "Super Quiz",
    slug: "super-quiz",
    shortDesc: "Application mobile de quiz éducatif sur l'espace et l'astronomie.",
    longDesc: "Quiz interactif thématique (planètes, missions spatiales, constellations). Scores, niveaux, mode multijoueur local, explications scientifiques détaillées après chaque réponse.",
    image: "/images/super-quiz.jpg",
    technologies: ["Flutter", "Dart", "Firebase", "GetX"],
    category: "mobile",
    date: "2025",
    featured: true,
    isPrivate: true,
  },
  {
    id: "backend-sora",
    title: "Backend Sora",
    slug: "backend-sora",
    shortDesc: "API FastAPI pour interfacer le modèle de génération vidéo Sora via Azure.",
    longDesc: "Backend scalable permettant d'appeler Sora depuis Azure Cloud : gestion des requêtes, files d'attente, stockage temporaire vidéos, authentification et monitoring.",
    image: "/images/sora.jpg",
    technologies: ["FastAPI", "Python", "Azure", "Docker", "PostgreSQL"],
    category: "backend",
    date: "2025",
    featured: true,
    isPrivate: true,
    video: "/videos/Sora.mp4",  
    videoType: "local",
  },
  {
    id: "idile",
    title: "Idile",
    slug: "idile",
    shortDesc: "Application mobile dédiée à la découverte et promotion du patrimoine africain.",
    longDesc: "Exploration immersive du patrimoine culturel, historique et naturel africain : cartographie, fiches détaillées, multimédia, contributions communautaires, mode hors-ligne.",
    image: "/images/idile.jpg",
    technologies: ["Flutter", "Dart", "Firebase", "GetX"],
    category: "mobile",
    date: "2025",
    github: "https://github.com/HordRicJr/Idile",
    featured: true,
    video: "/videos/Idile.mp4",
    videoType: "local",
  },
  {
    id: "vault-007",
    title: "Vault_007",
    slug: "vault-007",
    shortDesc: "Contribution significative à un gestionnaire de mots de passe open-source (Hacktoberfest 2025).",
    longDesc: "Ajout de fonctionnalités sécurité (chiffrement avancé, génération, synchronisation), corrections bugs, tests, documentation et améliorations UX dans un projet communautaire.",
    image: "/images/Vault-007.jpg",
    technologies: ["Dart", "Flutter", "Firebase Auth", "Encryption"],
    category: "contribution",
    date: "2025",
    featured: true,
    isPrivate: true,
  },

  // ────────────────────────────────────────────────
  // Projets issus du CV (développement + expériences)
  // ────────────────────────────────────────────────
  {
    id: "hordvoice",
    title: "HordVoice",
    slug: "hordvoice",
    shortDesc: "Assistant vocal IA avec intégration Azure Speech-to-Text / Text-to-Speech.",
    longDesc: "Application Flutter d'assistant vocal intelligent : reconnaissance vocale, synthèse vocale via Azure AI, Machine Learning, commandes inter-apps, gestion PostgreSQL.",
    image: "/images/hordvoice.jpg",
    technologies: ["Flutter", "Dart", "Azure AI Speech", "PostgreSQL", "GetX"],
    category: "ai",
    date: "Février 2025 – Octobre 2025",
    github: "https://github.com/HordRicJr/HordVoice",
    featured: true,
  },
  {
    id: "hordmaps",
    title: "HordMaps",
    slug: "hordmaps",
    shortDesc: "Application de géolocalisation avec OpenStreetMap et stockage local.",
    longDesc: "Localisation d'écoles, pharmacies, hôpitaux… Recherche intelligente, favoris, mode hors-ligne, stockage local des données pour accès sans connexion.",
    image: "/images/hordmaps.jpg",
    technologies: ["Flutter", "Dart", "OpenStreetMap", "SQLite"],
    category: "mobile",
    date: "2025",
    github: "https://github.com/HordRicJr/HordMaps",
    featured: true,
    video: "/videos/hordmaps.mp4",
    videoType: "local",
  },
  {
    id: "hordweather",
    title: "HordWeather",
    slug: "hordweather",
    shortDesc: "Application Flutter de prévisions météo en temps réel via OpenWeatherMap.",
    longDesc: "Prévisions précises, alertes intelligentes, qualité de l'air, widgets Android, respect de la vie privée, interface moderne et fluide.",
    image: "/images/hordweather.jpg",
    technologies: ["Flutter", "Dart", "OpenWeatherMap API"],
    category: "mobile",
    date: "2024",
    github: "https://github.com/HordRicJr/HordricWeather",
  },
  {
    id: "scai-tutor",
    title: "SCAI Tutor",
    slug: "scai-tutor",
    shortDesc: "Plateforme scolaire mobile pour Indabax avec gestion d'état réactive.",
    longDesc: "Application éducative Flutter pour étudiants : contenu scolaire, navigation optimisée, gestion d'état via GetX, design intuitif et performances élevées.",
    image: "/images/scai-tutor.jpg",
    technologies: ["Flutter", "Dart", "GetX"],
    category: "mobile",
    date: "Février 2025 – Aujourd'hui",
    isPrivate: true,
  },
  {
    id: "ubuntu-aire-lab",
    title: "Ubuntu Aire Lab",
    slug: "ubuntu-aire-lab",
    shortDesc: "Solution de gestion des aires de stationnement aérien (Symposium sécurité aérienne).",
    longDesc: "Backend FastAPI + documentation Swagger, déploiement sur VM Azure pour gérer stationnements lors du symposium à Lomé (décembre 2025).",
    image: "/images/ubuntu-aire-lab.jpg",
    technologies: ["FastAPI", "Python", "Azure VM", "Swagger", "Docker"],
    category: "backend",
    date: "Décembre 2025",
    isPrivate: true,
  },
  {
    id: "recherche-par-image",
    title: "Recherche par Image",
    slug: "recherche-par-image",
    shortDesc: "Modèle de recherche d'images reconfiguré basé sur CLIP (Hugging Face).",
    longDesc: "Reconfiguration et fine-tuning du modèle CLIP, déploiement sur Hugging Face pour recherche visuelle performante et accessible en production.",
    image: "/images/recherche-image.jpg",
    technologies: ["Python", "CLIP", "Hugging Face", "Transformers"],
    category: "ai",
    date: "2025",
    isPrivate: true,
  },
  {
    id: "scholarway",
    title: "Scholarway",
    slug: "scholarway",
    shortDesc: "Plateforme mobile d'orientation scolaire pour nouveaux bacheliers avec IA.",
    longDesc: "Matching intelligent via modèles IA, chatbot d'accompagnement, optimisation algorithmes de recherche, configuration de modèles pour recommandations personnalisées.",
    image: "/images/scholarway.jpg",
    technologies: ["Flutter", "Dart", "IA Matching", "Chatbot"],
    category: "mobile",
    date: "Octobre 2025 – Aujourd'hui",
    isPrivate: true,
  },
  {
    id: "kifabank",
    title: "Kifabank",
    slug: "kifabank",
    shortDesc: "Banque numérique basée sur architecture microservices Spring Boot.",
    longDesc: "Application bancaire scalable : microservices conteneurisés Docker, gestion utilisateurs, transactions, sécurité renforcée, déploiement fluide.",
    image: "/images/kifabank.jpg",
    technologies: ["Spring Boot", "Java", "Docker", "Microservices"],
    category: "backend",
    date: "Mars 2025 – Aujourd'hui",
    isPrivate: true,
  },
  {
    id: "miniprojet-dad",
    title: "MiniProjet DAD",
    slug: "miniprojet-dad",
    shortDesc: "Application distribuée Java EE : conversion devises + filtrage météo.",
    longDesc: "Projet académique distribué : servlets, services back-end, conversion devises temps réel, filtrage données météo, architecture client-serveur.",
    image: "/images/miniprojet-dad.jpg",
    technologies: ["Java EE", "Servlets", "JSP"],
    category: "other",
    date: "Janvier 2026",
    isPrivate: true,
  },

  // ────────────────────────────────────────────────
  // Projets anciens repos (confirmés publics)
  // ────────────────────────────────────────────────
  {
    id: "midounou",
    title: "Midounou",
    slug: "midounou",
    shortDesc: "Application de commande de nourriture (Ayimolou/restaurant) Flutter + Firebase.",
    longDesc: "Menu dynamique, panier, commande en ligne, suivi temps réel, paiements, espace admin restaurant.",
    image: "/images/midounou.jpg",
    technologies: ["Flutter", "Dart", "Firebase", "Firestore", "GetX"],
    category: "mobile",
    date: "Janvier 2025",
    github: "https://github.com/HordRic/Midounou",
  },
  {
    id: "media-appoints",
    title: "MediaAppoints",
    slug: "media-appoints",
    shortDesc: "Application mobile de prise de rendez-vous hospitalier.",
    longDesc: "Choix médecin/spécialité, créneaux, confirmation, rappels push, historique patient.",
    image: "/images/media-appoints.jpg",
    technologies: ["Flutter", "Dart", "Firebase"],
    category: "mobile",
    date: "Octobre 2024",
    isPrivate: true,
  },
  {
    id: "algo-numerique",
    title: "Algorithme Numérique",
    slug: "algo-numerique",
    shortDesc: "Résolution numérique d'équations non linéaires et systèmes linéaires en Python.",
    longDesc: "Implémentations (Gauss, Jacobi, méthodes itératives), visualisation convergence, analyse performance avec NumPy/SciPy.",
    image: "/images/algo-numerique.jpg",
    technologies: ["Python", "NumPy", "SciPy", "Matplotlib"],
    category: "algorithmique",
    date: "2024-2025",
    github: "https://github.com/HordRic/Algorithme_numerique",
    video: "/videos/algo-numerique.mp4",
    videoType: "local",
  },
];

// Helpers pour filtrage rapide
export const featuredProjects = projects.filter(p => p.featured);
export const publicProjects   = projects.filter(p => !p.isPrivate);
export const mobileProjects   = projects.filter(p => p.category === "mobile");