import { ProjectCategory } from "@/lib/types";

export const categoryLabels: Record<ProjectCategory, string> = {
  residential: "Residential Villas",
  commercial: "Commercial Buildings",
  renovation: "Architectural Renovation",
};

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-GB").format(value);
}
