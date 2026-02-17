export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  technologies: string[];
  category: "mobile" | "backend" | "ai" | "web" | "contribution" | "other";
  date: string;
  github?: string;
  live?: string;
  featured: boolean;
  isPrivate?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies?: string[];
}

export interface Skill {
  name: string;
  level: number; // 1 à 100
  category: "frontend" | "mobile" | "backend" | "ai" | "cloud" | "tools";
}

export interface Achievement {
  id: string;
  title: string;
  year: string;
  description: string;
  link?: string;
  type: "prize" | "finalist" | "role";
}