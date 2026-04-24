import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { projects } from "@/lib/data";
import { categoryLabels } from "@/lib/utils";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="pb-12 pt-24 md:pb-16 md:pt-32">
        <Container className="space-y-6">
          <p className="font-grotesk text-xs uppercase tracking-[0.35em] text-brand-gold">{categoryLabels[project.category]}</p>
          <h1 className="max-w-4xl font-grotesk text-4xl leading-tight text-white md:text-6xl">{project.title}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-300">{project.summary}</p>
          <div className="flex flex-wrap gap-6 text-sm text-neutral-300">
            <p>{project.location}</p>
            <p>{project.year}</p>
            <p>{project.area}</p>
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="pb-30">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            <article className="space-y-3">
              <h2 className="font-grotesk text-2xl text-white">Challenge</h2>
              <p className="text-sm leading-relaxed text-neutral-300">{project.challenge}</p>
            </article>
            <article className="space-y-3">
              <h2 className="font-grotesk text-2xl text-white">Solution</h2>
              <p className="text-sm leading-relaxed text-neutral-300">{project.solution}</p>
            </article>
            <article className="space-y-3">
              <h2 className="font-grotesk text-2xl text-white">Scope of Work</h2>
              <ul className="space-y-2 text-sm text-neutral-300">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-6">
              <h3 className="font-grotesk text-xl text-white">Project Data</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-neutral-400">Client</dt>
                  <dd className="text-neutral-200">{project.client}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-neutral-400">Year</dt>
                  <dd className="text-neutral-200">{project.year}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-neutral-400">Built area</dt>
                  <dd className="text-neutral-200">{project.area}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-6">
              <h3 className="font-grotesk text-xl text-white">Key Outcomes</h3>
              <ul className="mt-5 space-y-4 text-sm text-neutral-300">
                {project.metrics.map((metric) => (
                  <li key={metric.label} className="flex items-baseline justify-between gap-3">
                    <span>{metric.label}</span>
                    <strong className="font-grotesk text-xl text-brand-gold">{metric.value}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
