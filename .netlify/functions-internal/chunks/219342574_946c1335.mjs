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
  '<p>I don’t know Polish but this is pretty fascinating about how the language handles pronouns.</p>'
)

const frontmatter = {
  cover: '/img/219342574.png',
  date: '2020-12-08T07:15:55.978Z',
  link: 'https://zaimki.pl/english',
  tags: ['article', 'queer'],
  title: 'An overview of Polish nonbinary pronouns',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/219342574.md'
const url = undefined
function rawContent() {
  return '\nI don’t know Polish but this is pretty fascinating about how the language handles pronouns.\n'
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
