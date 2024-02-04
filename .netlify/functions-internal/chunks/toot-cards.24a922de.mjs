import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Over the past few months, I decided to familiarize myself with how the Mastodon APIs work across all servers, so I put together this site for simply viewing and sharing links to Mastodon posts. It’s very simple and minimal, but it also makes sharing very convenient on platforms like iMessage where you can’t see the content of a post.</p>\n<p>I also used this as an opportunity to play around with some <a href="https://nextjs.org/blog/next-13">NextJS 13</a> features that I wanted to try out. If you are interested, head over to the <a href="https://github.com/ZicklePop/toot-cards">repository on GitHub</a>.</p>'

const frontmatter = {
  date: '2023-02-15T23:45:48.893Z',
  title: 'Toot.cards',
  tags: ['link', 'me', 'mastodon', 'javascript'],
  cover: '/img/toot-cards.png',
  link: 'https://toot.cards',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/toot-cards.md'
const url = undefined
function rawContent() {
  return "\nOver the past few months, I decided to familiarize myself with how the Mastodon APIs work across all servers, so I put together this site for simply viewing and sharing links to Mastodon posts. It's very simple and minimal, but it also makes sharing very convenient on platforms like iMessage where you can't see the content of a post.\n\nI also used this as an opportunity to play around with some [NextJS 13](https://nextjs.org/blog/next-13) features that I wanted to try out. If you are interested, head over to the [repository on GitHub](https://github.com/ZicklePop/toot-cards).\n"
}
function compiledContent() {
  return html
}
function getHeadings() {
  return []
}
async function Content() {
  const { layout, ...content } = frontmatter
  content.file = file
  content.url = url
  const contentFragment = createVNode(Fragment, { 'set:html': html })
  return contentFragment
}
Content[Symbol.for('astro.needsHeadRendering')] = true

export {
  Content,
  compiledContent,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url,
}
