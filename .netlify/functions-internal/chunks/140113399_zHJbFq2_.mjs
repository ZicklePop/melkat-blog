import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>A lot of people talk about 17776 by Jon Bois, but I was initially introduced to his work through this: a non-linear essay about Jon Bois that is probably more than 17776 words long by Colin Spacetwinks.</p>'

const frontmatter = {
  cover: '/img/140113399.jpg',
  date: '2020-02-18T06:00:59.403Z',
  link: 'https://spacetwinks.itch.io/well-its-an-essay-about-jon',
  tags: ['link', 'twine', 'criticism'],
  title: "Well it's an essay about Jon",
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/140113399.md'
const url = undefined
function rawContent() {
  return '\nA lot of people talk about 17776 by Jon Bois, but I was initially introduced to his work through this: a non-linear essay about Jon Bois that is probably more than 17776 words long by Colin Spacetwinks.\n'
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
