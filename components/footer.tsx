"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { useI18n } from "@/components/language-provider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/10 py-12">
      <Container className="grid gap-8 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <p className="font-grotesk text-lg text-white">ARCSTONE CONSTRUCT</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-400">
            {t.footer.description}
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm uppercase tracking-[0.18em] text-brand-gold">{t.footer.office}</p>
          <p className="mt-3 text-sm text-neutral-300">Avenue Louise 231</p>
          <p className="text-sm text-neutral-300">Brussels, Belgium</p>
        </div>
        <div className="md:col-span-4 md:text-right">
          <Link href="mailto:hello@arcstoneconstruct.eu" className="text-sm text-neutral-200 hover:text-white">
            hello@arcstoneconstruct.eu
          </Link>
          <p className="mt-2 text-sm text-neutral-400">+32 2 901 88 40</p>
        </div>
      </Container>
    </footer>
  );
}
