"use client";

import { FormEvent, useState } from "react";

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "Residential Villa",
  message: "",
};

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setState(initialState);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-label="Contact Arcstone Construct">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">Full name</span>
          <input
            required
            aria-required="true"
            aria-label="Full name"
            type="text"
            value={state.name}
            onChange={(event) => setState((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold"
          />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">Business email</span>
          <input
            required
            aria-required="true"
            aria-label="Business email"
            type="email"
            value={state.email}
            onChange={(event) => setState((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">Company</span>
          <input
            aria-label="Company"
            type="text"
            value={state.company}
            onChange={(event) => setState((prev) => ({ ...prev, company: event.target.value }))}
            className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold"
          />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">Project type</span>
          <select
            aria-label="Project type"
            value={state.projectType}
            onChange={(event) => setState((prev) => ({ ...prev, projectType: event.target.value }))}
            className="w-full rounded-xl border border-white/15 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-gold"
          >
            <option>Residential Villa</option>
            <option>Commercial Building</option>
            <option>Architectural Renovation</option>
          </select>
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">Project brief</span>
        <textarea
          required
          aria-required="true"
          aria-label="Project brief"
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
          Send inquiry
        </button>
        {submitted ? (
          <p role="status" aria-live="polite" className="text-sm text-brand-gold">
            Thank you. Our team will respond within one business day.
          </p>
        ) : null}
      </div>
    </form>
  );
}
