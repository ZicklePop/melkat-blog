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
  '<p>I’ve been loving every bit of Kentucky Route Zero since it came out 7 years ago. I’m so excited to get to play the ending!</p>'
)

const frontmatter = {
  cover: '/img/136224879.png',
  date: '2020-01-31T05:29:57.363Z',
  link: 'https://www.vice.com/en_us/article/bvgjma/kentucky-route-zero-pays-off-on-nine-years-of-hope-and-doubt-review',
  tags: ['article', 'games', 'review'],
  title: "'Kentucky Route Zero' Pays Off on Nine Years of Hope and Doubt",
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/136224879.md'
const url = undefined
function rawContent() {
  return '\nI’ve been loving every bit of Kentucky Route Zero since it came out 7 years ago. I’m so excited to get to play the ending!\n'
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
