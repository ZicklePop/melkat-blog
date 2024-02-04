import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>I’ve seen people at every place I’ve worked just… share things like this with any webpage with a text input box and it’s never set right with me. It’s such an easy way to social engineer your way in to free personal identifiable information.</p>'

const frontmatter = {
  cover: '/img/193430221.jpg',
  date: '2020-09-08T04:43:23.998Z',
  link: 'https://www.jvt.me/posts/2020/09/01/against-online-tooling/',
  tags: ['article', 'code', 'security'],
  title:
    'Why I Actively Discourage Online Tooling like `jwt.io` and Online JSON Validators',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/193430221.md'
const url = undefined
function rawContent() {
  return "\nI've seen people at every place I've worked just... share things like this with any webpage with a text input box and it's never set right with me. It's such an easy way to social engineer your way in to free personal identifiable information.\n"
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
