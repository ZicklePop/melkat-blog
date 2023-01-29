import type { MarkdownInstance } from 'astro'

export const byDate = (
  a: MarkdownInstance<Record<string, any>>,
  b: MarkdownInstance<Record<string, any>>
): number =>
  new Date(b.frontmatter.date).valueOf() -
  new Date(a.frontmatter.date).valueOf()

export const byJsonDate = (
  a: { date_published: string | number | Date },
  b: { date_published: string | number | Date }
): number =>
  new Date(b.date_published).valueOf() - new Date(a.date_published).valueOf()

export const byRssDate = (
  a: { pubDate: string | number | Date },
  b: { pubDate: string | number | Date }
): number => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()

export const byCount = (a: { count: number }, b: { count: number }): number =>
  b.count - a.count
