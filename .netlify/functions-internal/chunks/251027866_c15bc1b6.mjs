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
  '<p>This has long been true, but for some reason it still needs to be said: two-factor authentication over text message makes you less secure than not having it.</p>'
)

const frontmatter = {
  cover: '/img/251027866.jpg',
  date: '2021-03-16T05:32:02.552Z',
  link: 'https://www.vice.com/en/article/y3g8wb/hacker-got-my-texts-16-dollars-sakari-netnumber',
  tags: ['article', 'security'],
  title: 'A Hacker Got All My Texts for $16',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/251027866.md'
const url = undefined
function rawContent() {
  return '\nThis has long been true, but for some reason it still needs to be said: two-factor authentication over text message makes you less secure than not having it.\n'
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
