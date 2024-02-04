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
  '<p>This is pretty wild! Android apps on iOS? This is something to keep an eye on for sure.</p>'
)

const frontmatter = {
  date: '2020-03-07T06:27:48.178Z',
  link: 'https://github.com/corellium/projectsandcastle',
  tags: ['link', 'ios', 'android'],
  title: 'corellium/projectsandcastle',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/143963126.md'
const url = undefined
function rawContent() {
  return '\nThis is pretty wild! Android apps on iOS? This is something to keep an eye on for sure.\n'
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
