import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Tired of seeing “Safari cannot open the page because the address is invalid.” alerts when you try to open a magnet link? This Safari extension helps by adjusting the links to go through Put.io</p>'

const frontmatter = {
  cover: '/img/339029235.png',
  date: '2021-12-03T20:27:55.083Z',
  link: 'https://apps.apple.com/us/app/magnet-links/id1598258908',
  tags: ['link', 'me', 'safari', 'extension', 'apps'],
  title: 'Magnet Links',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/339029235.md'
const url = undefined
function rawContent() {
  return '\nTired of seeing "Safari cannot open the page because the address is invalid." alerts when you try to open a magnet link? This Safari extension helps by adjusting the links to go through Put.io\n'
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
