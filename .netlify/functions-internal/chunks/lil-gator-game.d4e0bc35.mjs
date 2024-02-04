import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>I feel like this cute little fellow got left off of so many best of 2022 lists because it came out so late in the year, but gosh it is great. If you like <a href="https://melkat.blog/p/140113823/">A Short Hike</a>, you will definitely enjoy this lil gator’s journey.</p>'

const frontmatter = {
  cover: '/img/lilgatorgame.png',
  date: '2022-12-31T18:27:50.074Z',
  title: 'Lil Gator Game',
  link: 'https://www.playtonicgames.com/game/lil-gator-game/',
  tags: ['link', 'games', 'switch', 'steam', 'pc'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/lil-gator-game.md'
const url = undefined
function rawContent() {
  return "\nI feel like this cute little fellow got left off of so many best of 2022 lists because it came out so late in the year, but gosh it is great. If you like [A Short Hike](https://melkat.blog/p/140113823/), you will definitely enjoy this lil gator's journey.\n"
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
