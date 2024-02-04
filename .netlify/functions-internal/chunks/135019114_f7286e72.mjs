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
  '<p>A webcomic about a gay disaster, a punk skunk, and lots and lots of puns. Created by Olive Rae Brinker. Updates Monday, Wednesday and Friday.</p>'
)

const frontmatter = {
  cover: '/img/135019114.png',
  date: '2020-01-26T21:18:37.287Z',
  link: 'https://www.raethedoe.com/',
  tags: ['link', 'webcomic'],
  title: 'Rae the Doe',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/135019114.md'
const url = undefined
function rawContent() {
  return '\nA webcomic about a gay disaster, a punk skunk, and lots and lots of puns. Created by Olive Rae Brinker. Updates Monday, Wednesday and Friday.\n'
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
