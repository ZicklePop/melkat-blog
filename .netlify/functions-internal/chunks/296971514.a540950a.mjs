import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>danah boyd’s piece from 2014 has always been facinating to me, but relating it to my own experiences around transitioning and the ways that I have percevied depth just feels like a lot of gender validation for me :)</p>'

const frontmatter = {
  cover: '/img/296971514.jpg',
  date: '2021-08-12T14:12:17.436Z',
  link: 'https://qz.com/192874/is-the-oculus-rift-designed-to-be-sexist/',
  tags: ['article', 'sexism', 'trans', 'vr'],
  title: 'Is the Oculus Rift sexist?',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/296971514.md'
const url = undefined
function rawContent() {
  return "\ndanah boyd's piece from 2014 has always been facinating to me, but relating it to my own experiences around transitioning and the ways that I have percevied depth just feels like a lot of gender validation for me :)\n"
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
