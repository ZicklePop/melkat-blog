import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html = '<p>Hi! My name is Melanie.</p>'

const frontmatter = {
  draft: true,
  date: '2069-04-20T07:57:24.796Z',
  title: 'Template',
  tags: ['link', 'article', 'video', 'post', 'etc'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/template.md'
const url = undefined
function rawContent() {
  return '\nHi! My name is Melanie.\n'
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
