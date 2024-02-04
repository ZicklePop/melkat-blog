import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>npckc is probably one of my favorite indie game creators. npckc rose to popularity with this game about taking your trans friend to a onsen, and it’s just so good.</p>'

const frontmatter = {
  cover: '/img/140113304.png',
  date: '2020-02-18T05:57:46.677Z',
  link: 'https://npckc.itch.io/one-night-hot-springs',
  tags: ['link', 'trans', 'games'],
  title: 'one night, hot springs',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/140113304.md'
const url = undefined
function rawContent() {
  return '\nnpckc is probably one of my favorite indie game creators. npckc rose to popularity with this game about taking your trans friend to a onsen, and it’s just so good.\n'
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
