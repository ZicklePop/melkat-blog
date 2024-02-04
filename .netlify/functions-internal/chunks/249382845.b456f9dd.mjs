import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>With the recent sexual assault allegations of former people’s champ GrandPooBear, I’ve been thinking a lot about his sudden heel turn, and I think this article hits him on the nose with a newspaper.</p>'

const frontmatter = {
  cover: '/img/249382845.jpg',
  date: '2021-03-11T14:51:06.571Z',
  link: 'https://www.linkedin.com/pulse/gamings-endless-struggle-abusive-men-colin-campbell/',
  tags: ['link', 'sexism', 'women', 'games'],
  title: "Gaming's endless struggle with abusive men",
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/249382845.md'
const url = undefined
function rawContent() {
  return '\nWith the recent sexual assault allegations of former people’s champ GrandPooBear, I’ve been thinking a lot about his sudden heel turn, and I think this article hits him on the nose with a newspaper.\n'
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
