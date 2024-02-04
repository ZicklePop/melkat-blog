/* empty css                        */ import {
  c as createAstro,
  b as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  e as addAttribute,
  f as renderComponent,
} from './astro_13acd68d.mjs'
import 'clsx'
import {
  c as cxs,
  g as getCollection,
  n as noDrafts,
  b as byDate,
  p as pageSize,
  $ as $$PostLayout,
  a as $$BaseLayout,
  t as title,
  d as description,
  e as baseUrl,
  f as byCount,
  h as hasLink,
  i as getDomain,
  j as hasTags,
  k as hasLinkNoDrafts,
  l as $$PageHeader,
  m as hasTagsNoDrafts,
} from './pages/index_6b7c64ae.mjs'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import rss from '@astrojs/rss'

const $$Astro$a = createAstro('https://melkat.blog')
const $$PageNavigator = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots)
    Astro2.self = $$PageNavigator
    const cx = {
      a: cxs.aHover,
      box: 'mb-8 flex items-center justify-between',
      pageCount: 'flex items-center',
      navigation: 'w-32 flex items-center',
    }
    const { url = {}, currentPage = '1', lastPage = '1' } = Astro2.props.page
    const { prev, next } = url
    return renderTemplate`${maybeRenderHead()}<div${addAttribute(cx.box, 'class')}><div${addAttribute(cx.navigation, 'class')}>${
      prev &&
      renderTemplate`<a${addAttribute(prev, 'href')}${addAttribute(cx.a, 'class')} aria-label="Newer posts">
&#8592; Newer
</a>`
    }</div><div${addAttribute(cx.pageCount, 'class')}><span>${currentPage} of ${lastPage}</span></div><div${addAttribute(`${cx.navigation} justify-end`, 'class')}>${
      next
        ? renderTemplate`<a${addAttribute(next, 'href')}${addAttribute(cx.a, 'class')} aria-label="Older posts">
Older &#8594;
</a>`
        : ''
    }</div></div>`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/page-navigator.astro',
  void 0
)

const $$Astro$9 = createAstro('https://melkat.blog')
const prerender$c = true
const $$Index$4 = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots)
    Astro2.self = $$Index$4
    let allPosts = await getCollection('posts', noDrafts)
    allPosts = allPosts.sort(byDate)
    const lastPage = Math.ceil(allPosts.length / pageSize)
    const page = {
      lastPage,
      url: {
        next: lastPage > 1 && '/2',
      },
    }
    return renderTemplate`${renderComponent($$result, 'Layout', $$BaseLayout, {}, { default: $$result2 => renderTemplate`${allPosts.slice(0, pageSize).map(entry => renderTemplate`${renderComponent($$result2, 'PostLayout', $$PostLayout, { post: entry })}`)}${renderComponent($$result2, 'PageNavigator', $$PageNavigator, { page: page })}` })}`
  },
  '/Users/melanie/Developer/melkat-blog/src/pages/index.astro',
  void 0
)

const $$file$9 = '/Users/melanie/Developer/melkat-blog/src/pages/index.astro'
const $$url$9 = ''

const index$4 = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Index$4,
      file: $$file$9,
      prerender: prerender$c,
      url: $$url$9,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

const MY_FINGER =
  'https://nyan.lol/.well-known/webfinger?resource=acct:zicklepop@nyan.lol'
const prerender$b = true
async function get$2() {
  const res = await fetch(MY_FINGER)
  const json = await res.json()
  return {
    body: JSON.stringify(json),
  }
}

const webfinger_json = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      get: get$2,
      prerender: prerender$b,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

const prerender$a = true
const parser$1 = new MarkdownIt()
async function get$1() {
  const posts = await getCollection('posts', noDrafts)
  return {
    body: JSON.stringify({
      version: 'https://jsonfeed.org/version/1.1',
      title: title,
      description,
      icon: `${baseUrl}/apple-touch-icon.png`,
      home_page_url: baseUrl,
      feed_url: `${baseUrl}/feed.json`,
      authors: [
        {
          name: 'Melanie Kat',
          avatar: `${baseUrl}/apple-touch-icon.png`,
        },
      ],
      items: posts.sort(byDate).map(post => ({
        content_html: `${post.data.cover ? '<img src="' + baseUrl + post.data.cover + '" alt="' + post.data.title + '" /><br />' : ''}${sanitizeHtml(parser$1.render(post.body))}`,
        date_published: post.data.date.toISOString(),
        external_url: post.data.link,
        id: `${baseUrl}/p/${post.slug}`,
        image: post.data.cover ? `${baseUrl}${post.data.cover}` : void 0,
        tags: post.data.tags,
        title: post.data.title,
        url: `${baseUrl}/p/${post.slug}`,
      })),
    }),
  }
}

const feed_json = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      get: get$1,
      prerender: prerender$a,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

const prerender$9 = true
const parser = new MarkdownIt()
async function get() {
  const posts = await getCollection('posts', noDrafts)
  return rss({
    title: title,
    description,
    site: baseUrl,
    items: posts.sort(byDate).map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `${baseUrl}/p/${post.slug}`,
      content: `${post.data.cover ? '<img src="' + baseUrl + post.data.cover + '" alt="' + post.data.title + '" /><br />' : ''}${sanitizeHtml(parser.render(post.body))}`,
    })),
  })
}

const rss_xml = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      get,
      prerender: prerender$9,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

const $$Astro$8 = createAstro('https://melkat.blog')
const prerender$8 = true
const $$404 = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots)
    Astro2.self = $$404
    const cx = {
      p: 'mv-8',
      a: cxs.a,
    }
    return renderTemplate`${renderComponent($$result, 'Layout', $$BaseLayout, { permalink: '/404' }, { default: $$result2 => renderTemplate`${maybeRenderHead()}<p${addAttribute(cx.p, 'class')}>It looks like I may have goof'd.</p><p>Return <a href="/"${addAttribute(cx.a, 'class')}>home</a>?</p>` })}`
  },
  '/Users/melanie/Developer/melkat-blog/src/pages/404.astro',
  void 0
)

const $$file$8 = '/Users/melanie/Developer/melkat-blog/src/pages/404.astro'
const $$url$8 = '/404'

const _404 = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$404,
      file: $$file$8,
      prerender: prerender$8,
      url: $$url$8,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

const countKeys = data =>
  Object.keys(data)
    .map(key => ({ key, count: data[key] }))
    .sort(byCount)

const uniq = arr => [...new Set(arr)]

const getAllDomains = posts =>
  uniq(posts.filter(hasLink).map(({ data: { link } }) => getDomain(link)))
const getDomainsByCount = posts => {
  const data = {}
  posts.forEach(({ data: { link } }) => {
    if (link) {
      const domain = getDomain(link)
      data[domain] = data[domain] ? data[domain] + 1 : 1
    }
  })
  return countKeys(data)
}
const getPostsByDomain = (posts, domain) =>
  posts.filter(({ data }) => getDomain(data.link) === domain)
const getAllTags = posts => {
  posts = posts.filter(hasTags)
  let allTags = []
  posts.forEach(({ data: { tags } }) => tags.forEach(tag => allTags.push(tag)))
  return uniq(allTags)
}
const getTagsByCount = posts => {
  const data = {}
  posts.forEach(({ data: { tags } }) => {
    if (tags) {
      tags.forEach(tag => {
        data[tag] = data[tag] ? data[tag] + 1 : 1
      })
    }
  })
  return countKeys(data)
}
const getPostsByTag = (posts, tag) =>
  posts.filter(({ data }) => data.tags && data.tags.includes(tag))

const $$Astro$7 = createAstro('https://melkat.blog')
const prerender$7 = true
const $$Index$3 = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots)
    Astro2.self = $$Index$3
    const cx = {
      div: `${cxs.prose} mb-8`,
    }
    const allPosts = await getCollection('posts', noDrafts)
    const sortedData = getDomainsByCount(allPosts)
    return renderTemplate`${renderComponent($$result, 'Layout', $$BaseLayout, { title: `${title} - Posts by domain`, permalink: '/d' }, { default: $$result2 => renderTemplate`${maybeRenderHead()}<div${addAttribute(cx.div, 'class')}><h2>Posts by domain</h2><ul>${sortedData.map(({ key, count }) => renderTemplate`<li><a${addAttribute(`/d/${key}`, 'href')}>${key}</a>${count}${count === 1 ? 'post' : 'posts'}</li>`)}</ul></div>` })}`
  },
  '/Users/melanie/Developer/melkat-blog/src/pages/d/index.astro',
  void 0
)

const $$file$7 = '/Users/melanie/Developer/melkat-blog/src/pages/d/index.astro'
const $$url$7 = '/d'

const index$3 = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Index$3,
      file: $$file$7,
      prerender: prerender$7,
      url: $$url$7,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

const $$Astro$6 = createAstro('https://melkat.blog')
const prerender$6 = true
async function getStaticPaths$5() {
  let allPosts = await getCollection('posts', hasLinkNoDrafts)
  allPosts = allPosts.sort(byDate)
  const allDomains = getAllDomains(allPosts)
  return allDomains?.map(domain => {
    const filtered = getPostsByDomain(allPosts, domain)
    return {
      params: {
        domain,
      },
      props: {
        pages: filtered,
      },
    }
  })
}
const $$Index$2 = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots)
    Astro2.self = $$Index$2
    const { pages } = Astro2.props
    const { domain } = Astro2.params
    const lastPage = Math.ceil(pages.length / pageSize)
    const page = {
      lastPage,
      url: {
        next: lastPage > 1 && `/d/${domain}/2`,
      },
    }
    return renderTemplate`${renderComponent($$result, 'Layout', $$BaseLayout, { title: `${title} - posts from #${domain}${lastPage > 1 ? ', page 1 of ' + lastPage : ''}`, permalink: `/d/${domain}` }, { default: $$result2 => renderTemplate`${renderComponent($$result2, 'PageHeader', $$PageHeader, {}, { default: $$result3 => renderTemplate`Links to ${domain}` })}${pages.slice(0, pageSize).map(entry => renderTemplate`${renderComponent($$result2, 'PostLayout', $$PostLayout, { post: entry })}`)}${renderComponent($$result2, 'PageNavigator', $$PageNavigator, { page: page })}` })}`
  },
  '/Users/melanie/Developer/melkat-blog/src/pages/d/[domain]/index.astro',
  void 0
)

const $$file$6 =
  '/Users/melanie/Developer/melkat-blog/src/pages/d/[domain]/index.astro'
const $$url$6 = '/d/[domain]'

const index$2 = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Index$2,
      file: $$file$6,
      getStaticPaths: getStaticPaths$5,
      prerender: prerender$6,
      url: $$url$6,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

const $$Astro$5 = createAstro('https://melkat.blog')
const prerender$5 = true
async function getStaticPaths$4({ paginate }) {
  let allPosts = await getCollection('posts', hasLinkNoDrafts)
  allPosts = allPosts.sort(byDate)
  const allDomains = getAllDomains(allPosts)
  return allDomains?.map(domain => {
    const filtered = getPostsByDomain(allPosts, domain)
    return paginate(filtered, {
      params: { domain },
      pageSize,
    })
  })
}
const $$page$2 = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots)
    Astro2.self = $$page$2
    const { page } = Astro2.props
    const { domain } = Astro2.params
    return renderTemplate`${renderComponent($$result, 'Layout', $$BaseLayout, { title: `${title} - posts from #${domain}, page ${page.currentPage} of ${page.lastPage}`, permalink: `/d/${domain}/${page.currentPage}` }, { default: $$result2 => renderTemplate`${renderComponent($$result2, 'PageHeader', $$PageHeader, {}, { default: $$result3 => renderTemplate`Links to ${domain}` })}${page.data.map(entry => renderTemplate`${renderComponent($$result2, 'PostLayout', $$PostLayout, { post: entry })}`)}${renderComponent($$result2, 'PageNavigator', $$PageNavigator, { page: page })}` })}`
  },
  '/Users/melanie/Developer/melkat-blog/src/pages/d/[domain]/[page].astro',
  void 0
)

const $$file$5 =
  '/Users/melanie/Developer/melkat-blog/src/pages/d/[domain]/[page].astro'
const $$url$5 = '/d/[domain]/[page]'

const _page_$2 = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$page$2,
      file: $$file$5,
      getStaticPaths: getStaticPaths$4,
      prerender: prerender$5,
      url: $$url$5,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

const $$Astro$4 = createAstro('https://melkat.blog')
const prerender$4 = true
async function getStaticPaths$3() {
  const entries = await getCollection('posts', noDrafts)
  return entries.map(entry => ({
    params: {
      slug: entry.slug,
    },
    props: {
      entry,
    },
  }))
}
const $$ = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots)
    Astro2.self = $$
    const { entry } = Astro2.props
    return renderTemplate`${renderComponent($$result, 'PostLayout', $$PostLayout, { post: entry })}`
  },
  '/Users/melanie/Developer/melkat-blog/src/pages/p/[...slug].astro',
  void 0
)

const $$file$4 =
  '/Users/melanie/Developer/melkat-blog/src/pages/p/[...slug].astro'
const $$url$4 = '/p/[...slug]'

const ____slug_ = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$,
      file: $$file$4,
      getStaticPaths: getStaticPaths$3,
      prerender: prerender$4,
      url: $$url$4,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

const $$Astro$3 = createAstro('https://melkat.blog')
const prerender$3 = true
const $$Index$1 = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots)
    Astro2.self = $$Index$1
    const cx = {
      div: `${cxs.prose} mb-8`,
    }
    const allPosts = await getCollection('posts', noDrafts)
    const sortedData = getTagsByCount(allPosts)
    return renderTemplate`${renderComponent($$result, 'Layout', $$BaseLayout, { title: `${title} - Posts by tag`, permalink: '/t' }, { default: $$result2 => renderTemplate`${maybeRenderHead()}<div${addAttribute(cx.div, 'class')}><h2>Posts by tag</h2><ul>${sortedData.map(({ key, count }) => renderTemplate`<li><a${addAttribute(`/t/${key}`, 'href')}>${key}</a>${count}${count === 1 ? 'post' : 'posts'}</li>`)}</ul></div>` })}`
  },
  '/Users/melanie/Developer/melkat-blog/src/pages/t/index.astro',
  void 0
)

const $$file$3 = '/Users/melanie/Developer/melkat-blog/src/pages/t/index.astro'
const $$url$3 = '/t'

const index$1 = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Index$1,
      file: $$file$3,
      prerender: prerender$3,
      url: $$url$3,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

const $$Astro$2 = createAstro('https://melkat.blog')
const prerender$2 = true
async function getStaticPaths$2() {
  let allPosts = await getCollection('posts', hasTagsNoDrafts)
  allPosts = allPosts.sort(byDate)
  const allTags = getAllTags(allPosts)
  return allTags?.map(tag => {
    const filtered = getPostsByTag(allPosts, tag)
    return {
      params: {
        tag,
      },
      props: {
        pages: filtered,
      },
    }
  })
}
const $$Index = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots)
    Astro2.self = $$Index
    const { pages } = Astro2.props
    const { tag } = Astro2.params
    const lastPage = Math.ceil(pages.length / pageSize)
    const page = {
      lastPage,
      url: {
        next: lastPage > 1 && `/t/${tag}/2`,
      },
    }
    return renderTemplate`${renderComponent($$result, 'Layout', $$BaseLayout, { title: `${title} - posts tagged #${tag}${lastPage > 1 ? ', page 1 of ' + lastPage : ''}`, permalink: `/t/${tag}` }, { default: $$result2 => renderTemplate`${renderComponent($$result2, 'PageHeader', $$PageHeader, {}, { default: $$result3 => renderTemplate`Posts tagged #${tag}` })}${pages.slice(0, pageSize).map(entry => renderTemplate`${renderComponent($$result2, 'PostLayout', $$PostLayout, { post: entry })}`)}${renderComponent($$result2, 'PageNavigator', $$PageNavigator, { page: page })}` })}`
  },
  '/Users/melanie/Developer/melkat-blog/src/pages/t/[tag]/index.astro',
  void 0
)

const $$file$2 =
  '/Users/melanie/Developer/melkat-blog/src/pages/t/[tag]/index.astro'
const $$url$2 = '/t/[tag]'

const index = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Index,
      file: $$file$2,
      getStaticPaths: getStaticPaths$2,
      prerender: prerender$2,
      url: $$url$2,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

const $$Astro$1 = createAstro('https://melkat.blog')
const prerender$1 = true
async function getStaticPaths$1({ paginate }) {
  let allPosts = await getCollection('posts', hasTagsNoDrafts)
  allPosts = allPosts.sort(byDate)
  let allTags = getAllTags(allPosts)
  return allTags?.map(tag => {
    const filtered = getPostsByTag(allPosts, tag)
    return paginate(filtered, {
      params: { tag },
      pageSize,
    })
  })
}
const $$page$1 = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots)
    Astro2.self = $$page$1
    const { page } = Astro2.props
    const { tag } = Astro2.params
    return renderTemplate`${renderComponent($$result, 'Layout', $$BaseLayout, { title: `${title} - posts tagged #${tag}, page ${page.currentPage} of ${page.lastPage}`, permalink: `/t/${tag}/${page.currentPage}` }, { default: $$result2 => renderTemplate`${renderComponent($$result2, 'PageHeader', $$PageHeader, {}, { default: $$result3 => renderTemplate`Posts tagged #${tag}` })}${page.data.map(entry => renderTemplate`${renderComponent($$result2, 'PostLayout', $$PostLayout, { post: entry })}`)}${renderComponent($$result2, 'PageNavigator', $$PageNavigator, { page: page })}` })}`
  },
  '/Users/melanie/Developer/melkat-blog/src/pages/t/[tag]/[page].astro',
  void 0
)

const $$file$1 =
  '/Users/melanie/Developer/melkat-blog/src/pages/t/[tag]/[page].astro'
const $$url$1 = '/t/[tag]/[page]'

const _page_$1 = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$page$1,
      file: $$file$1,
      getStaticPaths: getStaticPaths$1,
      prerender: prerender$1,
      url: $$url$1,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

const $$Astro = createAstro('https://melkat.blog')
const prerender = true
async function getStaticPaths({ paginate }) {
  let allPosts = await getCollection('posts', noDrafts)
  allPosts = allPosts.sort(byDate)
  return paginate(allPosts, { pageSize })
}
const $$page = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
    Astro2.self = $$page
    const { page } = Astro2.props
    return renderTemplate`${renderComponent($$result, 'Layout', $$BaseLayout, { title: `${title} - page ${page.currentPage} of ${page.lastPage}`, permalink: `/${page.currentPage}` }, { default: $$result2 => renderTemplate`${page.data.map(entry => renderTemplate`${renderComponent($$result2, 'PostLayout', $$PostLayout, { post: entry })}`)}${renderComponent($$result2, 'PageNavigator', $$PageNavigator, { page: page })}` })}`
  },
  '/Users/melanie/Developer/melkat-blog/src/pages/[page].astro',
  void 0
)

const $$file = '/Users/melanie/Developer/melkat-blog/src/pages/[page].astro'
const $$url = '/[page]'

const _page_ = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$page,
      file: $$file,
      getStaticPaths,
      prerender,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

export {
  _404 as _,
  index$3 as a,
  index$2 as b,
  _page_$2 as c,
  ____slug_ as d,
  index$1 as e,
  feed_json as f,
  index as g,
  _page_$1 as h,
  index$4 as i,
  _page_ as j,
  rss_xml as r,
  webfinger_json as w,
}
