"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { ProjectCategory } from "@/lib/types";
import { ProjectCard } from "@/components/project-card";

const filters: Array<{ key: "all" | ProjectCategory; label: string }> = [
  { key: "all", label: "All" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "renovation", label: "Renovation" },
];

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["key"]>("all");

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
            {filter.label}
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
