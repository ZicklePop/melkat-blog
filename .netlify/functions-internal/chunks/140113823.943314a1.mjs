import { k as createVNode, F as Fragment } from './astro.35b77837.mjs'
import 'cookie'
import 'kleur/colors'
import 'slash'
import 'path-to-regexp'
import 'mime'
import 'html-escaper'
import 'string-width'

const html =
  '<p>This game was a surprise delight! If you’re a fan of Animal Crossing or Night in the Woods you will definitely love this game as much as I do. You can reach the ending in around 2 hours, but there’s so much about this delightful game that will keep you coming back, even after you’ve finished the story.</p>'

const frontmatter = {
  cover: '/img/140113823.png',
  date: '2020-02-18T06:04:35.431Z',
  link: 'https://adamgryu.itch.io/a-short-hike',
  tags: ['link', 'games'],
  title: 'A Short Hike',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/140113823.md'
const url = undefined
function rawContent() {
  return '\nThis game was a surprise delight! If you’re a fan of Animal Crossing or Night in the Woods you will definitely love this game as much as I do. You can reach the ending in around 2 hours, but there’s so much about this delightful game that will keep you coming back, even after you’ve finished the story.\n'
}
function compiledContent() {
  return html
}
function getHeadings() {
  return []
}
async function Content() {
  const { layout, ...content } = frontmatter
  content.file = file
  content.url = url
  const contentFragment = createVNode(Fragment, { 'set:html': html })
  return contentFragment
}
Content[Symbol.for('astro.needsHeadRendering')] = true

export {
  Content,
  compiledContent,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url,
}
