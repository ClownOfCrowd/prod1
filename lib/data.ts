import { Project, Service, Testimonial, TimelineStep } from "@/lib/types";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const projects: Project[] = [
  {
    slug: "amber-cliff-villa",
    title: "Amber Cliff Villa",
    location: "Porto Cervo, Italy",
    category: "residential",
    year: "2025",
    area: "1,480 m2",
    client: "Private Family Office",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    summary:
      "A hillside villa composed as a sequence of stone terraces and glazed living pavilions overlooking the Mediterranean.",
    challenge:
      "Integrate a large private residence into a steep site with strict visual impact restrictions and demanding wind exposure.",
    solution:
      "We developed a stepped structural frame in board-formed concrete, wrapped in local limestone, and coordinated custom glazing with deep shading details.",
    scope: [
      "Concept and technical design",
      "Structural and envelope engineering",
      "Turnkey construction delivery",
      "Landscape and external works",
    ],
    metrics: [
      { label: "Energy demand reduction", value: "42%" },
      { label: "Construction duration", value: "18 months" },
      { label: "On-site incidents", value: "0" },
    ],
  },
  {
    slug: "north-harbor-business-house",
    title: "North Harbor Business House",
    location: "Hamburg, Germany",
    category: "commercial",
    year: "2024",
    area: "9,200 m2",
    client: "Aster Capital Partners",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    summary:
      "A mixed-use commercial building with a precise steel-and-glass facade and highly adaptable office plates.",
    challenge:
      "Deliver premium workspace quality while maintaining a tight urban construction schedule in an active district.",
    solution:
      "Through phased logistics planning and prefabricated facade modules, we shortened site operations and secured high finishing standards.",
    scope: [
      "Preconstruction planning",
      "Core and shell delivery",
      "High-spec interior fit-out",
      "MEP coordination",
    ],
    metrics: [
      { label: "Schedule gain", value: "11 weeks" },
      { label: "Facade prefabrication", value: "78%" },
      { label: "Leased before handover", value: "92%" },
    ],
  },
  {
    slug: "st-anne-heritage-renovation",
    title: "St. Anne Heritage Renovation",
    location: "Brussels, Belgium",
    category: "renovation",
    year: "2023",
    area: "3,100 m2",
    client: "Montclair Hospitality",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Restoration and extension of a late-19th-century building into a boutique hospitality property.",
    challenge:
      "Preserve heritage facade elements while integrating current fire, acoustic, and comfort standards.",
    solution:
      "We coordinated conservation artisans with modern building systems, keeping historic geometry intact and introducing discreet new technical layers.",
    scope: [
      "Survey and restoration strategy",
      "Façade conservation",
      "Structural reinforcement",
      "MEP modernization",
    ],
    metrics: [
      { label: "Protected elements preserved", value: "96%" },
      { label: "Energy class improvement", value: "2 levels" },
      { label: "Guest satisfaction post-open", value: "4.8/5" },
    ],
  },
  {
    slug: "cedar-garden-residences",
    title: "Cedar Garden Residences",
    location: "Zurich, Switzerland",
    category: "residential",
    year: "2024",
    area: "5,600 m2",
    client: "Waldner Developments",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
    summary:
      "A collection of urban villas balancing privacy, daylight, and shared green spaces.",
    challenge:
      "Create luxury living quality on a compact site with strict neighborhood daylight regulations.",
    solution:
      "We shaped staggered volumes and deep-set balconies that protect privacy while maximizing sun penetration to each residence.",
    scope: [
      "Master planning",
      "Concrete and timber hybrid structure",
      "Interior common areas",
      "External landscape works",
    ],
    metrics: [
      { label: "Average daylight factor", value: "3.9%" },
      { label: "Construction waste recycled", value: "84%" },
      { label: "Units sold pre-completion", value: "76%" },
    ],
  },
  {
    slug: "atlas-court-campus",
    title: "Atlas Court Campus",
    location: "Lyon, France",
    category: "commercial",
    year: "2025",
    area: "14,400 m2",
    client: "Novum Technologies",
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1600&q=80",
    summary:
      "A headquarters campus focused on human-scale courtyards, robust materials, and low operational carbon.",
    challenge:
      "Align architectural ambition with aggressive occupancy milestones and strict embodied carbon targets.",
    solution:
      "Our integrated design-build workflow selected low-carbon concrete, optimized spans, and synchronized trades to maintain pace.",
    scope: [
      "Design-build coordination",
      "Low-carbon structural strategy",
      "Envelope and shading systems",
      "Landscaped atrium delivery",
    ],
    metrics: [
      { label: "Embodied carbon reduction", value: "31%" },
      { label: "Project phases", value: "3" },
      { label: "Occupancy achieved", value: "100% on time" },
    ],
  },
  {
    slug: "riverside-archive-revival",
    title: "Riverside Archive Revival",
    location: "Prague, Czech Republic",
    category: "renovation",
    year: "2022",
    area: "4,700 m2",
    client: "City Cultural Council",
    image:
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Adaptive reuse of a former archive building into a public cultural and research facility.",
    challenge:
      "Upgrade structural and climate systems without compromising the building's landmark identity.",
    solution:
      "By introducing internal steel support frames and precision HVAC zoning, we preserved envelope integrity while enabling new public programs.",
    scope: [
      "Adaptive reuse strategy",
      "Selective demolition and reinforcement",
      "Technical systems integration",
      "Public interiors and exhibition zones",
    ],
    metrics: [
      { label: "Reused structural elements", value: "68%" },
      { label: "Public visitors first year", value: "240k" },
      { label: "Operational savings", value: "27%" },
    ],
  },
];

export const services: Service[] = [
  {
    title: "Residential Villas",
    description:
      "Private residences crafted with architectural precision, discreet engineering, and bespoke material execution.",
    points: [
      "Site-sensitive concept and feasibility",
      "Premium envelope and interior detailing",
      "End-to-end construction management",
    ],
  },
  {
    title: "Commercial Buildings",
    description:
      "High-performance office and mixed-use assets delivered with schedule certainty and investor-grade quality.",
    points: [
      "Design-build coordination",
      "Cost and risk control across phases",
      "Tenant-ready fit-out delivery",
    ],
  },
  {
    title: "Architectural Renovation",
    description:
      "Careful transformation of existing architecture, combining heritage respect with contemporary performance.",
    points: [
      "Conservation-informed interventions",
      "Structural upgrades and systems modernization",
      "Adaptive reuse planning",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Their team translated complex design intentions into construction reality with unusual rigor. The result is timeless and exceptionally well executed.",
    author: "Elena Varga",
    role: "Principal Architect, Varga Atelier",
  },
  {
    quote:
      "What stood out was reliability: transparent reporting, disciplined site management, and zero compromise on detail quality.",
    author: "Marcus Feld",
    role: "Asset Director, Aster Capital Partners",
  },
  {
    quote:
      "They approached renovation with both technical intelligence and respect for the building's original character.",
    author: "Claire Mertens",
    role: "Program Lead, City Cultural Council",
  },
];

export const timeline: TimelineStep[] = [
  {
    title: "Discovery & Brief",
    description:
      "We define priorities, budget boundaries, and success criteria with complete transparency from day one.",
  },
  {
    title: "Design Integration",
    description:
      "Architectural, structural, and technical disciplines are aligned into one constructible roadmap.",
  },
  {
    title: "Execution Planning",
    description:
      "Procurement, sequencing, and quality checkpoints are fixed before mobilization to reduce uncertainty.",
  },
  {
    title: "Construction Delivery",
    description:
      "Our site teams deliver with precision, weekly reporting, and strict safety and craftsmanship standards.",
  },
  {
    title: "Handover & Aftercare",
    description:
      "Commissioning, documentation, and post-completion support ensure long-term operational confidence.",
  },
];

export const stats = [
  { label: "Projects Delivered", value: 74 },
  { label: "Years in Operation", value: 19 },
  { label: "Average Client Return", value: 67, suffix: "%" },
  { label: "Safety Score", value: 99, suffix: ".4" },
];
