"use client";

import { Container } from "@/components/container";
import { SiteIntro } from "@/components/site-intro";
import { StatsCounters } from "@/components/stats-counters";
import { useI18n } from "@/components/language-provider";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <SiteIntro
        eyebrow={t.aboutPage.eyebrow}
        title={t.aboutPage.title}
        description={t.aboutPage.description}
      />

      <section className="pb-30">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <h2 className="font-grotesk text-3xl text-white md:text-4xl">{t.aboutPage.positioningTitle}</h2>
            <p className="text-base leading-relaxed text-neutral-300">
              {t.aboutPage.p1}
            </p>
            <p className="text-base leading-relaxed text-neutral-300">
              {t.aboutPage.p2}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-neutral-900/75 p-7">
              <h3 className="font-grotesk text-2xl text-white">{t.aboutPage.valuesTitle}</h3>
              <ul className="mt-5 space-y-3 text-sm text-neutral-300">
                {t.aboutPage.values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-30">
        <Container>
          <StatsCounters />
        </Container>
      </section>
    </>
  );
}

