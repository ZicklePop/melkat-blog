import type { CollectionEntry } from 'astro:content'
import type { MarkdownInstance } from 'astro'

export const noDrafts = ({ data }: CollectionEntry<'posts'>) => !data.draft

export const noFeedDrafts = (o: { draft: boolean }): boolean => !o.draft

export const hasLink = (o: MarkdownInstance<Record<string, any>>): boolean =>
  !!o.frontmatter.link

export const hasTags = (o: MarkdownInstance<Record<string, any>>): boolean =>
  !!o.frontmatter.tags
