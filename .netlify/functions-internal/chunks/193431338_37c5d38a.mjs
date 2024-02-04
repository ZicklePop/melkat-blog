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
  '<p>The lore behind Fall Guys is as adorable as the little beans. That said, I can’t wait for those eggs to hatch 👀</p>'
)

const frontmatter = {
  cover: '/img/193431338.jpg',
  date: '2020-09-08T05:02:17.002Z',
  link: 'https://www.thegamer.com/fall-guys-secrets-lore-interview/',
  tags: ['article', 'games'],
  title: 'Fall Guys Secrets - A Super Serious Lore Interview',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/193431338.md'
const url = undefined
function rawContent() {
  return "\nThe lore behind Fall Guys is as adorable as the little beans. That said, I can't wait for those eggs to hatch 👀\n"
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
