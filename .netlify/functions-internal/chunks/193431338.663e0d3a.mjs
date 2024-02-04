import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>The lore behind Fall Guys is as adorable as the little beans. That said, I can’t wait for those eggs to hatch 👀</p>'

const frontmatter = {
  cover: '/img/193431338.jpg',
  date: '2020-09-08T05:02:17.002Z',
  link: 'https://www.thegamer.com/fall-guys-secrets-lore-interview/',
  tags: ['article', 'games'],
  title: 'Fall Guys Secrets - A Super Serious Lore Interview',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/193431338.md'
const url = undefined
function rawContent() {
  return "\nThe lore behind Fall Guys is as adorable as the little beans. That said, I can't wait for those eggs to hatch 👀\n"
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
