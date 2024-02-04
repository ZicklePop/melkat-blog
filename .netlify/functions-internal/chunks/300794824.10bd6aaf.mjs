import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Time to replace your improv partner! You’ve played AI Dungeon, now play Improv Dungeon. Write out your scenario and the AI will play along!</p>'

const frontmatter = {
  cover: '/img/300794824.png',
  date: '2021-08-23T05:16:37.980Z',
  link: 'https://improv-dungeon.melkat.games/',
  tags: ['link', 'games', 'me'],
  title: 'Improv Dungeon',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/300794824.md'
const url = undefined
function rawContent() {
  return '\nTime to replace your improv partner! You’ve played AI Dungeon, now play Improv Dungeon. Write out your scenario and the AI will play along!\n'
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
