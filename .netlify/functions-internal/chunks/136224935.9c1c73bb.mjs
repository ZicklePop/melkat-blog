import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>It’s fascinating to hear from the people behind this game. To me it was always mysterious game from a mysterious source that would mysteriously get new chapters. I never demanded anything from them, but I always enjoyed getting more.</p>'

const frontmatter = {
  cover: '/img/136224935.jpg',
  date: '2020-01-31T05:34:20.525Z',
  link: 'https://www.vice.com/en_us/article/jge5v7/it-took-nearly-10-years-to-finish-kentucky-route-zero-but-its-done',
  tags: ['article', 'games', 'interviews'],
  title:
    'It Took Nearly 10 Years to Finish ‘Kentucky Route Zero,’ But It’s Done',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/136224935.md'
const url = undefined
function rawContent() {
  return '\nIt’s fascinating to hear from the people behind this game. To me it was always mysterious game from a mysterious source that would mysteriously get new chapters. I never demanded anything from them, but I always enjoyed getting more.\n'
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
