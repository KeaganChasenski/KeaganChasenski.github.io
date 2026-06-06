# Keagan Chasenski — Personal Site

[![Build Status](https://img.shields.io/github/actions/workflow/status/KeaganChasenski/personal-site/node.js.yml?branch=main)](https://github.com/KeaganChasenski/personal-site/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

Personal portfolio and photography website for [Keagan Chasenski](https://keaganchasenski.com) — engineer, safari guide, and founder.

**[keaganchasenski.com →](https://keaganchasenski.com)**

---

## Stack

- **Next.js 16** (App Router, static export via `output: 'export'`)
- **React 19** with TypeScript strict mode
- **Tailwind CSS v4** with a custom CSS design system (tokens, components, dark mode)
- **Biome** for linting and formatting
- **Vitest** for unit and component tests
- **GitHub Pages** for hosting (deploys automatically on merge to `main`)

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, portrait, and navigation |
| `/about` | Background, credentials, interests, and stats |
| `/resume` | Work experience, education, skills, and courses |
| `/projects` | Featured and side projects (SafariSense, etc.) |
| `/photography` | Masonry photo gallery with lightbox — wildlife, birds, landscape, portraits |
| `/writing` | Blog posts (Markdown) and external writing links |
| `/stats` | Personal, guiding, and site statistics |
| `/contact` | Contact email and social links |

---

## Photography Portfolio

The `/photography` page is a full masonry gallery built without external image libraries:

- **CSS columns** masonry layout — images preserve natural aspect ratios
- **Custom lightbox** with keyboard navigation (← → Esc), click-to-close backdrop
- **Category filtering** — Wildlife, Birds, Landscape, Portraits
- **Per-category blurbs** and lazy-loaded images
- All images live in `public/images/photography/`
- Image metadata (src, alt, title, category) is in `src/data/photography.ts`

To add or update photos:

1. Drop images into `public/images/photography/`
2. Add entries to `src/data/photography.ts`

---

## Stats

Statistics are split across three data files:

| File | Content |
|---|---|
| `src/data/stats/personal.tsx` | Age (live counter), countries visited, current city |
| `src/data/stats/random.ts` | Guiding stats — years, game drives, bird species, etc. |
| `src/data/stats/site.ts` | GitHub repo stats (fetched at build time) |

The **About page** shows Personal + Guiding stats in a two-column "By the numbers" section.
The **Stats page** shows all three.

Update `src/data/stats/random.ts` with your actual numbers — the current values are estimates.

---

## Content

| What | Where |
|---|---|
| About page copy | `src/data/about.ts` |
| Work experience | `src/data/resume/work.ts` |
| Education | `src/data/resume/degrees.ts` |
| Skills | `src/data/resume/skills.ts` |
| Projects | `src/data/projects.ts` |
| Blog posts | `content/writing/*.md` (Markdown with frontmatter) |
| External writing links | `src/data/writing.ts` |
| Photography images | `src/data/photography.ts` + `public/images/photography/` |
| Contact details | `src/data/contact.ts` |
| Navigation routes | `src/data/routes.ts` |

---

## Development

```bash
npm install
npm run dev          # Dev server at localhost:3000
```

**Useful commands:**

```bash
npm run format       # Format with Prettier + Biome (run before committing)
npm run lint         # Biome linting
npm run type-check   # TypeScript checking
npm test             # Vitest test suite
npm run build        # Production build + static export
```

**File-scoped checks (faster):**

```bash
npx tsc --noEmit path/to/file.tsx    # Type check one file
npx biome check path/to/file.tsx     # Lint one file
npm test -- ComponentName            # Run one test
```

---

## Project Structure

```
app/                         → Next.js App Router pages and layouts
app/styles/                  → Modular CSS (tokens, base, components, layout, pages)
src/components/              → React components organised by feature
  About/                     → About page markdown renderer
  Photography/               → Masonry gallery + lightbox
  Projects/                  → Project card
  Resume/                    → Experience, education, skills
  Stats/                     → Personal, guiding, and site stat tables
  Template/                  → Navigation, footer, theme toggle
  Writing/                   → Blog post renderer
src/data/                    → Static content and configuration
  photography.ts             → Photo metadata and categories
  projects.ts                → Project entries
  routes.ts                  → Navigation links
  about.ts                   → About page Markdown
  stats/                     → personal.tsx · random.ts · site.ts
  resume/                    → work.ts · degrees.ts · skills.ts · courses.ts
content/writing/             → Blog posts (Markdown + frontmatter)
public/images/               → Static images
  photography/               → 32 photography images (wildlife, birds, landscape, portraits)
```

---

## Key Patterns

- **Theming:** `data-theme` attribute on `<html>`, persisted in `localStorage`. Tokens defined in `app/styles/tokens/colors.css`, dark overrides in `app/styles/dark-mode.css`.
- **Static export:** `output: 'export'` for GitHub Pages — no server features, `images.unoptimized: true`.
- **CSS architecture:** No CSS-in-JS. All styles live in `app/styles/` as plain CSS using custom properties. Token names follow `--color-*`, `--spacing-*`, `--text-*` conventions.
- **Navigation:** Add or reorder routes in `src/data/routes.ts` — Navigation and SlideMenu both consume this.
- **Photography:** Drop images in `public/images/photography/`, add an entry to `src/data/photography.ts`. Supports single or multiple categories per image.
- **Blog posts:** Create a `.md` file in `content/writing/` with `title`, `date`, `description` frontmatter. Slug is derived from filename.
- **External writing:** Add to `src/data/writing.ts`, sorted newest first by date.
- **Metadata:** Each page exports a `metadata` object using `createPageMetadata()` from `src/lib/metadata.ts`. Override `openGraph` and `twitter` on sub-pages — don't rely on the root layout to propagate them.

---

## Git Workflow

- Topic branch per task — never commit directly to `main`
- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`
- Run `npm run format` before committing (CI enforces it)
- Deploy triggers automatically when a PR merges to `main`

---

## License

[MIT](./LICENSE)
