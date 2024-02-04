import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Cassidy had an excellent talk today about building an adventure game with NextJS, which is definitely in my interests because I’ve been building my own visual novel in NextJS over the last few months.</p>'

const frontmatter = {
  cover: '/img/207807923.png',
  date: '2020-10-28T04:27:49.967Z',
  link: 'https://www.netlify.com/blog/2020/10/27/a-spooky-adventure-at-next.js-conf/',
  tags: ['link', 'code', 'javascript'],
  title: 'A Spooky Adventure at Next.js Conf',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/207807923.md'
const url = undefined
function rawContent() {
  return '\nCassidy had an excellent talk today about building an adventure game with NextJS, which is definitely in my interests because I’ve been building my own visual novel in NextJS over the last few months.\n'
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
