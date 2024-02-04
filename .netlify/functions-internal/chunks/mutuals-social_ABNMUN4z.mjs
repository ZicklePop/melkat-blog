const id = 'mutuals-social.md'
const collection = 'posts'
const slug = 'mutuals-social'
const body =
  "\nOnly Mutuals. That was the joke I couldn't get out of my head. So I decided to make a website that only my mutual followers could access. Nothing risqué, just things for my friends: like the wallpapers I used to design and so on.\n\nWhile I had been playing with the Mastodon API, I had not been playing with the authenticated part. So I built an application that authenticates you with your Mastodon server and then checks to see if you are following [me](https://nyan.lol/@zicklepop) and if I am following you back. Nothing too fancy.\n"
const data = {
  date: new Date(1676505440976),
  link: 'https://mutuals.social',
  tags: ['link', 'me', 'mastodon', 'javascript'],
  title: 'Mutuals.social',
}
const _internal = {
  type: 'content',
  filePath:
    '/Users/melanie/Developer/melkat-blog/src/content/posts/mutuals-social.md',
  rawData:
    '\ndate: 2023-02-15T23:57:20.976Z\ntitle: Mutuals.social\ntags: [link, me, mastodon, javascript]\nlink: https://mutuals.social',
}

export { _internal, body, collection, data, id, slug }
