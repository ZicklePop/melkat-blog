import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>This was such a fun read from Colin Spacetwinks about how Sonic is cool enough to fit in to any mold you want.</p>'

const frontmatter = {
  cover: '/img/138917375.jpg',
  date: '2020-02-12T17:31:50.048Z',
  link: 'https://nymag.com/intelligencer/2020/02/why-is-there-so-much-christian-sonic-the-hedgehog-fan-art.html',
  tags: ['link', 'games', 'spacetwinks'],
  title: 'The Pious World of Christian Sonic the Hedgehog Fan Art',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/138917375.md'
const url = undefined
function rawContent() {
  return '\nThis was such a fun read from Colin Spacetwinks about how Sonic is cool enough to fit in to any mold you want.\n'
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
  rawContent,
  url,
}
