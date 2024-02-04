import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>I have now published publicly for the first time the code that powers this website.</p>'

const frontmatter = {
  cover: '/img/176243918.jpg',
  date: '2020-06-17T04:55:01.069Z',
  link: 'https://github.com/ZicklePop/melkat-link',
  tags: ['link', 'me', 'code'],
  title: 'This blog is now open source',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/176243918.md'
const url = undefined
function rawContent() {
  return '\nI have now published publicly for the first time the code that powers this website.\n'
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
