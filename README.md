# Raycart Portfolio (Next.js)

Portfolio moderne construit avec **Next.js (App Router)**, **TailwindCSS**, **Framer Motion** et une UI “glass”.

## Fonctionnalités

- **Thème clair / sombre**
  - Bascule via un bouton dans la navbar
  - Persistance via `localStorage` (`theme`)
  - Palette “raycart” pilotée par des variables CSS (`--raycart-*`)
- **Multi-langues (i18n) + RTL**
  - Langues: **FR**, **EN**, **AR**, **JA**, **DE**, **RU**
  - Persistance via `localStorage` (`locale`)
  - **RTL automatique** pour l’arabe (`<html dir="rtl">`)
- **Sections**
  - Hero, About, Skills, Projects, Experience, Achievements, Contact
- **Animations**
  - Animations d’entrée et transitions avec **Framer Motion**

## Stack

- **Next.js** (App Router)
- **React**
- **TailwindCSS** (+ `tailwindcss-animate`)
- **Framer Motion**
- **Lucide Icons**

## Démarrage rapide

### Prérequis

- Node.js récent (recommandé: Node 20+)
- npm (ou yarn / pnpm)

### Installation

```bash
npm install
```

### Lancer en mode dev

```bash
npm run dev
```

Puis ouvre:

- http://localhost:3000

## Scripts

```bash
npm run dev      # serveur de développement
npm run build    # build production
npm run start    # démarrer le build en production
npm run lint     # lint (nécessite ESLint installé)
```

Note: si `next build` affiche “ESLint must be installed…”, installe ESLint:

```bash
npm i -D eslint
```

## Structure du projet

```text
src/
  app/
    layout.tsx            # layout racine
    page.tsx              # page principale (sections)
    globals.css           # styles globaux + variables CSS (thèmes)
    providers.tsx         # Theme + i18n (t(key), locale, RTL)
  components/
    Navbar.tsx            # navigation + switch thème + select langue
    Footer.tsx
    ui/                   # composants UI (button, input, textarea...)
  features/
    hero/HeroSection.tsx
    about/AboutSection.tsx
    skills/SkillsSection.tsx
    projects/ProjectsSection.tsx
    experience/ExperienceSection.tsx
    achievements/AchievementsSection.tsx
    contact/ContactSection.tsx
  data/
  lib/
```

## Thème (clair / sombre)

- Le thème est appliqué en ajoutant/supprimant la classe **`dark`** sur `<html>`.
- Les couleurs `raycart.*` utilisent des **variables CSS** définies dans:
  - `src/app/globals.css` (`:root` pour clair, `.dark` pour sombre)
- La config Tailwind se trouve dans:
  - `tailwind.config.ts`

## Langues (i18n) + RTL

Les traductions sont centralisées dans:

- `src/app/providers.tsx` → objet `translations`

### Ajouter / modifier une traduction

- Ajoute une clé (ex: `"about.title"`) dans chaque langue.
- Dans un composant, utilise:

```ts
const { t } = useI18n();
t("about.title");
```

### RTL (arabe)

- Quand `locale === "ar"`, on applique automatiquement:
  - `html.lang = "ar"`
  - `html.dir = "rtl"`

## Déploiement

### Vercel (recommandé)

1. Push le repo sur GitHub/GitLab
2. Importe le projet sur Vercel
3. Build command: `npm run build`
4. Output: géré automatiquement par Next.js

### Autres plateformes

- Build: `npm run build`
- Start: `npm run start`

## Personnalisation

- Texte/sections: `src/features/**`
- Navigation: `src/components/Navbar.tsx`
- Couleurs: `src/app/globals.css` (variables `--raycart-*`)
- Traductions: `src/app/providers.tsx`

## Licence

Projet portfolio — adapte la licence selon ton besoin.
