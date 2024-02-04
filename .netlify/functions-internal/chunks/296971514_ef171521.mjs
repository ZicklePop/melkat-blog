import {
  b as createComponent,
  r as renderTemplate,
  u as unescapeHTML,
  s as spreadAttributes,
} from './astro_13acd68d.mjs'
import '@astrojs/internal-helpers/path'
import './pages/image-endpoint_2bac92e6.mjs'
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
  '<p>danah boyd’s piece from 2014 has always been facinating to me, but relating it to my own experiences around transitioning and the ways that I have percevied depth just feels like a lot of gender validation for me :)</p>'
)

const frontmatter = {
  cover: '/img/296971514.jpg',
  date: '2021-08-12T14:12:17.436Z',
  link: 'https://qz.com/192874/is-the-oculus-rift-designed-to-be-sexist/',
  tags: ['article', 'sexism', 'trans', 'vr'],
  title: 'Is the Oculus Rift sexist?',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/296971514.md'
const url = undefined
function rawContent() {
  return "\ndanah boyd's piece from 2014 has always been facinating to me, but relating it to my own experiences around transitioning and the ways that I have percevied depth just feels like a lot of gender validation for me :)\n"
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

  return renderTemplate`${unescapeHTML(html)}`
})
Content[Symbol.for('astro.needsHeadRendering')] = true

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
