import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>I am oddly excited about the possibilities of using React Hooks in CLI tools.</p>'

const frontmatter = {
  cover: '/img/187431259.png',
  date: '2020-08-11T17:22:01.753Z',
  link: 'https://github.com/vadimdemedes/ink',
  tags: ['link', 'javascript', 'cli'],
  title: 'ink - 🌈 React for interactive command-line apps',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/187431259.md'
const url = undefined
function rawContent() {
  return '\nI am oddly excited about the possibilities of using React Hooks in CLI tools.\n'
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
