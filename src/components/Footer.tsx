// src/components/Footer.tsx
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-raycart-navy/80 border-t border-raycart-card/30 py-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Colonne 1 – Nom & Tagline */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-raycart-text">ASSOUN</span>
                <span className="text-raycart-accent">.dev</span>
              </span>
            </Link>
            <p className="text-raycart-muted text-sm">
              Product Manager IT | Développeur Fullstack & IA  
              Création de solutions mobiles, backends scalables et produits centrés utilisateur.
            </p>
          </div>

          {/* Colonne 2 – Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold text-raycart-text mb-6">Navigation</h4>
            <ul className="space-y-3 text-raycart-muted">
              <li>
                <Link href="#projects" className="hover:text-raycart-accent transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-raycart-accent transition-colors">
                  Expérience
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-raycart-accent transition-colors">
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="#achievements" className="hover:text-raycart-accent transition-colors">
                  Distinctions
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-raycart-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 – Réseaux & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-raycart-text mb-6">Contact & Réseaux</h4>
            <div className="flex justify-center md:justify-start gap-6 mb-6">
              <a
                href="https://github.com/HordRicJr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-raycart-muted hover:text-raycart-accent transition-colors transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/hordric"
                target="_blank"
                rel="noopener noreferrer"
                className="text-raycart-muted hover:text-raycart-accent transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:assounrodrigue5@gmail.com"
                className="text-raycart-muted hover:text-raycart-accent transition-colors transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
            </div>

            <p className="text-sm text-raycart-muted">
              Lomé, Togo • {currentYear} © ASSOUN Kodjovi Rodrigue  
              <span className="block mt-2 text-xs">
                Made with passion & code in Maritime, TG
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}