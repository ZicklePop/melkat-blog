import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>I picked this game up in early access a few weeks ago and I’ve put a lot of time in to it. It’s a non-violent Pokémon meets Animal Crossing game with some of my favorite dialog in a game since Night in the Woods. While the game is unfinished and there are a few bugs, it’s still incredibly fun and I can’t wait to see where this game goes.</p>'

const frontmatter = {
  cover: '/img/186172319.jpg',
  date: '2020-08-06T05:25:54.770Z',
  link: 'https://ooblets.com/',
  tags: ['link', 'games', 'pc'],
  title: 'Ooblets',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/186172319.md'
const url = undefined
function rawContent() {
  return '\nI picked this game up in early access a few weeks ago and I’ve put a lot of time in to it. It’s a non-violent Pokémon meets Animal Crossing game with some of my favorite dialog in a game since Night in the Woods. While the game is unfinished and there are a few bugs, it’s still incredibly fun and I can’t wait to see where this game goes.\n'
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
