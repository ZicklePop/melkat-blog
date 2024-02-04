import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Because Git and GitHub are too cowardly to <em>already</em> be setting the default branch from a white supremacy reference to something simple like “main,” here are instructions to fix your code repository.</p>'

const frontmatter = {
  cover: '/img/193580658.png',
  date: '2020-09-08T18:40:28.010Z',
  link: 'https://paste.melkat.lol/no-masters.md',
  tags: ['link', 'code', 'git'],
  title: 'No Masters',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/193580658.md'
const url = undefined
function rawContent() {
  return '\nBecause Git and GitHub are too cowardly to _already_ be setting the default branch from a white supremacy reference to something simple like “main,” here are instructions to fix your code repository.\n'
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
