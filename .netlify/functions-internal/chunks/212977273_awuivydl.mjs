import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>I don’t know what’s more wild: a React hook that makes your custom UI elements accessible or that this came from Adobe.</p>'

const frontmatter = {
  cover: '/img/212977273.png',
  date: '2020-11-16T20:39:18.346Z',
  link: 'https://react-spectrum.adobe.com/react-aria/index.html',
  tags: ['link', 'javascript'],
  title: 'React Aria',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/212977273.md'
const url = undefined
function rawContent() {
  return '\nI don’t know what’s more wild: a React hook that makes your custom UI elements accessible or that this came from Adobe.\n'
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
