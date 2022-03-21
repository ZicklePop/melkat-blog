import { byDate } from '../utils/sort'

export async function get() {
  // TODO: Don't use Astro here since it's not in scope :(
  let allPosts = Astro.fetchContent('./p/*.md')
  allPosts = allPosts.filter(o => !o.draft).sort(byDate)

  return {
    version: 'https://jsonfeed.org/version/1',
    title: 'melkat.blog',
    icon: 'https://melkat.blog/apple-touch-icon.png',
    home_page_url: 'https://melkat.blog/',
    feed_url: 'https://melkat.blog/feed.json',
    items: allPosts.map(item => ({
      id: item.url,
      url: item.url,
      content_html: item.content.html,
      date_published: item.date,
    })),
  }
}
