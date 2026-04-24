import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { SiteIntro } from "@/components/site-intro";

export default function ContactPage() {
  return (
    <>
      <SiteIntro
        eyebrow="Contact"
        title="Let us review your project brief with clarity and speed."
        description="Share your objectives, timeline, and location. Our team will provide a first strategic response and proposed next steps."
      />

      <section className="pb-30">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <h2 className="font-grotesk text-3xl text-white">Brussels Headquarters</h2>
            <p className="text-sm leading-relaxed text-neutral-300">
              Avenue Louise 231, 1050 Brussels<br />
              Belgium
            </p>
            <p className="text-sm text-neutral-300">+32 2 901 88 40</p>
            <p className="text-sm text-neutral-300">hello@arcstoneconstruct.eu</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/75 p-7 lg:col-span-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

