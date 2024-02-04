import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>I’ve been looking at this app for a while, but it really feels like the closest thing to Final Cut Pro on the iPad (or iPhone?) I was able to take a hour long video and chop it up almost instantly.</p>'

const frontmatter = {
  cover: '/img/164564932.png',
  date: '2020-05-13T18:51:33.884Z',
  link: 'https://luma-touch.com/',
  tags: ['link', 'apps', 'ios'],
  title: 'LumaFusion',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/164564932.md'
const url = undefined
function rawContent() {
  return '\nI’ve been looking at this app for a while, but it really feels like the closest thing to Final Cut Pro on the iPad (or iPhone?) I was able to take a hour long video and chop it up almost instantly.\n'
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
