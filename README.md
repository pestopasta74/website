# Preston Whiteman — personal portfolio

A personal portfolio for a first-year BSc Mathematics and Physics student at the University of Bath, graduating in 2029.

Live site: https://pestopasta74.com

## Pages

- `/`: selected projects, an interactive option-pricing experiment, academic context and contact details
- `/projects/monte-carlo-option-pricing`: model decisions, recorded convergence results, data and validation limits
- `/projects/research-impact`: Bath Insights internship and research-evidence workflow
- `/journey`: filterable experience timeline
- `/life`: sport, student leadership, outreach and volunteering, including Bath Marrow
- `/photos`: filterable photographs with captions and image descriptions

## Development

Next.js 16, React 19, TypeScript and Tailwind CSS 4. Dependencies are managed with Bun and `bun.lock`.

```sh
bun install
bun run dev
bun run lint
bun run build
```

The project uses locally hosted Geist fonts and the webpack build. The browser experiment is a fixed-seed demonstration; the linked Python repository contains the full numerical validation.

Display preferences support light/dark themes, reduced motion and optional sound (off by default). Personal photographs live in `public/photos`; their shared captions and descriptions are in `src/data/photos.ts`.

## Deployment

The reviewed release is on `main`. The existing Vercel project is connected to `production`, which is fast-forwarded to the approved release commit for publication. Keep these release refs aligned when publishing. Existing domain settings and image optimisation are preserved.

Sitemap, robots instructions, canonical URLs, social metadata and the PW monogram icons are included. Never commit local reports, private source photos, credentials, `.next` output or dependency directories.
