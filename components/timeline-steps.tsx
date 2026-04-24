import { timeline } from "@/lib/data";

export function TimelineSteps() {
  return (
    <ol className="space-y-6">
      {timeline.map((step, index) => (
        <li key={step.title} className="grid gap-4 rounded-2xl border border-white/10 bg-neutral-900/60 p-6 md:grid-cols-12 md:gap-6">
          <p className="font-grotesk text-xl text-brand-gold md:col-span-2">{String(index + 1).padStart(2, "0")}</p>
          <div className="space-y-2 md:col-span-10">
            <h3 className="font-grotesk text-2xl text-white">{step.title}</h3>
            <p className="text-sm leading-relaxed text-neutral-300">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
