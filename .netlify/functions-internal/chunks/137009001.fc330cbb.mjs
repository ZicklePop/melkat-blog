import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Reporting from live from News39, it’s Hatsune Miku, Meiko, and other virtual youtubers reminding you to stay hydrated on behalf of a Japanese bottled water company. Music by producer Mitchie M.</p>'

const frontmatter = {
  cover: '/img/137009001.jpg',
  date: '2020-02-03T14:50:53.755Z',
  link: 'https://www.youtube.com/watch?v=Hjt59bZqC0g',
  tags: ['video', 'miku', 'music'],
  title:
    'Pocari Sweat and Hatsune Miku want you to stay hydrated 「Nechusho No!No! feat. 初音ミク＆MEIKO」',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/137009001.md'
const url = undefined
function rawContent() {
  return "\nReporting from live from News39, it's Hatsune Miku, Meiko, and other virtual youtubers reminding you to stay hydrated on behalf of a Japanese bottled water company. Music by producer Mitchie M.\n"
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
