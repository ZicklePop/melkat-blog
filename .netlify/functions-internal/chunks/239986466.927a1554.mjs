import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Congratulations to the people at Medium! I love seeing unions spread around San Francisco tech companies. Hopefully soon with my employer :3</p>'

const frontmatter = {
  cover: '/img/239986466.png',
  date: '2021-02-11T19:37:48.724Z',
  link: 'https://mediumworkersunion.org/',
  tags: ['link', 'tech', 'unions'],
  title: 'Medium Workers Union (MWU)',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/239986466.md'
const url = undefined
function rawContent() {
  return '\nCongratulations to the people at Medium! I love seeing unions spread around San Francisco tech companies. Hopefully soon with my employer :3\n'
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
