import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>A few days ago I was pondering what the environmental difference in buying an ebook from amazon versus buying a physical book was. A day later I found this tool to determine what the environmental impact for visiting a website is.</p>'

const frontmatter = {
  cover: '/img/138288124.png',
  date: '2020-02-09T07:35:03.813Z',
  link: 'https://www.websitecarbon.com/',
  tags: ['link', 'environment', 'green'],
  title: 'Website Carbon Calculator',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/138288124.md'
const url = undefined
function rawContent() {
  return '\nA few days ago I was pondering what the environmental difference in buying an ebook from amazon versus buying a physical book was. A day later I found this tool to determine what the environmental impact for visiting a website is.\n'
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
