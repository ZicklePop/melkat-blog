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
  '<p>I picked this game up in early access a few weeks ago and I’ve put a lot of time in to it. It’s a non-violent Pokémon meets Animal Crossing game with some of my favorite dialog in a game since Night in the Woods. While the game is unfinished and there are a few bugs, it’s still incredibly fun and I can’t wait to see where this game goes.</p>'
)

const frontmatter = {
  cover: '/img/186172319.jpg',
  date: '2020-08-06T05:25:54.770Z',
  link: 'https://ooblets.com/',
  tags: ['link', 'games', 'pc'],
  title: 'Ooblets',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/186172319.md'
const url = undefined
function rawContent() {
  return '\nI picked this game up in early access a few weeks ago and I’ve put a lot of time in to it. It’s a non-violent Pokémon meets Animal Crossing game with some of my favorite dialog in a game since Night in the Woods. While the game is unfinished and there are a few bugs, it’s still incredibly fun and I can’t wait to see where this game goes.\n'
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
