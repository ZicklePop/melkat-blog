import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Tracey Lien’s 2013 piece for Polygon reminds us that Nintendo invented the myth that games are for boys.</p>'

const frontmatter = {
  cover: '/img/148553676.jpg',
  date: '2020-03-27T04:24:44.334Z',
  link: 'https://www.polygon.com/features/2013/12/2/5143856/no-girls-allowed',
  tags: ['article', 'nintendo', 'sexism', 'games', 'women'],
  title: 'No girls allowed',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/148553676.md'
const url = undefined
function rawContent() {
  return '\nTracey Lien’s 2013 piece for Polygon reminds us that Nintendo invented the myth that games are for boys.\n'
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
