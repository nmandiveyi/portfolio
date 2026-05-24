# Ngonidzashe Mandiveyi — Portfolio

Personal portfolio site built with Next.js 16, React 19, Tailwind CSS v4, and shadcn/ui.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** — styling and design tokens
- **shadcn/ui** — UI primitives (Button)
- **Zustand** — client state (mobile navigation)

## Getting started

```bash
pnpm install
export NEXT_PUBLIC_SITE_URL=http://localhost:3001
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001).

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server on port 3001 |
| `pnpm build` | Production build |
| `pnpm start` | Run production server on port 3001 |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript check |

## Project structure

```
app/              # Next.js App Router (layout, pages, sitemap)
src/
  components/     # Layout, sections, pages, UI
  content/        # Article body components
  data/           # Typed site content
  stores/         # Zustand stores
  styles/         # Theme tokens
infra/            # Terraform (DigitalOcean App Platform + Cloudflare)
```

## Adding content

- **Projects, experience, interests:** edit files in `src/data/`
- **New article:** add metadata to `src/data/articles.ts`, create content in `src/content/articles/`, register in `src/content/articles/index.ts`

## Deployment

- **App:** DigitalOcean App Platform runs `pnpm run build` then `pnpm start` (port 3001) on push to `main`
- **Infra:** `terraform apply` from `infra/environments/prod` (local state)
- **CI:** GitHub Actions runs lint, typecheck, and build on PRs to `main`

Set `NEXT_PUBLIC_SITE_URL` to your canonical origin (e.g. `https://www.nmandiveyi.com`) in App Platform and locally for correct metadata/sitemap URLs.
