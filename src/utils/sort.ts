export const byDate = (a, b) =>
  new Date(b.frontmatter.date).valueOf() -
  new Date(a.frontmatter.date).valueOf()

export const byJsonDate = (a, b) =>
  new Date(b.date_published).valueOf() - new Date(a.date_published).valueOf()

export const byRssDate = (a, b) =>
  new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()

export const byCount = (a, b) => b.count - a.count
