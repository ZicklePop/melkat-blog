import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html = '<p>Anthropomorphic fonts.</p>'

const frontmatter = {
  cover: '/img/141385956.jpg',
  date: '2020-02-24T22:26:22.515Z',
  link: 'https://sevenseasentertainment.com/2020/02/20/seven-seas-has-a-type-with-license-of-what-the-font-a-manga-guide-to-western-typeface/',
  tags: ['link', 'manga'],
  title:
    'Seven Seas Has a Type with License of WHAT THE FONT?! A MANGA GUIDE TO WESTERN TYPEFACE',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/141385956.md'
const url = undefined
function rawContent() {
  return '\nAnthropomorphic fonts.\n'
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
