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
  '<p>It’s fascinating to hear from the people behind this game. To me it was always mysterious game from a mysterious source that would mysteriously get new chapters. I never demanded anything from them, but I always enjoyed getting more.</p>'
)

const frontmatter = {
  cover: '/img/136224935.jpg',
  date: '2020-01-31T05:34:20.525Z',
  link: 'https://www.vice.com/en_us/article/jge5v7/it-took-nearly-10-years-to-finish-kentucky-route-zero-but-its-done',
  tags: ['article', 'games', 'interviews'],
  title:
    'It Took Nearly 10 Years to Finish ‘Kentucky Route Zero,’ But It’s Done',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/136224935.md'
const url = undefined
function rawContent() {
  return '\nIt’s fascinating to hear from the people behind this game. To me it was always mysterious game from a mysterious source that would mysteriously get new chapters. I never demanded anything from them, but I always enjoyed getting more.\n'
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
