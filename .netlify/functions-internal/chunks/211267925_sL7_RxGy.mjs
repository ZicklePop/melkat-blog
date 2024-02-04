import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>This article is a beautiful takedown of the fake feminism people sell. Though, this article fails to mention anything at all about trans issues, who are also deeply effected by mobilized angry white women trying to destroy feminism.</p>'

const frontmatter = {
  cover: '/img/211267925.jpg',
  date: '2020-11-10T15:10:01.643Z',
  link: 'https://jezebel.com/the-business-of-selling-white-women-the-righteousness-o-1845577127',
  tags: ['link', 'race', 'women'],
  title:
    'The Business of Selling White Women the Righteousness of Their Own Anger',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/211267925.md'
const url = undefined
function rawContent() {
  return '\nThis article is a beautiful takedown of the fake feminism people sell. Though, this article fails to mention anything at all about trans issues, who are also deeply effected by mobilized angry white women trying to destroy feminism.\n'
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
