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
  '<p>A lot of people talk about 17776 by Jon Bois, but I was initially introduced to his work through this: a non-linear essay about Jon Bois that is probably more than 17776 words long by Colin Spacetwinks.</p>'
)

const frontmatter = {
  cover: '/img/140113399.jpg',
  date: '2020-02-18T06:00:59.403Z',
  link: 'https://spacetwinks.itch.io/well-its-an-essay-about-jon',
  tags: ['link', 'twine', 'criticism'],
  title: "Well it's an essay about Jon",
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/140113399.md'
const url = undefined
function rawContent() {
  return '\nA lot of people talk about 17776 by Jon Bois, but I was initially introduced to his work through this: a non-linear essay about Jon Bois that is probably more than 17776 words long by Colin Spacetwinks.\n'
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
