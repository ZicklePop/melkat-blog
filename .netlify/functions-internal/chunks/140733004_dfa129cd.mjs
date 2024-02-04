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
  '<p>A <em>two</em> hour documentary about the horrifying truth that is Amazon.</p>'
)

const frontmatter = {
  cover: '/img/140733004.jpg',
  date: '2020-02-20T21:59:55.336Z',
  link: 'https://www.pbs.org/wgbh/frontline/film/amazon-empire/',
  tags: ['article', 'amazon', 'unions', 'tech'],
  title: 'Amazon Empire: The Rise and Reign of Jeff Bezos',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/140733004.md'
const url = undefined
function rawContent() {
  return '\nA _two_ hour documentary about the horrifying truth that is Amazon.\n'
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
