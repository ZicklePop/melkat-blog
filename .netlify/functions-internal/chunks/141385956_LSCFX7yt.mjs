import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html = '<p>Anthropomorphic fonts.</p>'

const frontmatter = {
  cover: '/img/141385956.png',
  date: '2020-02-24T22:26:22.515Z',
  link: 'https://sevenseasentertainment.com/2020/02/20/seven-seas-has-a-type-with-license-of-what-the-font-a-manga-guide-to-western-typeface/',
  tags: ['link', 'manga'],
  title: 'What the Font?! A Manga Guide to Western Typeface',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/141385956.md'
const url = undefined
function rawContent() {
  return '\nAnthropomorphic fonts.\n'
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
