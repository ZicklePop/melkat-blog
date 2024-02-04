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
  '<p>With the recent sexual assault allegations of former people’s champ GrandPooBear, I’ve been thinking a lot about his sudden heel turn, and I think this article hits him on the nose with a newspaper.</p>'
)

const frontmatter = {
  cover: '/img/249382845.jpg',
  date: '2021-03-11T14:51:06.571Z',
  link: 'https://www.linkedin.com/pulse/gamings-endless-struggle-abusive-men-colin-campbell/',
  tags: ['link', 'sexism', 'women', 'games'],
  title: "Gaming's endless struggle with abusive men",
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/249382845.md'
const url = undefined
function rawContent() {
  return '\nWith the recent sexual assault allegations of former people’s champ GrandPooBear, I’ve been thinking a lot about his sudden heel turn, and I think this article hits him on the nose with a newspaper.\n'
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
