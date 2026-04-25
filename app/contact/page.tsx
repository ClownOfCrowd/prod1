"use client";

import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { SiteIntro } from "@/components/site-intro";
import { useI18n } from "@/components/language-provider";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <>
      <SiteIntro
        eyebrow={t.contactPage.eyebrow}
        title={t.contactPage.title}
        description={t.contactPage.description}
      />

      <section className="pb-30">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <h2 className="font-grotesk text-3xl text-white">{t.contactPage.officeTitle}</h2>
            <p className="text-sm leading-relaxed text-neutral-300">
              Avenue Louise 231, 1050 Brussels<br />
              {t.contactPage.country}
            </p>
            <p className="text-sm text-neutral-300">+32 2 901 88 40</p>
            <p className="text-sm text-neutral-300">hello@arcstoneconstruct.eu</p>
          </div>
          <div id="request-quote" className="rounded-2xl border border-white/10 bg-neutral-900/75 p-7 lg:col-span-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

