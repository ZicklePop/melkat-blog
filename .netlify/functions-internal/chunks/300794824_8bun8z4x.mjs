import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Time to replace your improv partner! You’ve played AI Dungeon, now play Improv Dungeon. Write out your scenario and the AI will play along!</p>'

const frontmatter = {
  cover: '/img/300794824.png',
  date: '2021-08-23T05:16:37.980Z',
  link: 'https://improv-dungeon.melkat.games/',
  tags: ['link', 'games', 'me'],
  title: 'Improv Dungeon',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/300794824.md'
const url = undefined
function rawContent() {
  return '\nTime to replace your improv partner! You’ve played AI Dungeon, now play Improv Dungeon. Write out your scenario and the AI will play along!\n'
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
