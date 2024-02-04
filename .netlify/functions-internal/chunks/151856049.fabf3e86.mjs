import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Every once and a while Patreon doesn something bad and then I can’t help but remember this article from before The Outline laid everyone off recently.</p>'

const frontmatter = {
  cover: '/img/151856049.jpg',
  date: '2020-04-08T05:33:05.884Z',
  link: 'https://theoutline.com/post/2571/no-one-makes-a-living-on-patreon?zd=1&zi=gw6f4bfa',
  tags: ['article', 'patreon', 'wages'],
  title: 'No one makes a living on Patreon',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/151856049.md'
const url = undefined
function rawContent() {
  return "\nEvery once and a while Patreon doesn something bad and then I can't help but remember this article from before The Outline laid everyone off recently.\n"
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
