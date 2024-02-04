import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Hi my name is Melanie. This is my webpage with links to a lot of things that I do.</p>'

const frontmatter = {
  cover: '/img/134400368.png',
  date: '2020-01-24T20:53:02.820Z',
  link: 'https://melaniekat.com/',
  tags: ['link', 'me', 'introduction'],
  title: 'Melanie Kat',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/134400368.md'
const url = undefined
function rawContent() {
  return '\nHi my name is Melanie. This is my webpage with links to a lot of things that I do.\n'
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
