import countKeys from './count-keys'
import getDomain from './get-domain'
import type { CollectionEntry } from 'astro:content'
import { hasLink, hasTags } from './filter'
import { uniq } from './uniques'

// Domains

export const getAllDomains = (posts: CollectionEntry<'posts'>[]): any[] =>
  uniq(posts.filter(hasLink).map(({ data: { link } }) => getDomain(link)))

export const getDomainsByCount = (
  posts: CollectionEntry<'posts'>[]
): { key: string; count: number }[] => {
  const data: { [key: string]: number } = {}
  posts.forEach(({ data: { link } }) => {
    if (link) {
      const domain = getDomain(link)
      data[domain] = data[domain] ? data[domain] + 1 : 1
    }
  })
  return countKeys(data)
}

export const getPostsByDomain = (
  posts: CollectionEntry<'posts'>[],
  domain: string
): CollectionEntry<'posts'>[] =>
  posts.filter(
    ({ data }: CollectionEntry<'posts'>) => getDomain(data.link) === domain
  )

// Tags

export const getAllTags = (posts: CollectionEntry<'posts'>[]): any[] => {
  posts = posts.filter(hasTags)
  let allTags: string[] = []
  posts.forEach(({ data: { tags } }) =>
    tags.forEach((tag: string) => allTags.push(tag))
  )
  return uniq(allTags)
}

export const getTagsByCount = (posts: CollectionEntry<'posts'>[]) => {
  const data: { [x: string]: number } = {}
  posts.forEach(({ data: { tags } }) => {
    if (tags) {
      tags.forEach((tag: string | number) => {
        data[tag] = data[tag] ? data[tag] + 1 : 1
      })
    }
  })
  return countKeys(data)
}

export const getPostsByTag = (
  posts: CollectionEntry<'posts'>[],
  tag: string
): CollectionEntry<'posts'>[] =>
  posts.filter(({ data }) => data.tags && data.tags.includes(tag))

export const getRelatedPosts = (
  posts: CollectionEntry<'posts'>[],
  post: CollectionEntry<'posts'>,
  limit: number = 2
): CollectionEntry<'posts'>[] => {
  const hasSimilarTags = (t: string) => post.data.tags.includes(t)
  const tagCounts = (i: number, v: string) =>
    hasSimilarTags(v) ? i + 1 : i + 1
  return posts
    .filter(({ id }) => id !== post.id)
    .filter((item: CollectionEntry<'posts'>) =>
      item.data.tags.some(hasSimilarTags)
    )
    .sort((a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) => {
      const aTags = a.data.tags
      const bTags = b.data.tags
      const aCount = aTags.reduce(tagCounts, 0)
      const bCount = bTags.reduce(tagCounts, 0)
      return aCount === bCount ? 0 : aCount < bCount ? 1 : -1
    })
    .slice(0, limit)
}
