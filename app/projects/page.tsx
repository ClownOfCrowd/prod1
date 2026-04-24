import { Container } from "@/components/container";
import { ProjectsGrid } from "@/components/projects-grid";
import { SiteIntro } from "@/components/site-intro";

export default function ProjectsPage() {
  return (
    <>
      <SiteIntro
        eyebrow="Selected Portfolio"
        title="Built work that balances design ambition and delivery certainty."
        description="A selection of residential, commercial, and renovation projects delivered through integrated planning, technical precision, and long-term value thinking."
      />
      <section className="pb-30">
        <Container>
          <ProjectsGrid />
        </Container>
      </section>
    </>
  );
}

