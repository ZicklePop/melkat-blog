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
  '<p>Yuki Miku daiyo does a dance on a roof!</p>'
)

const frontmatter = {
  cover: '/img/200629134.jpg',
  date: '2020-10-11T19:01:53.364Z',
  link: 'https://www.youtube.com/watch?v=Re28a-H6gws',
  tags: ['link', 'miku', 'music'],
  title: '【雪ミク】「アイ / DECO*27 feat.初音ミク」【踊ってみた',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/200629134.md'
const url = undefined
function rawContent() {
  return '\nYuki Miku daiyo does a dance on a roof!\n'
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
