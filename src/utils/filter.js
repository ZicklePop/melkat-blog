export const noDrafts = (o) => !o.frontmatter.draft

export const hasType = (o) => !!o.frontmatter.type

export const hasDomain = (o) => !!o.frontmatter.domain

export const hasTags = (o) => !!o.frontmatter.tags
