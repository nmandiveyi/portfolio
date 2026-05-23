import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from '@/components/pages/HomePage'
import {
  canonicalUrl,
  openGraphMeta,
  personJsonLd,
  seo,
  webSiteJsonLd,
} from '@/lib/seo'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [
      { title: seo.defaultTitle },
      { name: 'description', content: seo.defaultDescription },
      { name: 'author', content: seo.siteName },
      ...openGraphMeta({
        title: seo.defaultTitle,
        description: seo.defaultDescription,
        path: '/',
      }),
    ],
    links: [{ rel: 'canonical', href: canonicalUrl('/') }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(personJsonLd()),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify(webSiteJsonLd()),
      },
    ],
  }),
})
