import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-[var(--accent2)] uppercase">
        404
      </p>
      <h1 className="mb-6 font-serif text-[42px] text-[var(--text)]">Page not found</h1>
      <Link
        to="/"
        className="font-mono text-[11px] tracking-[0.12em] text-[var(--muted)] uppercase no-underline transition-colors hover:text-[var(--accent)]"
      >
        ← Back to site
      </Link>
    </div>
  )
}
