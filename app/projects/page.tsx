"use client";

import { Container } from "@/components/container";
import { ProjectsGrid } from "@/components/projects-grid";
import { SiteIntro } from "@/components/site-intro";
import { useI18n } from "@/components/language-provider";

export default function ProjectsPage() {
  const { t } = useI18n();

  return (
    <>
      <SiteIntro
        eyebrow={t.projectsPage.eyebrow}
        title={t.projectsPage.title}
        description={t.projectsPage.description}
      />
      <section className="pb-30">
        <Container>
          <ProjectsGrid />
        </Container>
      </section>
    </>
  );
}

