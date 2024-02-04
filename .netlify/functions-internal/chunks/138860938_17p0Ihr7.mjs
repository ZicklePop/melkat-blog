import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Hatsune Miku comes to Switch! I’m so excited!!! No word on the western release quite yet except that it comes out this year. I’m importing the collectors edition, of course lol</p>'

const frontmatter = {
  cover: '/img/138860938.jpg',
  date: '2020-02-12T14:48:26.268Z',
  link: 'https://miku.sega.jp/mega39s/',
  tags: ['link', 'games', 'miku'],
  title: 'Hatsune Miku Project DIVA MEGA39',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/138860938.md'
const url = undefined
function rawContent() {
  return '\nHatsune Miku comes to Switch! I’m so excited!!! No word on the western release quite yet except that it comes out this year. I’m importing the collectors edition, of course lol\n'
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
