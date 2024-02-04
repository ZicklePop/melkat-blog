import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Around maybe five years ago I launched a gif management system for myself. I finally rewrote it to be fast and no longer hosted on a computer in my home. Phew!</p>'

const frontmatter = {
  cover: '/img/137009091.png',
  date: '2020-02-03T14:55:07.018Z',
  link: 'https://myhot.pics/',
  tags: ['link', 'me', 'gifs'],
  title: 'MYHOT.PICS - The hottest animated gifs on the internet',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/137009091.md'
const url = undefined
function rawContent() {
  return '\nAround maybe five years ago I launched a gif management system for myself. I finally rewrote it to be fast and no longer hosted on a computer in my home. Phew!\n'
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
