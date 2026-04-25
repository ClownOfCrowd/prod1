"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatsCounters } from "@/components/stats-counters";
import { Testimonials } from "@/components/testimonials";
import { TimelineSteps } from "@/components/timeline-steps";
import {
  CaseStudiesSection,
  CertificationsComplianceSection,
  ClientsPartnersSection,
  CompanyKpisSection,
  EngineeringApproachSection,
  ExtendedProjectProcessSection,
  FaqSection,
  IndustriesServedSection,
  InsightsSection,
  SustainabilitySection,
} from "@/components/enterprise-sections";
import { projects } from "@/lib/data";
import { useI18n } from "@/components/language-provider";

export default function Home() {
  const { t } = useI18n();
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="pb-30">
        <Container>
          <EngineeringApproachSection />
        </Container>
      </section>

      <section className="pb-30">
        <Container className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow={t.home.featured.eyebrow}
              title={t.home.featured.title}
              description={t.home.featured.description}
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((project, index) => (
              <Reveal key={project.slug} delayMs={index * 120}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <Link
            href="/projects"
            className="inline-flex rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-brand-gold hover:text-brand-gold"
          >
            {t.home.featured.cta}
          </Link>
        </Container>
      </section>

      <section className="pb-30">
        <Container>
          <CaseStudiesSection />
        </Container>
      </section>

      <section className="pb-30">
        <Container className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow={t.home.performance.eyebrow}
              title={t.home.performance.title}
              description={t.home.performance.description}
            />
          </Reveal>
          <StatsCounters />
        </Container>
      </section>

      <section className="pb-30">
        <Container>
          <CompanyKpisSection />
        </Container>
      </section>

      <section className="pb-30">
        <Container className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow={t.home.process.eyebrow}
              title={t.home.process.title}
            />
          </Reveal>
          <TimelineSteps />
        </Container>
      </section>

      <section className="pb-30">
        <Container>
          <ExtendedProjectProcessSection />
        </Container>
      </section>

      <section className="pb-30">
        <Container className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow={t.home.testimonials.eyebrow}
              title={t.home.testimonials.title}
            />
          </Reveal>
          <Testimonials />
        </Container>
      </section>

      <section className="pb-30">
        <Container>
          <IndustriesServedSection />
          <ClientsPartnersSection />
          <CertificationsComplianceSection />
          <SustainabilitySection />
          <InsightsSection />
          <FaqSection />
        </Container>
      </section>
    </>
  );
}

