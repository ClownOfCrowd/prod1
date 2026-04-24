"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { ProjectCategory } from "@/lib/types";
import { ProjectCard } from "@/components/project-card";
import { useI18n } from "@/components/language-provider";

const filters: Array<{ key: "all" | ProjectCategory; label: string }> = [
  { key: "all", label: "All" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "renovation", label: "Renovation" },
];

export function ProjectsGrid() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["key"]>("all");

  const labels: Record<(typeof filters)[number]["key"], string> = {
    all: t.projectFilters.all,
    residential: t.projectFilters.residential,
    commercial: t.projectFilters.commercial,
    renovation: t.projectFilters.renovation,
  };

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActiveFilter(filter.key)}
            className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
              activeFilter === filter.key
                ? "bg-brand-gold text-neutral-950"
                : "border border-white/20 text-neutral-300 hover:border-white/40 hover:text-white"
            }`}
            aria-pressed={activeFilter === filter.key}
          >
            {labels[filter.key]}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
