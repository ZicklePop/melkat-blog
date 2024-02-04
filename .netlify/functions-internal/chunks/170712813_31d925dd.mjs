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
  '<p>Earlier today it was falsely going around that TikTok was banning Black Lives Matter from their platform. Let’s take a look at which groups they are actually preventing from using their platform.</p>'
)

const frontmatter = {
  cover: '/img/170712813.jpg',
  date: '2020-05-29T20:31:52.265Z',
  link: 'https://theintercept.com/2020/03/16/tiktok-app-moderators-users-discrimination/?',
  tags: ['article', 'discrimination', 'tiktok'],
  title: 'TikTok Told Moderators: Suppress Posts by the “Ugly” and Poor',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/170712813.md'
const url = undefined
function rawContent() {
  return "\nEarlier today it was falsely going around that TikTok was banning Black Lives Matter from their platform. Let's take a look at which groups they are actually preventing from using their platform.\n"
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
