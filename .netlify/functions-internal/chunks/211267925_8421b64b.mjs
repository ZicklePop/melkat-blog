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
  '<p>This article is a beautiful takedown of the fake feminism people sell. Though, this article fails to mention anything at all about trans issues, who are also deeply effected by mobilized angry white women trying to destroy feminism.</p>'
)

const frontmatter = {
  cover: '/img/211267925.jpg',
  date: '2020-11-10T15:10:01.643Z',
  link: 'https://jezebel.com/the-business-of-selling-white-women-the-righteousness-o-1845577127',
  tags: ['article', 'race', 'women'],
  title:
    'The Business of Selling White Women the Righteousness of Their Own Anger',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/211267925.md'
const url = undefined
function rawContent() {
  return '\nThis article is a beautiful takedown of the fake feminism people sell. Though, this article fails to mention anything at all about trans issues, who are also deeply effected by mobilized angry white women trying to destroy feminism.\n'
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
