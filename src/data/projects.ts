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
  tags: string[];
  status: "active" | "completed" | "in-development";
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
    tags: ["Python", "Local LLMs", "Evidence synthesis"],
    status: "completed",
    links: [],
  },
  {
    number: "02",
    eyebrow: "Quantitative finance",
    title: "Monte Carlo option pricing and risk engine",
    description:
      "A tested Python engine for European option pricing and risk analysis, with analytical benchmarks, uncertainty estimates, Monte Carlo Greeks and reproducible convergence studies.",
    tags: ["Python", "Monte Carlo", "Greeks", "Statistical validation"],
    status: "active",
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
    title: "Programming in Formula Student",
    description:
      "Programming contributions and EDI leadership within Team Bath Racing Electric.",
    tags: ["Programming", "Engineering teams", "Teamwork"],
    status: "active",
    links: [],
  },
];
