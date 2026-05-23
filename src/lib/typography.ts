/** Shared typography scale — same role = same size site-wide */
export const type = {
  sectionNumber:
    'font-mono text-xs font-light tracking-[0.15em] text-[var(--accent2)] md:text-[13px]',
  sectionTitle:
    'font-serif text-[clamp(28px,3vw,42px)] font-normal tracking-[-0.01em] text-[var(--text)]',

  lead: 'font-serif text-[clamp(20px,2vw,26px)] leading-[1.6] font-normal text-[var(--text)]',
  cardTitle:
    'font-serif text-[clamp(24px,3vw,28px)] leading-[1.3] font-normal tracking-[-0.01em] text-[var(--text)]',
  roleTitle: 'text-lg font-semibold tracking-[-0.01em] text-[var(--text)]',

  eyebrow:
    'font-mono text-xs font-medium tracking-[0.15em] text-[var(--accent2)] uppercase md:text-[13px]',
  eyebrowAccent:
    'font-mono text-xs font-medium tracking-[0.1em] text-[var(--accent)] uppercase md:text-[13px]',
  label:
    'font-mono text-xs font-light tracking-[0.15em] text-[var(--muted)] uppercase md:text-[13px]',
  meta:
    'font-mono text-xs font-light tracking-[0.12em] text-[var(--muted)] uppercase md:text-[13px]',
  body: 'font-mono text-sm leading-[1.9] font-light text-[var(--muted)] md:text-[15px]',
  bodyEmphasis: 'font-mono text-sm font-normal text-[var(--text)] md:text-[15px]',
  bodyAccent: 'font-mono text-sm font-normal text-[var(--accent)] md:text-[15px]',
  chip:
    'font-mono text-xs font-light tracking-[0.1em] text-[var(--muted)] uppercase md:text-[13px]',
  action:
    'font-mono text-xs font-medium tracking-[0.1em] text-[var(--accent)] uppercase md:text-[13px]',
  badge:
    'font-mono text-xs font-medium tracking-[0.1em] text-[var(--accent)] uppercase md:text-[13px]',

  nav: 'font-mono text-xs font-medium tracking-[0.12em] text-[var(--muted)] uppercase md:text-[13px]',
  navBrand:
    'font-mono text-xs font-light tracking-[0.15em] text-[var(--accent)] uppercase md:text-[13px]',
  footer: 'font-mono text-xs font-light tracking-[0.1em] text-[var(--muted)] md:text-[13px]',

  heroLocation:
    'font-mono text-xs font-light tracking-[0.2em] text-[var(--accent2)] uppercase md:text-[13px]',
  heroSubtitle:
    'font-mono text-xs font-medium tracking-[0.08em] text-[var(--muted)] uppercase md:text-[13px]',
  heroBio:
    'font-mono text-sm leading-[1.8] font-light text-[var(--muted)] md:text-[15px]',
  statLabel:
    'font-mono text-xs font-light tracking-[0.15em] text-[var(--muted)] uppercase md:text-[13px]',
} as const
