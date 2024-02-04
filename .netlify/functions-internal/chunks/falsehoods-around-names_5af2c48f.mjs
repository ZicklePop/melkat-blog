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
  '<p>It is wild that this piece is 12 years old and constantly gets more relevant with age. I do not get why everyone wants to constantly gate keep names, like you would know better than the one telling you their name.</p>'
)

const frontmatter = {
  date: '2022-05-16T20:46:38.225Z',
  link: 'https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/',
  title: 'Falsehoods Programmers Believe About Names',
  tags: ['article', 'tech', 'names'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/falsehoods-around-names.md'
const url = undefined
function rawContent() {
  return '\nIt is wild that this piece is 12 years old and constantly gets more relevant with age. I do not get why everyone wants to constantly gate keep names, like you would know better than the one telling you their name.\n'
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
