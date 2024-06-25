import MarkdownIt from 'markdown-it'
import rss from '@astrojs/rss'
import sanitizeHtml from 'sanitize-html'
import { byDate } from '../utils/sort'
import { getCollection } from 'astro:content'
import { noDrafts } from '../utils/filter'
import { title as blogTitle, description, baseUrl } from '../consts/config'

export const prerender = true

const parser = new MarkdownIt()

export async function GET() {
  const posts = await getCollection('posts', noDrafts)
  return rss({
    title: blogTitle,
    description,
    site: baseUrl,
    items: posts.sort(byDate).map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `${baseUrl}/p/${post.slug}`,
      content: `${
        post.data.cover
          ? '<img src="' +
            baseUrl +
            post.data.cover.src +
            '" alt="' +
            post.data.coverAlt +
            '" /><br />'
          : ''
      }${sanitizeHtml(parser.render(post.body))}`,
      author: 'Melanie Kat',
    })),
  })
}
