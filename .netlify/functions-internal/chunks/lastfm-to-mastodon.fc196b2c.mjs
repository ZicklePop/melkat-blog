const id = 'lastfm-to-mastodon.md'
const collection = 'posts'
const slug = 'lastfm-to-mastodon'
const body =
  '\nAt this point I’m just coming up with reasons to play with the Mastodon API. I don’t know. I haven’t used [Last.fm](https://www.last.fm/user/ZicklePop) in years but I started again recently just because I love logging things. I was also thinking what if I could automatically update my Mastodon profile with dynamic content. Mastodon profiles, by default, have up to four fields you can customize the label and content of. A common use for one of the fields to list their pronouns, link to their website, or share their location, so why not your last played track from Last.fm? My script works can work in two ways: it will look for a field titled `Last.fm` and set the value to the last played track, or it will look for a field value of a `last.fm` url and set the field title to the last played track.\n\nThis script requires [Scriptable.app](https://scriptable.app) but it can easily be converted to just run with Node. You will need to setup the config portion of the script with your Last.fm username, [Last.fm API key](https://www.last.fm/api), Mastodon instance, and Mastodon token. I hope that doesn’t sound like a lot. I’ve documented the code a bit to help you through all of this.\n\nAs always, if you have an questions or need help reach out to me on [Mastodon](https://nyan.lol/@zicklepop).\n'
const data = {
  cover: '\u002Fimg\u002Flastfm-to-mastodon.png',
  date: new Date(1678050009249),
  link: 'https:\u002F\u002Fpaste.melkat.lol\u002Flast.fm-to-mastodon.js',
  tags: ['link', 'mastodon', 'lastfm', 'scriptable'],
  title: 'Last.fm to Mastodon Profile',
}
const _internal = {
  filePath:
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lastfm-to-mastodon.md',
  rawData:
    '\ndate: 2023-03-05T21:00:09.249Z\ntitle: Last.fm to Mastodon Profile\ntags: [link, mastodon, lastfm, scriptable]\ncover: /img/lastfm-to-mastodon.png\nlink: https://paste.melkat.lol/last.fm-to-mastodon.js',
}

export { _internal, body, collection, data, id, slug }
