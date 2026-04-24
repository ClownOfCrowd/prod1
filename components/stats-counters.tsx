"use client";

import { useEffect, useRef, useState } from "react";
import { formatNumber } from "@/lib/utils";
import { localeForLanguage } from "@/lib/i18n";
import { useI18n } from "@/components/language-provider";

function useInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export function StatsCounters() {
  const { language, t } = useI18n();
  const stats = t.stats;
  const { ref, inView } = useInView();
  const [values, setValues] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!inView) return;

    const duration = 900;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setValues(stats.map((item) => Math.floor(item.value * eased)));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [inView, stats]);

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => (
        <article key={item.label} className="rounded-2xl border border-white/10 bg-neutral-900/70 p-6">
          <p className="font-grotesk text-4xl text-white">
            {formatNumber(values[index], localeForLanguage(language))}
            {item.suffix ?? ""}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-neutral-400">{item.label}</p>
        </article>
      ))}
    </div>
  );
}
