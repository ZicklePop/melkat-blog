import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Hey I just wanted to share that I open sourced a weekend experiment I made a few weekends ago to track pitch frequencies. It’s not the best, but I learned so much in building it within a few constraints: using React Hooks and must work on mobile Safari as well as desktop browsers.</p>'

const frontmatter = {
  cover: '/img/175926290.jpg',
  date: '2020-06-15T19:10:26.434Z',
  link: 'https://github.com/ZicklePop/pitch',
  tags: ['link', 'me', 'code'],
  title: '🏳️‍🌈🏳️‍⚧️ pitch tracker for femme voices',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/175926290.md'
const url = undefined
function rawContent() {
  return '\nHey I just wanted to share that I open sourced a weekend experiment I made a few weekends ago to track pitch frequencies. It’s not the best, but I learned so much in building it within a few constraints: using React Hooks and must work on mobile Safari as well as desktop browsers.\n'
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
