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
  '<p>Ever think it would be funny to replace a word with another? Sick and tired of a website deadnaming you? You are going to enjoy X to Y! X to Y supports plain text, regex, and urls.</p>'
)

const frontmatter = {
  cover: '/img/340858922.png',
  date: '2021-12-10T07:57:24.796Z',
  link: 'https://apps.apple.com/us/app/x-to-y/id1598259546',
  tags: ['link', 'me', 'apps', 'extension', 'safari'],
  title: 'X to Y',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/340858922.md'
const url = undefined
function rawContent() {
  return '\nEver think it would be funny to replace a word with another? Sick and tired of a website deadnaming you? You are going to enjoy X to Y! X to Y supports plain text, regex, and urls.\n'
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
