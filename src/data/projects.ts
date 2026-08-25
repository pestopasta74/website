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
    title: "From stochastic models to verified prices",
    description:
      "An active exploration of Black-Scholes, geometric Brownian motion and Monte Carlo pricing, with automated tests and analysis of convergence and numerical error.",
    tags: ["Probability", "Monte Carlo", "Numerical methods"],
    status: "in-development",
    links: [],
  },
  {
    number: "03",
    eyebrow: "Engineering systems",
    title: "Software for a smart prosthetic arm",
    description:
      "Collaborative software and technical documentation supporting an interdisciplinary team developing intelligent assistive prosthetic technology.",
    tags: ["Node.js", "Team development", "Technical communication"],
    status: "active",
    links: [],
  },
];
