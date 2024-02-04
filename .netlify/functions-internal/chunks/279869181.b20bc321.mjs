import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>We all know SMS two factor auth is very dangerous due to it’s insecure nature, but we don’t often here companies actually doing anything about it. Most won’t remove SMS two factor auth because they want your phone number so they can better target you with ads. Hopefully we start to see more people follow this trend, as everyone else is just playing security theatre.</p>'

const frontmatter = {
  cover: '/img/279869181.png',
  date: '2021-06-17T19:39:56.179Z',
  link: 'https://devcenter.heroku.com/articles/mfa-sms',
  tags: ['link', 'security'],
  title: 'Heroku removes SMS as an MFA Verification Method',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/279869181.md'
const url = undefined
function rawContent() {
  return '\nWe all know SMS two factor auth is very dangerous due to it’s insecure nature, but we don’t often here companies actually doing anything about it. Most won’t remove SMS two factor auth because they want your phone number so they can better target you with ads. Hopefully we start to see more people follow this trend, as everyone else is just playing security theatre.\n'
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
