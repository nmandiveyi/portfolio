import { type } from '@/lib/typography'

interface SectionHeaderProps {
  number: string
  title: string
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="mb-16 flex items-baseline gap-8">
      <span className={type.sectionNumber}>{number}</span>
      <h2 className={type.sectionTitle}>{title}</h2>
      <div className="h-px flex-1 bg-[var(--dim)]" />
    </div>
  )
}

export function SectionDivider() {
  return (
    <div className="page-x">
      <div className="h-px bg-[var(--border)]" />
    </div>
  )
}
