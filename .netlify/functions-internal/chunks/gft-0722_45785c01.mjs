import {
  b as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
  s as spreadAttributes,
} from './astro_ffb476f0.mjs'
import '@astrojs/internal-helpers/path'
import './pages/image-endpoint_a240ce1b.mjs'
import 'clsx'
import 'html-escaper'
import 'mime/lite.js'

const images = {}

function updateImageReferences(html) {
  return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) =>
    spreadAttributes({
      src: images[imagePath].src,
      ...images[imagePath].attributes,
    })
  )
}

const html = updateImageReferences(
  '<p>I don’t think I ever introduced my software company, <a href="https://girlfriend.technology">Girlfriend Technology</a>, on this blog.</p>\n<p>Girlfriend Technology is a software company I started to distribute apps under. My goal is to build apps that can benefit queer people, or at least think of them first instead of as an afterthought.</p>\n<p>My app, <a href="https://girlfriend.technology/x-to-y">X to Y</a>, stemmed from a former employer not allowing me to change my name at work to be my <em>legal</em> name. I got tired of seeing my deadname and made my own personal browser extension to fix it.</p>\n<p>X to Y got a nice update last week to allow it to play nice on webpages with dynamic content. The next update will help with backing up and restoring preferences.</p>'
)

const frontmatter = {
  cover: '/img/gft-0722.png',
  date: '2022-07-22T03:17:14.556Z',
  tags: ['post', 'me', 'girlfriend-technology'],
  title: 'Girlfriend Technology, July Update',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/gft-0722.md'
const url = undefined
function rawContent() {
  return "\nI don't think I ever introduced my software company, [Girlfriend Technology](https://girlfriend.technology), on this blog.\n\nGirlfriend Technology is a software company I started to distribute apps under. My goal is to build apps that can benefit queer people, or at least think of them first instead of as an afterthought.\n\nMy app, [X to Y](https://girlfriend.technology/x-to-y), stemmed from a former employer not allowing me to change my name at work to be my *legal* name. I got tired of seeing my deadname and made my own personal browser extension to fix it.\n\nX to Y got a nice update last week to allow it to play nice on webpages with dynamic content. The next update will help with backing up and restoring preferences.\n"
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
  images,
  rawContent,
  url,
}
