import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Don’t trust anyone who wants to depict pigs as anything other than violent and bigoted. Not Spider-man. Not Andy Griffith. No one gets to ignore this.</p>'

const frontmatter = {
  cover: '/img/175577875.jpg',
  date: '2020-06-14T15:06:24.185Z',
  link: 'https://kotaku.com/video-games-have-to-reckon-with-how-they-depict-the-pol-1844013471',
  tags: ['article', 'games', 'criticism'],
  title: 'Video Games Have To Reckon With How They Depict The Police',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/175577875.md'
const url = undefined
function rawContent() {
  return '\nDon’t trust anyone who wants to depict pigs as anything other than violent and bigoted. Not Spider-man. Not Andy Griffith. No one gets to ignore this.\n'
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
