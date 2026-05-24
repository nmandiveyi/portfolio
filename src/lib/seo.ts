/** Public site origin for metadata, sitemap, and JSON-LD (no trailing slash). */
export function getSiteUrl(): URL {
  const fallback = 'http://localhost:3001'
  let raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallback
  raw = raw.replace(/\/+$/, '')
  try {
    return new URL(raw)
  } catch {
    return new URL(fallback)
  }
}

export function getSiteOrigin(): string {
  return getSiteUrl().origin
}

export const seo = {
  siteName: 'Ngonidzashe Mandiveyi',
  locale: 'en_CA',
  defaultTitle:
    'Ngonidzashe Mandiveyi — Senior Engineer at McKinsey & Company | Toronto',
  defaultDescription:
    'Portfolio of Ngonidzashe Mandiveyi, Senior Engineer I at McKinsey & Company in Toronto. AI-enabled automation, invoice reconciliation at $5B+ procurement scale, and founder of NOCURA (Canadian PR / IRCC NOC analysis).',
} as const

export function canonicalUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  const base = getSiteOrigin()
  return `${base}${normalized === '/' ? '' : normalized}`
}

export function pageTitle(page?: string) {
  if (!page) return seo.defaultTitle
  return `${page} | ${seo.siteName}`
}

export function personJsonLd() {
  const origin = getSiteOrigin()
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ngonidzashe Mandiveyi',
    givenName: 'Ngonidzashe',
    familyName: 'Mandiveyi',
    jobTitle: 'Senior Engineer I',
    worksFor: {
      '@type': 'Organization',
      name: 'McKinsey & Company',
    },
    url: origin,
    email: 'ngonidzashehh@gmail.com',
    sameAs: [
      'https://www.linkedin.com/in/nmandiveyi/',
      'https://github.com/nmandiveyi',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Quest University Canada',
    },
    knowsAbout: [
      'AI-enabled automation',
      'Invoice reconciliation',
      'NOCURA',
      'FastAPI',
      'TypeScript',
      'Express Entry',
      'IRCC NOC codes',
    ],
  }
}

export function webSiteJsonLd() {
  const origin = getSiteOrigin()
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seo.siteName,
    url: origin,
    description: seo.defaultDescription,
    inLanguage: 'en-CA',
    author: {
      '@type': 'Person',
      name: 'Ngonidzashe Mandiveyi',
    },
  }
}

export function articleJsonLd(article: {
  slug: string
  title: string
  excerpt: string
  date: string
  tag: string
}) {
  const origin = getSiteOrigin()
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: 'Ngonidzashe Mandiveyi',
      url: origin,
    },
    publisher: {
      '@type': 'Person',
      name: 'Ngonidzashe Mandiveyi',
    },
    url: canonicalUrl(`/article/${article.slug}`),
    articleSection: article.tag,
    datePublished: '2024-02-01',
    inLanguage: 'en-CA',
  }
}
