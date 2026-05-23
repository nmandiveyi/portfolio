import { site } from '@/data/site'
import { type } from '@/lib/typography'

const footerLinks = [
  { label: 'LinkedIn', href: site.links.linkedin },
  { label: 'GitHub', href: site.links.github },
  { label: 'Email', href: site.links.email },
] as const

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-[var(--border)] px-6 py-8 md:flex-row md:gap-0 md:px-12 md:py-12">
      <span className={type.footer}>
        © {site.copyrightYear} {site.name}
      </span>

      <div className="flex gap-6 md:gap-8">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`${type.footer} no-underline transition-colors duration-200 hover:text-[var(--accent)]`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
