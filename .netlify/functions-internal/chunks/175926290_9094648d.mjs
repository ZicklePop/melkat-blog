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
  '<p>Hey I just wanted to share that I open sourced a weekend experiment I made a few weekends ago to track pitch frequencies. It’s not the best, but I learned so much in building it within a few constraints: using React Hooks and must work on mobile Safari as well as desktop browsers.</p>'
)

const frontmatter = {
  cover: '/img/175926290.jpg',
  date: '2020-06-15T19:10:26.434Z',
  link: 'https://github.com/ZicklePop/pitch',
  tags: ['link', 'me', 'code'],
  title: '🏳️‍🌈🏳️‍⚧️ pitch tracker for femme voices',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/175926290.md'
const url = undefined
function rawContent() {
  return '\nHey I just wanted to share that I open sourced a weekend experiment I made a few weekends ago to track pitch frequencies. It’s not the best, but I learned so much in building it within a few constraints: using React Hooks and must work on mobile Safari as well as desktop browsers.\n'
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
