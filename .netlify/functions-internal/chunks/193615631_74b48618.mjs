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
  '<p>A delightful and emotional visual novel. I haven’t finished it yet, but the opening sure was A LOT.</p>'
)

const frontmatter = {
  cover: '/img/193615631.jpg',
  date: '2020-09-08T22:41:51.940Z',
  link: 'https://web.archive.org/web/20200617144910/https://dreamfeel.org/iffound',
  tags: ['link', 'games', 'trans', 'ios', 'pc'],
  title: 'If Found',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/193615631.md'
const url = undefined
function rawContent() {
  return '\nA delightful and emotional visual novel. I haven’t finished it yet, but the opening sure was A LOT.\n'
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
