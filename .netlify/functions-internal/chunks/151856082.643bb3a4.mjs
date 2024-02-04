import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>It also appears no one makes a living on Steam, a platform built upon a race to the bottom of sales.</p>'

const frontmatter = {
  cover: '/img/151856082.jpg',
  date: '2020-04-08T05:35:09.814Z',
  link: 'https://arstechnica.com/gaming/2020/04/ars-analysis-80-of-steam-games-earn-under-5k-in-first-two-weeks/',
  tags: ['article', 'steam', 'wages', 'games'],
  title: '~80% of Steam games earn under $5K in first two weeks',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/151856082.md'
const url = undefined
function rawContent() {
  return '\nIt also appears no one makes a living on Steam, a platform built upon a race to the bottom of sales.\n'
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
