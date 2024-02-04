import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Congratulations to the employees at Kickstarter! I hope to see this come to a company near me!</p>'

const frontmatter = {
  cover: '/img/140179091.jpg',
  date: '2020-02-18T17:36:10.060Z',
  link: 'https://www.vice.com/en_us/article/3a8pp5/kickstarter-employees-win-historic-union-election',
  tags: ['link', 'tech', 'unions'],
  title: 'Kickstarter Employees Win Historic Union Election',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/140179091.md'
const url = undefined
function rawContent() {
  return '\nCongratulations to the employees at Kickstarter! I hope to see this come to a company near me!\n'
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
