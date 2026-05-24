export const articles = [
  {
    slug: 'p-torridus-extremophile',
    tag: 'Science · Biology',
    title: 'Life at the Edge: How P. torridus Survives at pH 0',
    date: 'Feb 2024',
    readTime: '6 min read',
    excerpt:
      'Picrophilus torridus stretches the boundaries of where life can exist — thriving in near-boiling acid where proteins should denature and cells should die. A look at the extremophile that rewrites the rules.',
    chips: ['Extremophiles', 'Microbiology', 'Evolution'],
    subtitle:
      'Picrophilus torridus stretches the boundaries of where life can exist — thriving in near-boiling acid where proteins should denature and cells should die.',
  },
] as const

export type ArticleSlug = (typeof articles)[number]['slug']

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug)
}

export function isArticleSlug(slug: string): slug is ArticleSlug {
  return articles.some((article) => article.slug === slug)
}
