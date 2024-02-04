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
  '<p>Virtual avatars for streaming and videos have become popular over the last few years. Now you can do it from your browser on your phone?! So cool.</p>'
)

const frontmatter = {
  cover: '/img/233159783.jpg',
  date: '2021-01-25T00:21:01.601Z',
  link: 'https://kalidoface.com/',
  tags: ['link', 'javascript', 'live2d', 'virtual'],
  title: 'Kalidoface - Become a Virtual Character',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/233159783.md'
const url = undefined
function rawContent() {
  return '\nVirtual avatars for streaming and videos have become popular over the last few years. Now you can do it from your browser on your phone?! So cool.\n'
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
