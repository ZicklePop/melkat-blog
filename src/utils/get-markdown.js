import { renderMarkdown } from '@astrojs/markdown-remark'
import fs from 'fs'

export const getMarkdown = async (path) => {
  const raw = fs.readFileSync(path, 'utf8').split('---').at(-1)
  const output = await renderMarkdown(raw)
  return output.metadata.html
}

export const getMarkdownForRSS = async (items) => {
  const output = items.map(async (item) => {
    const description = await getMarkdown(item.file)
    return {
      description,
      link: item.url,
      pubDate: item.frontmatter.date,
      title: item.frontmatter.title,
    }
  })

  return await Promise.all(output)
}

export default getMarkdown
