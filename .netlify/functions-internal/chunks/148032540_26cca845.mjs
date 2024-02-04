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
  '<blockquote>\n<p>“Amazon did not “give” us PTO — we took our PTO from Amazon’s greedy hands. And we have to keep fighting so that Amazon gives us our PTO on top of the sick time we already have.”</p>\n</blockquote>'
)

const frontmatter = {
  cover: '/img/148032540.jpg',
  date: '2020-03-24T21:28:37.004Z',
  link: 'https://medium.com/@dch1united/amazonians-united-wins-pto-for-all-amazon-workers-f17e6ffbb192',
  tags: ['link', 'unions', 'amazon', 'tech'],
  title: 'Amazonians United Wins PTO for all Amazon Workers',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/148032540.md'
const url = undefined
function rawContent() {
  return '\n> "Amazon did not “give” us PTO — we took our PTO from Amazon’s greedy hands. And we have to keep fighting so that Amazon gives us our PTO on top of the sick time we already have."\n'
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
