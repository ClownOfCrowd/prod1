"use client";

import { FormEvent, useState } from "react";
import { useI18n } from "@/components/language-provider";
import { getEnterpriseContent } from "@/lib/enterprise-content";

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: "villa" | "commercial" | "renovation";
  budgetRange: string;
  timeline: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "villa",
  budgetRange: "",
  timeline: "",
  message: "",
};

export function ContactForm() {
  const { t, language } = useI18n();
  const enterprise = getEnterpriseContent(language);
  const [state, setState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSubmitted(true);
    setState(initialState);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-label={t.contactForm.formAria}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">{t.contactForm.fullName}</span>
          <input
            required
            aria-required="true"
            aria-label={t.contactForm.fullName}
            disabled={submitting}
            type="text"
            value={state.name}
            onChange={(event) => setState((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold"
          />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">{t.contactForm.businessEmail}</span>
          <input
            required
            aria-required="true"
            aria-label={t.contactForm.businessEmail}
            disabled={submitting}
            type="email"
            value={state.email}
            onChange={(event) => setState((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">{t.contactForm.company}</span>
          <input
            aria-label={t.contactForm.company}
            disabled={submitting}
            type="text"
            value={state.company}
            onChange={(event) => setState((prev) => ({ ...prev, company: event.target.value }))}
            className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold"
          />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">{t.contactForm.projectType}</span>
          <select
            aria-label={t.contactForm.projectType}
            disabled={submitting}
            value={state.projectType}
            onChange={(event) =>
              setState((prev) => ({
                ...prev,
                projectType: event.target.value as FormState["projectType"],
              }))
            }
            className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold"
          >
            <option value="villa">{t.contactForm.projectTypes.villa}</option>
            <option value="commercial">{t.contactForm.projectTypes.commercial}</option>
            <option value="renovation">{t.contactForm.projectTypes.renovation}</option>
          </select>
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">{enterprise.contactEnhancement.budgetRange}</span>
          <select
            required
            aria-required="true"
            aria-label={enterprise.contactEnhancement.budgetRange}
            disabled={submitting}
            value={state.budgetRange}
            onChange={(event) => setState((prev) => ({ ...prev, budgetRange: event.target.value }))}
            className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold"
          >
            <option value="">-</option>
            {enterprise.contactEnhancement.budgetOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">{enterprise.contactEnhancement.timeline}</span>
          <select
            required
            aria-required="true"
            aria-label={enterprise.contactEnhancement.timeline}
            disabled={submitting}
            value={state.timeline}
            onChange={(event) => setState((prev) => ({ ...prev, timeline: event.target.value }))}
            className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold"
          >
            <option value="">-</option>
            {enterprise.contactEnhancement.timelineOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">{t.contactForm.projectBrief}</span>
        <textarea
          required
          aria-required="true"
          aria-label={t.contactForm.projectBrief}
          disabled={submitting}
          rows={6}
          value={state.message}
          onChange={(event) => setState((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold"
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-brand-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-950 transition hover:bg-brand-gold-soft"
        >
          {submitting ? enterprise.contactEnhancement.sending : t.contactForm.sendInquiry}
        </button>
        {submitted ? (
          <div role="status" aria-live="polite" className="rounded-lg border border-brand-gold/40 bg-brand-gold/10 px-4 py-3 text-sm">
            <p className="font-semibold text-brand-gold">{enterprise.contactEnhancement.submittedTitle}</p>
            <p className="mt-1 text-neutral-200">{enterprise.contactEnhancement.submittedBody}</p>
          </div>
        ) : null}
      </div>
    </form>
  );
}
