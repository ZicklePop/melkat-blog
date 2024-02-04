import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>I don’t know what’s more wild: a React hook that makes your custom UI elements accessible or that this came from Adobe.</p>'

const frontmatter = {
  cover: '/img/212977273.png',
  date: '2020-11-16T20:39:18.346Z',
  link: 'https://react-spectrum.adobe.com/react-aria/index.html',
  tags: ['link', 'react', 'javascript'],
  title: 'React Aria',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/212977273.md'
const url = undefined
function rawContent() {
  return '\nI don’t know what’s more wild: a React hook that makes your custom UI elements accessible or that this came from Adobe.\n'
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
