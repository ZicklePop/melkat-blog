import {
  b as createComponent,
  r as renderTemplate,
  u as unescapeHTML,
  s as spreadAttributes,
} from './astro_13acd68d.mjs'
import '@astrojs/internal-helpers/path'
import './pages/image-endpoint_2bac92e6.mjs'
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
  '<p>Here’s what I’ve enjoyed over the last few weeks. These will continue to be a little all over the place, but that is just a reflection of who I am.</p>\n<ul>\n<li><a href="https://youtu.be/hIOT-Zkf9Qo">Why Japan’s Northern Dialects are Shorthand for “Hick”</a><br>\nThat’s a lot of Japanese dialects to keep track of!</li>\n<li><a href="https://apps.apple.com/us/app/arc-mobile-companion/id1669785846">‎Arc | Mobile Companion</a><br>\nI absolutely love the Arc browser on Mac, so yes I am very excited for their iOS app</li>\n<li><a href="https://www.pcgamer.com/former-sims-lead-says-men-would-lie-about-how-they-played-during-focus-groups-actually-what-you-did-is-you-redecorated-that-bathroom/">Former Sims lead says men would lie about how they played during focus groups: ‘Actually, what you did is you redecorated that bathroom’</a><br>\n“We won’t spy on you having sex like they do over at Electronic Arts” is a pretty unique selling point for a game</li>\n<li><a href="https://www.youtube.com/watch?v=bxyDPJeStVo">Silicon Valley’s Midlife Crisis Is Destroying The Internet</a><br>\nA good recap of the last 15 years of big tech trash from Ryan Broderick</li>\n<li><a href="https://www.vice.com/en/article/n7ewy7/non-disparagement-clauses-are-retroactively-voided-nlrbs-top-cop-clarifies">Non-Disparagement Clauses Are Retroactively Voided, NLRB’s Top Cop Clarifies</a><br>\nDon’t forget you are now free to disparage your former employers. I’ll go first: every one of my former CEOs smelled like butts. Stinky butts.</li>\n<li><a href="https://www.youtube.com/watch?v=NuGrbQq2lAk">Remember When Microsoft Lied to Us?</a><br>\nWhy does Microsoft needs to spend all that money on OpenAI when they were doing all this stuff back in 2009 with Project Natal and Milo. lol.</li>\n<li><a href="https://www.bitestring.com/posts/2023-03-19-web-fingerprinting-is-worse-than-I-thought.html">Web fingerprinting is worse than I thought - Bitestring’s Blog</a><br>\nRight now Firefox is the only browser where you can turn off the new methods being tracked online with fingerprinting and it’s not on by default. (It may break some websites? I haven’t had any trouble yet.)</li>\n<li><a href="https://armoxon.substack.com/p/the-case-for-shunning">The Case For Shunning</a><br>\nDamn I wish these people were being silenced, then I wouldn’t have to hear their bigoted tirades anymore.</li>\n<li><a href="https://sfstandard.com/arts-culture/redditors-say-this-japanese-hillside-is-a-dead-ringer-for-san-francisco/">Redditors Say This Japanese Hillside is a Dead Ringer for SF</a><br>\nWhen you’re going to east San Francisco…</li>\n<li><a href="https://www.theverge.com/2023/3/18/23640484/lumafield-neptune-ct-scanner-3d-x-ray-hands-on-interview">The Lumafield Neptune X-rayed my gadgets — let me show you</a><br>\nI too like to think I compete with cutting things open with a saw</li>\n<li><a href="https://techcrunch.com/2023/03/01/us-postal-service-change-of-address-fraud/">The life-upending flaw that USPS won’t fix</a><br>\nIf you have a dollar and ten cents you can get anyone’s mail</li>\n<li><a href="https://web.archive.org/web/20230330015543/https://forum.obsidian.md/t/gems-of-the-year-2022-winners/54903">Gems of the Year 2022 Winners (archived)</a><br>\nThere are some fun Obsidian plugins and themes in here</li>\n<li><a href="https://maxread.substack.com/p/can-orb-unseat-cube-in-the-geometric">Can Orb unseat Cube in the Geometric Solid Power Rankings?</a><br>\nThe results of the geometric solid power rankings you requested are here</li>\n</ul>\n<p><em>For more, follow <a href="https://nyan.lol/@links">@links@nyan.lol</a> on Mastodon</em></p>'
)

const frontmatter = {
  date: '2023-04-03T05:59:25.000Z',
  title: "Here's Some Links, Apr 2, 2023",
  tags: ['post', 'link-list'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-04-02.md'
const url = undefined
function rawContent() {
  return "\nHere's what I've enjoyed over the last few weeks. These will continue to be a little all over the place, but that is just a reflection of who I am.\n\n- [Why Japan’s Northern Dialects are Shorthand for “Hick”](https://youtu.be/hIOT-Zkf9Qo)   \n   That's a lot of Japanese dialects to keep track of!  \n- [‎Arc | Mobile Companion](https://apps.apple.com/us/app/arc-mobile-companion/id1669785846)   \n   I absolutely love the Arc browser on Mac, so yes I am very excited for their iOS app  \n- [Former Sims lead says men would lie about how they played during focus groups: 'Actually, what you did is you redecorated that bathroom'](https://www.pcgamer.com/former-sims-lead-says-men-would-lie-about-how-they-played-during-focus-groups-actually-what-you-did-is-you-redecorated-that-bathroom/)   \n   \"We won't spy on you having sex like they do over at Electronic Arts\" is a pretty unique selling point for a game  \n- [Silicon Valley's Midlife Crisis Is Destroying The Internet](https://www.youtube.com/watch?v=bxyDPJeStVo)   \n   A good recap of the last 15 years of big tech trash from Ryan Broderick  \n- [Non-Disparagement Clauses Are Retroactively Voided, NLRB’s Top Cop Clarifies](https://www.vice.com/en/article/n7ewy7/non-disparagement-clauses-are-retroactively-voided-nlrbs-top-cop-clarifies)   \n   Don’t forget you are now free to disparage your former employers. I’ll go first: every one of my former CEOs smelled like butts. Stinky butts.  \n- [Remember When Microsoft Lied to Us?](https://www.youtube.com/watch?v=NuGrbQq2lAk)   \n   Why does Microsoft needs to spend all that money on OpenAI when they were doing all this stuff back in 2009 with Project Natal and Milo. lol.  \n- [Web fingerprinting is worse than I thought - Bitestring's Blog](https://www.bitestring.com/posts/2023-03-19-web-fingerprinting-is-worse-than-I-thought.html)   \n   Right now Firefox is the only browser where you can turn off the new methods being tracked online with fingerprinting and it's not on by default. (It may break some websites? I haven't had any trouble yet.)  \n- [The Case For Shunning](https://armoxon.substack.com/p/the-case-for-shunning)   \n   Damn I wish these people were being silenced, then I wouldn't have to hear their bigoted tirades anymore.  \n- [Redditors Say This Japanese Hillside is a Dead Ringer for SF](https://sfstandard.com/arts-culture/redditors-say-this-japanese-hillside-is-a-dead-ringer-for-san-francisco/)   \n   When you're going to east San Francisco…  \n- [The Lumafield Neptune X-rayed my gadgets — let me show you](https://www.theverge.com/2023/3/18/23640484/lumafield-neptune-ct-scanner-3d-x-ray-hands-on-interview)   \n   I too like to think I compete with cutting things open with a saw  \n- [The life-upending flaw that USPS won't fix](https://techcrunch.com/2023/03/01/us-postal-service-change-of-address-fraud/)   \n   If you have a dollar and ten cents you can get anyone's mail  \n- [Gems of the Year 2022 Winners (archived)](https://web.archive.org/web/20230330015543/https://forum.obsidian.md/t/gems-of-the-year-2022-winners/54903)   \n   There are some fun Obsidian plugins and themes in here  \n- [Can Orb unseat Cube in the Geometric Solid Power Rankings?](https://maxread.substack.com/p/can-orb-unseat-cube-in-the-geometric)   \n   The results of the geometric solid power rankings you requested are here  \n\n_For more, follow [@links@nyan.lol](https://nyan.lol/@links) on Mastodon_\n"
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

  return renderTemplate`${unescapeHTML(html)}`
})
Content[Symbol.for('astro.needsHeadRendering')] = true

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
