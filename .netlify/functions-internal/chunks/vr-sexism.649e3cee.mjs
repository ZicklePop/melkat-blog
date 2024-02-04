import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Previously I have posted about danah boyd’s research on how hormones impact how your brain processes depth, but here is another study about how interpupillary distance, IPD, settings on VR headsets make it hard for people other than, for example, cisgender men to find a distance that works for them, leading to motion sickness. A while ago I tried to adjust my IPD but never found a setting that worked for me. It was either too close or too far, and the motion sickness remained.</p>'

const frontmatter = {
  cover: '/img/vr-sexism.jpg',
  date: '2022-04-30T06:32:11.369Z',
  title: 'Virtual Reality Is Sexist: But It Does Not Have to Be',
  link: 'https://www.frontiersin.org/articles/10.3389/frobt.2020.00004/full',
  tags: ['article', 'sexism', 'vr'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/vr-sexism.md'
const url = undefined
function rawContent() {
  return "\nPreviously I have posted about danah boyd's research on how hormones impact how your brain processes depth, but here is another study about how interpupillary distance, IPD, settings on VR headsets make it hard for people other than, for example, cisgender men to find a distance that works for them, leading to motion sickness. A while ago I tried to adjust my IPD but never found a setting that worked for me. It was either too close or too far, and the motion sickness remained.\n"
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
