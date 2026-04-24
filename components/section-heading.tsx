interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="max-w-3xl space-y-4">
      <p className="font-grotesk text-xs uppercase tracking-[0.32em] text-brand-gold">{eyebrow}</p>
      <h2 className="font-grotesk text-3xl leading-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="text-base leading-relaxed text-neutral-300 md:text-lg">{description}</p> : null}
    </header>
  );
}
