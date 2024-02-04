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
  '<p>This is amazing. Ever wanted to clear out major streets in your city? It just takes 99 phones, and you can safely walk anywhere you want.</p>'
)

const frontmatter = {
  cover: '/img/136763858.jpg',
  date: '2020-02-02T16:41:52.455Z',
  link: 'http://www.simonweckert.com/googlemapshacks.html',
  tags: ['link', 'google', 'hack'],
  title: 'SIMON WECKERT: Google Maps Hack',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/136763858.md'
const url = undefined
function rawContent() {
  return '\nThis is amazing. Ever wanted to clear out major streets in your city? It just takes 99 phones, and you can safely walk anywhere you want.\n'
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
