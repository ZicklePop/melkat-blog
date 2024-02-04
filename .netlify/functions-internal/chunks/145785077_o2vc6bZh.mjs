import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Congratulations to the employees at Glitch! I hope to see this come to a company near me!</p>'

const frontmatter = {
  cover: '/img/145785077.png',
  date: '2020-03-14T04:48:25.913Z',
  link: 'https://cwa-union.org/news/releases/tech-workers-app-developer-glitch-vote-form-union-and-join-cwa-organizing-initiative',
  tags: ['link', 'tech', 'unions'],
  title: 'App Developers at Glitch Vote To Form Union',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/145785077.md'
const url = undefined
function rawContent() {
  return '\nCongratulations to the employees at Glitch! I hope to see this come to a company near me!\n'
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
