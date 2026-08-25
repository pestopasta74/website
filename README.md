# Preston Whiteman portfolio

A personal portfolio built with Next.js, TypeScript and Tailwind CSS.

## Run the site locally

This project uses Bun. From this folder, run:

```bash
bun install
bun run dev
```

Then open `http://localhost:3000`.

## Add or update a project

All featured projects live in `src/data/projects.ts`. Each project has its own
description, tags, status and list of links. The homepage builds the project
cards automatically from this file.

Add links like this:

```ts
links: [
  {
    label: "Live demo",
    href: "https://your-project.example.com",
    kind: "demo",
  },
  {
    label: "Source code",
    href: "https://github.com/pestopasta74/your-project",
    kind: "source",
  },
],
```

Use `active` for a currently maintained project, `in-development` for work that
is still being prepared, and `completed` for finished work.

## Validate changes

```bash
bun run lint
bun run build
```

The production website is intended to remain connected to the existing GitHub
repository and Vercel project when the rebuild is approved for release.
