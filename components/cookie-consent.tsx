"use client";

import { useState } from "react";
import { useI18n } from "@/components/language-provider";

const CONSENT_KEY = "ac_consent_v1";

export function CookieConsent() {
  const { t } = useI18n();

  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.localStorage.getItem(CONSENT_KEY);
  });

  const accept = () => {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl border border-white/15 bg-neutral-900/95 p-5 shadow-2xl backdrop-blur md:inset-x-0">
      <p className="text-sm leading-relaxed text-neutral-300">{t.cookie.text}</p>
      <div className="mt-4 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={accept}
          className="rounded-full border border-brand-gold/70 px-4 py-2 text-sm font-medium text-brand-gold transition hover:bg-brand-gold hover:text-neutral-950"
        >
          {t.cookie.accept}
        </button>
      </div>
    </div>
  );
}
