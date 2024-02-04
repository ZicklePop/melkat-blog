import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>While we’re criticizing TikTok for hiding “ugly” and “poor” people from their platform, they have also admitted to discrimination of other protected groups.</p>'

const frontmatter = {
  cover: '/img/170712882.jpg',
  date: '2020-05-29T20:34:23.577Z',
  link: 'https://slate.com/technology/2019/12/tiktok-disabled-users-videos-suppressed.html?',
  tags: [
    'article',
    'discrimination',
    'ableist',
    'fatphobic',
    'queerphobic',
    'tiktok',
  ],
  title:
    'TikTok Admits It Suppressed Videos by Disabled, Queer, and Fat Creators',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/170712882.md'
const url = undefined
function rawContent() {
  return '\nWhile we\'re criticizing TikTok for hiding "ugly" and "poor" people from their platform, they have also admitted to discrimination of other protected groups.\n'
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
