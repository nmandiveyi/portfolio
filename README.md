# Ngonidzashe Mandiveyi — Portfolio

Personal portfolio site built with React 19, Vite, Tailwind CSS v4, TanStack Router, TanStack Query, Zustand, and shadcn/ui.

## Stack

- **React 19** + TypeScript
- **Vite** — dev server and production build
- **Tailwind CSS v4** — styling and design tokens
- **shadcn/ui** — UI primitives (Button)
- **TanStack Router** — type-safe routing
- **TanStack Query** — ready for external API fetching
- **Zustand** — client state (mobile navigation)
- **React Hook Form + Zod** — ready for future forms

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run TypeScript checks |

## Project structure

```
src/
  components/     # Layout, sections, pages, UI
  content/        # Article body components
  data/           # Typed site content
  routes/         # TanStack Router file routes
  stores/         # Zustand stores
  styles/         # Theme and fonts
```

## Adding content

- **Projects, experience, interests:** edit files in `src/data/`
- **New article:** add metadata to `src/data/articles.ts`, create content in `src/content/articles/`, register in `src/content/articles/index.ts`

## Deployment

Build output goes to `dist/`. Configure your static host with SPA fallback so client-side routes (e.g. `/article/...`) resolve correctly.
