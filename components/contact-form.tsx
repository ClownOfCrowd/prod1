"use client";

import { FormEvent, useState } from "react";
import { useI18n } from "@/components/language-provider";

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: "villa" | "commercial" | "renovation";
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "villa",
  message: "",
};

export function ContactForm() {
  const { t } = useI18n();
  const [state, setState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

      <label className="space-y-2">
        <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">{t.contactForm.projectBrief}</span>
        <textarea
          required
          aria-required="true"
          aria-label={t.contactForm.projectBrief}
          rows={6}
          value={state.message}
          onChange={(event) => setState((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold"
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          className="rounded-full bg-brand-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-950 transition hover:bg-brand-gold-soft"
        >
          {t.contactForm.sendInquiry}
        </button>
        {submitted ? (
          <p role="status" aria-live="polite" className="text-sm text-brand-gold">
            {t.contactForm.success}
          </p>
        ) : null}
      </div>
    </form>
  );
}
