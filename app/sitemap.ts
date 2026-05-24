import type { MetadataRoute } from 'next'

import { articles } from '@/data/articles'
import { getSiteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...articles.map((article) => ({
      url: `${base}/article/${article.slug}`,
      lastModified: new Date('2024-02-01'),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ]
}
