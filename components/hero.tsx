"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="hero-grid" aria-hidden />
      <Container className="relative grid grid-cols-12 gap-8">
        <div className="col-span-12 space-y-8 md:col-span-9">
          <p className="font-grotesk text-xs uppercase tracking-[0.35em] text-brand-gold">
            Design-Led Construction Across Europe
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="font-grotesk text-4xl leading-tight text-white md:text-6xl"
          >
            Building architecture that stays relevant for decades.
          </motion.h1>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-300">
            Arcstone Construct delivers premium villas, commercial buildings, and complex renovations with disciplined project governance and craftsmanship-first execution.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-950 transition hover:bg-brand-gold-soft"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-brand-gold hover:text-brand-gold"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
