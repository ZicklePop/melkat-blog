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
  '<p>Translations with DeepL feels more accurate and more natural. I am looking forward to a browser extension.</p>'
)

const frontmatter = {
  cover: '/img/176035092.png',
  date: '2020-06-16T05:07:51.357Z',
  link: 'https://www.deepl.com/translator',
  tags: ['link', 'translations', 'apps'],
  title: 'DeepL Translate',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/176035092.md'
const url = undefined
function rawContent() {
  return '\nTranslations with DeepL feels more accurate and more natural. I am looking forward to a browser extension.\n'
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
