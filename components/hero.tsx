"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { useI18n } from "@/components/language-provider";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="hero-grid" aria-hidden />
      <Container className="relative grid grid-cols-12 gap-8">
        <div className="col-span-12 space-y-8 md:col-span-9">
          <p className="font-grotesk text-xs uppercase tracking-[0.35em] text-brand-gold">
            {t.hero.eyebrow}
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="font-grotesk text-4xl leading-tight text-white md:text-6xl"
          >
            {t.hero.title}
          </motion.h1>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-300">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-950 transition hover:bg-brand-gold-soft"
            >
              {t.hero.primaryCta}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-brand-gold hover:text-brand-gold"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
