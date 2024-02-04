import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>I often recommend a lot of apps for different platforms to people, so I decided to catalogue them recently. I admins, it is a little much, lol, and I don’t know how I’m going to keep it updated. I might not, but a lot of these apps have been with me for a long time.</p>\n<p>I do want to comment on how I listed the prices: the cost to avoid subscriptions is what I listed. Some of these apps are free, and you may not need to pay for them, or you could pay less, but I thought it was important to set expectations up front.</p>'

const frontmatter = {
  date: '2023-02-21T06:09:03.490Z',
  title: 'My Essential Apps',
  tags: ['link', 'apps', 'me'],
  cover: '/img/essential-apps.jpg',
  link: 'https://melkat.notion.site/melkat/4e7c399f100c46eeae6d04d1dcd644a0',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/essential-apps.md'
const url = undefined
function rawContent() {
  return "\nI often recommend a lot of apps for different platforms to people, so I decided to catalogue them recently. I admins, it is a little much, lol, and I don't know how I'm going to keep it updated. I might not, but a lot of these apps have been with me for a long time.\n\nI do want to comment on how I listed the prices: the cost to avoid subscriptions is what I listed. Some of these apps are free, and you may not need to pay for them, or you could pay less, but I thought it was important to set expectations up front.\n"
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
