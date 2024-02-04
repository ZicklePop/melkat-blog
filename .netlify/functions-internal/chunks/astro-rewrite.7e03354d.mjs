import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>Welcome to the blog that was known as <a href="https://melkat.link" title="Old URL that redirects to this website">melkat.link</a>.</p>\n<p>I had a fun technique for making a blog using a bookmarking service to act as my content management system. I never knew how the bookmarking service felt about how I was using it and it made my blog on external services.</p>\n<p>A few months ago I heard about <a href="https://astro.build" title="Astro project website">Astro</a>, a new build tool for building websites in JavaScript. I’ve since made a few sites using it and have been pretty impressed. Before I was using <a href="https://nextjs.org" title="NextJS project website">Next.js</a>, and I will continue to use it where appropriate.</p>\n<p>The biggest change will be that I can no longer simply share a link to post on my blog. I will need to write a brand new <a href="https://en.wikipedia.org/wiki/Markdown" title="Wikipedia page on Markdown">Markdown</a> file and deploy it, which brings it’s own set of benefits. For one, I can now write posts like this.</p>\n<p>See you soon~</p>'

const frontmatter = {
  date: '2022-03-20T20:02:19.497Z',
  title: 'I rewrote my blog with Astro',
  tags: ['post', 'me', 'astro', 'javascript'],
  cover: '/img/astro-rewrite.png',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/astro-rewrite.md'
const url = undefined
function rawContent() {
  return "Welcome to the blog that was known as [melkat.link](https://melkat.link 'Old URL that redirects to this website').\n\nI had a fun technique for making a blog using a bookmarking service to act as my content management system. I never knew how the bookmarking service felt about how I was using it and it made my blog on external services.\n\nA few months ago I heard about [Astro](https://astro.build 'Astro project website'), a new build tool for building websites in JavaScript. I've since made a few sites using it and have been pretty impressed. Before I was using [Next.js](https://nextjs.org 'NextJS project website'), and I will continue to use it where appropriate.\n\nThe biggest change will be that I can no longer simply share a link to post on my blog. I will need to write a brand new [Markdown](https://en.wikipedia.org/wiki/Markdown 'Wikipedia page on Markdown') file and deploy it, which brings it's own set of benefits. For one, I can now write posts like this.\n\nSee you soon~\n"
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
