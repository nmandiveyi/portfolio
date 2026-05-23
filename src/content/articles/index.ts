import type { ComponentType } from 'react'

import { PTorridusContent } from '@/content/articles/p-torridus-extremophile'
import type { ArticleSlug } from '@/data/articles'

export const articleContent: Record<ArticleSlug, ComponentType> = {
  'p-torridus-extremophile': PTorridusContent,
}
