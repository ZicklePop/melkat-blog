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
  '<p>“Don’t touch my phone / No touch my heart” A fun Miku music video from BIGHEAD, apapico, caseif, and Incept</p>'
)

const frontmatter = {
  cover: '/img/145124027.jpg',
  date: '2020-03-10T18:54:15.396Z',
  link: 'https://www.youtube.com/watch?v=1wT4kw5do1A',
  tags: ['video', 'miku', 'music'],
  title: 'Rage Against The M FEAT.Hatsune Miku',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/145124027.md'
const url = undefined
function rawContent() {
  return '\n"Don\'t touch my phone / No touch my heart” A fun Miku music video from BIGHEAD, apapico, caseif, and Incept\n'
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
