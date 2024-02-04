import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>I am oddly excited about the possibilities of using React Hooks in CLI tools.</p>'

const frontmatter = {
  cover: '/img/187431259.png',
  date: '2020-08-11T17:22:01.753Z',
  link: 'https://github.com/vadimdemedes/ink',
  tags: ['link', 'javascript', 'cli'],
  title: 'ink - 🌈 React for interactive command-line apps',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/187431259.md'
const url = undefined
function rawContent() {
  return '\nI am oddly excited about the possibilities of using React Hooks in CLI tools.\n'
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
