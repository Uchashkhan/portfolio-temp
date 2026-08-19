export type Project = {
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;
  image: string | null;
  imageAlt: string;
  aspectRatio: "portrait" | "landscape" | "wide";
  gridSpan: "narrow" | "wide" | "full";
  theme: "ink" | "paper" | "stone" | "graphite" | "warm";
  href: string | null;
  featured: boolean;
  monogram: string;
};

export const projects: Project[] = [
  {
    title: "Shikho App Redesign",
    slug: "shikho-app-redesign",
    category: "Product Design · EdTech",
    year: "2026",
    description:
      "Making everyday learning easier to navigate, continue, and act on.",
    image: null,
    imageAlt: "Shikho app redesign project cover",
    aspectRatio: "portrait",
    gridSpan: "narrow",
    theme: "ink",
    href: null,
    featured: true,
    monogram: "SHIKHO",
  },
  {
    title: "Shikho Report Card",
    slug: "shikho-report-card",
    category: "Product Design · Learning Analytics",
    year: "2026",
    description:
      "Turning student performance data into something clearer, more useful, and motivating.",
    image: null,
    imageAlt: "Shikho report card project cover",
    aspectRatio: "landscape",
    gridSpan: "wide",
    theme: "paper",
    href: null,
    featured: true,
    monogram: "REPORT / 26",
  },
  {
    title: "CADEA — CAD Workflows",
    slug: "cadea-cad-workflows",
    category: "UX Design · B2B Product",
    year: "2024–2025",
    description:
      "Making complex engineering workflows easier to move through.",
    image: null,
    imageAlt: "CADEA CAD workflows project cover",
    aspectRatio: "landscape",
    gridSpan: "wide",
    theme: "stone",
    href: null,
    featured: true,
    monogram: "CADEA",
  },
  {
    title: "Bini Investment Platform",
    slug: "bini-investment-platform",
    category: "Product Design · FinTech",
    year: "2023–2024",
    description:
      "Simplifying how people explore and complete digital investment journeys.",
    image: null,
    imageAlt: "Bini investment platform project cover",
    aspectRatio: "portrait",
    gridSpan: "narrow",
    theme: "graphite",
    href: null,
    featured: true,
    monogram: "BINI / 04",
  },
  {
    title: "Bhorer Kagoj Prokashan",
    slug: "bhorer-kagoj-prokashan",
    category: "UX/UI · E-commerce",
    year: "Earlier Work",
    description:
      "Improving how people discover and purchase books online.",
    image: null,
    imageAlt: "Bhorer Kagoj Prokashan project cover",
    aspectRatio: "wide",
    gridSpan: "full",
    theme: "warm",
    href: null,
    featured: false,
    monogram: "BKP / ARCHIVE",
  },
];
