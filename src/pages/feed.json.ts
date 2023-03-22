import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import { byDate } from '../utils/sort'
import { getCollection } from 'astro:content'
import { noDrafts } from '../utils/filter'
import { title as blogTitle, description, baseUrl } from '../consts/config'

export const prerender = true

const parser = new MarkdownIt()

export async function get() {
  const posts = await getCollection('posts', noDrafts)
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
      items: posts.sort(byDate).map(post => ({
        content_html: `${
          post.data.cover
            ? '<img src="' +
              baseUrl +
              post.data.cover +
              '" alt="' +
              post.data.title +
              '" /><br />'
            : ''
        }${sanitizeHtml(parser.render(post.body))}`,
        date_published: post.data.date.toISOString(),
        external_url: post.data.link,
        id: `${baseUrl}/p/${post.slug}`,
        image: post.data.cover ? `${baseUrl}${post.data.cover}` : undefined,
        tags: post.data.tags,
        title: post.data.title,
        url: `${baseUrl}/p/${post.slug}`,
      })),
    }),
  }
}
