import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>This post is nearly five years old and yet still as relevant as ever, as Facebook still does not like that queer people use their website. This doesn’t stop fake accounts or harassment, obviously. The alt-right trolls still attack people daily and use the site to plan attacks on innocent people.</p>'

const frontmatter = {
  cover: '/img/152242486.jpg',
  date: '2020-04-09T15:32:40.853Z',
  link: 'https://medium.com/@zip/my-name-is-only-real-enough-to-work-at-facebook-not-to-use-on-the-site-c37daf3f4b03',
  tags: ['article', 'trans', 'facebook'],
  title:
    'My name is only real enough to work at Facebook, not to use on the site',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/152242486.md'
const url = undefined
function rawContent() {
  return "\nThis post is nearly five years old and yet still as relevant as ever, as Facebook still does not like that queer people use their website. This doesn't stop fake accounts or harassment, obviously. The alt-right trolls still attack people daily and use the site to plan attacks on innocent people.\n"
}
function compiledContent() {
  return html
}
function getHeadings() {
  return []
}
async function Content() {
  const { layout, ...content } = frontmatter
  content.file = file
  content.url = url
  const contentFragment = createVNode(Fragment, { 'set:html': html })
  return contentFragment
}
Content[Symbol.for('astro.needsHeadRendering')] = true

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
