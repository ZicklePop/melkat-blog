import 'cookie'
import 'kleur/colors'
import 'string-width'
import '@astrojs/internal-helpers/path'
import './chunks/astro_13acd68d.mjs'
import 'clsx'
import 'mime'
import { compile } from 'path-to-regexp'
import 'html-escaper'

if (typeof process !== 'undefined') {
  let proc = process
  if ('argv' in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes('--verbose'));
    else if (proc.argv.includes('--silent'));
    else;
  }
}

new TextEncoder()

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments
    .map(segment => {
      return (
        '/' +
        segment
          .map(part => {
            if (part.spread) {
              return `:${part.content.slice(3)}(.*)?`
            } else if (part.dynamic) {
              return `:${part.content}`
            } else {
              return part.content
                .normalize()
                .replace(/\?/g, '%3F')
                .replace(/#/g, '%23')
                .replace(/%5B/g, '[')
                .replace(/%5D/g, ']')
                .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            }
          })
          .join('')
      )
    })
    .join('')
  let trailing = ''
  if (addTrailingSlash === 'always' && segments.length) {
    trailing = '/'
  }
  const toPath = compile(template + trailing)
  return toPath
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(
      rawRouteData.segments,
      rawRouteData._meta.trailingSlash
    ),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute
      ? deserializeRouteData(rawRouteData.redirectRoute)
      : void 0,
  }
}

function deserializeManifest(serializedManifest) {
  const routes = []
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData),
    })
    const route = serializedRoute
    route.routeData = deserializeRouteData(serializedRoute.routeData)
  }
  const assets = new Set(serializedManifest.assets)
  const componentMetadata = new Map(serializedManifest.componentMetadata)
  const clientDirectives = new Map(serializedManifest.clientDirectives)
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes,
  }
}

const manifest = deserializeManifest({
  adapterName: '@astrojs/netlify/functions',
  routes: [
    {
      file: 'index.html',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/',
        type: 'page',
        pattern: '^\\/$',
        segments: [],
        params: [],
        component: 'src/pages/index.astro',
        pathname: '/',
        prerender: true,
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '.well-known/webfinger.json',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/.well-known/webfinger.json',
        type: 'endpoint',
        pattern: '^\\/\\.well-known\\/webfinger\\.json$',
        segments: [
          [{ content: '.well-known', dynamic: false, spread: false }],
          [{ content: 'webfinger.json', dynamic: false, spread: false }],
        ],
        params: [],
        component: 'src/pages/.well-known/webfinger.json.ts',
        pathname: '/.well-known/webfinger.json',
        prerender: true,
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: 'feed.json',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/feed.json',
        type: 'endpoint',
        pattern: '^\\/feed\\.json$',
        segments: [[{ content: 'feed.json', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/feed.json.ts',
        pathname: '/feed.json',
        prerender: true,
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: 'rss.xml',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/rss.xml',
        type: 'endpoint',
        pattern: '^\\/rss\\.xml$',
        segments: [[{ content: 'rss.xml', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/rss.xml.ts',
        pathname: '/rss.xml',
        prerender: true,
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '404.html',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/404',
        type: 'page',
        pattern: '^\\/404\\/?$',
        segments: [[{ content: '404', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/404.astro',
        pathname: '/404',
        prerender: true,
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: 'd/index.html',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/d',
        type: 'page',
        pattern: '^\\/d\\/?$',
        segments: [[{ content: 'd', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/d/index.astro',
        pathname: '/d',
        prerender: true,
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: 't/index.html',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/t',
        type: 'page',
        pattern: '^\\/t\\/?$',
        segments: [[{ content: 't', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/t/index.astro',
        pathname: '/t',
        prerender: true,
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        type: 'endpoint',
        route: '/_image',
        pattern: '^\\/_image$',
        segments: [[{ content: '_image', dynamic: false, spread: false }]],
        params: [],
        component: 'node_modules/astro/dist/assets/image-endpoint.js',
        pathname: '/_image',
        prerender: false,
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [
        { type: 'external', src: '/_astro/404.a2222609.css' },
        { type: 'external', src: '/_astro/_page_.7fd5476e.css' },
      ],
      routeData: {
        route: '/q',
        type: 'page',
        pattern: '^\\/q\\/?$',
        segments: [[{ content: 'q', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/q/index.astro',
        pathname: '/q',
        prerender: false,
        _meta: { trailingSlash: 'ignore' },
      },
    },
  ],
  site: 'https://melkat.blog',
  base: '/',
  compressHTML: true,
  componentMetadata: [
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/[page].astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/d/[domain]/[page].astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/d/[domain]/index.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/index.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/p/[...slug].astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/q/index.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/t/[tag]/[page].astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/t/[tag]/index.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/404.astro',
      { propagation: 'none', containsHead: true },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/d/index.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/t/index.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    ['\u0000astro:content', { propagation: 'in-tree', containsHead: false }],
    [
      '\u0000@astro-page:src/pages/[page]@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '\u0000@astrojs-ssr-virtual-entry',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '\u0000@astro-page:src/pages/d/[domain]/[page]@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '\u0000@astro-page:src/pages/d/[domain]/index@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '\u0000@astro-page:src/pages/d/index@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/feed.json.ts',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '\u0000@astro-page:src/pages/feed.json@_@ts',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '\u0000@astro-page:src/pages/index@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '\u0000@astro-page:src/pages/p/[...slug]@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '\u0000@astro-page:src/pages/q/index@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/rss.xml.ts',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '\u0000@astro-page:src/pages/rss.xml@_@ts',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '\u0000@astro-page:src/pages/t/[tag]/[page]@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '\u0000@astro-page:src/pages/t/[tag]/index@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '\u0000@astro-page:src/pages/t/index@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
  ],
  renderers: [],
  clientDirectives: [
    [
      'idle',
      '(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();',
    ],
    [
      'load',
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
    ],
    [
      'media',
      '(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();',
    ],
    [
      'only',
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
    ],
    [
      'visible',
      '(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();',
    ],
  ],
  entryModules: {
    '\u0000@astrojs-ssr-virtual-entry': 'entry.mjs',
    '\u0000@astro-renderers': 'renderers.mjs',
    '\u0000empty-middleware': '_empty-middleware.mjs',
    '\u0000@astrojs-manifest': 'manifest_25c1f834.mjs',
    '\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js':
      'chunks/image-endpoint_fead0217.mjs',
    '\u0000@astro-page:src/pages/index@_@astro': 'chunks/index_44491a54.mjs',
    '\u0000@astro-page:src/pages/.well-known/webfinger.json@_@ts':
      'chunks/webfinger_864bc9bb.mjs',
    '\u0000@astro-page:src/pages/feed.json@_@ts': 'chunks/feed_4c7358c2.mjs',
    '\u0000@astro-page:src/pages/rss.xml@_@ts': 'chunks/rss_cfac9c1f.mjs',
    '\u0000@astro-page:src/pages/404@_@astro': 'chunks/404_71611ba6.mjs',
    '\u0000@astro-page:src/pages/d/index@_@astro': 'chunks/index_7c1359d5.mjs',
    '\u0000@astro-page:src/pages/d/[domain]/index@_@astro':
      'chunks/index_4cc9a18b.mjs',
    '\u0000@astro-page:src/pages/d/[domain]/[page]@_@astro':
      'chunks/_page__9f37d971.mjs',
    '\u0000@astro-page:src/pages/p/[...slug]@_@astro':
      'chunks/_.._a87bea28.mjs',
    '\u0000@astro-page:src/pages/q/index@_@astro': 'chunks/index_e92e98f9.mjs',
    '\u0000@astro-page:src/pages/t/index@_@astro': 'chunks/index_a1ab8a5d.mjs',
    '\u0000@astro-page:src/pages/t/[tag]/index@_@astro':
      'chunks/index_48cac757.mjs',
    '\u0000@astro-page:src/pages/t/[tag]/[page]@_@astro':
      'chunks/_page__b41b3dc2.mjs',
    '\u0000@astro-page:src/pages/[page]@_@astro': 'chunks/_page__dd6298b6.mjs',
    '/Users/melanie/Developer/melkat-blog/node_modules/astro/dist/assets/services/sharp.js':
      'chunks/sharp_4885d216.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/134400368.md?astroContentCollectionEntry=true':
      'chunks/134400368_48e6b6e6.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/135019114.md?astroContentCollectionEntry=true':
      'chunks/135019114_a77ebc7d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136222383.md?astroContentCollectionEntry=true':
      'chunks/136222383_19895cc3.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224879.md?astroContentCollectionEntry=true':
      'chunks/136224879_2e2e2e85.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224935.md?astroContentCollectionEntry=true':
      'chunks/136224935_4f46fd9b.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136763858.md?astroContentCollectionEntry=true':
      'chunks/136763858_2f798ac2.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009001.md?astroContentCollectionEntry=true':
      'chunks/137009001_4bf04851.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009091.md?astroContentCollectionEntry=true':
      'chunks/137009091_fc413530.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138288124.md?astroContentCollectionEntry=true':
      'chunks/138288124_28a43164.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138860938.md?astroContentCollectionEntry=true':
      'chunks/138860938_38ace2a4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138917375.md?astroContentCollectionEntry=true':
      'chunks/138917375_464d0641.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113304.md?astroContentCollectionEntry=true':
      'chunks/140113304_c2286e84.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113399.md?astroContentCollectionEntry=true':
      'chunks/140113399_e4483542.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113823.md?astroContentCollectionEntry=true':
      'chunks/140113823_ce8db9b1.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140166273.md?astroContentCollectionEntry=true':
      'chunks/140166273_49b9cd7f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140179091.md?astroContentCollectionEntry=true':
      'chunks/140179091_5ed276ef.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140733004.md?astroContentCollectionEntry=true':
      'chunks/140733004_1fa94927.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/141385956.md?astroContentCollectionEntry=true':
      'chunks/141385956_e30d78f3.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143872419.md?astroContentCollectionEntry=true':
      'chunks/143872419_5a7da9c1.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143963126.md?astroContentCollectionEntry=true':
      'chunks/143963126_75d00abd.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145124027.md?astroContentCollectionEntry=true':
      'chunks/145124027_277d5c60.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145785077.md?astroContentCollectionEntry=true':
      'chunks/145785077_d466441f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/147888188.md?astroContentCollectionEntry=true':
      'chunks/147888188_119a94b3.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148032540.md?astroContentCollectionEntry=true':
      'chunks/148032540_9546e89d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553676.md?astroContentCollectionEntry=true':
      'chunks/148553676_a79d0d66.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553739.md?astroContentCollectionEntry=true':
      'chunks/148553739_3d15973f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148896468.md?astroContentCollectionEntry=true':
      'chunks/148896468_2d759290.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856049.md?astroContentCollectionEntry=true':
      'chunks/151856049_cceb47b3.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856082.md?astroContentCollectionEntry=true':
      'chunks/151856082_fbcadd09.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152139015.md?astroContentCollectionEntry=true':
      'chunks/152139015_2e22e973.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152242486.md?astroContentCollectionEntry=true':
      'chunks/152242486_608b13a5.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164564932.md?astroContentCollectionEntry=true':
      'chunks/164564932_8feb58e4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164601922.md?astroContentCollectionEntry=true':
      'chunks/164601922_6157c9d7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712813.md?astroContentCollectionEntry=true':
      'chunks/170712813_1c11be50.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712882.md?astroContentCollectionEntry=true':
      'chunks/170712882_1d349b50.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170716411.md?astroContentCollectionEntry=true':
      'chunks/170716411_b937e6fd.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/173958130.md?astroContentCollectionEntry=true':
      'chunks/173958130_d36a1e5b.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175577875.md?astroContentCollectionEntry=true':
      'chunks/175577875_a340dc17.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175926290.md?astroContentCollectionEntry=true':
      'chunks/175926290_00f3c95e.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176035092.md?astroContentCollectionEntry=true':
      'chunks/176035092_8dd447d2.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176243918.md?astroContentCollectionEntry=true':
      'chunks/176243918_8cd0e2e6.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183883395.md?astroContentCollectionEntry=true':
      'chunks/183883395_5e9d8cdd.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183916694.md?astroContentCollectionEntry=true':
      'chunks/183916694_a0f66b4c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/186172319.md?astroContentCollectionEntry=true':
      'chunks/186172319_143e8822.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/187431259.md?astroContentCollectionEntry=true':
      'chunks/187431259_f34d16ea.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/188732962.md?astroContentCollectionEntry=true':
      'chunks/188732962_89ffca37.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193430221.md?astroContentCollectionEntry=true':
      'chunks/193430221_bf529493.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193431338.md?astroContentCollectionEntry=true':
      'chunks/193431338_876abbd0.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193580658.md?astroContentCollectionEntry=true':
      'chunks/193580658_8ff6a389.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193615631.md?astroContentCollectionEntry=true':
      'chunks/193615631_6d9fdc54.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/200629134.md?astroContentCollectionEntry=true':
      'chunks/200629134_c1764309.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2019-in-media.md?astroContentCollectionEntry=true':
      'chunks/2019-in-media_384cd5ce.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2022-in-media.md?astroContentCollectionEntry=true':
      'chunks/2022-in-media_8c2368e2.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/207807923.md?astroContentCollectionEntry=true':
      'chunks/207807923_a8a431f7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/210271102.md?astroContentCollectionEntry=true':
      'chunks/210271102_4b9bb729.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/211267925.md?astroContentCollectionEntry=true':
      'chunks/211267925_5ed60823.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/212977273.md?astroContentCollectionEntry=true':
      'chunks/212977273_3a839097.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/219342574.md?astroContentCollectionEntry=true':
      'chunks/219342574_2e0bfa96.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/233159783.md?astroContentCollectionEntry=true':
      'chunks/233159783_4bb92571.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/239986466.md?astroContentCollectionEntry=true':
      'chunks/239986466_facea762.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/249382845.md?astroContentCollectionEntry=true':
      'chunks/249382845_19ea6efc.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/251027866.md?astroContentCollectionEntry=true':
      'chunks/251027866_369317d9.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/279869181.md?astroContentCollectionEntry=true':
      'chunks/279869181_74698251.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/296971514.md?astroContentCollectionEntry=true':
      'chunks/296971514_95aedc80.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/300794824.md?astroContentCollectionEntry=true':
      'chunks/300794824_fba62144.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/311978752.md?astroContentCollectionEntry=true':
      'chunks/311978752_d97fd85c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/331418114.md?astroContentCollectionEntry=true':
      'chunks/331418114_e06dcbc6.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/339029235.md?astroContentCollectionEntry=true':
      'chunks/339029235_e67b53d0.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/340858922.md?astroContentCollectionEntry=true':
      'chunks/340858922_5f4eac86.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/astro-rewrite.md?astroContentCollectionEntry=true':
      'chunks/astro-rewrite_35e478f7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/commute.md?astroContentCollectionEntry=true':
      'chunks/commute_bd692e56.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/dankpods-starter.md?astroContentCollectionEntry=true':
      'chunks/dankpods-starter_55192884.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/essential-apps.md?astroContentCollectionEntry=true':
      'chunks/essential-apps_d377af02.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/falsehoods-around-names.md?astroContentCollectionEntry=true':
      'chunks/falsehoods-around-names_1e7d88de.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/gft-0722.md?astroContentCollectionEntry=true':
      'chunks/gft-0722_7187a06e.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lastfm-to-mastodon.md?astroContentCollectionEntry=true':
      'chunks/lastfm-to-mastodon_e12a86c8.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lil-gator-game.md?astroContentCollectionEntry=true':
      'chunks/lil-gator-game_785cbd2c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-02-16.md?astroContentCollectionEntry=true':
      'chunks/links-for-2023-02-16_7cffd8eb.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-04-02.md?astroContentCollectionEntry=true':
      'chunks/links-for-2023-04-02_582224bc.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/mutuals-social.md?astroContentCollectionEntry=true':
      'chunks/mutuals-social_1b26b155.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/omglol-shortcuts.md?astroContentCollectionEntry=true':
      'chunks/omglol-shortcuts_9be73580.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/sf-jury-summon.md?astroContentCollectionEntry=true':
      'chunks/sf-jury-summon_172b5041.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/template.md?astroContentCollectionEntry=true':
      'chunks/template_bb237c70.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/toot-cards.md?astroContentCollectionEntry=true':
      'chunks/toot-cards_50582e23.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/uses.md?astroContentCollectionEntry=true':
      'chunks/uses_9f61c684.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/verify-commits.md?astroContentCollectionEntry=true':
      'chunks/verify-commits_3bdaa717.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/vr-sexism.md?astroContentCollectionEntry=true':
      'chunks/vr-sexism_65db8260.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/134400368.md?astroPropagatedAssets':
      'chunks/134400368_019f7b12.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/135019114.md?astroPropagatedAssets':
      'chunks/135019114_1f40e37e.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136222383.md?astroPropagatedAssets':
      'chunks/136222383_0a77db5a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224879.md?astroPropagatedAssets':
      'chunks/136224879_b728cb0b.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224935.md?astroPropagatedAssets':
      'chunks/136224935_734ead47.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136763858.md?astroPropagatedAssets':
      'chunks/136763858_fd340c4f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009001.md?astroPropagatedAssets':
      'chunks/137009001_a4fb6c76.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009091.md?astroPropagatedAssets':
      'chunks/137009091_effa8f1d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138288124.md?astroPropagatedAssets':
      'chunks/138288124_bd4f00b0.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138860938.md?astroPropagatedAssets':
      'chunks/138860938_dd8b8c1c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138917375.md?astroPropagatedAssets':
      'chunks/138917375_4bc0d34b.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113304.md?astroPropagatedAssets':
      'chunks/140113304_eead509f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113399.md?astroPropagatedAssets':
      'chunks/140113399_ec67afab.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113823.md?astroPropagatedAssets':
      'chunks/140113823_1b4e3f12.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140166273.md?astroPropagatedAssets':
      'chunks/140166273_1727167a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140179091.md?astroPropagatedAssets':
      'chunks/140179091_ef57751f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140733004.md?astroPropagatedAssets':
      'chunks/140733004_55032a18.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/141385956.md?astroPropagatedAssets':
      'chunks/141385956_f3400e57.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143872419.md?astroPropagatedAssets':
      'chunks/143872419_71bbf828.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143963126.md?astroPropagatedAssets':
      'chunks/143963126_53185560.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145124027.md?astroPropagatedAssets':
      'chunks/145124027_ab6537e1.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145785077.md?astroPropagatedAssets':
      'chunks/145785077_6c3a396c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/147888188.md?astroPropagatedAssets':
      'chunks/147888188_1e2adf55.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148032540.md?astroPropagatedAssets':
      'chunks/148032540_4dffab9d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553676.md?astroPropagatedAssets':
      'chunks/148553676_ef4cec02.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553739.md?astroPropagatedAssets':
      'chunks/148553739_c684e459.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148896468.md?astroPropagatedAssets':
      'chunks/148896468_85693d2b.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856049.md?astroPropagatedAssets':
      'chunks/151856049_0d623b73.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856082.md?astroPropagatedAssets':
      'chunks/151856082_d30b8153.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152139015.md?astroPropagatedAssets':
      'chunks/152139015_167a52a3.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152242486.md?astroPropagatedAssets':
      'chunks/152242486_48c82c4d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164564932.md?astroPropagatedAssets':
      'chunks/164564932_ad8ec32d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164601922.md?astroPropagatedAssets':
      'chunks/164601922_36786bab.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712813.md?astroPropagatedAssets':
      'chunks/170712813_7173797f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712882.md?astroPropagatedAssets':
      'chunks/170712882_d90477be.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170716411.md?astroPropagatedAssets':
      'chunks/170716411_837d4c31.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/173958130.md?astroPropagatedAssets':
      'chunks/173958130_ed89ed2b.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175577875.md?astroPropagatedAssets':
      'chunks/175577875_4da0a8fa.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175926290.md?astroPropagatedAssets':
      'chunks/175926290_5ff994dc.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176035092.md?astroPropagatedAssets':
      'chunks/176035092_b3510795.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176243918.md?astroPropagatedAssets':
      'chunks/176243918_7708c858.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183883395.md?astroPropagatedAssets':
      'chunks/183883395_0ad96299.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183916694.md?astroPropagatedAssets':
      'chunks/183916694_e72eb631.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/186172319.md?astroPropagatedAssets':
      'chunks/186172319_fdb10543.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/187431259.md?astroPropagatedAssets':
      'chunks/187431259_83604cb0.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/188732962.md?astroPropagatedAssets':
      'chunks/188732962_be51c65d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193430221.md?astroPropagatedAssets':
      'chunks/193430221_285438d5.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193431338.md?astroPropagatedAssets':
      'chunks/193431338_53d15594.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193580658.md?astroPropagatedAssets':
      'chunks/193580658_21ad7e2f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193615631.md?astroPropagatedAssets':
      'chunks/193615631_3c22d9b0.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/200629134.md?astroPropagatedAssets':
      'chunks/200629134_e51dcd56.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2019-in-media.md?astroPropagatedAssets':
      'chunks/2019-in-media_26057d45.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2022-in-media.md?astroPropagatedAssets':
      'chunks/2022-in-media_fc79181a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/207807923.md?astroPropagatedAssets':
      'chunks/207807923_588bcf45.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/210271102.md?astroPropagatedAssets':
      'chunks/210271102_c429d3f4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/211267925.md?astroPropagatedAssets':
      'chunks/211267925_f6af75a5.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/212977273.md?astroPropagatedAssets':
      'chunks/212977273_2a11d4d4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/219342574.md?astroPropagatedAssets':
      'chunks/219342574_ff9e53b5.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/233159783.md?astroPropagatedAssets':
      'chunks/233159783_b2018b97.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/239986466.md?astroPropagatedAssets':
      'chunks/239986466_0d51782d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/249382845.md?astroPropagatedAssets':
      'chunks/249382845_9f217403.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/251027866.md?astroPropagatedAssets':
      'chunks/251027866_76341607.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/279869181.md?astroPropagatedAssets':
      'chunks/279869181_fd26551d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/296971514.md?astroPropagatedAssets':
      'chunks/296971514_6ecfd4a8.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/300794824.md?astroPropagatedAssets':
      'chunks/300794824_5a4daee5.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/311978752.md?astroPropagatedAssets':
      'chunks/311978752_a6f78e2c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/331418114.md?astroPropagatedAssets':
      'chunks/331418114_c0b2de29.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/339029235.md?astroPropagatedAssets':
      'chunks/339029235_4b02d242.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/340858922.md?astroPropagatedAssets':
      'chunks/340858922_92221664.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/astro-rewrite.md?astroPropagatedAssets':
      'chunks/astro-rewrite_14f79e72.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/commute.md?astroPropagatedAssets':
      'chunks/commute_fa3acb32.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/dankpods-starter.md?astroPropagatedAssets':
      'chunks/dankpods-starter_da9c66fb.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/essential-apps.md?astroPropagatedAssets':
      'chunks/essential-apps_bf1853ea.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/falsehoods-around-names.md?astroPropagatedAssets':
      'chunks/falsehoods-around-names_9e63841b.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/gft-0722.md?astroPropagatedAssets':
      'chunks/gft-0722_22efdf63.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lastfm-to-mastodon.md?astroPropagatedAssets':
      'chunks/lastfm-to-mastodon_52a01e4a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lil-gator-game.md?astroPropagatedAssets':
      'chunks/lil-gator-game_c13128df.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-02-16.md?astroPropagatedAssets':
      'chunks/links-for-2023-02-16_283daef8.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-04-02.md?astroPropagatedAssets':
      'chunks/links-for-2023-04-02_e528d1fe.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/mutuals-social.md?astroPropagatedAssets':
      'chunks/mutuals-social_3807889a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/omglol-shortcuts.md?astroPropagatedAssets':
      'chunks/omglol-shortcuts_34593da1.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/sf-jury-summon.md?astroPropagatedAssets':
      'chunks/sf-jury-summon_0c7d5d67.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/template.md?astroPropagatedAssets':
      'chunks/template_5c5a2c5d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/toot-cards.md?astroPropagatedAssets':
      'chunks/toot-cards_86f6e328.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/uses.md?astroPropagatedAssets':
      'chunks/uses_5653c75f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/verify-commits.md?astroPropagatedAssets':
      'chunks/verify-commits_919c1117.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/vr-sexism.md?astroPropagatedAssets':
      'chunks/vr-sexism_e822a332.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/134400368.md':
      'chunks/134400368_449a9028.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/135019114.md':
      'chunks/135019114_f7286e72.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136222383.md':
      'chunks/136222383_016a0a13.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224879.md':
      'chunks/136224879_ec42923f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224935.md':
      'chunks/136224935_83004400.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136763858.md':
      'chunks/136763858_75bbcc0e.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009001.md':
      'chunks/137009001_82d4f790.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009091.md':
      'chunks/137009091_79b8bb40.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138288124.md':
      'chunks/138288124_2cdf0e98.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138860938.md':
      'chunks/138860938_4e032993.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138917375.md':
      'chunks/138917375_e1b58ea1.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113304.md':
      'chunks/140113304_327d52ee.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113399.md':
      'chunks/140113399_e6b4f81a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113823.md':
      'chunks/140113823_de60495c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140166273.md':
      'chunks/140166273_01ba68aa.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140179091.md':
      'chunks/140179091_6898047b.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140733004.md':
      'chunks/140733004_23f70cb7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/141385956.md':
      'chunks/141385956_1712d164.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143872419.md':
      'chunks/143872419_6a2daf0e.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143963126.md':
      'chunks/143963126_ba9d19cc.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145124027.md':
      'chunks/145124027_a6c5ed49.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145785077.md':
      'chunks/145785077_6ff6f16f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/147888188.md':
      'chunks/147888188_71032cf0.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148032540.md':
      'chunks/148032540_26cca845.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553676.md':
      'chunks/148553676_098c8cb8.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553739.md':
      'chunks/148553739_2220cffd.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148896468.md':
      'chunks/148896468_01b1a9a2.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856049.md':
      'chunks/151856049_71f702d9.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856082.md':
      'chunks/151856082_ad525b23.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152139015.md':
      'chunks/152139015_90cd2159.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152242486.md':
      'chunks/152242486_2ef6b3fe.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164564932.md':
      'chunks/164564932_15360d8f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164601922.md':
      'chunks/164601922_d8b56f76.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712813.md':
      'chunks/170712813_9cd6c540.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712882.md':
      'chunks/170712882_35ee9b6c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170716411.md':
      'chunks/170716411_15991c46.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/173958130.md':
      'chunks/173958130_b57f53da.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175577875.md':
      'chunks/175577875_097d9b2f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175926290.md':
      'chunks/175926290_b629519e.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176035092.md':
      'chunks/176035092_99c76f8a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176243918.md':
      'chunks/176243918_8ff58f4c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183883395.md':
      'chunks/183883395_cef96d46.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183916694.md':
      'chunks/183916694_84ffeaea.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/186172319.md':
      'chunks/186172319_17871698.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/187431259.md':
      'chunks/187431259_823e3ed0.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/188732962.md':
      'chunks/188732962_e310486c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193430221.md':
      'chunks/193430221_01943f63.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193431338.md':
      'chunks/193431338_ebaad279.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193580658.md':
      'chunks/193580658_cccb08d8.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193615631.md':
      'chunks/193615631_74b48618.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/200629134.md':
      'chunks/200629134_3aefca06.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2019-in-media.md':
      'chunks/2019-in-media_04eca2c7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2022-in-media.md':
      'chunks/2022-in-media_297c43e9.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/207807923.md':
      'chunks/207807923_34565678.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/210271102.md':
      'chunks/210271102_475e29f1.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/211267925.md':
      'chunks/211267925_ebff43ae.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/212977273.md':
      'chunks/212977273_45616383.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/219342574.md':
      'chunks/219342574_53625219.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/233159783.md':
      'chunks/233159783_8a8cf293.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/239986466.md':
      'chunks/239986466_613c565e.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/249382845.md':
      'chunks/249382845_29fe1e69.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/251027866.md':
      'chunks/251027866_87156fcc.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/279869181.md':
      'chunks/279869181_cf064002.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/296971514.md':
      'chunks/296971514_ef171521.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/300794824.md':
      'chunks/300794824_3cd55076.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/311978752.md':
      'chunks/311978752_9d81322c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/331418114.md':
      'chunks/331418114_1797bb53.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/339029235.md':
      'chunks/339029235_8664468d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/340858922.md':
      'chunks/340858922_b7e62587.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/astro-rewrite.md':
      'chunks/astro-rewrite_7d07a02d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/commute.md':
      'chunks/commute_e68f2ec5.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/dankpods-starter.md':
      'chunks/dankpods-starter_390587b3.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/essential-apps.md':
      'chunks/essential-apps_aac6c815.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/falsehoods-around-names.md':
      'chunks/falsehoods-around-names_b508caed.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/gft-0722.md':
      'chunks/gft-0722_3ca4a5e5.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lastfm-to-mastodon.md':
      'chunks/lastfm-to-mastodon_1bb7538a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lil-gator-game.md':
      'chunks/lil-gator-game_5dd43e8e.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-02-16.md':
      'chunks/links-for-2023-02-16_ff1f77a9.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-04-02.md':
      'chunks/links-for-2023-04-02_6bd96c10.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/mutuals-social.md':
      'chunks/mutuals-social_6811395c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/omglol-shortcuts.md':
      'chunks/omglol-shortcuts_58461a35.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/sf-jury-summon.md':
      'chunks/sf-jury-summon_ca7d589a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/template.md':
      'chunks/template_87379b7a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/toot-cards.md':
      'chunks/toot-cards_7d8c74fa.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/uses.md':
      'chunks/uses_07848499.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/verify-commits.md':
      'chunks/verify-commits_e25e32ff.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/vr-sexism.md':
      'chunks/vr-sexism_1985d4cb.mjs',
    'astro:scripts/before-hydration.js': '',
  },
  assets: [
    '/_astro/404.a2222609.css',
    '/_astro/_page_.7fd5476e.css',
    '/apple-touch-icon.png',
    '/cover.png',
    '/favicon.ico',
    '/mask-icon.svg',
    '/robots.txt',
    '/img/134400368.png',
    '/img/135019114.png',
    '/img/136224879.png',
    '/img/136224935.jpg',
    '/img/136763858.jpg',
    '/img/137009001.jpg',
    '/img/137009091.png',
    '/img/138288124.png',
    '/img/138860938.jpg',
    '/img/138917375.jpg',
    '/img/140113304.png',
    '/img/140113399.jpg',
    '/img/140113823.png',
    '/img/140166273.png',
    '/img/140179091.jpg',
    '/img/140733004.jpg',
    '/img/141385956.png',
    '/img/143872419.jpg',
    '/img/145124027.jpg',
    '/img/145785077.png',
    '/img/147888188.png',
    '/img/148032540.jpg',
    '/img/148553676.jpg',
    '/img/148553739.jpg',
    '/img/148896468.jpg',
    '/img/151856049.jpg',
    '/img/151856082.jpg',
    '/img/152139015.jpg',
    '/img/152242486.jpg',
    '/img/164564932.png',
    '/img/170712813.jpg',
    '/img/170712882.jpg',
    '/img/170716411.jpg',
    '/img/173958130.jpg',
    '/img/175577875.jpg',
    '/img/175926290.jpg',
    '/img/176035092.png',
    '/img/176243918.jpg',
    '/img/183883395.jpg',
    '/img/183916694.png',
    '/img/186172319.jpg',
    '/img/187431259.png',
    '/img/188732962.jpg',
    '/img/193430221.jpg',
    '/img/193431338.jpg',
    '/img/193580658.png',
    '/img/193615631.jpg',
    '/img/200629134.jpg',
    '/img/207807923.png',
    '/img/210271102.jpg',
    '/img/211267925.jpg',
    '/img/212977273.png',
    '/img/219342574.png',
    '/img/233159783.jpg',
    '/img/239986466.png',
    '/img/249382845.jpg',
    '/img/251027866.jpg',
    '/img/279869181.png',
    '/img/296971514.jpg',
    '/img/300794824.png',
    '/img/311978752.jpg',
    '/img/331418114.jpg',
    '/img/339029235.png',
    '/img/340858922.png',
    '/img/astro-rewrite.png',
    '/img/commute.jpg',
    '/img/dankpods-starter.jpg',
    '/img/essential-apps.jpg',
    '/img/gft-0722.png',
    '/img/lastfm-to-mastodon.png',
    '/img/lilgatorgame.png',
    '/img/omglol-shortcuts.jpg',
    '/img/sfjuryduty.jpg',
    '/img/toot-cards.png',
    '/img/uses.jpg',
    '/img/vr-sexism.jpg',
    '/t/index.html',
    '/t/ableist/index.html',
    '/t/amazon/index.html',
    '/t/android/index.html',
    '/t/animalcrossing/index.html',
    '/t/app/index.html',
    '/t/apps/index.html',
    '/t/cli/index.html',
    '/t/astro/index.html',
    '/t/article/index.html',
    '/t/code/index.html',
    '/t/criticism/index.html',
    '/t/dankpods/index.html',
    '/t/discrimination/index.html',
    '/t/environment/index.html',
    '/t/extension/index.html',
    '/t/facebook/index.html',
    '/t/fatphobic/index.html',
    '/t/games/index.html',
    '/t/gifs/index.html',
    '/t/girlfriend-technology/index.html',
    '/t/git/index.html',
    '/t/google/index.html',
    '/t/green/index.html',
    '/t/guns/index.html',
    '/t/hack/index.html',
    '/t/hardware/index.html',
    '/t/headphones/index.html',
    '/t/how-to/index.html',
    '/t/interviews/index.html',
    '/t/introduction/index.html',
    '/t/ios/index.html',
    '/t/javascript/index.html',
    '/t/js/index.html',
    '/t/lastfm/index.html',
    '/t/link/index.html',
    '/t/link-list/index.html',
    '/t/live2d/index.html',
    '/t/macos/index.html',
    '/t/manga/index.html',
    '/t/mastodon/index.html',
    '/t/me/index.html',
    '/t/media/index.html',
    '/t/miku/index.html',
    '/t/music/index.html',
    '/t/names/index.html',
    '/t/nintendo/index.html',
    '/t/neopets/index.html',
    '/t/omglol/index.html',
    '/t/panic/index.html',
    '/t/patreon/index.html',
    '/t/pc/index.html',
    '/t/post/index.html',
    '/t/queer/index.html',
    '/t/queerphobic/index.html',
    '/t/race/index.html',
    '/t/react/index.html',
    '/t/review/index.html',
    '/t/safari/index.html',
    '/t/sanfrancisco/index.html',
    '/t/scriptable/index.html',
    '/t/security/index.html',
    '/t/sexism/index.html',
    '/t/shortcuts/index.html',
    '/t/spacetwinks/index.html',
    '/t/steam/index.html',
    '/t/switch/index.html',
    '/t/tech/index.html',
    '/t/tiktok/index.html',
    '/t/trans/index.html',
    '/t/translations/index.html',
    '/t/tv/index.html',
    '/t/twine/index.html',
    '/t/unions/index.html',
    '/t/uses/index.html',
    '/t/video/index.html',
    '/t/virtual/index.html',
    '/t/vr/index.html',
    '/t/vscode/index.html',
    '/t/wages/index.html',
    '/t/webcomic/index.html',
    '/t/women/index.html',
    '/t/windows/index.html',
    '/t/ableist/1/index.html',
    '/t/amazon/1/index.html',
    '/t/android/1/index.html',
    '/t/animalcrossing/1/index.html',
    '/t/app/1/index.html',
    '/t/apps/1/index.html',
    '/t/cli/1/index.html',
    '/t/astro/1/index.html',
    '/t/article/1/index.html',
    '/t/article/2/index.html',
    '/t/code/1/index.html',
    '/t/criticism/1/index.html',
    '/t/discrimination/1/index.html',
    '/t/environment/1/index.html',
    '/t/dankpods/1/index.html',
    '/t/extension/1/index.html',
    '/t/facebook/1/index.html',
    '/t/fatphobic/1/index.html',
    '/t/games/1/index.html',
    '/t/gifs/1/index.html',
    '/t/girlfriend-technology/1/index.html',
    '/t/git/1/index.html',
    '/t/green/1/index.html',
    '/t/google/1/index.html',
    '/t/guns/1/index.html',
    '/t/hardware/1/index.html',
    '/t/hack/1/index.html',
    '/t/headphones/1/index.html',
    '/t/how-to/1/index.html',
    '/t/interviews/1/index.html',
    '/t/introduction/1/index.html',
    '/t/javascript/1/index.html',
    '/t/ios/1/index.html',
    '/t/js/1/index.html',
    '/t/lastfm/1/index.html',
    '/t/link/1/index.html',
    '/t/link/2/index.html',
    '/t/link-list/1/index.html',
    '/t/live2d/1/index.html',
    '/t/macos/1/index.html',
    '/t/mastodon/1/index.html',
    '/t/manga/1/index.html',
    '/t/me/1/index.html',
    '/t/media/1/index.html',
    '/t/miku/1/index.html',
    '/t/music/1/index.html',
    '/t/nintendo/1/index.html',
    '/t/names/1/index.html',
    '/t/omglol/1/index.html',
    '/t/neopets/1/index.html',
    '/t/panic/1/index.html',
    '/t/patreon/1/index.html',
    '/t/pc/1/index.html',
    '/t/post/1/index.html',
    '/t/queerphobic/1/index.html',
    '/t/race/1/index.html',
    '/t/queer/1/index.html',
    '/t/review/1/index.html',
    '/t/react/1/index.html',
    '/t/safari/1/index.html',
    '/t/sanfrancisco/1/index.html',
    '/t/scriptable/1/index.html',
    '/t/security/1/index.html',
    '/t/sexism/1/index.html',
    '/t/shortcuts/1/index.html',
    '/t/spacetwinks/1/index.html',
    '/t/tech/1/index.html',
    '/t/switch/1/index.html',
    '/t/steam/1/index.html',
    '/t/tiktok/1/index.html',
    '/t/trans/1/index.html',
    '/t/translations/1/index.html',
    '/t/tv/1/index.html',
    '/t/unions/1/index.html',
    '/t/uses/1/index.html',
    '/t/twine/1/index.html',
    '/t/video/1/index.html',
    '/t/virtual/1/index.html',
    '/t/vr/1/index.html',
    '/t/vscode/1/index.html',
    '/t/wages/1/index.html',
    '/t/webcomic/1/index.html',
    '/t/women/1/index.html',
    '/t/windows/1/index.html',
    '/index.html',
    '/.well-known/webfinger.json',
    '/feed.json',
    '/rss.xml',
    '/404.html',
    '/d/index.html',
    '/t/index.html',
  ],
})

export { manifest }
