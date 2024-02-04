import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>I think about this video from Polygon a lot. I can’t say I will be able to do justice the gun epidemic in the United States here. Guns are horrifying. I’ve played in VR. Games with guns and people attacking me in VR make me too uncomfortable to ever want to do again. I remember trying Robo Recall for the first time, and I was panicking. When I was 19 I had a gun shot at my father and I. I am very much against guns of all kind. Even in VR. It’s one of the main reasons I don’t like VR.</p>'

const frontmatter = {
  cover: '/img/152139015.jpg',
  date: '2020-04-09T05:26:26.863Z',
  link: 'https://www.youtube.com/watch?v=uwg6RTjCH7g&feature=share',
  tags: ['video', 'guns', 'games', 'vr'],
  title: 'Looking At Guns In Virtual Reality',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/152139015.md'
const url = undefined
function rawContent() {
  return '\nI think about this video from Polygon a lot. I can’t say I will be able to do justice the gun epidemic in the United States here. Guns are horrifying. I’ve played in VR. Games with guns and people attacking me in VR make me too uncomfortable to ever want to do again. I remember trying Robo Recall for the first time, and I was panicking. When I was 19 I had a gun shot at my father and I. I am very much against guns of all kind. Even in VR. It’s one of the main reasons I don’t like VR.\n'
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
