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
  '<p>Congratulations to the people at Medium! I love seeing unions spread around San Francisco tech companies. Hopefully soon with my employer :3</p>'
)

const frontmatter = {
  cover: '/img/239986466.png',
  date: '2021-02-11T19:37:48.724Z',
  link: 'https://mediumworkersunion.org/',
  tags: ['link', 'tech', 'unions'],
  title: 'Medium Workers Union (MWU)',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/239986466.md'
const url = undefined
function rawContent() {
  return '\nCongratulations to the people at Medium! I love seeing unions spread around San Francisco tech companies. Hopefully soon with my employer :3\n'
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
