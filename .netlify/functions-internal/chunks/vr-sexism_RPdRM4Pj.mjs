import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>Previously I have posted about danah boyd’s research on how hormones impact how your brain processes depth, but here is another study about how interpupillary distance, IPD, settings on VR headsets make it hard for people other than, for example, cisgender men to find a distance that works for them, leading to motion sickness. A while ago I tried to adjust my IPD but never found a setting that worked for me. It was either too close or too far, and the motion sickness remained.</p>'

const frontmatter = {
  cover: '/img/vr-sexism.jpg',
  date: '2022-04-30T06:32:11.369Z',
  title: 'Virtual Reality Is Sexist: But It Does Not Have to Be',
  link: 'https://www.frontiersin.org/articles/10.3389/frobt.2020.00004/full',
  tags: ['link', 'sexism', 'vr'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/vr-sexism.md'
const url = undefined
function rawContent() {
  return "\nPreviously I have posted about danah boyd's research on how hormones impact how your brain processes depth, but here is another study about how interpupillary distance, IPD, settings on VR headsets make it hard for people other than, for example, cisgender men to find a distance that works for them, leading to motion sickness. A while ago I tried to adjust my IPD but never found a setting that worked for me. It was either too close or too far, and the motion sickness remained.\n"
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
