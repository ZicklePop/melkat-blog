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
  '<p>This post is nearly five years old and yet still as relevant as ever, as Facebook still does not like that queer people use their website. This doesn’t stop fake accounts or harassment, obviously. The alt-right trolls still attack people daily and use the site to plan attacks on innocent people.</p>'
)

const frontmatter = {
  cover: '/img/152242486.jpg',
  date: '2020-04-09T15:32:40.853Z',
  link: 'https://medium.com/@zip/my-name-is-only-real-enough-to-work-at-facebook-not-to-use-on-the-site-c37daf3f4b03',
  tags: ['article', 'trans', 'facebook'],
  title:
    'My name is only real enough to work at Facebook, not to use on the site',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/152242486.md'
const url = undefined
function rawContent() {
  return "\nThis post is nearly five years old and yet still as relevant as ever, as Facebook still does not like that queer people use their website. This doesn't stop fake accounts or harassment, obviously. The alt-right trolls still attack people daily and use the site to plan attacks on innocent people.\n"
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
