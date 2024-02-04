import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html = '<p>Hi! My name is Melanie.</p>'

const frontmatter = {
  draft: true,
  date: '2069-04-20T07:57:24.796Z',
  title: 'Template',
  tags: ['link', 'video', 'post', 'etc'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/template.md'
const url = undefined
function rawContent() {
  return '\nHi! My name is Melanie.\n'
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
