import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>This is pretty wild! Android apps on iOS? This is something to keep an eye on for sure.</p>'

const frontmatter = {
  date: '2020-03-07T06:27:48.178Z',
  link: 'https://github.com/corellium/projectsandcastle',
  tags: ['link', 'ios', 'android'],
  title: 'corellium/projectsandcastle',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/143963126.md'
const url = undefined
function rawContent() {
  return '\nThis is pretty wild! Android apps on iOS? This is something to keep an eye on for sure.\n'
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
