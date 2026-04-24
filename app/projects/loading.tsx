import { Container } from "@/components/container";
import { SiteIntro } from "@/components/site-intro";

export default function ProjectsLoading() {
  return (
    <>
      <SiteIntro
        eyebrow="Selected Portfolio"
        title="Built work that balances design ambition and delivery certainty."
        description="Preparing project overview."
      />
      <section className="pb-30">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/70">
                <div className="skeleton h-56 w-full" />
                <div className="space-y-3 p-6">
                  <div className="skeleton h-3 w-28" />
                  <div className="skeleton h-6 w-52" />
                  <div className="skeleton h-4 w-40" />
                  <div className="skeleton h-4 w-full" />
                  <div className="skeleton h-4 w-11/12" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

