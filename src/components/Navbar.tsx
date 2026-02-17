// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { parseLocale, useI18n, useTheme } from "@/app/providers";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useI18n();

  const navLinks = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.about", href: "#about" },
    { key: "nav.projects", href: "#projects" },
    { key: "nav.experience", href: "#experience" },
    { key: "nav.achievements", href: "#achievements" },
    { key: "nav.contact", href: "#contact" },
  ] as const;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-raycart-dark/80 backdrop-blur-xl border-b border-raycart-card/30" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo / Nom */}
          <Link href="/" className="flex items-center gap-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold tracking-tight"
            >
              <span className="text-raycart-text">ASSOUN</span>
              <span className="text-raycart-accent">.dev</span>
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-raycart-muted hover:text-raycart-accent transition-colors font-medium relative group"
              >
                {t(link.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-raycart-accent transition-all group-hover:w-full" />
              </Link>
            ))}

            <div className="flex items-center gap-3 pl-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-raycart-card/40 bg-raycart-card/30 hover:bg-raycart-card/50 transition-colors"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun className="text-raycart-accent" size={18} /> : <Moon className="text-raycart-accent" size={18} />}
              </button>

              <select
                value={locale}
                onChange={(e) => setLocale(parseLocale(e.target.value))}
                className="h-10 rounded-xl border border-raycart-card/40 bg-raycart-card/30 px-3 text-sm text-raycart-text outline-none hover:bg-raycart-card/50 transition-colors"
                aria-label="Language"
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="ar">AR</option>
                <option value="ja">JA</option>
                <option value="de">DE</option>
                <option value="ru">RU</option>
              </select>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-raycart-card/40 bg-raycart-card/30"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="text-raycart-accent" size={18} /> : <Moon className="text-raycart-accent" size={18} />}
            </button>

            <select
              value={locale}
              onChange={(e) => setLocale(parseLocale(e.target.value))}
              className="h-10 rounded-xl border border-raycart-card/40 bg-raycart-card/30 px-2 text-sm text-raycart-text outline-none"
              aria-label="Language"
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="ar">AR</option>
              <option value="ja">JA</option>
              <option value="de">DE</option>
              <option value="ru">RU</option>
            </select>

            <button
              className="text-raycart-accent p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8 }}
            className="md:hidden overflow-hidden bg-raycart-navy/95 backdrop-blur-xl border-b border-raycart-card/30"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="text-lg text-raycart-text hover:text-raycart-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}