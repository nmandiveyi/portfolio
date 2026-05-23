export const siteUrl = 'https://nmandiveyi.com'

export const seo = {
  siteName: 'Ngonidzashe Mandiveyi',
  locale: 'en_CA',
  defaultTitle:
    'Ngonidzashe Mandiveyi — Senior Engineer at McKinsey & Company | Toronto',
  defaultDescription:
    'Portfolio of Ngonidzashe Mandiveyi, Senior Engineer I at McKinsey & Company in Toronto. AI-enabled automation, invoice reconciliation at $5B+ procurement scale, founder of NOCURA (Canadian PR / IRCC NOC analysis), and builder of FairSign.',
} as const

export function canonicalUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl}${normalized === '/' ? '' : normalized}`
}

export function pageTitle(page?: string) {
  if (!page) return seo.defaultTitle
  return `${page} | ${seo.siteName}`
}

export function personJsonLd() {
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
    url: siteUrl,
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
      'FairSign',
      'FastAPI',
      'TypeScript',
      'Express Entry',
      'IRCC NOC codes',
    ],
  }
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seo.siteName,
    url: siteUrl,
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
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: 'Ngonidzashe Mandiveyi',
      url: siteUrl,
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

export function openGraphMeta(options: {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
}) {
  const url = canonicalUrl(options.path ?? '/')
  return [
    { property: 'og:type', content: options.type ?? 'website' },
    { property: 'og:site_name', content: seo.siteName },
    { property: 'og:title', content: options.title },
    { property: 'og:description', content: options.description },
    { property: 'og:url', content: url },
    { property: 'og:locale', content: seo.locale },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: options.title },
    { name: 'twitter:description', content: options.description },
  ]
}
