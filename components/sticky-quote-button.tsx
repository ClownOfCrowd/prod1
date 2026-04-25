"use client";

import Link from "next/link";
import { useI18n } from "@/components/language-provider";
import { getEnterpriseContent } from "@/lib/enterprise-content";

export function StickyQuoteButton() {
  const { language } = useI18n();
  const content = getEnterpriseContent(language);

  return (
    <Link
      href="/contact#request-quote"
      className="fixed bottom-6 right-6 z-40 rounded-full border border-brand-gold/70 bg-neutral-950/90 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold shadow-[0_12px_28px_rgba(0,0,0,0.45)] transition hover:bg-brand-gold hover:text-neutral-950"
    >
      {content.quoteCta}
    </Link>
  );
}
