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
  '<p>I can’t believe it took a study for this to be apparent. I can’t control much of the flow of how job interviews work as an engineer, but I can try my best to make the other person comfortable and relaxed. That is always my goal during interviews. Anything that might make them nervous or anxious I specifically avoid.</p>'
)

const frontmatter = {
  cover: '/img/183883395.jpg',
  date: '2020-07-25T16:56:20.599Z',
  link: 'https://news.ncsu.edu/2020/07/tech-job-interviews-anxiety/?#',
  tags: ['article', 'tech'],
  title: 'Tech Sector Job Interviews Assess Anxiety, Not Software Skills',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/183883395.md'
const url = undefined
function rawContent() {
  return "\nI can't believe it took a study for this to be apparent. I can't control much of the flow of how job interviews work as an engineer, but I can try my best to make the other person comfortable and relaxed. That is always my goal during interviews. Anything that might make them nervous or anxious I specifically avoid.\n"
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
