import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Adam Conover explains the history on Nintendo’s push to push women out of gaming. This is from the episode Adam Ruins Summer Fun of Adam Ruins Everything.</p>'

const frontmatter = {
  cover: '/img/148553739.jpg',
  date: '2020-03-27T04:26:39.162Z',
  link: 'https://www.youtube.com/watch?v=i08CVkBxvBM',
  tags: ['video', 'sexism', 'nintendo', 'games', 'women'],
  title:
    'Adam Ruins Everything - Why People Think Video Games Are Just for Boys',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/148553739.md'
const url = undefined
function rawContent() {
  return '\nAdam Conover explains the history on Nintendo’s push to push women out of gaming. This is from the episode Adam Ruins Summer Fun of Adam Ruins Everything.\n'
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
