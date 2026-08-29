export type ProjectLink = {
  label: string;
  href: string;
  kind: "demo" | "source" | "case-study";
};

export type Project = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  impact: string;
  tags: string[];
  status: "active" | "completed" | "in-development";
  image: {
    src: string;
    alt: string;
    position: string;
    credit: string;
    creditUrl: string;
  };
  links: ProjectLink[];
};

// Add a project-specific URL to `links` when a demo, repository, or case study
// is ready. The homepage automatically shows every link in the project card.
export const projects: Project[] = [
  {
    number: "01",
    eyebrow: "Research systems",
    title: "Evidence discovery at research scale",
    description:
      "A local Python and LLM-assisted workflow for finding, structuring and reviewing research impact evidence during an internship with the University of Bath.",
    impact:
      "Turned more than 50 fragmented research outputs into a structured, reviewable evidence workflow.",
    tags: ["Python", "Local LLMs", "Evidence synthesis"],
    status: "completed",
    image: {
      src: "/projects/research-evidence.jpg",
      alt: "Research books, handwritten notes and documents arranged across a working desk",
      position: "50% 58%",
      credit: "Yen Vu / Unsplash",
      creditUrl: "https://unsplash.com/photos/desk-with-open-book-laptop-and-study-materials-HNjWq8WPyoY",
    },
    links: [],
  },
  {
    number: "02",
    eyebrow: "Quantitative finance",
    title: "Monte Carlo option pricing and risk engine",
    description:
      "A tested Python engine for European option pricing and risk analysis, with analytical benchmarks, uncertainty estimates, Monte Carlo Greeks and reproducible convergence studies.",
    impact:
      "Nearly halved call-price variance at the same simulation budget while making pricing and risk uncertainty explicit.",
    tags: ["Python", "Monte Carlo", "Greeks", "Statistical validation"],
    status: "active",
    image: {
      src: "/projects/monte-carlo/canary-wharf.jpg",
      alt: "Geometric glass and steel architecture at One Canada Square in Canary Wharf",
      position: "50% 50%",
      credit: "Patrick Robert Doyle / Unsplash",
      creditUrl: "https://unsplash.com/photos/white-concrete-building-during-daytime-H8yLTXLHw90",
    },
    links: [
      {
        label: "Case study",
        href: "/projects/monte-carlo-option-pricing",
        kind: "case-study",
      },
      {
        label: "Source",
        href: "https://github.com/pestopasta74/monte-carlo-risk-engine",
        kind: "source",
      },
    ],
  },
  {
    number: "03",
    eyebrow: "Engineering systems",
    title: "Software for a smart prosthetic arm",
    description:
      "Collaborative software and technical documentation supporting an interdisciplinary team developing intelligent assistive prosthetic technology.",
    impact:
      "Supports continuity across an interdisciplinary team by turning technical decisions into maintainable software and documentation.",
    tags: ["Node.js", "Team development", "Technical communication"],
    status: "active",
    image: {
      src: "/projects/prosthetic-arm-placeholder.jpg",
      alt: "A blue-lit prosthetic hand representing intelligent assistive technology",
      position: "50% 20%",
      credit: "ThisisEngineering / Unsplash",
      creditUrl: "https://unsplash.com/photos/blue-robotic-prosthetic-hand-against-teal-background-sbVu5zitZt0",
    },
    links: [],
  },
];
