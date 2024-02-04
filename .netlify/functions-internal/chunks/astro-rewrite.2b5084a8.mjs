const id = 'astro-rewrite.md'
const collection = 'posts'
const slug = 'astro-rewrite'
const body =
  "Welcome to the blog that was known as [melkat.link](https://melkat.link 'Old URL that redirects to this website').\n\nI had a fun technique for making a blog using a bookmarking service to act as my content management system. I never knew how the bookmarking service felt about how I was using it and it made my blog on external services.\n\nA few months ago I heard about [Astro](https://astro.build 'Astro project website'), a new build tool for building websites in JavaScript. I've since made a few sites using it and have been pretty impressed. Before I was using [Next.js](https://nextjs.org 'NextJS project website'), and I will continue to use it where appropriate.\n\nThe biggest change will be that I can no longer simply share a link to post on my blog. I will need to write a brand new [Markdown](https://en.wikipedia.org/wiki/Markdown 'Wikipedia page on Markdown') file and deploy it, which brings it's own set of benefits. For one, I can now write posts like this.\n\nSee you soon~\n"
const data = {
  cover: '\u002Fimg\u002Fastro-rewrite.png',
  date: new Date(1647806539497),
  tags: ['post', 'me', 'astro', 'javascript'],
  title: 'I rewrote my blog with Astro',
}
const _internal = {
  filePath:
    '/Users/melanie/Developer/melkat-blog/src/content/posts/astro-rewrite.md',
  rawData:
    '\ndate: 2022-03-20T20:02:19.497Z\ntitle: I rewrote my blog with Astro\ntags: [post, me, astro, javascript]\ncover: /img/astro-rewrite.png',
}

export { _internal, body, collection, data, id, slug }
