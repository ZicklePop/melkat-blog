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
  '<p>This game was a surprise delight! If you’re a fan of Animal Crossing or Night in the Woods you will definitely love this game as much as I do. You can reach the ending in around 2 hours, but there’s so much about this delightful game that will keep you coming back, even after you’ve finished the story.</p>'
)

const frontmatter = {
  cover: '/img/140113823.png',
  date: '2020-02-18T06:04:35.431Z',
  link: 'https://adamgryu.itch.io/a-short-hike',
  tags: ['link', 'games'],
  title: 'A Short Hike',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/140113823.md'
const url = undefined
function rawContent() {
  return '\nThis game was a surprise delight! If you’re a fan of Animal Crossing or Night in the Woods you will definitely love this game as much as I do. You can reach the ending in around 2 hours, but there’s so much about this delightful game that will keep you coming back, even after you’ve finished the story.\n'
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
