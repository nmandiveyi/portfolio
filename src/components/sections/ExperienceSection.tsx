import { SectionHeader } from '@/components/shared/SectionHeader'
import { experiences } from '@/data/experience'
import { type } from '@/lib/typography'

export function ExperienceSection() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24" id="work">
      <SectionHeader number="02" title="Experience" />

      <div className="flex flex-col">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="group relative grid grid-cols-1 gap-6 border-b border-[var(--border)] py-8 md:grid-cols-[200px_1fr_auto] md:gap-12 md:py-10"
          >
            <div className="pointer-events-none absolute -top-0 -right-6 -bottom-0 -left-6 bg-[var(--surface)] opacity-0 transition-opacity duration-[250ms] group-hover:opacity-100 md:-right-12 md:-left-12" />

            <div className="relative">
              <div className={`mb-[0.4rem] ${type.eyebrowAccent}`}>{exp.company}</div>
              <div className={`${type.meta} normal-case`}>{exp.period}</div>
            </div>

            <div className="relative">
              <div className={`mb-3 ${type.roleTitle}`}>{exp.role}</div>
              <div className={type.body}>{exp.description}</div>
              <div
                className={`mt-4 inline-flex items-center gap-[0.4rem] border px-3 py-[0.3rem] ${type.badge}`}
                style={{ borderColor: 'rgba(196,169,110,0.3)' }}
              >
                {exp.highlight}
              </div>
            </div>

            <div className="relative hidden self-center text-[18px] text-[var(--dim)] md:block">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
