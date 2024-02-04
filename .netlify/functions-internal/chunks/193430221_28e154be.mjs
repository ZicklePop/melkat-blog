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
  '<p>I’ve seen people at every place I’ve worked just… share things like this with any webpage with a text input box and it’s never set right with me. It’s such an easy way to social engineer your way in to free personal identifiable information.</p>'
)

const frontmatter = {
  cover: '/img/193430221.jpg',
  date: '2020-09-08T04:43:23.998Z',
  link: 'https://www.jvt.me/posts/2020/09/01/against-online-tooling/',
  tags: ['article', 'code', 'security'],
  title:
    'Why I Actively Discourage Online Tooling like `jwt.io` and Online JSON Validators',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/193430221.md'
const url = undefined
function rawContent() {
  return "\nI've seen people at every place I've worked just... share things like this with any webpage with a text input box and it's never set right with me. It's such an easy way to social engineer your way in to free personal identifiable information.\n"
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
