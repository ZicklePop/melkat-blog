import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>This article is a beautiful takedown of the fake feminism people sell. Though, this article fails to mention anything at all about trans issues, who are also deeply effected by mobilized angry white women trying to destroy feminism.</p>'

const frontmatter = {
  cover: '/img/211267925.jpg',
  date: '2020-11-10T15:10:01.643Z',
  link: 'https://jezebel.com/the-business-of-selling-white-women-the-righteousness-o-1845577127',
  tags: ['article', 'race', 'women'],
  title:
    'The Business of Selling White Women the Righteousness of Their Own Anger',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/211267925.md'
const url = undefined
function rawContent() {
  return '\nThis article is a beautiful takedown of the fake feminism people sell. Though, this article fails to mention anything at all about trans issues, who are also deeply effected by mobilized angry white women trying to destroy feminism.\n'
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
