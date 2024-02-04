import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Sometimes you need to help your family out from miles away. I had no idea this feature was in Windows, for free. Oh, and did I mention it just works?</p>'

const frontmatter = {
  date: '2020-05-13T21:56:40.998Z',
  link: 'https://support.microsoft.com/en-us/windows/solve-pc-problems-over-a-remote-connection-b077e31a-16f4-2529-1a47-21f6a9040bf3',
  tags: ['link', 'pc', 'apps'],
  title: 'Quick Assist in Windows 10',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/164601922.md'
const url = undefined
function rawContent() {
  return '\nSometimes you need to help your family out from miles away. I had no idea this feature was in Windows, for free. Oh, and did I mention it just works?\n'
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
