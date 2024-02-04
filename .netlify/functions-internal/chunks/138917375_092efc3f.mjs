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
  '<p>This was such a fun read from Colin Spacetwinks about how Sonic is cool enough to fit in to any mold you want.</p>'
)

const frontmatter = {
  cover: '/img/138917375.jpg',
  date: '2020-02-12T17:31:50.048Z',
  link: 'https://nymag.com/intelligencer/2020/02/why-is-there-so-much-christian-sonic-the-hedgehog-fan-art.html',
  tags: ['article', 'games', 'spacetwinks'],
  title: 'The Pious World of Christian Sonic the Hedgehog Fan Art',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/138917375.md'
const url = undefined
function rawContent() {
  return '\nThis was such a fun read from Colin Spacetwinks about how Sonic is cool enough to fit in to any mold you want.\n'
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
