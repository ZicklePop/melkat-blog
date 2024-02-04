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
  '<blockquote>\n<p><em>A love letter to a public transit system I haven’t used in years.</em></p>\n</blockquote>\n<p>Star St.Germain and Tim Riot have made a really emotional pixel art journey through the city I simultaneously live in but rarely see anymore.</p>'
)

const frontmatter = {
  cover: '/img/commute.jpg',
  date: '2022-04-22T04:49:03.362Z',
  title: 'Commute',
  link: 'https://thisisstar.itch.io/commute',
  tags: ['link', 'games', 'sanfrancisco'],
}
const file = '/Users/melanie/Developer/melkat-blog/src/content/posts/commute.md'
const url = undefined
function rawContent() {
  return "\n> _A love letter to a public transit system I haven't used in years._\n\nStar St.Germain and Tim Riot have made a really emotional pixel art journey through the city I simultaneously live in but rarely see anymore.\n"
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
