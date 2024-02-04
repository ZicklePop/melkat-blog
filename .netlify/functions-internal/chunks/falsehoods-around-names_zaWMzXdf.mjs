import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>It is wild that this piece is 12 years old and constantly gets more relevant with age. I do not get why everyone wants to constantly gate keep names, like you would know better than the one telling you their name.</p>'

const frontmatter = {
  date: '2022-05-16T20:46:38.225Z',
  link: 'https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/',
  title: 'Falsehoods Programmers Believe About Names',
  tags: ['link', 'tech', 'names'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/falsehoods-around-names.md'
const url = undefined
function rawContent() {
  return '\nIt is wild that this piece is 12 years old and constantly gets more relevant with age. I do not get why everyone wants to constantly gate keep names, like you would know better than the one telling you their name.\n'
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
