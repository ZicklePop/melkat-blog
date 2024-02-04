import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>A delightful and emotional visual novel. I haven’t finished it yet, but the opening sure was A LOT.</p>'

const frontmatter = {
  cover: '/img/193615631.jpg',
  date: '2020-09-08T22:41:51.940Z',
  link: 'https://annapurnainteractive.com/games/if-found',
  tags: ['link', 'games', 'trans', 'ios', 'pc'],
  title: 'If Found',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/193615631.md'
const url = undefined
function rawContent() {
  return '\nA delightful and emotional visual novel. I haven’t finished it yet, but the opening sure was A LOT.\n'
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
