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
