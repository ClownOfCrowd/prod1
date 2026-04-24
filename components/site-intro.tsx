import { Container } from "@/components/container";

interface SiteIntroProps {
  title: string;
  eyebrow: string;
  description: string;
}

export function SiteIntro({ title, eyebrow, description }: SiteIntroProps) {
  return (
    <section className="pb-14 pt-24 md:pb-20 md:pt-32">
      <Container className="space-y-6">
        <p className="font-grotesk text-xs uppercase tracking-[0.35em] text-brand-gold">{eyebrow}</p>
        <h1 className="max-w-4xl font-grotesk text-4xl leading-tight text-white md:text-6xl">{title}</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-neutral-300">{description}</p>
      </Container>
    </section>
  );
}
