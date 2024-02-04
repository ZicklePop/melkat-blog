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
  '<p>A new plugin from Microsoft for their code editor allows people to collaborate in real time on projects. This looks so fun.</p>'
)

const frontmatter = {
  cover: '/img/148896468.jpg',
  date: '2020-03-28T05:28:09.413Z',
  link: 'https://visualstudio.microsoft.com/services/live-share/',
  tags: ['link', 'vscode', 'apps'],
  title: 'Visual Studio Live Share',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/148896468.md'
const url = undefined
function rawContent() {
  return '\nA new plugin from Microsoft for their code editor allows people to collaborate in real time on projects. This looks so fun.\n'
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
