import { hasLink, hasTags } from './filter'
import { uniq } from './uniques'
import getDomain from './get-domain'
import countKeys from './count-keys'

// Domains

export const getAllDomains = (posts) =>
  uniq(
    posts.filter(hasLink).map(({ frontmatter: { link } }) => getDomain(link))
  )

export const getDomainsByCount = (posts) => {
  const data = {}
  posts.forEach(({ frontmatter: { link } }) => {
    if (link) {
      const domain = getDomain(link)
      data[domain] = data[domain] ? data[domain] + 1 : 1
    }
  })
  return countKeys(data)
}

export const getPostsByDomain = (posts, domain) =>
  posts.filter((o) => getDomain(o.frontmatter.link) === domain)

// Tags

export const getAllTags = (posts) => {
  posts = posts.filter(hasTags)
  let allTags = []
  posts.forEach(({ frontmatter: { tags } }) =>
    tags.forEach((tag) => allTags.push(tag))
  )
  return uniq(allTags)
}

export const getTagsByCount = (posts) => {
  const data = {}
  posts.forEach(({ frontmatter: { tags } }) => {
    if (tags) {
      tags.forEach((tag) => {
        data[tag] = data[tag] ? data[tag] + 1 : 1
      })
    }
  })
  return countKeys(data)
}

export const getPostsByTag = (posts, tag) =>
  posts.filter((o) => o.frontmatter.tags && o.frontmatter.tags.includes(tag))
