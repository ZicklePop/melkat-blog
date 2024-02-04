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
  '<p>Hi my name is Melanie. This is my webpage with links to a lot of things that I do.</p>'
)

const frontmatter = {
  cover: '/img/134400368.png',
  date: '2020-01-24T20:53:02.820Z',
  link: 'https://melaniekat.com/',
  tags: ['link', 'me', 'introduction'],
  title: 'Melanie Kat',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/134400368.md'
const url = undefined
function rawContent() {
  return '\nHi my name is Melanie. This is my webpage with links to a lot of things that I do.\n'
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
