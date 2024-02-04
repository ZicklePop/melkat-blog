import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Virtual avatars for streaming and videos have become popular over the last few years. Now you can do it from your browser on your phone?! So cool.</p>'

const frontmatter = {
  cover: '/img/233159783.jpg',
  date: '2021-01-25T00:21:01.601Z',
  link: 'https://kalidoface.com/',
  tags: ['link', 'javascript', 'live2d', 'virtual'],
  title: 'Kalidoface - Become a Virtual Character',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/233159783.md'
const url = undefined
function rawContent() {
  return '\nVirtual avatars for streaming and videos have become popular over the last few years. Now you can do it from your browser on your phone?! So cool.\n'
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
