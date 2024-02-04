import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<blockquote>\n<p>Put a pride flag frame on an image for your profile pictures</p>\n</blockquote>\n<p>This is the web version of an <a href="https://routinehub.co/shortcut/2664/">Apple Shortcut</a> I made in 2018, which pushed the limits of what you can do with the platform and dynamic image generation using the built-in toolset. The performance of the shortcut got worse over time, and it stopped working in 2022.</p>\n<p>This was something I had wanted to build for a while, and I limited myself to doing it entirely in the browser for privacy reasons. You can also access the full <a href="https://github.com/ZicklePop/pride-frames">source code on GitHub.</a></p>'

const frontmatter = {
  date: '2023-09-27T17:22:13.426Z',
  title: 'Pride Frames for Web',
  tags: ['link', 'me', 'queer', 'trans', 'apps'],
  link: 'https://frames.melkat.gay',
  cover: '/img/pride-frames.png',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/pride-frames.md'
const url = undefined
function rawContent() {
  return '\n> Put a pride flag frame on an image for your profile pictures\n\nThis is the web version of an [Apple Shortcut](https://routinehub.co/shortcut/2664/) I made in 2018, which pushed the limits of what you can do with the platform and dynamic image generation using the built-in toolset. The performance of the shortcut got worse over time, and it stopped working in 2022.\n\nThis was something I had wanted to build for a while, and I limited myself to doing it entirely in the browser for privacy reasons. You can also access the full [source code on GitHub.](https://github.com/ZicklePop/pride-frames)\n'
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
