import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

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
