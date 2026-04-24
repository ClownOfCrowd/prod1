import Link from "next/link";
import { Container } from "@/components/container";

export default function ProjectNotFound() {
  return (
    <section className="py-28">
      <Container className="space-y-6 text-center">
        <p className="font-grotesk text-xs uppercase tracking-[0.3em] text-brand-gold">Project not found</p>
        <h1 className="font-grotesk text-4xl text-white">This project page is unavailable.</h1>
        <p className="text-neutral-300">The project may have been archived or the link is outdated.</p>
        <Link href="/projects" className="inline-flex rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:border-brand-gold hover:text-brand-gold">
          Return to projects
        </Link>
      </Container>
    </section>
  );
}
