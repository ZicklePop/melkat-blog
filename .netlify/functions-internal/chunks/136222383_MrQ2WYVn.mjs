import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>It’s good to see Panic shamed in to doing right by the game pop up after throwing their weight around like nasty bullies. It’s a shame they needed to be shamed at all, they should be better than that.</p>'

const frontmatter = {
  date: '2020-01-31T05:17:34.166Z',
  link: 'https://web.archive.org/web/20221209084650/http://playdatepopup.com/blog/2020/01/29/welcome-to-2020/',
  tags: ['link', 'games', 'panic'],
  title: 'Playdate Pop Up - Welcome to 2020',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/136222383.md'
const url = undefined
function rawContent() {
  return '\nIt’s good to see Panic shamed in to doing right by the game pop up after throwing their weight around like nasty bullies. It’s a shame they needed to be shamed at all, they should be better than that.\n'
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
