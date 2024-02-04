const id = 'omglol-shortcuts.md'
const collection = 'posts'
const slug = 'omglol-shortcuts'
const body =
  "\nI've just started playing around with [omg.lol](https://home.omg.lol/referred-by/melanie), and I'm enjoying my time playing around with all they have to offer.\n\nI wanted to build a quick and easy way into iOS and macOS to use parts of omg.lol. I created three shortcuts with the Apple's Shortcuts for PURLs (short urls), Paste (like GitHub Gist), and Statuslog (a log of \"what are you doing now\").\n\nAll are available to use directly or from the share sheet in iOS or from Quick Actions in macOS.\n\n- [Create PURL](https://www.icloud.com/shortcuts/1376e9a485e24c3ba89f255b29639c35)\n\t- Requirements: account name, purl domain, and API key\n\t- Accepts: URLs and text\n\t- Returns: a purl url\n- [Create Paste](https://www.icloud.com/shortcuts/3dc946bef85a4a19814a7479ea2feed1)\n\t- Requirements: account name, paste domain, and API key\n\t- Accepts: Text-based files and raw text\n\t- Returns: a paste url\n- [Post Statuslog](https://www.icloud.com/shortcuts/27fcf4bdcb5142dca2df0d884558cd67)\n\t- Requirements: account name and API key\n\t- Accepts: text\n\t- Returns: a status url\n\nI hope you find these useful. Feel free to contact me on [Mastodon](https://nyan.lol/@zicklepop) with any feedback you may have.\n"
const data = {
  cover: '/img/omglol-shortcuts.jpg',
  date: new Date(1675314493823),
  tags: ['post', 'omglol', 'shortcuts', 'ios', 'macos'],
  title: 'omg.lol for Shortcuts.app',
}
const _internal = {
  type: 'content',
  filePath:
    '/Users/melanie/Developer/melkat-blog/src/content/posts/omglol-shortcuts.md',
  rawData:
    '\ndate: 2023-02-02T05:08:13.823Z\ntitle: omg.lol for Shortcuts.app\ntags: [post, omglol, shortcuts, ios, macos]\ncover: /img/omglol-shortcuts.jpg',
}

export { _internal, body, collection, data, id, slug }
