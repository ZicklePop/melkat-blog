import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>The amount of talk about the environmentally harmful and the further harming of people who struggle financially is mind blowing but Doc put it in words the crypto-bros will understand. If they ever take their fingers out of their ears and stop shouting “na na na na i cant hear you.”</p>'

const frontmatter = {
  cover: '/img/331418114.jpg',
  date: '2021-11-11T16:19:57.741Z',
  link: 'https://docseuss.medium.com/look-what-you-made-me-do-a-lot-of-people-have-asked-me-to-make-nft-games-and-i-wont-because-i-m-29c7cfdbbb79',
  tags: ['link', 'games'],
  title:
    'look what you made me do: a lot of people have asked me to make NFT games and I won’t',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/331418114.md'
const url = undefined
function rawContent() {
  return '\nThe amount of talk about the environmentally harmful and the further harming of people who struggle financially is mind blowing but Doc put it in words the crypto-bros will understand. If they ever take their fingers out of their ears and stop shouting "na na na na i cant hear you."\n'
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
