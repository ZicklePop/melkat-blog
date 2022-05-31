import { byJsonDate } from '../utils/sort'
import { noJsonDrafts } from '../utils/filter'
import { title as blogTitle, description, baseUrl } from '../consts/config'

export async function get() {
  let items = await import.meta.glob('./p/*.md')
  items = await Promise.all(
    Object.keys(items).map(async (el) => {
      let item = items[el]
      item = await item()
      const content_html = await item.compiledContent()
      const {
        cover,
        date: date_published,
        draft,
        link: external_url,
        tags,
        title,
      } = item.frontmatter
      const url = `${baseUrl}${item.url}`
      const image = !!cover ? { image: `${baseUrl}${cover}` } : {}

      return {
        content_html,
        date_published,
        draft,
        external_url,
        id: url,
        tags,
        title,
        url,
        ...image,
      }
    })
  )
  items = items.filter(noJsonDrafts).sort(byJsonDate)

  return {
    body: JSON.stringify({
      version: 'https://jsonfeed.org/version/1.1',
      title: blogTitle,
      description,
      icon: `${baseUrl}/apple-touch-icon.png`,
      home_page_url: baseUrl,
      feed_url: `${baseUrl}/feed.json`,
      authors: [
        {
          name: 'Melanie Kat',
          avatar: `${baseUrl}/apple-touch-icon.png`,
        },
      ],
      items,
    }),
  }
}
