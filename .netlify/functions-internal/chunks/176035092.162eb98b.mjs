import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Translations with DeepL feels more accurate and more natural. I am looking forward to a browser extension.</p>'

const frontmatter = {
  cover: '/img/176035092.png',
  date: '2020-06-16T05:07:51.357Z',
  link: 'https://www.deepl.com/translator',
  tags: ['link', 'translations', 'apps'],
  title: 'DeepL Translate',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/176035092.md'
const url = undefined
function rawContent() {
  return '\nTranslations with DeepL feels more accurate and more natural. I am looking forward to a browser extension.\n'
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
