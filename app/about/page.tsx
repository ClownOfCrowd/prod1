import { Container } from "@/components/container";
import { SiteIntro } from "@/components/site-intro";
import { StatsCounters } from "@/components/stats-counters";

export default function AboutPage() {
  return (
    <>
      <SiteIntro
        eyebrow="About"
        title="A construction partner trusted for precision, discipline, and architectural sensitivity."
        description="Arcstone Construct is a European team of engineers, site leaders, and project strategists committed to delivering long-term value through rigorous execution."
      />

      <section className="pb-30">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <h2 className="font-grotesk text-3xl text-white md:text-4xl">Our Positioning</h2>
            <p className="text-base leading-relaxed text-neutral-300">
              We focus on projects where architectural intent and construction discipline must operate at the same level. Our teams are structured to reduce decision latency, manage technical risk early, and protect design quality through every stage of delivery.
            </p>
            <p className="text-base leading-relaxed text-neutral-300">
              Over nearly two decades, we have worked with private clients, institutional investors, and leading architectural studios across Belgium, Germany, Switzerland, France, and Italy.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-neutral-900/75 p-7">
              <h3 className="font-grotesk text-2xl text-white">Values in Practice</h3>
              <ul className="mt-5 space-y-3 text-sm text-neutral-300">
                <li>Clear governance and weekly reporting cadence</li>
                <li>Engineering decisions aligned with lifecycle value</li>
                <li>Craftsmanship benchmarks documented before execution</li>
                <li>Safety and quality culture shared by every trade partner</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-30">
        <Container>
          <StatsCounters />
        </Container>
      </section>
    </>
  );
}

