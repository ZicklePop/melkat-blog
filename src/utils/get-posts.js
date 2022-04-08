import { hasType, hasDomain, hasTags } from './filter'
import { uniq, uniqBy } from './uniques'
import getTags from './get-tags'
import countKeys from './count-keys'

// Types

export const getAllTypes = (posts) =>
  uniqBy(posts.filter(hasType), 'type').map(({ type }) => type)

export const getTypesByCount = (posts) => {
  const data = {}
  posts.forEach(({ type }, i) => {
    data[type] = data[type] ? data[type] + 1 : 1
  })
  return countKeys(data)
}

export const getPostsByType = (posts, type) => {
  return posts.filter((o) => o.type === type)
}

// Domains

export const getAllDomains = (posts) =>
  uniqBy(posts.filter(hasDomain), 'domain').map(({ domain }) => domain)

export const getDomainsByCount = (posts) => {
  const data = {}
  posts.forEach(({ domain }, i) => {
    if (domain) {
      data[domain] = data[domain] ? data[domain] + 1 : 1
    }
  })
  return countKeys(data)
}

export const getPostsByDomain = (posts, domain) =>
  posts.filter((o) => o.domain === domain)

// Tags

export const getAllTags = (posts) => {
  posts = posts.filter(hasTags)
  let allTags = []
  posts.forEach(({ tags }) => getTags(tags).forEach((tag) => allTags.push(tag)))
  return uniq(allTags)
}

export const getTagsByCount = (posts) => {
  const data = {}
  posts.forEach(({ tags }) => {
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
  posts.filter((o) => o.tags && o.tags.includes(tag))
