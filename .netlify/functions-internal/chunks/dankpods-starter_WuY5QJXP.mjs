import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>DankPods put together a great guide to headphones. I use quiet a bit of the things he recommends, which you can see on my <a href="https://melkat.blog/p/uses" title="A large list of the things I use">uses</a> page.</p>'

const frontmatter = {
  cover: '/img/dankpods-starter.jpg',
  date: '2022-04-21T22:43:46.501Z',
  link: 'https://www.youtube.com/watch?v=jk-Tybi-ihw',
  title: 'The DankPods Headphone Starter Guide.',
  tags: ['video', 'dankpods', 'headphones'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/dankpods-starter.md'
const url = undefined
function rawContent() {
  return "\nDankPods put together a great guide to headphones. I use quiet a bit of the things he recommends, which you can see on my [uses](https://melkat.blog/p/uses 'A large list of the things I use') page.\n"
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
