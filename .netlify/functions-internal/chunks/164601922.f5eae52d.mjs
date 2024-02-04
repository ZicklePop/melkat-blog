import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Sometimes you need to help your family out from miles away. I had no idea this feature was in Windows, for free. Oh, and did I mention it just works?</p>'

const frontmatter = {
  date: '2020-05-13T21:56:40.998Z',
  link: 'https://support.microsoft.com/en-us/windows/solve-pc-problems-over-a-remote-connection-b077e31a-16f4-2529-1a47-21f6a9040bf3',
  tags: ['link', 'windows', 'apps'],
  title: 'Quick Assist in Windows 10',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/164601922.md'
const url = undefined
function rawContent() {
  return '\nSometimes you need to help your family out from miles away. I had no idea this feature was in Windows, for free. Oh, and did I mention it just works?\n'
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
