import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Nico Deyo comes in holding no punches: ‘The inhuman coloration to their skin and general lankiness denotes an otherness, but everything else feels oriented towards sexiness, creating a line of mean, angular villainesses—like fuckable Lamborghinis.’</p>'

const frontmatter = {
  cover: '/img/140166273.png',
  date: '2020-02-18T15:26:26.407Z',
  link: 'https://www.vice.com/en_us/article/wxeze5/blizzards-long-history-of-manic-pixie-nightmare-girls-and-fear-of-women',
  tags: ['link', 'games', 'sexism'],
  title:
    "Blizzard's Long History of Manic Pixie Nightmare Girls and Fear of Women",
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/140166273.md'
const url = undefined
function rawContent() {
  return "\nNico Deyo comes in holding no punches: 'The inhuman coloration to their skin and general lankiness denotes an otherness, but everything else feels oriented towards sexiness, creating a line of mean, angular villainesses—like fuckable Lamborghinis.'\n"
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
