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
  '<p>The amount of talk about the environmentally harmful and the further harming of people who struggle financially is mind blowing but Doc put it in words the crypto-bros will understand. If they ever take their fingers out of their ears and stop shouting “na na na na i cant hear you.”</p>'
)

const frontmatter = {
  cover: '/img/331418114.jpg',
  date: '2021-11-11T16:19:57.741Z',
  link: 'https://docseuss.medium.com/look-what-you-made-me-do-a-lot-of-people-have-asked-me-to-make-nft-games-and-i-wont-because-i-m-29c7cfdbbb79',
  tags: ['article', 'games'],
  title:
    'look what you made me do: a lot of people have asked me to make NFT games and I won’t',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/331418114.md'
const url = undefined
function rawContent() {
  return '\nThe amount of talk about the environmentally harmful and the further harming of people who struggle financially is mind blowing but Doc put it in words the crypto-bros will understand. If they ever take their fingers out of their ears and stop shouting "na na na na i cant hear you."\n'
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
