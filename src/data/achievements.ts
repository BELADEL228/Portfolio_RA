// src/data/achievements.ts
// ────────────────────────────────────────────────────────────────
// Fichier data-driven pour les distinctions, prix, finalistes et rôles notables
// Ajoute/modifie UNIQUEMENT dans le tableau achievements[]
// ────────────────────────────────────────────────────────────────

export interface Achievement {
  id: string;
  title: string;
  year: string;
  description: string;
  type: "prize" | "finalist" | "leadership" | "community";
  rank?: string;              // ex: "3ᵉ prix", "Finaliste"
  link?: string;
  featured?: boolean;
}

export const achievements: Achievement[] = [
  {
    id: "prix-pilote-du-futur",
    title: "Prix du Pilote du Futur – Lauréat Or",
    year: "2025",
    description: "Récompensé lors du Symposium sur la sécurité aérienne à Lomé pour un projet ou une contribution remarquable dans le domaine aéronautique et innovation.",
    type: "prize",
    rank: "1er prix (Or)",
    link: "https://univ-lome.tg/remise-de-prix-aux-laureats-de-lhackathon-et-du-concours-pilote-du-futur-a-luniversite-de-lome/",
    featured: true,
  },
  {
    id: "prix-dessin-violence",
    title: "3ᵉ Prix du Concours de Dessin – Lutte contre la violence",
    year: "2020",
    description: "Troisième prix (médaille d'or catégorie) lors de la 1ʳᵉ édition du jeu-concours de dessin de la Région Centrale sur le thème de la lutte contre la violence.",
    type: "prize",
    rank: "3ᵉ prix",
    link: "https://atop.tg/1ere-edition-du-jeu-concours-de-dessin-de-la-region-centrale-mlle-padomnawe-leleng-claire-remporte-le-1er-prix/",
  },
  {
    id: "finaliste-mutilation-genitale",
    title: "Finaliste – Concours sur la Mutilation Génitale Féminine",
    year: "2019",
    description: "Sélectionné parmi les finalistes du concours organisé à Sokodé sur la sensibilisation et la lutte contre les mutilations génitales féminines.",
    type: "finalist",
  },
  {
    id: "finaliste-concours-mathematiques",
    title: "Finaliste – Concours de Mathématiques",
    year: "2021",
    description: "Finaliste du concours de mathématiques organisé à Sokodé, démontrant d'excellentes compétences en résolution de problèmes mathématiques.",
    type: "finalist",
  },
  {
    id: "lead-msa-togo",
    title: "Lead – Microsoft Student Ambassadors Togo",
    year: "2025 – Aujourd'hui",
    description: "Leadership national de la communauté MSA Togo : organisation d'événements, animation, accompagnement des membres et promotion des technologies Microsoft.",
    type: "leadership",
    featured: true,
  },
  {
    id: "membre-gdg-lome",
    title: "Membre Actif & Volontaire – GDG Lomé",
    year: "2024 – Aujourd'hui",
    description: "Participation régulière et volontariat aux activités du Google Developer Group Lomé : meetups, workshops, conférences et soutien communautaire.",
    type: "community",
  },
];