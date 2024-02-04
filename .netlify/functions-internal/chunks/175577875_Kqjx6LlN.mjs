import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Don’t trust anyone who wants to depict pigs as anything other than violent and bigoted. Not Spider-man. Not Andy Griffith. No one gets to ignore this.</p>'

const frontmatter = {
  cover: '/img/175577875.jpg',
  date: '2020-06-14T15:06:24.185Z',
  link: 'https://kotaku.com/video-games-have-to-reckon-with-how-they-depict-the-pol-1844013471',
  tags: ['link', 'games', 'criticism'],
  title: 'Video Games Have To Reckon With How They Depict The Police',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/175577875.md'
const url = undefined
function rawContent() {
  return '\nDon’t trust anyone who wants to depict pigs as anything other than violent and bigoted. Not Spider-man. Not Andy Griffith. No one gets to ignore this.\n'
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
