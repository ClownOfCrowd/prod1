"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useI18n } from "@/components/language-provider";
import { getEnterpriseContent } from "@/lib/enterprise-content";

export function EngineeringApproachSection() {
  const { language } = useI18n();
  const content = getEnterpriseContent(language);

  return (
    <section className="pb-30">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.engineeringApproach.eyebrow}
            title={content.engineeringApproach.title}
            description={content.engineeringApproach.description}
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.engineeringApproach.principles.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 80}>
              <article className="h-full rounded-2xl border border-white/10 bg-neutral-900/70 p-6">
                <h3 className="font-grotesk text-xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExtendedProjectProcessSection() {
  const { language } = useI18n();
  const content = getEnterpriseContent(language);

  return (
    <section className="pb-30">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.extendedProcess.eyebrow}
            title={content.extendedProcess.title}
            description={content.extendedProcess.description}
          />
        </Reveal>
        <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.extendedProcess.steps.map((step, index) => (
            <Reveal key={step.phase} delayMs={index * 60}>
              <li className="h-full rounded-2xl border border-white/10 bg-neutral-900/70 p-6">
                <p className="font-grotesk text-lg text-brand-gold">{step.phase}</p>
                <h3 className="mt-2 font-grotesk text-xl text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CaseStudiesSection() {
  const { language } = useI18n();
  const content = getEnterpriseContent(language);
  const labels =
    language === "ru"
      ? { challenge: "Задача", solution: "Решение", result: "Результат", timeline: "Срок", budget: "Бюджет", size: "Площадь" }
      : language === "es"
        ? { challenge: "Desafío", solution: "Solución", result: "Resultado", timeline: "Plazo", budget: "Presupuesto", size: "Superficie" }
        : { challenge: "Challenge", solution: "Solution", result: "Result", timeline: "Timeline", budget: "Budget", size: "Size" };

  return (
    <section className="pb-30">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.caseStudies.eyebrow}
            title={content.caseStudies.title}
            description={content.caseStudies.description}
          />
        </Reveal>
        <div className="space-y-6">
          {content.caseStudies.items.map((item, index) => (
            <Reveal key={item.name} delayMs={index * 90}>
              <article className="rounded-2xl border border-white/10 bg-neutral-900/70 p-7">
                <div className="grid gap-8 lg:grid-cols-12">
                  <div className="space-y-4 lg:col-span-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">{item.sector}</p>
                    <h3 className="font-grotesk text-3xl text-white">{item.name}</h3>
                    <div className="space-y-3 text-sm leading-relaxed text-neutral-300">
                      <p><span className="font-semibold text-neutral-100">{labels.challenge}:</span> {item.challenge}</p>
                      <p><span className="font-semibold text-neutral-100">{labels.solution}:</span> {item.solution}</p>
                      <p><span className="font-semibold text-neutral-100">{labels.result}:</span> {item.result}</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-neutral-950/70 p-5 lg:col-span-4">
                    <dl className="space-y-4 text-sm">
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-neutral-400">{labels.timeline}</dt>
                        <dd className="font-grotesk text-lg text-white">{item.timeline}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-neutral-400">{labels.budget}</dt>
                        <dd className="font-grotesk text-lg text-white">{item.budget}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-neutral-400">{labels.size}</dt>
                        <dd className="font-grotesk text-lg text-white">{item.size}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompanyKpisSection() {
  const { language } = useI18n();
  const content = getEnterpriseContent(language);

  return (
    <section className="pb-30">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.companyKpis.eyebrow}
            title={content.companyKpis.title}
            description={content.companyKpis.description}
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.companyKpis.items.map((item, index) => (
            <Reveal key={item.label} delayMs={index * 75}>
              <article className="h-full rounded-2xl border border-white/10 bg-neutral-900/70 p-6">
                <p className="font-grotesk text-4xl text-brand-gold">{item.value}</p>
                <p className="mt-2 text-sm font-medium text-white">{item.label}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-neutral-400">{item.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesDeepDiveSection() {
  const { language } = useI18n();
  const content = getEnterpriseContent(language);

  return (
    <section className="pb-30">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.servicesDeepDive.eyebrow}
            title={content.servicesDeepDive.title}
            description={content.servicesDeepDive.description}
          />
        </Reveal>
        <div className="grid gap-6 xl:grid-cols-3">
          {content.servicesDeepDive.items.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 70}>
              <article className="h-full rounded-2xl border border-white/10 bg-neutral-900/70 p-7">
                <h3 className="font-grotesk text-2xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">{item.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-neutral-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-gold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesServedSection() {
  const { language } = useI18n();
  const content = getEnterpriseContent(language);

  return (
    <section className="pb-30">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading eyebrow={content.industries.eyebrow} title={content.industries.title} />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.industries.items.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 60}>
              <article className="h-full rounded-2xl border border-white/10 bg-neutral-900/70 p-6">
                <h3 className="font-grotesk text-xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientsPartnersSection() {
  const { language } = useI18n();
  const content = getEnterpriseContent(language);

  return (
    <section className="pb-30">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.clients.eyebrow}
            title={content.clients.title}
            description={content.clients.description}
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.clients.partners.map((partner, index) => (
            <Reveal key={partner.name} delayMs={index * 55}>
              <article className="rounded-xl border border-white/10 bg-neutral-900/65 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand-gold/40 bg-neutral-950/70 font-grotesk text-sm text-brand-gold">
                    {partner.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="font-grotesk text-xl text-white">{partner.name}</p>
                    <p className="mt-2 text-sm text-neutral-300">{partner.context}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CertificationsComplianceSection() {
  const { language } = useI18n();
  const content = getEnterpriseContent(language);

  return (
    <section className="pb-30">
      <div className="space-y-10 rounded-2xl border border-white/10 bg-neutral-900/65 p-7 md:p-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.certifications.eyebrow}
            title={content.certifications.title}
            description={content.certifications.description}
          />
        </Reveal>
        <div className="grid gap-3 md:grid-cols-2">
          {content.certifications.items.map((item, index) => (
            <Reveal key={item} delayMs={index * 40}>
              <p className="rounded-lg border border-white/10 bg-neutral-950/50 px-4 py-3 text-sm text-neutral-200">{item}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SustainabilitySection() {
  const { language } = useI18n();
  const content = getEnterpriseContent(language);

  return (
    <section className="pb-30">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.sustainability.eyebrow}
            title={content.sustainability.title}
            description={content.sustainability.description}
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {content.sustainability.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delayMs={index * 60}>
              <article className="h-full rounded-2xl border border-white/10 bg-neutral-900/70 p-6">
                <h3 className="font-grotesk text-xl text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">{pillar.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InsightsSection() {
  const { language } = useI18n();
  const content = getEnterpriseContent(language);

  return (
    <section className="pb-30">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading eyebrow={content.insights.eyebrow} title={content.insights.title} />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.insights.articles.map((article, index) => (
            <Reveal key={article.title} delayMs={index * 60}>
              <article className="h-full rounded-2xl border border-white/10 bg-neutral-900/70 p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-brand-gold">{article.tag}</p>
                <h3 className="mt-3 font-grotesk text-2xl leading-tight text-white">{article.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">{article.excerpt}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.14em] text-neutral-400">{article.date}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const { language } = useI18n();
  const content = getEnterpriseContent(language);

  return (
    <section className="pb-30">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading eyebrow={content.faq.eyebrow} title={content.faq.title} />
        </Reveal>
        <div className="space-y-4">
          {content.faq.items.map((item, index) => (
            <Reveal key={item.question} delayMs={index * 40}>
              <article className="rounded-xl border border-white/10 bg-neutral-900/70 p-5">
                <h3 className="font-grotesk text-xl text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">{item.answer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
