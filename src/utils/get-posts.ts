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
