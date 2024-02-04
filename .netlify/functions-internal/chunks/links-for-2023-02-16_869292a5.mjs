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
  '<p>I’m trying to get better at bookmarking and categorizing things so I can find them later. In the process, I’ve started posting the links I’m excited about to Mastodon from time to time, and now I’m collecting some of them here.</p>\n<ul>\n<li><a href="https://www.theverge.com/2023/2/15/23601139/poker-face-season-2-peacock">Peacock’s all in for Poker Face season 2</a><br>\nMore Poker Face!!! More Natasha Lyonne!!!</li>\n<li><a href="https://www.welcometohellworld.com/bachelor-parties-suck-so-bad/">Bachelor parties suck so bad</a><br>\nfrom Monday’s Hell World</li>\n<li><a href="https://blog.piapro.net/2023/02/mk232101.html">初音ミク×よみうりランド2023　～初音ミク16周年記念～　開催決定！ – 初音ミク公式ブログ</a><br>\nI am really jealous I wont be able to attend this year’s Miku × Yomiuri Land collab. I was able to attend one a few years ago and it was <em>so</em> cool. MIKU WITH A SEA LION!!!</li>\n<li><a href="https://www.youtube.com/watch?v=p2onuBxhafg">Don’t Get In The Kiln</a><br>\nIf you haven’t seen Aunty Donna’s comedy before you should fix that</li>\n<li><a href="https://seldo.com/posts/the_case_for_frameworks/">The case for frameworks</a><br>\n“The case for frameworks”, a rebuttal to an angry guy online who calls people “stupid” for growing as developers over time, especially for using ReactJS. The original piece feels like one of those tongue-in-cheek “they played us for fools” memes without the sense of irony.</li>\n<li><a href="https://www.kickstarter.com/projects/cryptonfuturemedia/hatsune-miku-global-concert-hatsune-miku-expo-2023-vr">Hatsune Miku Global Concert “HATSUNE MIKU EXPO 2023 VR”</a><br>\nNew Hatsune Miku (online) Expo Kickstarter just dropped!!</li>\n<li><a href="https://www.garbageday.email/p/an-investment-in-future-virality">An investment in future virality</a><br>\nRead from the start for a good piece on the hell that is Mr. Beast</li>\n</ul>\n<p><em>For more, follow <a href="https://nyan.lol/@links">@links@nyan.lol</a> on Mastodon</em></p>'
)

const frontmatter = {
  date: '2023-02-17T05:59:35.000Z',
  title: "Here's Some Links, Feb 16, 2023",
  tags: ['post', 'link-list'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-02-16.md'
const url = undefined
function rawContent() {
  return "\nI'm trying to get better at bookmarking and categorizing things so I can find them later. In the process, I've started posting the links I'm excited about to Mastodon from time to time, and now I'm collecting some of them here.\n\n- [Peacock’s all in for Poker Face season 2](https://www.theverge.com/2023/2/15/23601139/poker-face-season-2-peacock)   \n   More Poker Face!!! More Natasha Lyonne!!!\n- [Bachelor parties suck so bad](https://www.welcometohellworld.com/bachelor-parties-suck-so-bad/)   \n   from Monday's Hell World \n- [初音ミク×よみうりランド2023　～初音ミク16周年記念～　開催決定！ – 初音ミク公式ブログ](https://blog.piapro.net/2023/02/mk232101.html)   \n     I am really jealous I wont be able to attend this year's Miku × Yomiuri Land collab. I was able to attend one a few years ago and it was *so* cool. MIKU WITH A SEA LION!!!\n- [Don't Get In The Kiln](https://www.youtube.com/watch?v=p2onuBxhafg)   \n   If you haven't seen Aunty Donna's comedy before you should fix that\n- [The case for frameworks](https://seldo.com/posts/the_case_for_frameworks/)   \n   \"The case for frameworks\", a rebuttal to an angry guy online who calls people \"stupid\" for growing as developers over time, especially for using ReactJS. The original piece feels like one of those tongue-in-cheek \"they played us for fools\" memes without the sense of irony.\n- [Hatsune Miku Global Concert “HATSUNE MIKU EXPO 2023 VR”](https://www.kickstarter.com/projects/cryptonfuturemedia/hatsune-miku-global-concert-hatsune-miku-expo-2023-vr)   \n   New Hatsune Miku (online) Expo Kickstarter just dropped!! \n- [An investment in future virality](https://www.garbageday.email/p/an-investment-in-future-virality)   \n   Read from the start for a good piece on the hell that is Mr. Beast  \n\n_For more, follow [@links@nyan.lol](https://nyan.lol/@links) on Mastodon_\n"
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
