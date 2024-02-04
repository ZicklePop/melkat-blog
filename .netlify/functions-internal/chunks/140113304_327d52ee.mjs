import {
  b as createComponent,
  r as renderTemplate,
  u as unescapeHTML,
  s as spreadAttributes,
} from './astro_13acd68d.mjs'
import '@astrojs/internal-helpers/path'
import './pages/image-endpoint_2bac92e6.mjs'
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
  '<p>npckc is probably one of my favorite indie game creators. npckc rose to popularity with this game about taking your trans friend to a onsen, and it’s just so good.</p>'
)

const frontmatter = {
  cover: '/img/140113304.png',
  date: '2020-02-18T05:57:46.677Z',
  link: 'https://npckc.itch.io/one-night-hot-springs',
  tags: ['link', 'trans', 'games'],
  title: 'one night, hot springs',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/140113304.md'
const url = undefined
function rawContent() {
  return '\nnpckc is probably one of my favorite indie game creators. npckc rose to popularity with this game about taking your trans friend to a onsen, and it’s just so good.\n'
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

  return renderTemplate`${unescapeHTML(html)}`
})
Content[Symbol.for('astro.needsHeadRendering')] = true

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
