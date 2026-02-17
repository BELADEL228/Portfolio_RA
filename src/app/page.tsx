// src/app/page.tsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/features/hero/HeroSection";
import AboutSection from "@/features/about/AboutSection";
import SkillsSection from "@/features/skills/SkillsSection";
import ProjectsSection from "@/features/projects/ProjectsSection";
import ExperienceSection from "@/features/experience/ExperienceSection";
import AchievementsSection from "@/features/achievements/AchievementsSection";
import ContactSection from "@/features/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <HeroSection />

        {/* About */}
        <AboutSection />

        {/* Compétences */}
        <SkillsSection />

        {/* Projets */}
        <ProjectsSection />

        {/* Expérience */}
        <ExperienceSection />

        {/* Distinctions & Engagements */}
        <AchievementsSection />

        {/* Contact */}
        <ContactSection />
      </main>
    </>
  );
}