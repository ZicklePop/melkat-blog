import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>I have now published publicly for the first time the code that powers this website.</p>'

const frontmatter = {
  cover: '/img/176243918.jpg',
  date: '2020-06-17T04:55:01.069Z',
  link: 'https://github.com/ZicklePop/melkat-link',
  tags: ['link', 'me', 'code'],
  title: 'This blog is now open source',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/176243918.md'
const url = undefined
function rawContent() {
  return '\nI have now published publicly for the first time the code that powers this website.\n'
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
