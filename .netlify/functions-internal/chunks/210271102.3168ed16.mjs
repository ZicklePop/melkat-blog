import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Watching Maddy find themself has been a joy, and reading about how Celeste developed with them is great.</p>'

const frontmatter = {
  cover: '/img/210271102.jpg',
  date: '2020-11-06T14:02:39.309Z',
  link: 'https://maddythorson.medium.com/is-madeline-canonically-trans-4277ece02e40',
  tags: ['article', 'trans', 'games'],
  title: 'Is Madeline Canonically Trans?',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/210271102.md'
const url = undefined
function rawContent() {
  return '\nWatching Maddy find themself has been a joy, and reading about how Celeste developed with them is great.\n'
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
