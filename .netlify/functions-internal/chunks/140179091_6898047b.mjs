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
  '<p>Congratulations to the employees at Kickstarter! I hope to see this come to a company near me!</p>'
)

const frontmatter = {
  cover: '/img/140179091.jpg',
  date: '2020-02-18T17:36:10.060Z',
  link: 'https://www.vice.com/en_us/article/3a8pp5/kickstarter-employees-win-historic-union-election',
  tags: ['article', 'tech', 'unions'],
  title: 'Kickstarter Employees Win Historic Union Election',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/140179091.md'
const url = undefined
function rawContent() {
  return '\nCongratulations to the employees at Kickstarter! I hope to see this come to a company near me!\n'
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
