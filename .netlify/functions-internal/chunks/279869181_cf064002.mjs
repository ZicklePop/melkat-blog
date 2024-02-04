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
  '<p>We all know SMS two factor auth is very dangerous due to it’s insecure nature, but we don’t often here companies actually doing anything about it. Most won’t remove SMS two factor auth because they want your phone number so they can better target you with ads. Hopefully we start to see more people follow this trend, as everyone else is just playing security theatre.</p>'
)

const frontmatter = {
  cover: '/img/279869181.png',
  date: '2021-06-17T19:39:56.179Z',
  link: 'https://devcenter.heroku.com/articles/mfa-sms',
  tags: ['link', 'security'],
  title: 'Heroku removes SMS as an MFA Verification Method',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/279869181.md'
const url = undefined
function rawContent() {
  return '\nWe all know SMS two factor auth is very dangerous due to it’s insecure nature, but we don’t often here companies actually doing anything about it. Most won’t remove SMS two factor auth because they want your phone number so they can better target you with ads. Hopefully we start to see more people follow this trend, as everyone else is just playing security theatre.\n'
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
