import { Link } from '@tanstack/react-router'

import { site } from '@/data/site'
import { type } from '@/lib/typography'
import { useUiStore } from '@/stores/ui-store'

export function Navigation() {
  const { isMobileNavOpen, setMobileNavOpen, toggleMobileNav } = useUiStore()

  const navLinkClass = `${type.nav} no-underline transition-colors duration-200 hover:text-[var(--text)]`
  const mobileNavLinkClass = `${type.nav} block text-sm no-underline transition-colors duration-200 hover:text-[var(--text)] md:text-[13px]`

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-[100] flex items-center justify-between px-6 py-6 md:px-12"
      style={{
        background: 'linear-gradient(to bottom, rgba(13,13,11,0.95) 0%, transparent 100%)',
      }}
    >
      <Link to="/" className={`${type.navBrand} no-underline`}>
        {site.shortName}
      </Link>

      <button
        type="button"
        className="flex h-5 w-6 flex-col items-center justify-center gap-1.5 md:hidden"
        onClick={toggleMobileNav}
        aria-label={isMobileNavOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileNavOpen}
      >
        <span
          className={`h-px w-full bg-[var(--accent)] transition-all duration-300 ${isMobileNavOpen ? 'translate-y-[5px] rotate-45' : ''}`}
        />
        <span
          className={`h-px w-full bg-[var(--accent)] transition-all duration-300 ${isMobileNavOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`h-px w-full bg-[var(--accent)] transition-all duration-300 ${isMobileNavOpen ? '-translate-y-[5px] -rotate-45' : ''}`}
        />
      </button>

      <ul className="hidden list-none gap-6 md:flex lg:gap-10">
        {site.navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href={site.links.email} className={navLinkClass}>
            Contact
          </a>
        </li>
      </ul>

      {isMobileNavOpen && (
        <div
          className="fixed top-[72px] right-0 left-0 px-6 py-8 md:hidden"
          style={{
            background: 'rgba(13,13,11,0.98)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <ul className="flex list-none flex-col gap-6">
            {site.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileNavOpen(false)}
                  className={mobileNavLinkClass}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.links.email}
                onClick={() => setMobileNavOpen(false)}
                className={`${mobileNavLinkClass} text-[var(--accent)]`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
