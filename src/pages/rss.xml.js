import rss from '@astrojs/rss'
import { byJsonDate } from '../utils/sort'
import { noJsonDrafts } from '../utils/filter'
import { title as blogTitle, description, baseUrl } from '../consts/config'

export const get = async () => {
  let items = await import.meta.glob('./p/*.md')
  items = await Promise.all(
    Object.keys(items).map(async (el) => {
      let item = items[el]
      item = await item()
      const content_html = await item.compiledContent()
      const {
        date,
        draft,
        link: external_url,
        title,
      } = item.frontmatter
      const url = `${baseUrl}${item.url}`

      return {
        title,
        description: content_html,
        link: url,
        pubDate: date,
      }
    })
  )
  items = items.filter(noJsonDrafts).sort(byJsonDate)

  return rss({
    title: blogTitle,
    description,
    site: baseUrl,
    items,
  })
}
