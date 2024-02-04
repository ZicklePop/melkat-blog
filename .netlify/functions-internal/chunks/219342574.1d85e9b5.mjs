import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>I don’t know Polish but this is pretty fascinating about how the language handles pronouns.</p>'

const frontmatter = {
  cover: '/img/219342574.png',
  date: '2020-12-08T07:15:55.978Z',
  link: 'https://zaimki.pl/english',
  tags: ['article', 'queer'],
  title: 'An overview of Polish nonbinary pronouns',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/219342574.md'
const url = undefined
function rawContent() {
  return '\nI don’t know Polish but this is pretty fascinating about how the language handles pronouns.\n'
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
