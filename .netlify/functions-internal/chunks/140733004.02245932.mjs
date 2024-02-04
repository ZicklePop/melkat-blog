import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>A <em>two</em> hour documentary about the horrifying truth that is Amazon.</p>'

const frontmatter = {
  cover: '/img/140733004.jpg',
  date: '2020-02-20T21:59:55.336Z',
  link: 'https://www.pbs.org/wgbh/frontline/film/amazon-empire/',
  tags: ['article', 'amazon', 'unions', 'tech'],
  title: 'Amazon Empire: The Rise and Reign of Jeff Bezos',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/140733004.md'
const url = undefined
function rawContent() {
  return '\nA _two_ hour documentary about the horrifying truth that is Amazon.\n'
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
