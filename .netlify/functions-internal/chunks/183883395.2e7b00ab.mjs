import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>I can’t believe it took a study for this to be apparent. I can’t control much of the flow of how job interviews work as an engineer, but I can try my best to make the other person comfortable and relaxed. That is always my goal during interviews. Anything that might make them nervous or anxious I specifically avoid.</p>'

const frontmatter = {
  cover: '/img/183883395.jpg',
  date: '2020-07-25T16:56:20.599Z',
  link: 'https://news.ncsu.edu/2020/07/tech-job-interviews-anxiety/?#',
  tags: ['article', 'tech'],
  title: 'Tech Sector Job Interviews Assess Anxiety, Not Software Skills',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/183883395.md'
const url = undefined
function rawContent() {
  return "\nI can't believe it took a study for this to be apparent. I can't control much of the flow of how job interviews work as an engineer, but I can try my best to make the other person comfortable and relaxed. That is always my goal during interviews. Anything that might make them nervous or anxious I specifically avoid.\n"
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
