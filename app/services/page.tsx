"use client";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SiteIntro } from "@/components/site-intro";
import { TimelineSteps } from "@/components/timeline-steps";
import { ExtendedProjectProcessSection, ServicesDeepDiveSection } from "@/components/enterprise-sections";
import { useI18n } from "@/components/language-provider";

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <>
      <SiteIntro
        eyebrow={t.servicesPage.eyebrow}
        title={t.servicesPage.title}
        description={t.servicesPage.description}
      />

      <section className="pb-30">
        <Container className="space-y-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {t.servicesPage.services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/10 bg-neutral-900/70 p-7">
                <h2 className="font-grotesk text-2xl text-white">{service.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-300">{service.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-neutral-300">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-gold" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="space-y-8 pt-12">
            <SectionHeading
              eyebrow={t.servicesPage.methodEyebrow}
              title={t.servicesPage.methodTitle}
              description={t.servicesPage.methodDescription}
            />
            <TimelineSteps />
          </div>

          <ServicesDeepDiveSection />
          <ExtendedProjectProcessSection />
        </Container>
      </section>
    </>
  );
}

