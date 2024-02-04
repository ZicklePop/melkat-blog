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
  '<p>Because Git and GitHub are too cowardly to <em>already</em> be setting the default branch from a white supremacy reference to something simple like “main,” here are instructions to fix your code repository.</p>'
)

const frontmatter = {
  cover: '/img/193580658.png',
  date: '2020-09-08T18:40:28.010Z',
  link: 'https://paste.melkat.lol/no-masters.md',
  tags: ['link', 'code', 'git'],
  title: 'No Masters',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/193580658.md'
const url = undefined
function rawContent() {
  return '\nBecause Git and GitHub are too cowardly to _already_ be setting the default branch from a white supremacy reference to something simple like “main,” here are instructions to fix your code repository.\n'
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
