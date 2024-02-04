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
  '<p>Every once and a while Patreon doesn something bad and then I can’t help but remember this article from before The Outline laid everyone off recently.</p>'
)

const frontmatter = {
  cover: '/img/151856049.jpg',
  date: '2020-04-08T05:33:05.884Z',
  link: 'https://theoutline.com/post/2571/no-one-makes-a-living-on-patreon?zd=1&zi=gw6f4bfa',
  tags: ['article', 'patreon', 'wages'],
  title: 'No one makes a living on Patreon',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/151856049.md'
const url = undefined
function rawContent() {
  return "\nEvery once and a while Patreon doesn something bad and then I can't help but remember this article from before The Outline laid everyone off recently.\n"
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
