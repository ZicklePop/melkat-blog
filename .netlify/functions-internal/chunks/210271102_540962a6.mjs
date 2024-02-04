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
  '<p>Watching Maddy find themself has been a joy, and reading about how Celeste developed with them is great.</p>'
)

const frontmatter = {
  cover: '/img/210271102.jpg',
  date: '2020-11-06T14:02:39.309Z',
  link: 'https://maddythorson.medium.com/is-madeline-canonically-trans-4277ece02e40',
  tags: ['article', 'trans', 'games'],
  title: 'Is Madeline Canonically Trans?',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/210271102.md'
const url = undefined
function rawContent() {
  return '\nWatching Maddy find themself has been a joy, and reading about how Celeste developed with them is great.\n'
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
