import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Virtual avatars for streaming and videos have become popular over the last few years. Now you can do it from your browser on your phone?! So cool.</p>'

const frontmatter = {
  cover: '/img/233159783.jpg',
  date: '2021-01-25T00:21:01.601Z',
  link: 'https://kalidoface.com/',
  tags: ['link', 'javascript', 'live2d', 'virtual'],
  title: 'Kalidoface - Become a Virtual Character',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/233159783.md'
const url = undefined
function rawContent() {
  return '\nVirtual avatars for streaming and videos have become popular over the last few years. Now you can do it from your browser on your phone?! So cool.\n'
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
