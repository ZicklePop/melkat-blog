import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>DankPods put together a great guide to headphones. I use quiet a bit of the things he recommends, which you can see on my <a href="https://melkat.blog/p/uses" title="A large list of the things I use">uses</a> page.</p>'

const frontmatter = {
  cover: '/img/dankpods-starter.jpg',
  date: '2022-04-21T22:43:46.501Z',
  link: 'https://www.youtube.com/watch?v=jk-Tybi-ihw',
  title: 'The DankPods Headphone Starter Guide.',
  tags: ['video', 'dankpods', 'headphones'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/dankpods-starter.md'
const url = undefined
function rawContent() {
  return "\nDankPods put together a great guide to headphones. I use quiet a bit of the things he recommends, which you can see on my [uses](https://melkat.blog/p/uses 'A large list of the things I use') page.\n"
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
