import { byJsonDate } from '../utils/sort'
import { noJsonDrafts } from '../utils/filter'
import getMarkdown from '../utils/get-markdown'
import getTags from '../utils/get-tags'

export async function get() {
  let items = await import.meta.glob('./p/*.md')
  items = await Promise.all(
    Object.keys(items).map(async (el) => {
      let item = items[el]
      item = await item()
      const content_html = await getMarkdown(item.file)
      const {
        cover,
        date: date_published,
        draft,
        link: external_url,
        tags,
        title,
      } = item.frontmatter
      const url = `https://melkat.blog${item.url}`
      const image = `https://melkat.blog${cover}`

      return {
        content_html,
        date_published,
        draft,
        external_url,
        id: url,
        image,
        tags: getTags(tags),
        title,
        url,
      }
    })
  )
  items = items.filter(noJsonDrafts).sort(byJsonDate)

  return {
    body: JSON.stringify({
      version: 'https://jsonfeed.org/version/1.1',
      title: 'melkat.blog',
      icon: 'https://melkat.blog/apple-touch-icon.png',
      home_page_url: 'https://melkat.blog/',
      feed_url: 'https://melkat.blog/feed.json',
      authors: [
        {
          name: 'Melanie Kat',
          avatar: 'https://melkat.blog/apple-touch-icon.png',
        },
      ],
      items,
    }),
  }
}
