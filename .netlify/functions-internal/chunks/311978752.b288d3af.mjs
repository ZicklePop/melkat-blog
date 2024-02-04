import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>I never thought a game about spiders would happily capture me in it’s web, but here we are. Highly recommend this game, and it’s a steal for the price.</p>'

const frontmatter = {
  cover: '/img/311978752.jpg',
  date: '2021-09-18T05:10:18.096Z',
  link: 'https://webbed.website/',
  tags: ['link', 'games', 'pc'],
  title: 'Webbed - Sbug Games',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/311978752.md'
const url = undefined
function rawContent() {
  return "\nI never thought a game about spiders would happily capture me in it's web, but here we are. Highly recommend this game, and it's a steal for the price.\n"
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
