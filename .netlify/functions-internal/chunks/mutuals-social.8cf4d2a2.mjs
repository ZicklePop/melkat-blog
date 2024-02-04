import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Only Mutuals. That was the joke I couldn’t get out of my head. So I decided to make a website that only my mutual followers could access. Nothing risqué, just things for my friends: like the wallpapers I used to design and so on.</p>\n<p>While I had been playing with the Mastodon API, I had not been playing with the authenticated part. So I built an application that authenticates you with your Mastodon server and then checks to see if you are following <a href="https://nyan.lol/@zicklepop">me</a> and if I am following you back. Nothing too fancy.</p>'

const frontmatter = {
  date: '2023-02-15T23:57:20.976Z',
  title: 'Mutuals.social',
  tags: ['link', 'me', 'mastodon', 'javascript'],
  link: 'https://mutuals.social',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/mutuals-social.md'
const url = undefined
function rawContent() {
  return "\nOnly Mutuals. That was the joke I couldn't get out of my head. So I decided to make a website that only my mutual followers could access. Nothing risqué, just things for my friends: like the wallpapers I used to design and so on.\n\nWhile I had been playing with the Mastodon API, I had not been playing with the authenticated part. So I built an application that authenticates you with your Mastodon server and then checks to see if you are following [me](https://nyan.lol/@zicklepop) and if I am following you back. Nothing too fancy.\n"
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
