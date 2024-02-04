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
  '<p>I feel like this cute little fellow got left off of so many best of 2022 lists because it came out so late in the year, but gosh it is great. If you like <a href="https://melkat.blog/p/140113823/">A Short Hike</a>, you will definitely enjoy this lil gator’s journey.</p>'
)

const frontmatter = {
  cover: '/img/lilgatorgame.png',
  date: '2022-12-31T18:27:50.074Z',
  title: 'Lil Gator Game',
  link: 'https://www.playtonicgames.com/game/lil-gator-game/',
  tags: ['link', 'games', 'switch', 'steam', 'pc'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/lil-gator-game.md'
const url = undefined
function rawContent() {
  return "\nI feel like this cute little fellow got left off of so many best of 2022 lists because it came out so late in the year, but gosh it is great. If you like [A Short Hike](https://melkat.blog/p/140113823/), you will definitely enjoy this lil gator's journey.\n"
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
