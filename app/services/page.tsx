import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SiteIntro } from "@/components/site-intro";
import { TimelineSteps } from "@/components/timeline-steps";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <SiteIntro
        eyebrow="Services"
        title="Integrated construction services for high-value architecture."
        description="From first feasibility studies to handover and aftercare, we provide a single accountable framework for quality, cost, and schedule control."
      />

      <section className="pb-30">
        <Container className="space-y-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
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
              eyebrow="Method"
              title="A transparent process from strategy to execution"
              description="Each phase has measurable deliverables, clear ownership, and coordinated communication between all stakeholders."
            />
            <TimelineSteps />
          </div>
        </Container>
      </section>
    </>
  );
}

