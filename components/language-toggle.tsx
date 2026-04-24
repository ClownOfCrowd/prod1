"use client";

import { motion } from "framer-motion";
import { languageOptions } from "@/lib/i18n";
import { useI18n } from "@/components/language-provider";

interface LanguageToggleProps {
  compact?: boolean;
}

export function LanguageToggle({ compact = false }: LanguageToggleProps) {
  const { language, setLanguage, t } = useI18n();
  const activeIndex = Math.max(
    0,
    languageOptions.findIndex((option) => option.code === language)
  );

  return (
    <div
      className={`relative inline-grid grid-cols-3 items-center rounded-full border border-white/20 bg-neutral-900/85 p-1 shadow-[0_8px_24px_rgba(0,0,0,0.35)] ${compact ? "min-w-[152px]" : "min-w-[168px]"}`}
      role="radiogroup"
      aria-label={t.languageToggle.ariaLabel}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-1 top-1 h-[32px] rounded-full bg-brand-gold"
        style={{ width: "calc((100% - 8px) / 3)" }}
        animate={{ x: `${activeIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 420, damping: 30, mass: 0.8 }}
      />

      {languageOptions.map((option) => {
        const active = option.code === language;
        return (
          <motion.button
            key={option.code}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setLanguage(option.code)}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
            className={`font-grotesk relative z-10 h-[32px] rounded-full px-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 ${
              active
                ? "text-neutral-950"
                : "text-neutral-300 hover:text-white"
            }`}
          >
            {option.shortLabel}
          </motion.button>
        );
      })}
    </div>
  );
}
