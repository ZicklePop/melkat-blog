import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>This is amazing. Ever wanted to clear out major streets in your city? It just takes 99 phones, and you can safely walk anywhere you want.</p>'

const frontmatter = {
  cover: '/img/136763858.jpg',
  date: '2020-02-02T16:41:52.455Z',
  link: 'http://www.simonweckert.com/googlemapshacks.html',
  tags: ['link', 'google', 'hack'],
  title: 'SIMON WECKERT: Google Maps Hack',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/136763858.md'
const url = undefined
function rawContent() {
  return '\nThis is amazing. Ever wanted to clear out major streets in your city? It just takes 99 phones, and you can safely walk anywhere you want.\n'
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
