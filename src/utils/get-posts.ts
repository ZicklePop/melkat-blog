import { hasLink, hasTags } from './filter'
import { uniq } from './uniques'
import getDomain from './get-domain'
import countKeys from './count-keys'
import type { MarkdownInstance } from 'astro'

// Domains

export const getAllDomains = (
  posts: MarkdownInstance<Record<string, any>>[]
): any[] =>
  uniq(
    posts.filter(hasLink).map(({ frontmatter: { link } }) => getDomain(link))
  )

export const getDomainsByCount = (
  posts: MarkdownInstance<Record<string, any>>[]
): { key: string; count: number }[] => {
  const data: { [key: string]: number } = {}
  posts.forEach(({ frontmatter: { link } }) => {
    if (link) {
      const domain = getDomain(link)
      data[domain] = data[domain] ? data[domain] + 1 : 1
    }
  })
  return countKeys(data)
}

export const getPostsByDomain = (
  posts: MarkdownInstance<Record<string, any>>[],
  domain: string
): MarkdownInstance<Record<string, any>>[] =>
  posts.filter(
    (o: MarkdownInstance<Record<string, any>>) =>
      getDomain(o.frontmatter.link) === domain
  )

// Tags

export const getAllTags = (
  posts: MarkdownInstance<Record<string, any>>[]
): any[] => {
  posts = posts.filter(hasTags)
  let allTags: string[] = []
  posts.forEach(({ frontmatter: { tags } }) =>
    tags.forEach((tag: string) => allTags.push(tag))
  )
  return uniq(allTags)
}

export const getTagsByCount = (
  posts: MarkdownInstance<Record<string, any>>[]
) => {
  const data: { [x: string]: number } = {}
  posts.forEach(({ frontmatter: { tags } }) => {
    if (tags) {
      tags.forEach((tag: string | number) => {
        data[tag] = data[tag] ? data[tag] + 1 : 1
      })
    }
  })
  return countKeys(data)
}

export const getPostsByTag = (
  posts: MarkdownInstance<Record<string, any>>[],
  tag: string
): MarkdownInstance<Record<string, any>>[] =>
  posts.filter(o => o.frontmatter.tags && o.frontmatter.tags.includes(tag))
