// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

// Fonts Google (optimisées par Next.js)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ASSOUN Rodrigue | Product Manager IT & Développeur Fullstack + IA",
  description:
    "Portfolio de ASSOUN Kodjovi Rodrigue – Développeur Mobile (Flutter), Backend (FastAPI, Spring Boot), Intelligence Artificielle, Product Management. Projets innovants, leadership communautaire et distinctions.",
  keywords: [
    "développeur flutter",
    "fastapi",
    "spring boot",
    "intelligence artificielle",
    "product manager",
    "azure",
    "togo",
    "lomé",
    "portfolio dev",
  ],
  authors: [{ name: "ASSOUN Kodjovi Rodrigue", url: "https://github.com/HordRicJr" }],
  creator: "ASSOUN Rodrigue",
  openGraph: {
    title: "ASSOUN Rodrigue – Développeur Fullstack & IA | Togo",
    description:
      "Création de solutions mobiles, backends scalables et produits IA centrés utilisateur. Lead MSA Togo, GDG Lomé, distinctions nationales.",
    url: "https://ton-domaine.com", // ← À remplacer par ton domaine réel
    siteName: "ASSOUN.dev",
    images: [
      {
        url: "/og-image.jpg", // À créer plus tard (1200×630 recommandé)
        width: 1200,
        height: 630,
        alt: "Portfolio ASSOUN Rodrigue – Product Manager & Développeur",
      },
    ],
    locale: "fr_TG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASSOUN Rodrigue | Fullstack & IA Developer",
    description: "Portfolio – Flutter, FastAPI, Azure AI, Product Management",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Préférences couleur de base */}
        <meta name="theme-color" content="#050A14" />
        <meta name="msapplication-TileColor" content="#050A14" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-raycart-dark text-raycart-text selection:bg-raycart-accent/30 selection:text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}