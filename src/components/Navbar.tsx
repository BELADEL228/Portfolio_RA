// src/components/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, MoreVertical } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { parseLocale, useI18n, useTheme } from "@/app/providers";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useI18n();

  const navLinks = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.about", href: "#about" },
    { key: "nav.skills", href: "#skills" },
    { key: "nav.projects", href: "#projects" },
    { key: "nav.experience", href: "#experience" },
    { key: "nav.achievements", href: "#achievements" },
    { key: "nav.contact", href: "#contact" },
  ] as const;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setIsSettingsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
          <Link href="/" className="flex items-center gap-3 -ml-8">
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
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-raycart-muted hover:text-raycart-accent transition-all duration-300 font-medium relative group active:scale-95"
              >
                {t(link.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-raycart-accent group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            ))}

            {/* Settings Dropdown */}
            <div className="relative" ref={settingsRef}>
              <button
                type="button"
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-raycart-card/40 bg-raycart-card/30 hover:bg-raycart-card/50 transition-colors"
                aria-label="Settings"
              >
                <MoreVertical className="text-raycart-accent" size={18} />
              </button>

              <AnimatePresence>
                {isSettingsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-xl border border-raycart-card/40 bg-raycart-dark/95 backdrop-blur-xl shadow-lg overflow-hidden"
                  >
                    {/* Theme Toggle */}
                    <div className="p-4 border-b border-raycart-card/20">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-raycart-text">
                          {theme === "dark" ? "Dark" : "Light"}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            toggleTheme();
                            setIsSettingsOpen(false);
                          }}
                          className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-raycart-card/40 bg-raycart-card/30 hover:bg-raycart-card/50 transition-colors"
                          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                        >
                          {theme === "dark" ? <Sun className="text-raycart-accent" size={16} /> : <Moon className="text-raycart-accent" size={16} />}
                        </button>
                      </div>
                    </div>

                    {/* Language Selector */}
                    <div className="p-4">
                      <p className="text-xs font-medium text-raycart-muted mb-3">Language</p>
                      <div className="grid grid-cols-3 gap-2">
                        {["fr", "en", "ar", "ja", "de", "ru"].map((lang) => (
                          <button
                            key={lang}
                            onClick={() => {
                              setLocale(parseLocale(lang));
                              setIsSettingsOpen(false);
                            }}
                            className={cn(
                              "py-2 rounded-lg text-xs font-medium transition-all",
                              locale === lang
                                ? "bg-raycart-accent text-raycart-dark"
                                : "bg-raycart-card/30 text-raycart-muted hover:text-raycart-accent"
                            )}
                          >
                            {lang.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Settings Dropdown for Mobile */}
            <div className="relative" ref={settingsRef}>
              <button
                type="button"
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-raycart-card/40 bg-raycart-card/30"
                aria-label="Settings"
              >
                <MoreVertical className="text-raycart-accent" size={18} />
              </button>

              <AnimatePresence>
                {isSettingsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: -10, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-44 rounded-xl border border-raycart-card/40 bg-raycart-dark/95 backdrop-blur-xl shadow-lg overflow-hidden"
                  >
                    {/* Theme Toggle */}
                    <div className="p-4 border-b border-raycart-card/20">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-raycart-text">
                          {theme === "dark" ? "Dark" : "Light"}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            toggleTheme();
                            setIsSettingsOpen(false);
                          }}
                          className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-raycart-card/40 bg-raycart-card/30 hover:bg-raycart-card/50 transition-colors"
                          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                        >
                          {theme === "dark" ? <Sun className="text-raycart-accent" size={16} /> : <Moon className="text-raycart-accent" size={16} />}
                        </button>
                      </div>
                    </div>

                    {/* Language Selector */}
                    <div className="p-4">
                      <p className="text-xs font-medium text-raycart-muted mb-3">Language</p>
                      <div className="grid grid-cols-3 gap-2">
                        {["fr", "en", "ar", "ja", "de", "ru"].map((lang) => (
                          <button
                            key={lang}
                            onClick={() => {
                              setLocale(parseLocale(lang));
                              setIsSettingsOpen(false);
                            }}
                            className={cn(
                              "py-2 rounded-lg text-xs font-medium transition-all",
                              locale === lang
                                ? "bg-raycart-accent text-raycart-dark"
                                : "bg-raycart-card/30 text-raycart-muted hover:text-raycart-accent"
                            )}
                          >
                            {lang.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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