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
  '<p>Grace Robertson digs in to why the politics and self-congratulatory nature of Michael Shur’s television shows trip him up and make for awkward television.</p>'
)

const frontmatter = {
  cover: '/img/143872419.jpg',
  date: '2020-03-06T18:47:46.496Z',
  link: 'https://gemofamara.substack.com/p/the-curious-worldview-of-michael',
  tags: ['article', 'criticism', 'tv'],
  title: "The Curious Worldview of Michael Schur's Television",
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/143872419.md'
const url = undefined
function rawContent() {
  return "\nGrace Robertson digs in to why the politics and self-congratulatory nature of Michael Shur's television shows trip him up and make for awkward television.\n"
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
