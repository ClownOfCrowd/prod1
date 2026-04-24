"use client";

import { useI18n } from "@/components/language-provider";

export function Testimonials() {
  const { t } = useI18n();

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {t.testimonials.map((item) => (
        <figure key={item.author} className="rounded-2xl border border-white/10 bg-neutral-900/70 p-6">
          <blockquote className="text-sm leading-relaxed text-neutral-200">&ldquo;{item.quote}&rdquo;</blockquote>
          <figcaption className="mt-5">
            <p className="font-grotesk text-base text-white">{item.author}</p>
            <p className="text-xs uppercase tracking-[0.12em] text-neutral-400">{item.role}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
