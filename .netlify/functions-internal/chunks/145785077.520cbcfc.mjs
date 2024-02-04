import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Congratulations to the employees at Glitch! I hope to see this come to a company near me!</p>'

const frontmatter = {
  cover: '/img/145785077.png',
  date: '2020-03-14T04:48:25.913Z',
  link: 'https://cwa-union.org/news/releases/tech-workers-app-developer-glitch-vote-form-union-and-join-cwa-organizing-initiative',
  tags: ['article', 'tech', 'unions'],
  title: 'App Developers at Glitch Vote To Form Union',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/145785077.md'
const url = undefined
function rawContent() {
  return '\nCongratulations to the employees at Glitch! I hope to see this come to a company near me!\n'
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
