import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>As a girl who learned web development on Neopets, this is very much true and close to my heart.</p>'

const frontmatter = {
  cover: '/img/173958130.jpg',
  date: '2020-06-07T20:10:37.283Z',
  link: 'https://variety.com/2017/gaming/features/neopets-internet-girl-culture-1202897761/',
  tags: ['article', 'neopets', 'women'],
  title: '‘Neopets’: Inside Look at Early 2000s Internet Girl Culture',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/173958130.md'
const url = undefined
function rawContent() {
  return '\nAs a girl who learned web development on Neopets, this is very much true and close to my heart.\n'
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
