import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>This is pretty cool, I will definitely be writing some custom scripts for it. During my time as an engineer I’ve always thought the best way to steal company secrets is to make a JSON formatter website or something. I love their headline, “Stop pasting company secrets into random websites.”</p>'

const frontmatter = {
  cover: '/img/183916694.png',
  date: '2020-07-26T00:44:15.902Z',
  link: 'https://boop.okat.best/',
  tags: ['link', 'apps', 'macos'],
  title: 'Boop: the Scriptable Scratchpad.',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/183916694.md'
const url = undefined
function rawContent() {
  return '\nThis is pretty cool, I will definitely be writing some custom scripts for it. During my time as an engineer I’ve always thought the best way to steal company secrets is to make a JSON formatter website or something. I love their headline, "Stop pasting company secrets into random websites."\n'
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
