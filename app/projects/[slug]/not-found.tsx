"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { useI18n } from "@/components/language-provider";

export default function ProjectNotFound() {
  const { t } = useI18n();

  return (
    <section className="py-28">
      <Container className="space-y-6 text-center">
        <p className="font-grotesk text-xs uppercase tracking-[0.3em] text-brand-gold">{t.projectNotFound.eyebrow}</p>
        <h1 className="font-grotesk text-4xl text-white">{t.projectNotFound.title}</h1>
        <p className="text-neutral-300">{t.projectNotFound.description}</p>
        <Link href="/projects" className="inline-flex rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:border-brand-gold hover:text-brand-gold">
          {t.projectNotFound.cta}
        </Link>
      </Container>
    </section>
  );
}
