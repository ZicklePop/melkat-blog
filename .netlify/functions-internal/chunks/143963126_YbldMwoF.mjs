import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>This is pretty wild! Android apps on iOS? This is something to keep an eye on for sure.</p>'

const frontmatter = {
  date: '2020-03-07T06:27:48.178Z',
  link: 'https://github.com/corellium/projectsandcastle',
  tags: ['link', 'ios', 'android'],
  title: 'corellium/projectsandcastle',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/143963126.md'
const url = undefined
function rawContent() {
  return '\nThis is pretty wild! Android apps on iOS? This is something to keep an eye on for sure.\n'
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
