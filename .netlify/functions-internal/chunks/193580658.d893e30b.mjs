import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Because Git and GitHub are too cowardly to <em>already</em> be setting the default branch from a white supremacy reference to something simple like “main,” here are instructions to fix your code repository.</p>'

const frontmatter = {
  cover: '/img/193580658.png',
  date: '2020-09-08T18:40:28.010Z',
  link: 'https://paste.melkat.lol/no-masters.md',
  tags: ['link', 'code', 'git'],
  title: 'No Masters',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/193580658.md'
const url = undefined
function rawContent() {
  return '\nBecause Git and GitHub are too cowardly to _already_ be setting the default branch from a white supremacy reference to something simple like “main,” here are instructions to fix your code repository.\n'
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
