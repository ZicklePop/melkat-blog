import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>It also appears no one makes a living on Steam, a platform built upon a race to the bottom of sales.</p>'

const frontmatter = {
  cover: '/img/151856082.jpg',
  date: '2020-04-08T05:35:09.814Z',
  link: 'https://arstechnica.com/gaming/2020/04/ars-analysis-80-of-steam-games-earn-under-5k-in-first-two-weeks/',
  tags: ['link', 'steam', 'wages', 'games'],
  title: '~80% of Steam games earn under $5K in first two weeks',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/151856082.md'
const url = undefined
function rawContent() {
  return '\nIt also appears no one makes a living on Steam, a platform built upon a race to the bottom of sales.\n'
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
