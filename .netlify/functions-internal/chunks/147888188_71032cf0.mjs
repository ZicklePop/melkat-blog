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
  '<p>Maybe Nintendo is finally growing up? They should fix Zelda and Mario now.</p>'
)

const frontmatter = {
  cover: '/img/147888188.png',
  date: '2020-03-24T04:31:05.082Z',
  link: 'https://www.washingtonpost.com/video-games/2020/03/23/nintendo-explains-philosophy-behind-animal-crossings-big-changes-like-gender-expression-terraforming/',
  tags: ['link', 'animalcrossing', 'games', 'switch'],
  title:
    'Nintendo explains philosophy behind Animal Crossing’s big changes, such as gender expression and terraforming',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/147888188.md'
const url = undefined
function rawContent() {
  return '\nMaybe Nintendo is finally growing up? They should fix Zelda and Mario now.\n'
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
