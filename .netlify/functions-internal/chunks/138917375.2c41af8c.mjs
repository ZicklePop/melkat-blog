import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>This was such a fun read from Colin Spacetwinks about how Sonic is cool enough to fit in to any mold you want.</p>'

const frontmatter = {
  cover: '/img/138917375.jpg',
  date: '2020-02-12T17:31:50.048Z',
  link: 'https://nymag.com/intelligencer/2020/02/why-is-there-so-much-christian-sonic-the-hedgehog-fan-art.html',
  tags: ['article', 'games', 'spacetwinks'],
  title: 'The Pious World of Christian Sonic the Hedgehog Fan Art',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/138917375.md'
const url = undefined
function rawContent() {
  return '\nThis was such a fun read from Colin Spacetwinks about how Sonic is cool enough to fit in to any mold you want.\n'
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
