# Preston Whiteman

Personal portfolio for Preston Whiteman, a Physics with Theoretical Physics
student at the University of Bath. The site presents work across quantitative
finance, research automation, scientific computing and interdisciplinary
engineering.

## Overview

The portfolio is a Next.js application with a data-driven project index and
individual case-study routes. Its visual system is intentionally typographic,
structured and evidence-led, reflecting the work it presents.

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
│   └── projects/              # Project images and other static assets
├── src/
│   ├── app/                   # Pages, layouts and global styles
│   │   └── projects/
│   │       └── monte-carlo-option-pricing/
│   │           └── page.tsx   # Monte Carlo case study
│   └── data/                  # Content shared by routes
│       ├── monte-carlo.ts
│       └── projects.ts
├── eslint.config.mjs
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

Open [http://localhost:3000](http://localhost:3000) in a browser. Use another
port if an existing development server is already running:

```bash
bun run dev -- -p 3001
```

## Content updates

Featured projects are defined in [src/data/projects.ts](src/data/projects.ts).
The homepage reads this collection to render project cards, statuses, tags and
links. Keep project-specific content in `src/data` rather than embedding it in
page components.

Project links support internal case studies and external destinations:

```ts
links: [
  {
    label: "Case study",
    href: "/projects/example",
    kind: "case-study",
  },
  {
    label: "Source",
    href: "https://github.com/your-account/example",
    kind: "source",
  },
],
```

Use `active` for maintained work, `in-development` for work still being built,
and `completed` for finished projects.

## Validation

Run the checks before opening a pull request or deploying:

```bash
bun run lint
bun run build
```

The build may require network access when `next/font/google` needs to download
font files for the first time.

## Deployment

The application is ready for deployment through the existing Vercel project.
Connect the repository, use the default Next.js build settings, and deploy the
`production` branch when the rebuild is approved.
