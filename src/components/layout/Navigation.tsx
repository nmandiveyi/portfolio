'use client'

import Link from 'next/link'

import { site } from '@/data/site'
import { type } from '@/lib/typography'
import { useUiStore } from '@/stores/ui-store'

export function Navigation() {
  const { isMobileNavOpen, setMobileNavOpen, toggleMobileNav } = useUiStore()

  const navLinkClass = `${type.nav} no-underline transition-colors duration-200 hover:text-[var(--text)]`
  const mobileNavLinkClass = `${type.nav} block text-sm no-underline transition-colors duration-200 hover:text-[var(--text)] md:text-[13px]`

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-[100] flex items-center justify-between page-x py-6"
      style={{
        background: 'linear-gradient(to bottom, rgba(13,13,11,0.95) 0%, transparent 100%)',
      }}
    >
      <Link href="/" className={`${type.navBrand} no-underline`}>
        {site.shortName}
      </Link>

      <button
        type="button"
        className="relative grid h-10 w-10 shrink-0 place-items-center md:hidden"
        onClick={toggleMobileNav}
        aria-label={isMobileNavOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileNavOpen}
      >
        <span
          className={`absolute h-px w-5 origin-center bg-[var(--accent)] transition-all duration-300 ${
            isMobileNavOpen ? 'rotate-45' : '-translate-y-[6px]'
          }`}
        />
        <span
          className={`absolute h-px w-5 bg-[var(--accent)] transition-all duration-300 ${
            isMobileNavOpen ? 'scale-x-0 opacity-0' : ''
          }`}
        />
        <span
          className={`absolute h-px w-5 origin-center bg-[var(--accent)] transition-all duration-300 ${
            isMobileNavOpen ? '-rotate-45' : 'translate-y-[6px]'
          }`}
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
          className="fixed top-[72px] right-0 left-0 page-x py-8 md:hidden"
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
