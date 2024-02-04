import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>I picked this game up in early access a few weeks ago and I’ve put a lot of time in to it. It’s a non-violent Pokémon meets Animal Crossing game with some of my favorite dialog in a game since Night in the Woods. While the game is unfinished and there are a few bugs, it’s still incredibly fun and I can’t wait to see where this game goes.</p>'

const frontmatter = {
  cover: '/img/186172319.jpg',
  date: '2020-08-06T05:25:54.770Z',
  link: 'https://ooblets.com/',
  tags: ['link', 'games', 'pc'],
  title: 'Ooblets',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/186172319.md'
const url = undefined
function rawContent() {
  return '\nI picked this game up in early access a few weeks ago and I’ve put a lot of time in to it. It’s a non-violent Pokémon meets Animal Crossing game with some of my favorite dialog in a game since Night in the Woods. While the game is unfinished and there are a few bugs, it’s still incredibly fun and I can’t wait to see where this game goes.\n'
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
