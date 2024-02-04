import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>A delightful and emotional visual novel. I haven’t finished it yet, but the opening sure was A LOT.</p>'

const frontmatter = {
  cover: '/img/193615631.jpg',
  date: '2020-09-08T22:41:51.940Z',
  link: 'https://web.archive.org/web/20200617144910/https://dreamfeel.org/iffound',
  tags: ['link', 'games', 'trans', 'ios', 'pc'],
  title: 'If Found',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/193615631.md'
const url = undefined
function rawContent() {
  return '\nA delightful and emotional visual novel. I haven’t finished it yet, but the opening sure was A LOT.\n'
}
function compiledContent() {
  return html
}
function getHeadings() {
  return []
}

const Content = createComponent((result, _props, slots) => {
  const { layout, ...content } = frontmatter
  content.file = file
  content.url = url

  return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`
})

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
