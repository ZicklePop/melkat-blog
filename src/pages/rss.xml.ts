import rss from '@astrojs/rss'
import { byRssDate } from '../utils/sort'
import { noFeedDrafts } from '../utils/filter'
import { title as blogTitle, description, baseUrl } from '../consts/config'

export const get = async () => {
  let items = await import.meta.glob('./p/*.md')
  items = await Promise.all(
    Object.keys(items).map(async el => {
      let item = items[el]
      item = await item()
      const content_html = await item.compiledContent()
      const { cover, date, draft, link: external_url, title } = item.frontmatter
      const url = `${baseUrl}${item.url}`
      const coverHtml = `<img src="${baseUrl}${cover}" alt="${title}" /><br />`

      return {
        description: cover ? `${coverHtml}${content_html}` : content_html,
        draft,
        link: url,
        pubDate: date,
        title,
      }
    })
  )
  items = items.filter(noFeedDrafts).sort(byRssDate)

  return rss({
    title: blogTitle,
    description,
    site: baseUrl,
    items,
  })
}
