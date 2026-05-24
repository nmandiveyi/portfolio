'use client'

import { SectionHeader } from '@/components/shared/SectionHeader'
import { projects } from '@/data/projects'
import { type } from '@/lib/typography'

export function ProjectsSection() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24" id="projects">
      <SectionHeader number="03" title="Projects" />

      <div className="max-w-2xl">
        {projects.map((project) => (
          <div
            key={project.title}
            className="interactive group relative overflow-hidden p-6 transition-all duration-200 md:p-10"
            style={{ background: 'var(--surface)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--surface2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--surface)'
            }}
          >
            <div className="pointer-events-none absolute top-8 right-8 font-serif text-[72px] leading-none font-normal text-[var(--border)]">
              {project.num}
            </div>

            <div className={`mb-6 ${type.eyebrow}`}>{project.tag}</div>

            <div className={`mb-4 ${type.cardTitle}`}>{project.title}</div>

            <div className={`mb-8 ${type.body}`}>{project.description}</div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-[0.4rem]">
                {project.chips.map((chip) => (
                  <span
                    key={chip}
                    className={`border border-[var(--dim)] px-[0.6rem] py-[0.2rem] ${type.chip}`}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title}`}
                className="text-[18px] text-[var(--dim)] no-underline transition-colors duration-200 hover:text-[var(--accent)]"
              >
                ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
