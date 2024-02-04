import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Every once and a while Patreon doesn something bad and then I can’t help but remember this article from before The Outline laid everyone off recently.</p>'

const frontmatter = {
  cover: '/img/151856049.jpg',
  date: '2020-04-08T05:33:05.884Z',
  link: 'https://theoutline.com/post/2571/no-one-makes-a-living-on-patreon?zd=1&zi=gw6f4bfa',
  tags: ['link', 'patreon', 'wages'],
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
