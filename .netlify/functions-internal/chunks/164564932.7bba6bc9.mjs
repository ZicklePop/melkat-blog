import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>I’ve been looking at this app for a while, but it really feels like the closest thing to Final Cut Pro on the iPad (or iPhone?) I was able to take a hour long video and chop it up almost instantly.</p>'

const frontmatter = {
  cover: '/img/164564932.png',
  date: '2020-05-13T18:51:33.884Z',
  link: 'https://luma-touch.com/lumafusion-for-ios-2/',
  tags: ['article', 'apps', 'ios'],
  title: 'LumaFusion',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/164564932.md'
const url = undefined
function rawContent() {
  return '\nI’ve been looking at this app for a while, but it really feels like the closest thing to Final Cut Pro on the iPad (or iPhone?) I was able to take a hour long video and chop it up almost instantly.\n'
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
