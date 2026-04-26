"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useI18n } from "@/components/language-provider";
import { getEnterpriseContent } from "@/lib/enterprise-content";

export function StickyQuoteButton() {
  const pathname = usePathname();
  const { language } = useI18n();
  const content = getEnterpriseContent(language);
  const [mobileReady, setMobileReady] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;

    const evaluateVisibility = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (!isMobile) {
        setMobileReady(true);
        return;
      }

      if (pathname !== "/") {
        setMobileReady(window.scrollY > window.innerHeight * 0.55);
        return;
      }

      const hero = document.getElementById("hero-section");
      if (!hero) {
        setMobileReady(false);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;
      setMobileReady(heroBottom <= 88);
    };

    const onScrollOrResize = () => {
      evaluateVisibility();
    };

    rafId = window.requestAnimationFrame(() => {
      evaluateVisibility();
    });

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [pathname]);

  if (!mobileReady) return null;

  return (
    <Link
      href="/contact#request-quote"
      className="fixed bottom-6 right-6 z-40 rounded-full border border-brand-gold/70 bg-neutral-950/90 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold shadow-[0_12px_28px_rgba(0,0,0,0.45)] transition hover:bg-brand-gold hover:text-neutral-950"
    >
      {content.quoteCta}
    </Link>
  );
}
