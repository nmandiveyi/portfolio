import { SectionHeader } from '@/components/shared/SectionHeader'
import { interests } from '@/data/interests'
import { type } from '@/lib/typography'

export function InterestsSection() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24" id="interests">
      <SectionHeader number="05" title="Interests" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {interests.map((interest, index) => (
          <div
            key={interest.title}
            className="group relative border border-[var(--border)] p-6 transition-all duration-300 md:p-8"
            style={{ background: 'var(--surface)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--surface2)'
              e.currentTarget.style.borderColor = 'var(--dim)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--surface)'
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
          >
            <div className={`absolute top-6 right-6 opacity-30 ${type.sectionNumber}`}>
              0{index + 1}
            </div>

            <h3 className={`mb-4 ${type.cardTitle}`}>{interest.title}</h3>

            <p className={`mb-6 ${type.body}`}>{interest.description}</p>

            <div className="flex flex-wrap gap-2">
              {interest.tags.map((tag) => (
                <span
                  key={tag}
                  className={`border border-[var(--dim)] px-2 py-1 transition-all duration-200 hover:border-[var(--accent2)] hover:text-[var(--accent)] ${type.chip}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
