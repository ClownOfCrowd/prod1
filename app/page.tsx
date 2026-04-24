import Link from "next/link";
import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatsCounters } from "@/components/stats-counters";
import { Testimonials } from "@/components/testimonials";
import { TimelineSteps } from "@/components/timeline-steps";
import { projects } from "@/lib/data";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="pb-30">
        <Container className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="Featured Projects"
              title="Selected work delivered with architectural rigor"
              description="Recent projects demonstrate our focus on proportion, material quality, and execution discipline across different scales and typologies."
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
            Explore all projects
          </Link>
        </Container>
      </section>

      <section className="pb-30">
        <Container className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="Performance"
              title="Measured outcomes, not marketing claims"
              description="We track delivery quality with tangible indicators spanning execution reliability, safety, and client retention."
            />
          </Reveal>
          <StatsCounters />
        </Container>
      </section>

      <section className="pb-30">
        <Container className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="A process built to reduce risk and preserve design intent"
            />
          </Reveal>
          <TimelineSteps />
        </Container>
      </section>

      <section className="pb-30">
        <Container className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="Client Perspective"
              title="Long-term partnerships built on trust"
            />
          </Reveal>
          <Testimonials />
        </Container>
      </section>
    </>
  );
}

