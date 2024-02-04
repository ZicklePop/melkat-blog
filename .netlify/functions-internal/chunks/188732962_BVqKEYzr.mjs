import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>I stumbled upon this neat community of women makers the other day. Best of all they are trans/nonbinary inclusive.</p>'

const frontmatter = {
  cover: '/img/188732962.jpg',
  date: '2020-08-17T03:54:47.769Z',
  link: 'https://womenmake.com/',
  tags: ['link', 'women', 'tech'],
  title: 'Women Make',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/188732962.md'
const url = undefined
function rawContent() {
  return '\nI stumbled upon this neat community of women makers the other day. Best of all they are trans/nonbinary inclusive.\n'
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
