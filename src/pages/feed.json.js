import { byJsonDate } from '../utils/sort'
import getTags from '../utils/get-tags'

export async function get() {  let items = await import.meta.glob('./p/*.md')
  items = await Promise.all(
    Object.keys(items).map(async el => {
      let item = items[el]
      item = await item()
      const {
        astro: { html: content_html },
        cover,
        date: date_published,
        draft,
        id,
        link: external_url,
        tags,
        title,
      } = item.frontmatter
        const url = `https://melkat.blog/p/${id}`
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
  items = items.filter(o => !o.draft).sort(byJsonDate)

  return {
    body: JSON.stringify({
      version: 'https://jsonfeed.org/version/1',
      title: 'melkat.blog',
      icon: 'https://melkat.blog/apple-touch-icon.png',
      home_page_url: 'https://melkat.blog/',
      feed_url: 'https://melkat.blog/feed.json',
      author: {
        name: 'Melanie Kat',
        avatar: 'https://melkat.blog/apple-touch-icon.png',
      },
      items,
    }),
  }
}
