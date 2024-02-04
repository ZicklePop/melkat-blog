import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Earlier today it was falsely going around that TikTok was banning Black Lives Matter from their platform. Let’s take a look at which groups they are actually preventing from using their platform.</p>'

const frontmatter = {
  cover: '/img/170712813.jpg',
  date: '2020-05-29T20:31:52.265Z',
  link: 'https://theintercept.com/2020/03/16/tiktok-app-moderators-users-discrimination/?',
  tags: ['article', 'discrimination', 'tiktok'],
  title: 'TikTok Told Moderators: Suppress Posts by the “Ugly” and Poor',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/170712813.md'
const url = undefined
function rawContent() {
  return "\nEarlier today it was falsely going around that TikTok was banning Black Lives Matter from their platform. Let's take a look at which groups they are actually preventing from using their platform.\n"
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
