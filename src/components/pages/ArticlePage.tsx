import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'

import { articleContent } from '@/content/articles'
import type { ArticleSlug } from '@/data/articles'
import { getArticleBySlug } from '@/data/articles'
import { site } from '@/data/site'

interface ArticlePageProps {
  slug: ArticleSlug
}

export function ArticlePage({ slug }: ArticlePageProps) {
  const article = getArticleBySlug(slug)!
  const Content = articleContent[slug]
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)

    const handleScroll = () => {
      const scrolled = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? Math.min(100, Math.round((scrolled / docHeight) * 100)) : 0
      setProgress(pct)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [slug])

  return (
    <div>
      <nav
        className="fixed top-0 right-0 left-0 z-[100] flex items-center justify-between border-b px-6 py-6 md:px-12"
        style={{ background: 'rgba(13,13,11,0.97)', borderColor: 'var(--border)' }}
      >
        <Link
          to="/"
          className="group flex items-center gap-3 font-mono text-[11px] font-light tracking-[0.12em] text-[var(--muted)] uppercase no-underline transition-colors duration-200 hover:text-[var(--accent)]"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
          Back to site
        </Link>

        <div className="relative h-px w-[120px] overflow-hidden bg-[var(--dim)]">
          <div
            className="absolute top-0 left-0 h-full transition-all duration-100"
            style={{ background: 'var(--accent2)', width: `${progress}%` }}
          />
        </div>

        <a
          href={site.links.email}
          className="hidden font-mono text-[11px] font-light tracking-[0.12em] text-[var(--muted)] uppercase no-underline md:block"
        >
          {site.email}
        </a>
      </nav>

      <div className="mx-auto max-w-[720px] px-6 pt-32 pb-24 md:px-12">
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-4 font-mono text-[10px] font-medium tracking-[0.2em] text-[var(--accent2)] uppercase">
            <span className="block h-px w-6 bg-[var(--accent2)]" />
            {article.tag}
          </div>

          <h1 className="mb-6 font-serif text-[clamp(36px,5vw,60px)] leading-[1.1] font-normal tracking-[-0.02em] text-[var(--text)]">
            Life at the Edge: How{' '}
            <em className="text-[var(--accent)] italic">P. Torridus</em> Survives at pH 0
          </h1>

          <div className="mb-10 font-serif text-[20px] leading-[1.5] font-normal text-[var(--muted)] italic">
            {article.subtitle}
          </div>

          <div className="flex items-center gap-8 border-t border-b border-[var(--border)] py-6">
            <span className="font-mono text-[11px] font-normal tracking-[0.05em] text-[var(--text)]">
              {site.name}
            </span>
            <span className="h-4 w-px bg-[var(--dim)]" />
            <span className="font-mono text-[10px] font-light tracking-[0.1em] text-[var(--muted)] uppercase">
              {article.date}
            </span>
            <span className="h-4 w-px bg-[var(--dim)]" />
            <span className="font-mono text-[10px] font-light tracking-[0.1em] text-[var(--muted)] uppercase">
              {article.readTime}
            </span>
          </div>
        </div>

        <div className="text-[var(--text)]">
          <Content />
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-[var(--border)] pt-12">
          <Link
            to="/"
            className="group flex items-center gap-3 font-mono text-[11px] font-light tracking-[0.12em] text-[var(--muted)] uppercase no-underline transition-colors duration-200 hover:text-[var(--accent)]"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            Back to site
          </Link>
        </div>
      </div>
    </div>
  )
}
