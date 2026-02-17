"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_STORAGE_KEY = "theme";

function applyThemeToDom(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  return "dark";
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // ignore
    }
    applyThemeToDom(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  useEffect(() => {
    applyThemeToDom(theme);
  }, [theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export type Locale = "fr" | "en" | "ar" | "ja" | "de" | "ru";

const supportedLocales: Locale[] = ["fr", "en", "ar", "ja", "de", "ru"];

export function parseLocale(value: string): Locale {
  if ((supportedLocales as string[]).includes(value)) return value as Locale;
  return "fr";
}

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<I18nContextValue | null>(null);

const LOCALE_STORAGE_KEY = "locale";

const translations: Record<Locale, Record<string, string>> = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.experience": "Expérience",
    "nav.achievements": "Distinctions",
    "nav.contact": "Contact",
    "about.title": "À propos",
    "about.subtitle":
      "Je construis des produits utiles et élégants, avec une attention forte à l’expérience utilisateur et à la performance.\nEntre produit, engineering et IA, je fais le lien pour livrer vite et bien.",
    "about.card.0.title": "Product & stratégie",
    "about.card.0.desc": "Discovery, cadrage, priorisation, rédaction des specs et coordination pour maximiser l’impact.",
    "about.card.1.title": "Engineering fullstack",
    "about.card.1.desc": "Mobile, backend et architecture: je conçois des systèmes fiables, maintenables et scalables.",
    "about.card.2.title": "IA pragmatique",
    "about.card.2.desc": "J’intègre l’IA quand elle apporte de la valeur: automatisation, assistants, NLP et analytics.",
    "hero.badge": "Product Manager IT & Développeur Fullstack + IA",
    "hero.tagline":
      "Je transforme des besoins complexes en produits numériques performants, scalables et centrés utilisateur.\nDéveloppement mobile · Backend · IA · Product Management",
    "hero.cta.projects": "Voir mes projets",
    "hero.cta.contact": "Me contacter",
    "hero.more": "Découvrir plus",
    "projects.title": "Mes Projets",
    "projects.subtitle":
      "Des applications mobiles innovantes aux backends scalables et projets IA – voici un aperçu de mes réalisations récentes.",
    "projects.filter.all": "Tous",
    "projects.filter.featured": "À la une",
    "projects.filter.none": "Aucun projet dans cette catégorie pour le moment.",
    "contact.title": "Contactez-moi",
    "contact.subtitle":
      "Intéressé par une collaboration, un projet mobile/IA/backend ou simplement une discussion tech ?\nJe suis ouvert aux opportunités. Écrivez-moi !",
    "contact.keep_in_touch": "Restons en contact",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.full_name": "Nom complet",
    "contact.full_name_ph": "Votre nom",
    "contact.email_label": "Email",
    "contact.email_ph": "votre@email.com",
    "contact.subject": "Sujet",
    "contact.subject_ph": "Ex: Proposition de collaboration IA / Mobile",
    "contact.message": "Message",
    "contact.message_ph": "Décrivez votre projet ou votre question...",
    "contact.send": "Envoyer le message",
    "contact.response_time": "Je réponds généralement sous 24-48h.",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.achievements": "Achievements",
    "nav.contact": "Contact",
    "about.title": "About",
    "about.subtitle":
      "I build useful, polished products with strong focus on user experience and performance.\nBridging product, engineering, and AI to ship fast and ship right.",
    "about.card.0.title": "Product & strategy",
    "about.card.0.desc": "Discovery, scoping, prioritization, specs, and coordination to maximize impact.",
    "about.card.1.title": "Fullstack engineering",
    "about.card.1.desc": "Mobile, backend, and architecture: I design reliable, maintainable, scalable systems.",
    "about.card.2.title": "Pragmatic AI",
    "about.card.2.desc": "I integrate AI when it adds value: automation, assistants, NLP, and analytics.",
    "hero.badge": "IT Product Manager & Fullstack Developer + AI",
    "hero.tagline":
      "I turn complex needs into high-performing, scalable, user-centered digital products.\nMobile development · Backend · AI · Product Management",
    "hero.cta.projects": "View my projects",
    "hero.cta.contact": "Contact me",
    "hero.more": "Discover more",
    "projects.title": "My Projects",
    "projects.subtitle":
      "From innovative mobile apps to scalable backends and AI projects — here is a selection of my recent work.",
    "projects.filter.all": "All",
    "projects.filter.featured": "Featured",
    "projects.filter.none": "No projects in this category yet.",
    "contact.title": "Contact me",
    "contact.subtitle":
      "Interested in collaborating, a mobile/AI/backend project, or just a tech chat?\nI’m open to opportunities. Write to me!",
    "contact.keep_in_touch": "Let’s stay in touch",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.full_name": "Full name",
    "contact.full_name_ph": "Your name",
    "contact.email_label": "Email",
    "contact.email_ph": "you@email.com",
    "contact.subject": "Subject",
    "contact.subject_ph": "e.g. Collaboration proposal (AI / Mobile)",
    "contact.message": "Message",
    "contact.message_ph": "Describe your project or question...",
    "contact.send": "Send message",
    "contact.response_time": "I usually reply within 24–48 hours.",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "نبذة عني",
    "nav.projects": "المشاريع",
    "nav.experience": "الخبرة",
    "nav.achievements": "الإنجازات",
    "nav.contact": "تواصل",
    "about.title": "نبذة عني",
    "about.subtitle":
      "أبني منتجات مفيدة وأنيقة مع تركيز قوي على تجربة المستخدم والأداء.\nأصل بين المنتج والهندسة والذكاء الاصطناعي لتسليم سريع وجودة عالية.",
    "about.card.0.title": "المنتج والاستراتيجية",
    "about.card.0.desc": "اكتشاف الاحتياج، تحديد النطاق، ترتيب الأولويات، كتابة المواصفات والتنسيق لتحقيق أفضل أثر.",
    "about.card.1.title": "هندسة فل ستاك",
    "about.card.1.desc": "موبايل وباكند ومعمارية: أصمم أنظمة موثوقة وقابلة للصيانة والتوسع.",
    "about.card.2.title": "ذكاء اصطناعي عملي",
    "about.card.2.desc": "أدمج الذكاء الاصطناعي عندما يضيف قيمة: أتمتة، مساعدين، معالجة لغة، وتحليلات.",
    "hero.badge": "مدير منتج تقني ومطوّر فل ستاك + ذكاء اصطناعي",
    "hero.tagline":
      "أحوّل الاحتياجات المعقّدة إلى منتجات رقمية عالية الأداء وقابلة للتوسّع ومركّزة على المستخدم.\nتطوير تطبيقات · باكند · ذكاء اصطناعي · إدارة المنتج",
    "hero.cta.projects": "عرض مشاريعي",
    "hero.cta.contact": "تواصل معي",
    "hero.more": "اكتشف المزيد",
    "projects.title": "مشاريعي",
    "projects.subtitle":
      "من تطبيقات الهاتف المبتكرة إلى باكند قابل للتوسّع ومشاريع ذكاء اصطناعي — إليك لمحة عن أعمالي الأخيرة.",
    "projects.filter.all": "الكل",
    "projects.filter.featured": "مميّز",
    "projects.filter.none": "لا توجد مشاريع في هذه الفئة حالياً.",
    "contact.title": "تواصل معي",
    "contact.subtitle":
      "مهتم بالتعاون أو مشروع (موبايل/ذكاء اصطناعي/باكند) أو مجرد نقاش تقني؟\nأنا متاح للفرص. اكتب لي!",
    "contact.keep_in_touch": "لنحافظ على التواصل",
    "contact.email": "البريد الإلكتروني",
    "contact.linkedin": "لينكدإن",
    "contact.github": "جيت هاب",
    "contact.full_name": "الاسم الكامل",
    "contact.full_name_ph": "اسمك",
    "contact.email_label": "البريد الإلكتروني",
    "contact.email_ph": "you@email.com",
    "contact.subject": "الموضوع",
    "contact.subject_ph": "مثال: اقتراح تعاون (ذكاء اصطناعي / موبايل)",
    "contact.message": "الرسالة",
    "contact.message_ph": "صف مشروعك أو سؤالك...",
    "contact.send": "إرسال الرسالة",
    "contact.response_time": "عادةً أرد خلال 24–48 ساعة.",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.about": "概要",
    "nav.projects": "プロジェクト",
    "nav.experience": "経験",
    "nav.achievements": "実績",
    "nav.contact": "お問い合わせ",
    "about.title": "概要",
    "about.subtitle":
      "ユーザー体験とパフォーマンスにこだわり、役に立つ洗練されたプロダクトを作ります。\nプロダクト・エンジニアリング・AIの架け橋となり、速く正しく届けます。",
    "about.card.0.title": "プロダクト/戦略",
    "about.card.0.desc": "ディスカバリー、スコーピング、優先順位付け、仕様作成、推進で成果を最大化します。",
    "about.card.1.title": "フルスタック開発",
    "about.card.1.desc": "モバイル/バックエンド/設計まで、信頼性が高く拡張しやすいシステムを構築します。",
    "about.card.2.title": "実践的なAI",
    "about.card.2.desc": "価値が出る場面でAIを導入します：自動化、アシスタント、NLP、分析など。",
    "hero.badge": "ITプロダクトマネージャー & フルスタック開発 + AI",
    "hero.tagline":
      "複雑なニーズを、高性能でスケーラブル、ユーザー中心のデジタルプロダクトへ変換します。\nモバイル開発 · バックエンド · AI · プロダクトマネジメント",
    "hero.cta.projects": "プロジェクトを見る",
    "hero.cta.contact": "連絡する",
    "hero.more": "もっと見る",
    "projects.title": "プロジェクト",
    "projects.subtitle":
      "革新的なモバイルアプリからスケーラブルなバックエンド、AIプロジェクトまで — 最近の制作物をご紹介します。",
    "projects.filter.all": "すべて",
    "projects.filter.featured": "注目",
    "projects.filter.none": "このカテゴリのプロジェクトはまだありません。",
    "contact.title": "お問い合わせ",
    "contact.subtitle":
      "コラボやモバイル/AI/バックエンド案件、技術相談などお気軽にご連絡ください。\n新しい機会にオープンです。",
    "contact.keep_in_touch": "連絡先",
    "contact.email": "メール",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.full_name": "お名前",
    "contact.full_name_ph": "お名前",
    "contact.email_label": "メール",
    "contact.email_ph": "you@email.com",
    "contact.subject": "件名",
    "contact.subject_ph": "例: コラボ提案（AI / モバイル）",
    "contact.message": "メッセージ",
    "contact.message_ph": "内容をご記入ください...",
    "contact.send": "送信",
    "contact.response_time": "通常24〜48時間以内に返信します。",
  },
  de: {
    "nav.home": "Start",
    "nav.about": "Über mich",
    "nav.projects": "Projekte",
    "nav.experience": "Erfahrung",
    "nav.achievements": "Erfolge",
    "nav.contact": "Kontakt",
    "about.title": "Über mich",
    "about.subtitle":
      "Ich baue nützliche, hochwertige Produkte mit starkem Fokus auf User Experience und Performance.\nIch verbinde Produkt, Engineering und KI, um schnell und sauber zu liefern.",
    "about.card.0.title": "Produkt & Strategie",
    "about.card.0.desc": "Discovery, Scoping, Priorisierung, Spezifikationen und Koordination für maximalen Impact.",
    "about.card.1.title": "Fullstack Engineering",
    "about.card.1.desc": "Mobile, Backend und Architektur: robuste, wartbare und skalierbare Systeme.",
    "about.card.2.title": "Pragmatische KI",
    "about.card.2.desc": "KI dort einsetzen, wo sie Mehrwert bringt: Automatisierung, Assistenten, NLP und Analytics.",
    "hero.badge": "IT Product Manager & Fullstack-Entwickler + KI",
    "hero.tagline":
      "Ich verwandle komplexe Anforderungen in leistungsstarke, skalierbare und nutzerzentrierte digitale Produkte.\nMobile · Backend · KI · Product Management",
    "hero.cta.projects": "Meine Projekte",
    "hero.cta.contact": "Kontakt",
    "hero.more": "Mehr entdecken",
    "projects.title": "Meine Projekte",
    "projects.subtitle":
      "Von innovativen Mobile-Apps über skalierbare Backends bis hin zu KI-Projekten — hier ein Auszug meiner aktuellen Arbeiten.",
    "projects.filter.all": "Alle",
    "projects.filter.featured": "Highlights",
    "projects.filter.none": "Aktuell keine Projekte in dieser Kategorie.",
    "contact.title": "Kontakt",
    "contact.subtitle":
      "Interesse an Zusammenarbeit, einem Mobile/KI/Backend-Projekt oder einem Tech-Talk?\nIch bin offen für neue Möglichkeiten. Schreib mir!",
    "contact.keep_in_touch": "In Kontakt bleiben",
    "contact.email": "E-Mail",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.full_name": "Vollständiger Name",
    "contact.full_name_ph": "Dein Name",
    "contact.email_label": "E-Mail",
    "contact.email_ph": "you@email.com",
    "contact.subject": "Betreff",
    "contact.subject_ph": "z. B. Kooperationsanfrage (KI / Mobile)",
    "contact.message": "Nachricht",
    "contact.message_ph": "Beschreibe dein Projekt oder deine Frage...",
    "contact.send": "Nachricht senden",
    "contact.response_time": "Ich antworte meist innerhalb von 24–48 Stunden.",
  },
  ru: {
    "nav.home": "Главная",
    "nav.about": "Обо мне",
    "nav.projects": "Проекты",
    "nav.experience": "Опыт",
    "nav.achievements": "Достижения",
    "nav.contact": "Контакты",
    "about.title": "Обо мне",
    "about.subtitle":
      "Я создаю полезные и аккуратные продукты с фокусом на UX и производительность.\nСоединяю продукт, инженеринг и AI, чтобы быстро и качественно доставлять результат.",
    "about.card.0.title": "Продукт и стратегия",
    "about.card.0.desc": "Discovery, постановка задач, приоритизация, спецификации и координация для максимального эффекта.",
    "about.card.1.title": "Fullstack разработка",
    "about.card.1.desc": "Mobile, backend и архитектура: надёжные, поддерживаемые и масштабируемые системы.",
    "about.card.2.title": "Практичный AI",
    "about.card.2.desc": "Внедряю AI там, где он приносит ценность: автоматизация, ассистенты, NLP и аналитика.",
    "hero.badge": "IT Product Manager и Fullstack-разработчик + AI",
    "hero.tagline":
      "Я превращаю сложные задачи в производительные, масштабируемые и ориентированные на пользователя цифровые продукты.\nМобайл · Бэкенд · AI · Product Management",
    "hero.cta.projects": "Мои проекты",
    "hero.cta.contact": "Связаться",
    "hero.more": "Узнать больше",
    "projects.title": "Мои проекты",
    "projects.subtitle":
      "От инновационных мобильных приложений до масштабируемых бэкендов и AI‑проектов — подборка моих последних работ.",
    "projects.filter.all": "Все",
    "projects.filter.featured": "Избранное",
    "projects.filter.none": "В этой категории пока нет проектов.",
    "contact.title": "Связаться со мной",
    "contact.subtitle":
      "Хотите сотрудничать, обсудить mobile/AI/backend проект или просто поговорить о технологиях?\nЯ открыт к возможностям. Напишите мне!",
    "contact.keep_in_touch": "На связи",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.full_name": "Полное имя",
    "contact.full_name_ph": "Ваше имя",
    "contact.email_label": "Email",
    "contact.email_ph": "you@email.com",
    "contact.subject": "Тема",
    "contact.subject_ph": "Напр.: предложение о сотрудничестве (AI / Mobile)",
    "contact.message": "Сообщение",
    "contact.message_ph": "Опишите ваш проект или вопрос...",
    "contact.send": "Отправить",
    "contact.response_time": "Обычно отвечаю в течение 24–48 часов.",
  },
};

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "fr";

  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored ? parseLocale(stored) : "fr";
}

function applyLocaleToDom(locale: Locale) {
  const root = document.documentElement;
  root.lang = locale;
  root.dir = locale === "ar" ? "rtl" : "ltr";
}

function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    } catch {
      // ignore
    }
    applyLocaleToDom(nextLocale);
  }, []);

  useEffect(() => {
    applyLocaleToDom(locale);
  }, [locale]);

  const t = useCallback(
    (key: string) => {
      return translations[locale]?.[key] ?? translations.fr[key] ?? key;
    },
    [locale]
  );

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t, dir: locale === "ar" ? "rtl" : "ltr" }),
    [locale, setLocale, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
}
