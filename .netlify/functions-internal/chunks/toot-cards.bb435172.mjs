const id = 'toot-cards.md'
const collection = 'posts'
const slug = 'toot-cards'
const body =
  "\nOver the past few months, I decided to familiarize myself with how the Mastodon APIs work across all servers, so I put together this site for simply viewing and sharing links to Mastodon posts. It's very simple and minimal, but it also makes sharing very convenient on platforms like iMessage where you can't see the content of a post.\n\nI also used this as an opportunity to play around with some [NextJS 13](https://nextjs.org/blog/next-13) features that I wanted to try out. If you are interested, head over to the [repository on GitHub](https://github.com/ZicklePop/toot-cards).\n"
const data = {
  cover: '\u002Fimg\u002Ftoot-cards.png',
  date: new Date(1676504748893),
  link: 'https:\u002F\u002Ftoot.cards',
  tags: ['link', 'me', 'mastodon', 'javascript'],
  title: 'Toot.cards',
}
const _internal = {
  filePath:
    '/Users/melanie/Developer/melkat-blog/src/content/posts/toot-cards.md',
  rawData:
    '\ndate: 2023-02-15T23:45:48.893Z\ntitle: Toot.cards\ntags: [link, me, mastodon, javascript]\ncover: /img/toot-cards.png\nlink: https://toot.cards',
}

export { _internal, body, collection, data, id, slug }
