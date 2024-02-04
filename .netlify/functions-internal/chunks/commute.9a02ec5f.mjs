import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<blockquote>\n<p><em>A love letter to a public transit system I haven’t used in years.</em></p>\n</blockquote>\n<p>Star St.Germain and Tim Riot have made a really emotional pixel art journey through the city I simultaneously live in but rarely see anymore.</p>'

const frontmatter = {
  cover: '/img/commute.jpg',
  date: '2022-04-22T04:49:03.362Z',
  title: 'Commute',
  link: 'https://thisisstar.itch.io/commute',
  tags: ['link', 'games', 'sanfrancisco'],
}
const file = '/Users/melanie/Developer/melkat-blog/src/content/posts/commute.md'
const url = undefined
function rawContent() {
  return "\n> _A love letter to a public transit system I haven't used in years._\n\nStar St.Germain and Tim Riot have made a really emotional pixel art journey through the city I simultaneously live in but rarely see anymore.\n"
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
