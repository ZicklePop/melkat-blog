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
  '<p>While we’re criticizing TikTok for hiding “ugly” and “poor” people from their platform, they have also admitted to discrimination of other protected groups.</p>'
)

const frontmatter = {
  cover: '/img/170712882.jpg',
  date: '2020-05-29T20:34:23.577Z',
  link: 'https://slate.com/technology/2019/12/tiktok-disabled-users-videos-suppressed.html?',
  tags: [
    'article',
    'discrimination',
    'ableist',
    'fatphobic',
    'queerphobic',
    'tiktok',
  ],
  title:
    'TikTok Admits It Suppressed Videos by Disabled, Queer, and Fat Creators',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/170712882.md'
const url = undefined
function rawContent() {
  return '\nWhile we\'re criticizing TikTok for hiding "ugly" and "poor" people from their platform, they have also admitted to discrimination of other protected groups.\n'
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
