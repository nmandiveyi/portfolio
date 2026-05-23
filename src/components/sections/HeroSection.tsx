import { Button } from '@/components/ui/button'
import { site } from '@/data/site'
import { type } from '@/lib/typography'

export function HeroSection() {
  return (
    <section className="relative grid min-h-screen grid-cols-1 overflow-hidden px-6 md:px-12 lg:grid-cols-2">
      <div
        className="pointer-events-none absolute -top-[20%] -right-[10%] h-[600px] w-[600px]"
        style={{
          background: 'radial-gradient(circle, rgba(196,169,110,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="flex flex-col justify-center pt-24 pb-16 lg:pr-16">
        <p
          className={`mb-8 flex animate-[fadeUp_0.6s_ease_0.1s_forwards] items-center gap-4 opacity-0 ${type.heroLocation}`}
        >
          <span className="block h-px w-8 bg-[var(--accent2)]" />
          {site.location}
        </p>

        <h1 className="mb-[0.15em] animate-[fadeUp_0.6s_ease_0.25s_forwards] font-serif text-[clamp(52px,6vw,88px)] leading-[1.0] font-normal tracking-[-0.02em] text-[var(--text)] opacity-0">
          Ngonidzashe
        </h1>

        <p
          className={`mt-2 mb-10 animate-[fadeUp_0.6s_ease_0.4s_forwards] opacity-0 ${type.heroSubtitle}`}
        >
          {site.title}
        </p>

        <p
          className={`mb-12 max-w-[420px] animate-[fadeUp_0.6s_ease_0.55s_forwards] opacity-0 ${type.heroBio}`}
        >
          {site.bio}
        </p>

        <div className="flex animate-[fadeUp_0.6s_ease_0.7s_forwards] items-center gap-4 opacity-0">
          <Button asChild>
            <a href={site.links.email}>Get in touch →</a>
          </Button>
          <Button variant="outline" asChild>
            <a href={site.links.github}>GitHub ↗</a>
          </Button>
        </div>
      </div>

      <div className="relative flex flex-col justify-end border-t border-[var(--border)] pt-8 pb-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
        <div className="mb-8 grid animate-[fadeUp_0.6s_ease_0.4s_forwards] grid-cols-2 gap-[2px] opacity-0 lg:mb-12">
          {site.stats.map((stat) => (
            <div
              key={stat.label}
              className="relative px-4 py-5 md:px-6 md:py-7"
              style={{ background: 'var(--surface)' }}
            >
              <div className="absolute top-0 right-0 left-0 h-px bg-[var(--dim)]" />
              <div className="mb-[0.4rem] font-serif text-[42px] leading-none font-normal text-[var(--accent)]">
                {stat.num}
              </div>
              <div className={type.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex animate-[fadeUp_0.6s_ease_0.55s_forwards] flex-wrap gap-2 opacity-0">
          {site.techTags.map((tech) => (
            <span
              key={tech}
              className={`border border-[var(--dim)] px-3 py-[0.35rem] transition-all duration-200 hover:border-[var(--accent2)] hover:text-[var(--accent)] ${type.chip}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-12 hidden items-center gap-3 lg:flex">
        <div className="relative h-px w-10 overflow-hidden bg-[var(--dim)]">
          <div className="absolute top-0 -left-full h-full w-full animate-[scrollAnim_2s_ease-in-out_infinite] bg-[var(--accent2)]" />
        </div>
        <span className={type.meta}>Scroll</span>
      </div>
    </section>
  )
}
