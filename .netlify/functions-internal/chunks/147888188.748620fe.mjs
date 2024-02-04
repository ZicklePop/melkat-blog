import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Maybe Nintendo is finally growing up? They should fix Zelda and Mario now.</p>'

const frontmatter = {
  cover: '/img/147888188.png',
  date: '2020-03-24T04:31:05.082Z',
  link: 'https://www.washingtonpost.com/video-games/2020/03/23/nintendo-explains-philosophy-behind-animal-crossings-big-changes-like-gender-expression-terraforming/',
  tags: ['link', 'animalcrossing', 'games', 'switch'],
  title:
    'Nintendo explains philosophy behind Animal Crossing’s big changes, such as gender expression and terraforming',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/147888188.md'
const url = undefined
function rawContent() {
  return '\nMaybe Nintendo is finally growing up? They should fix Zelda and Mario now.\n'
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
