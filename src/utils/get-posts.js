import { hasDomain, hasTags } from './filter'
import { uniq } from './uniques'
import getTags from './get-tags'
import countKeys from './count-keys'

// Domains

export const getAllDomains = (posts) =>
  uniq(posts.filter(hasDomain).map(({ frontmatter: { domain } }) => domain))

export const getDomainsByCount = (posts) => {
  const data = {}
  posts.forEach(({ frontmatter: { domain } }) => {
    if (domain) {
      data[domain] = data[domain] ? data[domain] + 1 : 1
    }
  })
  return countKeys(data)
}

export const getPostsByDomain = (posts, domain) =>
  posts.filter((o) => o.frontmatter.domain === domain)

// Tags

export const getAllTags = (posts) => {
  posts = posts.filter(hasTags)
  let allTags = []
  posts.forEach(({ frontmatter: { tags } }) =>
    getTags(tags).forEach((tag) => allTags.push(tag))
  )
  return uniq(allTags)
}

export const getTagsByCount = (posts) => {
  const data = {}
  posts.forEach(({ frontmatter: { tags } }) => {
    if (tags) {
      const individualTags = getTags(tags)
      individualTags.forEach((tag) => {
        data[tag] = data[tag] ? data[tag] + 1 : 1
      })
    }
  })
  return countKeys(data)
}

export const getPostsByTag = (posts, tag) =>
  posts.filter((o) => o.frontmatter.tags && o.frontmatter.tags.includes(tag))
