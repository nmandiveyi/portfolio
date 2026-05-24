import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ArticlePage } from '@/components/pages/ArticlePage'
import { JsonLd } from '@/components/shared/JsonLd'
import { articles, getArticleBySlug, isArticleSlug } from '@/data/articles'
import { articleJsonLd, canonicalUrl, pageTitle, seo } from '@/lib/seo'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  if (!isArticleSlug(slug)) {
    return { title: 'Not found' }
  }

  const article = getArticleBySlug(slug)!
  const title = pageTitle(article.title)

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/article/${article.slug}`,
    },
    openGraph: {
      type: 'article',
      locale: seo.locale,
      siteName: seo.siteName,
      title,
      description: article.excerpt,
      url: canonicalUrl(`/article/${article.slug}`),
    },
    twitter: {
      card: 'summary',
      title,
      description: article.excerpt,
    },
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  if (!isArticleSlug(slug)) {
    notFound()
  }

  const article = getArticleBySlug(slug)!

  return (
    <>
      <JsonLd data={articleJsonLd(article)} />
      <ArticlePage slug={slug} />
    </>
  )
}
