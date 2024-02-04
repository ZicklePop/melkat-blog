import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>This has long been true, but for some reason it still needs to be said: two-factor authentication over text message makes you less secure than not having it.</p>'

const frontmatter = {
  cover: '/img/251027866.jpg',
  date: '2021-03-16T05:32:02.552Z',
  link: 'https://www.vice.com/en/article/y3g8wb/hacker-got-my-texts-16-dollars-sakari-netnumber',
  tags: ['article', 'security'],
  title: 'A Hacker Got All My Texts for $16',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/251027866.md'
const url = undefined
function rawContent() {
  return '\nThis has long been true, but for some reason it still needs to be said: two-factor authentication over text message makes you less secure than not having it.\n'
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
