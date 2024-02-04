import {
  b as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
  s as spreadAttributes,
} from './astro_ffb476f0.mjs'
import '@astrojs/internal-helpers/path'
import './pages/image-endpoint_a240ce1b.mjs'
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
  '<p>A few days ago I was pondering what the environmental difference in buying an ebook from amazon versus buying a physical book was. A day later I found this tool to determine what the environmental impact for visiting a website is.</p>'
)

const frontmatter = {
  cover: '/img/138288124.png',
  date: '2020-02-09T07:35:03.813Z',
  link: 'https://www.websitecarbon.com/',
  tags: ['link', 'environment', 'green'],
  title: 'Website Carbon Calculator',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/138288124.md'
const url = undefined
function rawContent() {
  return '\nA few days ago I was pondering what the environmental difference in buying an ebook from amazon versus buying a physical book was. A day later I found this tool to determine what the environmental impact for visiting a website is.\n'
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

  return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`
})

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
