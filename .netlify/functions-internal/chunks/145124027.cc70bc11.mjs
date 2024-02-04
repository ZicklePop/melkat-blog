import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>“Don’t touch my phone / No touch my heart” A fun Miku music video from BIGHEAD, apapico, caseif, and Incept</p>'

const frontmatter = {
  cover: '/img/145124027.jpg',
  date: '2020-03-10T18:54:15.396Z',
  link: 'https://www.youtube.com/watch?v=1wT4kw5do1A',
  tags: ['video', 'miku', 'music'],
  title: 'Rage Against The M FEAT.Hatsune Miku',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/145124027.md'
const url = undefined
function rawContent() {
  return '\n"Don\'t touch my phone / No touch my heart” A fun Miku music video from BIGHEAD, apapico, caseif, and Incept\n'
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
