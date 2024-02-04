import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Earlier today it was falsely going around that TikTok was banning Black Lives Matter from their platform. Let’s take a look at which groups they are actually preventing from using their platform.</p>'

const frontmatter = {
  cover: '/img/170712813.jpg',
  date: '2020-05-29T20:31:52.265Z',
  link: 'https://theintercept.com/2020/03/16/tiktok-app-moderators-users-discrimination/?',
  tags: ['link', 'discrimination', 'tiktok'],
  title: 'TikTok Told Moderators: Suppress Posts by the “Ugly” and Poor',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/170712813.md'
const url = undefined
function rawContent() {
  return "\nEarlier today it was falsely going around that TikTok was banning Black Lives Matter from their platform. Let's take a look at which groups they are actually preventing from using their platform.\n"
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
