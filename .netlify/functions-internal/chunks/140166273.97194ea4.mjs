import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Nico Deyo comes in holding no punches: ‘The inhuman coloration to their skin and general lankiness denotes an otherness, but everything else feels oriented towards sexiness, creating a line of mean, angular villainesses—like fuckable Lamborghinis.’</p>'

const frontmatter = {
  cover: '/img/140166273.png',
  date: '2020-02-18T15:26:26.407Z',
  link: 'https://www.vice.com/en_us/article/wxeze5/blizzards-long-history-of-manic-pixie-nightmare-girls-and-fear-of-women',
  tags: ['article', 'games', 'sexism'],
  title:
    "Blizzard's Long History of Manic Pixie Nightmare Girls and Fear of Women",
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/140166273.md'
const url = undefined
function rawContent() {
  return "\nNico Deyo comes in holding no punches: 'The inhuman coloration to their skin and general lankiness denotes an otherness, but everything else feels oriented towards sexiness, creating a line of mean, angular villainesses—like fuckable Lamborghinis.'\n"
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
