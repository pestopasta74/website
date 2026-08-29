# Preston Whiteman — Portfolio

Personal portfolio for Preston Whiteman, a BSc Physics with Theoretical Physics
with Professional Placement student at the University of Bath. The site presents
evidence-led work across quantitative finance, research automation, scientific
computing and interdisciplinary engineering.

Production domain: [pestopasta74.com](https://pestopasta74.com)

## Overview

The portfolio is a statically generated Next.js application with a data-driven
project index and dedicated case-study routes. Its editorial visual system uses
strong typography, structured evidence, project photography and restrained
motion to communicate both technical depth and practical impact to recruiters.

The current featured case study documents the
[Monte Carlo option-pricing and risk engine](https://github.com/pestopasta74/monte-carlo-risk-engine).
It explains the work at two levels: a plain-English introduction for general
readers and detailed numerical evidence for technical reviewers.

## Current features

- Responsive portfolio covering selected work, education, experience,
  recognition and contact information
- Data-driven project cards with status, tags, photographs, impact statements,
  source links and optional case-study links
- Clickable project covers whenever a case-study route is available
- Monte Carlo case study covering Black–Scholes validation, confidence
  intervals, antithetic variance reduction and Monte Carlo Greeks
- Reproducible convergence tables, generated charts and downloadable CSV data
- Recruiter-focused explanations of model purpose, uncertainty and impact
- Responsive photography with alternative text and visible attribution
- Replayable viewport reveals powered by `IntersectionObserver`
- Subtle coordinate-grid and market-blue ambient background motion
- Reduced-motion support for visitors who prefer a static experience
- Route-level loading skeleton for genuine navigation waits
- Keyboard navigation, skip links, focus states and semantic landmarks
- Canonical URLs, social metadata and JSON-LD structured data
- Generated `sitemap.xml` and `robots.txt`
- AVIF and WebP delivery through Next.js image optimisation
- Custom `PW.` browser and saved-site icons matching the portfolio identity

## Technology

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4 via PostCSS
- Bun for dependency management and scripts
- Vercel-compatible production deployment

## Project structure

```text
.
├── public/
│   └── projects/                         # Photography, charts and study data
├── src/
│   ├── app/
│   │   ├── apple-icon.tsx               # iOS saved-site monogram
│   │   ├── icon.tsx                     # Generated browser-tab monogram
│   │   ├── projects/
│   │   │   └── monte-carlo-option-pricing/
│   │   │       └── page.tsx              # Monte Carlo case study
│   │   ├── layout.tsx                    # Metadata and Person schema
│   │   ├── loading.tsx                   # Route-transition skeleton
│   │   ├── page.tsx                      # Portfolio homepage
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   └── ScrollReveal.tsx              # Replayable viewport animations
│   └── data/
│       ├── monte-carlo.ts                # Published numerical results
│       └── projects.ts                   # Homepage project collection
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Local development

Install dependencies and start the development server from the repository root:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000). Use another port if an
existing development server is already running:

```bash
bun run dev -- -p 3001
```

## Updating projects

Featured projects are defined in
[`src/data/projects.ts`](src/data/projects.ts). Each project provides its copy,
recruiter-facing impact, tags, status, cover-image metadata and links. Keeping
this information in one collection avoids editing the homepage component when a
project is added.

```ts
{
  number: "04",
  eyebrow: "Project category",
  title: "Project title",
  description: "A concise explanation of what was built.",
  impact: "The result, improvement or decision the work enabled.",
  tags: ["Python", "Modelling"],
  status: "active",
  image: {
    src: "/projects/example.jpg",
    alt: "A useful description of the image",
    position: "50% 50%",
    credit: "Photographer / Source",
    creditUrl: "https://example.com/source",
  },
  links: [
    {
      label: "Case study",
      href: "/projects/example",
      kind: "case-study",
    },
    {
      label: "Source",
      href: "https://github.com/account/example",
      kind: "source",
    },
  ],
}
```

When a `case-study` link is present, the project photograph automatically links
to that route. Projects without a published case study remain non-clickable and
do not create dead links.

Use `active` for maintained work, `in-development` for work still being built,
and `completed` for finished projects.

## Monte Carlo study data

The case-study figures and CSV are generated by the risk-engine repository and
copied into `public/projects/monte-carlo`. Published numerical values used in
the page live in [`src/data/monte-carlo.ts`](src/data/monte-carlo.ts).

When the engine changes:

1. Regenerate its analysis outputs.
2. Replace the matching graph and CSV assets in this repository.
3. Update the typed numerical summaries in `src/data/monte-carlo.ts`.
4. Confirm that captions and impact statements still match the evidence.
5. Run both validation commands before opening a pull request.

## Accessibility and motion

Content is server-rendered and remains readable without client-side animation.
The reveal component waits until hydration is complete, then uses
`IntersectionObserver` to replay transitions whenever marked content re-enters
the viewport. It does not attach a continuous scroll listener.

Reveal effects and ambient background motion are disabled through
`prefers-reduced-motion`. Images include descriptive alternative text, and
interactive project covers expose keyboard focus states.

## SEO and performance

The root layout defines site-wide metadata, authorship and Person structured
data. The Monte Carlo route adds its own canonical URL, social preview and
`SoftwareSourceCode` schema. Next.js generates crawlable sitemap and robots
endpoints from `src/app/sitemap.ts` and `src/app/robots.ts`.

Pages are statically generated. Next.js handles responsive image sizing and
serves supported browsers AVIF or WebP assets. The loading skeleton is reserved
for route transitions and does not replace meaningful first-page content.

## Image credits

Temporary representative photography is used until original project
photography is available:

- Research workspace — Yen Vu / Unsplash
- One Canada Square — Patrick Robert Doyle / Unsplash
- Prosthetic-arm visualisation — ThisisEngineering / Unsplash
- Data-analysis workstation — Daniil Komov / Unsplash

Source URLs are stored beside each homepage image or displayed in the relevant
case-study caption. The prosthetic image should be replaced with an approved
photograph of the team’s real prototype when one becomes available.

## Validation

Run both checks before opening a pull request or deploying:

```bash
bun run lint
bun run build
```

The build may require network access the first time `next/font/google`
downloads the configured Geist font files.

## Deployment

The application uses the existing Vercel project and domain configuration.
Deploy the `production` branch after a feature branch has been reviewed and
merged. No DNS, domain or Vercel-project changes are required for ordinary site
updates.
