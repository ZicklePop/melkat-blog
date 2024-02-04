import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Grace Robertson digs in to why the politics and self-congratulatory nature of Michael Shur’s television shows trip him up and make for awkward television.</p>'

const frontmatter = {
  cover: '/img/143872419.jpg',
  date: '2020-03-06T18:47:46.496Z',
  link: 'https://gemofamara.substack.com/p/the-curious-worldview-of-michael',
  tags: ['article', 'criticism', 'tv'],
  title: "The Curious Worldview of Michael Schur's Television",
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/143872419.md'
const url = undefined
function rawContent() {
  return "\nGrace Robertson digs in to why the politics and self-congratulatory nature of Michael Shur's television shows trip him up and make for awkward television.\n"
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
