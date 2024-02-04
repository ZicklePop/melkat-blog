import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Tracey Lien’s 2013 piece for Polygon reminds us that Nintendo invented the myth that games are for boys.</p>'

const frontmatter = {
  cover: '/img/148553676.jpg',
  date: '2020-03-27T04:24:44.334Z',
  link: 'https://www.polygon.com/features/2013/12/2/5143856/no-girls-allowed',
  tags: ['link', 'nintendo', 'sexism', 'games', 'women'],
  title: 'No girls allowed',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/148553676.md'
const url = undefined
function rawContent() {
  return '\nTracey Lien’s 2013 piece for Polygon reminds us that Nintendo invented the myth that games are for boys.\n'
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
