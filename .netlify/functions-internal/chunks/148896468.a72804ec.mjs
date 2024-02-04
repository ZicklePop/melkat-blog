import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>A new plugin from Microsoft for their code editor allows people to collaborate in real time on projects. This looks so fun.</p>'

const frontmatter = {
  cover: '/img/148896468.jpg',
  date: '2020-03-28T05:28:09.413Z',
  link: 'https://visualstudio.microsoft.com/services/live-share/',
  tags: ['link', 'vscode', 'apps'],
  title: 'Visual Studio Live Share',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/148896468.md'
const url = undefined
function rawContent() {
  return '\nA new plugin from Microsoft for their code editor allows people to collaborate in real time on projects. This looks so fun.\n'
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
