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

const html = updateImageReferences('<p>Anthropomorphic fonts.</p>')

const frontmatter = {
  cover: '/img/141385956.png',
  date: '2020-02-24T22:26:22.515Z',
  link: 'https://sevenseasentertainment.com/2020/02/20/seven-seas-has-a-type-with-license-of-what-the-font-a-manga-guide-to-western-typeface/',
  tags: ['link', 'manga'],
  title: 'What the Font?! A Manga Guide to Western Typeface',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/141385956.md'
const url = undefined
function rawContent() {
  return '\nAnthropomorphic fonts.\n'
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
