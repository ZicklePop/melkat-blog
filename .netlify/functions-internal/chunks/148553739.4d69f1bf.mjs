import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Adam Conover explains the history on Nintendo’s push to push women out of gaming. This is from the episode Adam Ruins Summer Fun of Adam Ruins Everything.</p>'

const frontmatter = {
  cover: '/img/148553739.jpg',
  date: '2020-03-27T04:26:39.162Z',
  link: 'https://www.youtube.com/watch?v=i08CVkBxvBM',
  tags: ['video', 'sexism', 'nintendo', 'games', 'women'],
  title:
    'Adam Ruins Everything - Why People Think Video Games Are Just for Boys',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/148553739.md'
const url = undefined
function rawContent() {
  return '\nAdam Conover explains the history on Nintendo’s push to push women out of gaming. This is from the episode Adam Ruins Summer Fun of Adam Ruins Everything.\n'
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
