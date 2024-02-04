import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>“Don’t touch my phone / No touch my heart” A fun Miku music video from BIGHEAD, apapico, caseif, and Incept</p>'

const frontmatter = {
  cover: '/img/145124027.jpg',
  date: '2020-03-10T18:54:15.396Z',
  link: 'https://www.youtube.com/watch?v=1wT4kw5do1A',
  tags: ['video', 'miku', 'music'],
  title: 'Rage Against The M FEAT.Hatsune Miku',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/145124027.md'
const url = undefined
function rawContent() {
  return '\n"Don\'t touch my phone / No touch my heart” A fun Miku music video from BIGHEAD, apapico, caseif, and Incept\n'
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
