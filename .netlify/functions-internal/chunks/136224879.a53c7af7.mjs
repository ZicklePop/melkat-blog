import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>I’ve been loving every bit of Kentucky Route Zero since it came out 7 years ago. I’m so excited to get to play the ending!</p>'

const frontmatter = {
  cover: '/img/136224879.png',
  date: '2020-01-31T05:29:57.363Z',
  link: 'https://www.vice.com/en_us/article/bvgjma/kentucky-route-zero-pays-off-on-nine-years-of-hope-and-doubt-review',
  tags: ['article', 'games', 'review'],
  title: "'Kentucky Route Zero' Pays Off on Nine Years of Hope and Doubt",
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/136224879.md'
const url = undefined
function rawContent() {
  return '\nI’ve been loving every bit of Kentucky Route Zero since it came out 7 years ago. I’m so excited to get to play the ending!\n'
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
