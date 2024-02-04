import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>The audio clip on the article is HORRIFYING. Seems TikTok is not alone in their actions.</p>'

const frontmatter = {
  cover: '/img/170716411.jpg',
  date: '2020-05-29T20:40:09.121Z',
  link: 'https://abilityaccess.blog/2019/04/08/breaking-news-disability-is-not-good-for-facebook-says-facebook/?',
  tags: ['article', 'discrimination', 'ableist', 'facebook'],
  title: 'Disability is not good for Facebook says: ‘Facebook’.',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/170716411.md'
const url = undefined
function rawContent() {
  return '\nThe audio clip on the article is HORRIFYING. Seems TikTok is not alone in their actions.\n'
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
