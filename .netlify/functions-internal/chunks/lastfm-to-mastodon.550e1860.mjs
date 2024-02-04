import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>At this point I’m just coming up with reasons to play with the Mastodon API. I don’t know. I haven’t used <a href="https://www.last.fm/user/ZicklePop">Last.fm</a> in years but I started again recently just because I love logging things. I was also thinking what if I could automatically update my Mastodon profile with dynamic content. Mastodon profiles, by default, have up to four fields you can customize the label and content of. A common use for one of the fields to list their pronouns, link to their website, or share their location, so why not your last played track from Last.fm? My script works can work in two ways: it will look for a field titled <code>Last.fm</code> and set the value to the last played track, or it will look for a field value of a <code>last.fm</code> url and set the field title to the last played track.</p>\n<p>This script requires <a href="https://scriptable.app">Scriptable.app</a> but it can easily be converted to just run with Node. You will need to setup the config portion of the script with your Last.fm username, <a href="https://www.last.fm/api">Last.fm API key</a>, Mastodon instance, and Mastodon token. I hope that doesn’t sound like a lot. I’ve documented the code a bit to help you through all of this.</p>\n<p>As always, if you have an questions or need help reach out to me on <a href="https://nyan.lol/@zicklepop">Mastodon</a>.</p>'

const frontmatter = {
  date: '2023-03-05T21:00:09.249Z',
  title: 'Last.fm to Mastodon Profile',
  tags: ['link', 'mastodon', 'lastfm', 'scriptable'],
  cover: '/img/lastfm-to-mastodon.png',
  link: 'https://paste.melkat.lol/last.fm-to-mastodon.js',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/lastfm-to-mastodon.md'
const url = undefined
function rawContent() {
  return '\nAt this point I’m just coming up with reasons to play with the Mastodon API. I don’t know. I haven’t used [Last.fm](https://www.last.fm/user/ZicklePop) in years but I started again recently just because I love logging things. I was also thinking what if I could automatically update my Mastodon profile with dynamic content. Mastodon profiles, by default, have up to four fields you can customize the label and content of. A common use for one of the fields to list their pronouns, link to their website, or share their location, so why not your last played track from Last.fm? My script works can work in two ways: it will look for a field titled `Last.fm` and set the value to the last played track, or it will look for a field value of a `last.fm` url and set the field title to the last played track.\n\nThis script requires [Scriptable.app](https://scriptable.app) but it can easily be converted to just run with Node. You will need to setup the config portion of the script with your Last.fm username, [Last.fm API key](https://www.last.fm/api), Mastodon instance, and Mastodon token. I hope that doesn’t sound like a lot. I’ve documented the code a bit to help you through all of this.\n\nAs always, if you have an questions or need help reach out to me on [Mastodon](https://nyan.lol/@zicklepop).\n'
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
