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
  '<p>As a girl who learned web development on Neopets, this is very much true and close to my heart.</p>'
)

const frontmatter = {
  cover: '/img/173958130.jpg',
  date: '2020-06-07T20:10:37.283Z',
  link: 'https://variety.com/2017/gaming/features/neopets-internet-girl-culture-1202897761/',
  tags: ['article', 'neopets', 'women'],
  title: '‘Neopets’: Inside Look at Early 2000s Internet Girl Culture',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/173958130.md'
const url = undefined
function rawContent() {
  return '\nAs a girl who learned web development on Neopets, this is very much true and close to my heart.\n'
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
