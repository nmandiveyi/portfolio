import { Link } from '@tanstack/react-router'

import { SectionHeader } from '@/components/shared/SectionHeader'
import { articles } from '@/data/articles'
import { type } from '@/lib/typography'

export function WritingSection() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24" id="writing">
      <SectionHeader number="04" title="Writing" />

      <div className="max-w-2xl">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to="/article/$slug"
            params={{ slug: article.slug }}
            className="interactive relative block overflow-hidden p-6 no-underline transition-all duration-200 md:p-10"
            style={{ background: 'var(--surface)' }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = 'var(--surface2)'
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = 'var(--surface)'
            }}
          >
            <div className={`mb-4 ${type.eyebrow}`}>{article.tag}</div>

            <div className={`mb-4 ${type.cardTitle}`}>{article.title}</div>

            <div className={`mb-6 ${type.body}`}>{article.excerpt}</div>

            <div className="mb-6 flex flex-wrap gap-[0.4rem]">
              {article.chips.map((chip) => (
                <span
                  key={chip}
                  className={`border border-[var(--dim)] px-[0.6rem] py-[0.2rem] ${type.chip}`}
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
              <span className={type.meta}>{article.date}</span>
              <span className={type.meta}>{article.readTime}</span>
              <span className={`flex items-center gap-2 ${type.action}`}>
                Read <span className="text-[var(--dim)]">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
