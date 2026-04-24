"use client";

import { languageOptions } from "@/lib/i18n";
import { useI18n } from "@/components/language-provider";

export function LanguageToggle() {
  const { language, setLanguage, t } = useI18n();

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-neutral-900/70 p-1"
      role="radiogroup"
      aria-label={t.languageToggle.ariaLabel}
    >
      {languageOptions.map((option) => {
        const active = option.code === language;
        return (
          <button
            key={option.code}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setLanguage(option.code)}
            className={`min-w-10 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] transition ${
              active
                ? "bg-brand-gold text-neutral-950"
                : "text-neutral-300 hover:text-white"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
