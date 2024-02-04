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
  '<p>I never thought a game about spiders would happily capture me in it’s web, but here we are. Highly recommend this game, and it’s a steal for the price.</p>'
)

const frontmatter = {
  cover: '/img/311978752.jpg',
  date: '2021-09-18T05:10:18.096Z',
  link: 'https://webbed.website/',
  tags: ['link', 'games', 'pc'],
  title: 'Webbed - Sbug Games',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/311978752.md'
const url = undefined
function rawContent() {
  return "\nI never thought a game about spiders would happily capture me in it's web, but here we are. Highly recommend this game, and it's a steal for the price.\n"
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
