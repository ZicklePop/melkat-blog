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
  '<p>Only Mutuals. That was the joke I couldn’t get out of my head. So I decided to make a website that only my mutual followers could access. Nothing risqué, just things for my friends: like the wallpapers I used to design and so on.</p>\n<p>While I had been playing with the Mastodon API, I had not been playing with the authenticated part. So I built an application that authenticates you with your Mastodon server and then checks to see if you are following <a href="https://nyan.lol/@zicklepop">me</a> and if I am following you back. Nothing too fancy.</p>'
)

const frontmatter = {
  date: '2023-02-15T23:57:20.976Z',
  title: 'Mutuals.social',
  tags: ['link', 'me', 'mastodon', 'javascript'],
  link: 'https://mutuals.social',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/mutuals-social.md'
const url = undefined
function rawContent() {
  return "\nOnly Mutuals. That was the joke I couldn't get out of my head. So I decided to make a website that only my mutual followers could access. Nothing risqué, just things for my friends: like the wallpapers I used to design and so on.\n\nWhile I had been playing with the Mastodon API, I had not been playing with the authenticated part. So I built an application that authenticates you with your Mastodon server and then checks to see if you are following [me](https://nyan.lol/@zicklepop) and if I am following you back. Nothing too fancy.\n"
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
