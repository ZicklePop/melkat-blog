export const noDrafts = (o) => !o.frontmatter.draft

export const noJsonDrafts = (o) => !o.draft

export const hasDomain = (o) => !!o.frontmatter.domain

export const hasTags = (o) => !!o.frontmatter.tags
