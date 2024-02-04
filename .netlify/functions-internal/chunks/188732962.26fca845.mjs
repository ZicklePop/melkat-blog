import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>I stumbled upon this neat community of women makers the other day. Best of all they are trans/nonbinary inclusive.</p>'

const frontmatter = {
  cover: '/img/188732962.jpg',
  date: '2020-08-17T03:54:47.769Z',
  link: 'https://womenmake.com/',
  tags: ['link', 'women', 'tech'],
  title: 'Women Make',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/188732962.md'
const url = undefined
function rawContent() {
  return '\nI stumbled upon this neat community of women makers the other day. Best of all they are trans/nonbinary inclusive.\n'
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
