import { SectionHeader } from '@/components/shared/SectionHeader'
import { site } from '@/data/site'
import { type } from '@/lib/typography'

export function AboutSection() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24" id="about">
      <SectionHeader number="01" title="About" />

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-24">
        <div className={type.lead}>
          Software engineer specializing in{' '}
          <em className="text-[var(--accent)] italic">AI-enabled systems</em> that actually ship. I
          care about clean architecture, measurable outcomes, and building things that last — whether
          inside a client engagement or as a{' '}
          <em className="text-[var(--accent)] italic">solo founder</em>.
        </div>

        <div className="flex flex-col">
          {site.aboutDetails.map((detail) => (
            <div
              key={detail.label}
              className="flex items-center justify-between border-b border-[var(--border)] py-[1.1rem]"
            >
              <span className={type.label}>{detail.label}</span>
              {'link' in detail && detail.link ? (
                <a href={detail.link} className={`text-right no-underline ${type.bodyAccent}`}>
                  {detail.value}
                </a>
              ) : (
                <span className={`text-right whitespace-pre-line ${type.bodyEmphasis}`}>
                  {detail.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
