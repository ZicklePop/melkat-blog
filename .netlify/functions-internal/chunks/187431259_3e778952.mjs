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
  '<p>I am oddly excited about the possibilities of using React Hooks in CLI tools.</p>'
)

const frontmatter = {
  cover: '/img/187431259.png',
  date: '2020-08-11T17:22:01.753Z',
  link: 'https://github.com/vadimdemedes/ink',
  tags: ['link', 'javascript', 'cli'],
  title: 'ink - 🌈 React for interactive command-line apps',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/187431259.md'
const url = undefined
function rawContent() {
  return '\nI am oddly excited about the possibilities of using React Hooks in CLI tools.\n'
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
