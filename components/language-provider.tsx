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

function isLanguage(value: string | undefined): value is Language {
  return value === "en" || value === "ru" || value === "es";
}

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>(
    isLanguage(initialLanguage) ? initialLanguage : "en"
  );

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_KEY, language);
    document.cookie = `${LANGUAGE_KEY}=${language}; path=/; max-age=31536000; samesite=lax`;
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
