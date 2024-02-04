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
  '<p>I’ve been looking at this app for a while, but it really feels like the closest thing to Final Cut Pro on the iPad (or iPhone?) I was able to take a hour long video and chop it up almost instantly.</p>'
)

const frontmatter = {
  cover: '/img/164564932.png',
  date: '2020-05-13T18:51:33.884Z',
  link: 'https://luma-touch.com/',
  tags: ['article', 'apps', 'ios'],
  title: 'LumaFusion',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/164564932.md'
const url = undefined
function rawContent() {
  return '\nI’ve been looking at this app for a while, but it really feels like the closest thing to Final Cut Pro on the iPad (or iPhone?) I was able to take a hour long video and chop it up almost instantly.\n'
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
