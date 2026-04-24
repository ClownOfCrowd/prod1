"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";
import { useI18n } from "@/components/language-provider";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useI18n();

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="space-y-3 p-6">
          <p className="text-xs uppercase tracking-[0.23em] text-brand-gold">{t.categories[project.category]}</p>
          <h3 className="font-grotesk text-2xl text-white">{project.title}</h3>
          <p className="text-sm text-neutral-400">{project.location}</p>
          <p className="text-sm leading-relaxed text-neutral-300">{project.summary}</p>
        </div>
      </Link>
    </motion.article>
  );
}
