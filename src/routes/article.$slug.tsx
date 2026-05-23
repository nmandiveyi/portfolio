import { createFileRoute, notFound } from '@tanstack/react-router'

import { ArticlePage } from '@/components/pages/ArticlePage'
import { getArticleBySlug, isArticleSlug, type ArticleSlug } from '@/data/articles'
import {
  articleJsonLd,
  canonicalUrl,
  openGraphMeta,
  pageTitle,
} from '@/lib/seo'

export const Route = createFileRoute('/article/$slug')({
  beforeLoad: ({ params }) => {
    if (!isArticleSlug(params.slug)) {
      throw notFound()
    }
  },
  head: ({ params }) => {
    const article = getArticleBySlug(params.slug)!
    const title = pageTitle(article.title)

    return {
      meta: [
        { title },
        { name: 'description', content: article.excerpt },
        ...openGraphMeta({
          title,
          description: article.excerpt,
          path: `/article/${article.slug}`,
          type: 'article',
        }),
      ],
      links: [{ rel: 'canonical', href: canonicalUrl(`/article/${article.slug}`) }],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(articleJsonLd(article)),
        },
      ],
    }
  },
  component: ArticleRoute,
})

function ArticleRoute() {
  const { slug } = Route.useParams()
  return <ArticlePage slug={slug as ArticleSlug} />
}
