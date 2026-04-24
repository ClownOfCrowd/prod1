"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, I18nDictionary, Language } from "@/lib/i18n";

const LANGUAGE_KEY = "arcstone_lang";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: I18nDictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const fromStorage = window.localStorage.getItem(LANGUAGE_KEY);
  if (fromStorage === "en" || fromStorage === "ru" || fromStorage === "es") {
    return fromStorage;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith("ru")) return "ru";
  if (browserLanguage.startsWith("es")) return "es";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => detectLanguage());

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: dictionaries[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}
