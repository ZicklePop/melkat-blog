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
  '<p>Time to replace your improv partner! You’ve played AI Dungeon, now play Improv Dungeon. Write out your scenario and the AI will play along!</p>'
)

const frontmatter = {
  cover: '/img/300794824.png',
  date: '2021-08-23T05:16:37.980Z',
  link: 'https://improv-dungeon.melkat.games/',
  tags: ['link', 'games', 'me'],
  title: 'Improv Dungeon',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/300794824.md'
const url = undefined
function rawContent() {
  return '\nTime to replace your improv partner! You’ve played AI Dungeon, now play Improv Dungeon. Write out your scenario and the AI will play along!\n'
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
