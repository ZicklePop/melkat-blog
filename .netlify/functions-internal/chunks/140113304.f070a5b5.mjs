import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>npckc is probably one of my favorite indie game creators. npckc rose to popularity with this game about taking your trans friend to a onsen, and it’s just so good.</p>'

const frontmatter = {
  cover: '/img/140113304.png',
  date: '2020-02-18T05:57:46.677Z',
  link: 'https://npckc.itch.io/one-night-hot-springs',
  tags: ['link', 'trans', 'games'],
  title: 'one night, hot springs',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/140113304.md'
const url = undefined
function rawContent() {
  return '\nnpckc is probably one of my favorite indie game creators. npckc rose to popularity with this game about taking your trans friend to a onsen, and it’s just so good.\n'
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
