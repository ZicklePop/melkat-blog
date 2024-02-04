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
  '<p>It’s good to see Panic shamed in to doing right by the game pop up after throwing their weight around like nasty bullies. It’s a shame they needed to be shamed at all, they should be better than that.</p>'
)

const frontmatter = {
  date: '2020-01-31T05:17:34.166Z',
  link: 'https://web.archive.org/web/20221209084650/http://playdatepopup.com/blog/2020/01/29/welcome-to-2020/',
  tags: ['link', 'games', 'panic'],
  title: 'Playdate Pop Up - Welcome to 2020',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/136222383.md'
const url = undefined
function rawContent() {
  return '\nIt’s good to see Panic shamed in to doing right by the game pop up after throwing their weight around like nasty bullies. It’s a shame they needed to be shamed at all, they should be better than that.\n'
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
