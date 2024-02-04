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
  '<p>Reporting from live from News39, it’s Hatsune Miku, Meiko, and other virtual youtubers reminding you to stay hydrated on behalf of a Japanese bottled water company. Music by producer Mitchie M.</p>'
)

const frontmatter = {
  cover: '/img/137009001.jpg',
  date: '2020-02-03T14:50:53.755Z',
  link: 'https://www.youtube.com/watch?v=Hjt59bZqC0g',
  tags: ['video', 'miku', 'music'],
  title:
    'Pocari Sweat and Hatsune Miku want you to stay hydrated 「Nechusho No!No! feat. 初音ミク＆MEIKO」',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/137009001.md'
const url = undefined
function rawContent() {
  return "\nReporting from live from News39, it's Hatsune Miku, Meiko, and other virtual youtubers reminding you to stay hydrated on behalf of a Japanese bottled water company. Music by producer Mitchie M.\n"
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
