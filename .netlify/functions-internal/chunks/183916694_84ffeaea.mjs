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
  '<p>This is pretty cool, I will definitely be writing some custom scripts for it. During my time as an engineer I’ve always thought the best way to steal company secrets is to make a JSON formatter website or something. I love their headline, “Stop pasting company secrets into random websites.”</p>'
)

const frontmatter = {
  cover: '/img/183916694.png',
  date: '2020-07-26T00:44:15.902Z',
  link: 'https://boop.okat.best/',
  tags: ['link', 'apps', 'macos'],
  title: 'Boop: the Scriptable Scratchpad.',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/183916694.md'
const url = undefined
function rawContent() {
  return '\nThis is pretty cool, I will definitely be writing some custom scripts for it. During my time as an engineer I’ve always thought the best way to steal company secrets is to make a JSON formatter website or something. I love their headline, "Stop pasting company secrets into random websites."\n'
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
