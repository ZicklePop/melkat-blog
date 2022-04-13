export const noDrafts = (o) => !o.frontmatter.draft

export const noJsonDrafts = (o) => !o.draft

export const hasLink = (o) => !!o.frontmatter.link

export const hasTags = (o) => !!o.frontmatter.tags
