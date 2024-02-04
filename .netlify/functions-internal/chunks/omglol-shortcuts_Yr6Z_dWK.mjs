import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>I’ve just started playing around with <a href="https://home.omg.lol/referred-by/melanie">omg.lol</a>, and I’m enjoying my time playing around with all they have to offer.</p>\n<p>I wanted to build a quick and easy way into iOS and macOS to use parts of omg.lol. I created three shortcuts with the Apple’s Shortcuts for PURLs (short urls), Paste (like GitHub Gist), and Statuslog (a log of “what are you doing now”).</p>\n<p>All are available to use directly or from the share sheet in iOS or from Quick Actions in macOS.</p>\n<ul>\n<li><a href="https://www.icloud.com/shortcuts/1376e9a485e24c3ba89f255b29639c35">Create PURL</a>\n<ul>\n<li>Requirements: account name, purl domain, and API key</li>\n<li>Accepts: URLs and text</li>\n<li>Returns: a purl url</li>\n</ul>\n</li>\n<li><a href="https://www.icloud.com/shortcuts/3dc946bef85a4a19814a7479ea2feed1">Create Paste</a>\n<ul>\n<li>Requirements: account name, paste domain, and API key</li>\n<li>Accepts: Text-based files and raw text</li>\n<li>Returns: a paste url</li>\n</ul>\n</li>\n<li><a href="https://www.icloud.com/shortcuts/27fcf4bdcb5142dca2df0d884558cd67">Post Statuslog</a>\n<ul>\n<li>Requirements: account name and API key</li>\n<li>Accepts: text</li>\n<li>Returns: a status url</li>\n</ul>\n</li>\n</ul>\n<p>I hope you find these useful. Feel free to contact me on <a href="https://nyan.lol/@zicklepop">Mastodon</a> with any feedback you may have.</p>'

const frontmatter = {
  date: '2023-02-02T05:08:13.823Z',
  title: 'omg.lol for Shortcuts.app',
  tags: ['post', 'omglol', 'shortcuts', 'ios', 'macos'],
  cover: '/img/omglol-shortcuts.jpg',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/omglol-shortcuts.md'
const url = undefined
function rawContent() {
  return "\nI've just started playing around with [omg.lol](https://home.omg.lol/referred-by/melanie), and I'm enjoying my time playing around with all they have to offer.\n\nI wanted to build a quick and easy way into iOS and macOS to use parts of omg.lol. I created three shortcuts with the Apple's Shortcuts for PURLs (short urls), Paste (like GitHub Gist), and Statuslog (a log of \"what are you doing now\").\n\nAll are available to use directly or from the share sheet in iOS or from Quick Actions in macOS.\n\n- [Create PURL](https://www.icloud.com/shortcuts/1376e9a485e24c3ba89f255b29639c35)\n\t- Requirements: account name, purl domain, and API key\n\t- Accepts: URLs and text\n\t- Returns: a purl url\n- [Create Paste](https://www.icloud.com/shortcuts/3dc946bef85a4a19814a7479ea2feed1)\n\t- Requirements: account name, paste domain, and API key\n\t- Accepts: Text-based files and raw text\n\t- Returns: a paste url\n- [Post Statuslog](https://www.icloud.com/shortcuts/27fcf4bdcb5142dca2df0d884558cd67)\n\t- Requirements: account name and API key\n\t- Accepts: text\n\t- Returns: a status url\n\nI hope you find these useful. Feel free to contact me on [Mastodon](https://nyan.lol/@zicklepop) with any feedback you may have.\n"
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
