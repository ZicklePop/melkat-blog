import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Watching Maddy find themself has been a joy, and reading about how Celeste developed with them is great.</p>'

const frontmatter = {
  cover: '/img/210271102.jpg',
  date: '2020-11-06T14:02:39.309Z',
  link: 'https://maddythorson.medium.com/is-madeline-canonically-trans-4277ece02e40',
  tags: ['link', 'trans', 'games'],
  title: 'Is Madeline Canonically Trans?',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/210271102.md'
const url = undefined
function rawContent() {
  return '\nWatching Maddy find themself has been a joy, and reading about how Celeste developed with them is great.\n'
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
