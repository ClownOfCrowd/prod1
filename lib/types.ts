export type ProjectCategory = "residential" | "commercial" | "renovation";

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  year: string;
  area: string;
  client: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  scope: string[];
  metrics: Array<{ label: string; value: string }>;
}

export interface Service {
  title: string;
  description: string;
  points: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface TimelineStep {
  title: string;
  description: string;
}
