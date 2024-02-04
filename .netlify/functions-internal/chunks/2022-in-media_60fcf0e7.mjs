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
  '<p>What even is time anymore? Everything feels like it’s still 2020. This was the year knowing the days of the week went out the window. What I can remember is: playing every Yakuza game and watching Smosh and Good Mythical Morning to keep myself grounded.</p>\n<h2 id="anime">Anime</h2>\n<p>My girlfriend and I got in to watching anime together and at a terrific time. I don’t recall anyone talking about Pop Team Epic’s new season??? That’s weird.</p>\n<ul>\n<li>Spy × Family</li>\n<li>Chainsaw Man</li>\n<li>Pop Team Epic Season 2</li>\n<li>Lycoris Recoil</li>\n</ul>\n<h2 id="music">Music</h2>\n<p>This year I got in to listening to FLACs and other lossless audio files. I’m still not sure if I hear a difference but it all sounds so good.</p>\n<ul>\n<li>BETWEEN 1&#x26;2 by TWICE</li>\n<li>IM NAYEON by NAYEON</li>\n<li>Mannequin by DECO*27</li>\n<li>Sanketsu-girl by Sayuri</li>\n</ul>\n<h2 id="games">Games</h2>\n<p>As I mentioned, this year was taken over by the Yakuza series, including it’s Judgment spinoff. Traveling still is not the best idea right now. So, the next best thing is experiencing Japan in the games by Ryu ga Gotoku. The games make you feel like you are there. It’s always fun to see a place you’ve been to recreated in a game with as much love and detail as it deserves.</p>\n<ul>\n<li>Shin-chan: Me and the Professor on Summer Vacation (Nintendo Switch)</li>\n<li>Escape Academy (PC)</li>\n<li>GhostWire: Tokyo (PS5)</li>\n<li>PowerWash Simulator (PC)</li>\n<li>Tiny Tina’s Wonderlands (PC)</li>\n</ul>\n<h2 id="tv-shows">TV Shows</h2>\n<p>Streaming services are trying to figure out how hard they can push their customers. In price, but also the ridiculous stunts they keep pulling. It’s all good, past me bought Deadwood so I can rewatch it whenever I want.</p>\n<ul>\n<li>Paper Girls (Prime Video)</li>\n<li>Severance (Apple TV+)</li>\n<li>The Rehearsal (HBO)</li>\n<li>Tokyo Vice (HBO)</li>\n<li>Yellowjackets (Showtime)</li>\n</ul>'
)

const frontmatter = {
  date: '2022-12-18T04:10:01.149Z',
  title: 'My 2022 in Media',
  tags: ['post', 'media'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/2022-in-media.md'
const url = undefined
function rawContent() {
  return "\nWhat even is time anymore? Everything feels like it's still 2020. This was the year knowing the days of the week went out the window. What I can remember is: playing every Yakuza game and watching Smosh and Good Mythical Morning to keep myself grounded.\n\n\n## Anime\n\nMy girlfriend and I got in to watching anime together and at a terrific time. I don't recall anyone talking about Pop Team Epic's new season??? That's weird.\n\n- Spy × Family\n- Chainsaw Man\n- Pop Team Epic Season 2\n- Lycoris Recoil\n\n\n## Music\n\nThis year I got in to listening to FLACs and other lossless audio files. I'm still not sure if I hear a difference but it all sounds so good.\n\n- BETWEEN 1&2 by TWICE\n- IM NAYEON by NAYEON\n- Mannequin by DECO\\*27\n- Sanketsu-girl by Sayuri\n\n\n## Games\n\nAs I mentioned, this year was taken over by the Yakuza series, including it's Judgment spinoff. Traveling still is not the best idea right now. So, the next best thing is experiencing Japan in the games by Ryu ga Gotoku. The games make you feel like you are there. It's always fun to see a place you've been to recreated in a game with as much love and detail as it deserves.\n\n- Shin-chan: Me and the Professor on Summer Vacation (Nintendo Switch)\n- Escape Academy (PC)\n- GhostWire: Tokyo (PS5)\n- PowerWash Simulator (PC)\n- Tiny Tina's Wonderlands (PC)\n\n\n## TV Shows\n\nStreaming services are trying to figure out how hard they can push their customers. In price, but also the ridiculous stunts they keep pulling. It's all good, past me bought Deadwood so I can rewatch it whenever I want.\n\n- Paper Girls (Prime Video)\n- Severance (Apple TV+)\n- The Rehearsal (HBO)\n- Tokyo Vice (HBO)\n- Yellowjackets (Showtime)\n"
}
function compiledContent() {
  return html
}
function getHeadings() {
  return [
    { depth: 2, slug: 'anime', text: 'Anime' },
    { depth: 2, slug: 'music', text: 'Music' },
    { depth: 2, slug: 'games', text: 'Games' },
    { depth: 2, slug: 'tv-shows', text: 'TV Shows' },
  ]
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
