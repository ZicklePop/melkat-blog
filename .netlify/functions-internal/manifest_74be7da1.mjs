import 'cookie'
import 'kleur/colors'
import 'string-width'
import '@astrojs/internal-helpers/path'
import './chunks/astro_ffb476f0.mjs'
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
      scripts: [{ type: 'external', value: '/_astro/hoisted.3fc75ea0.js' }],
      styles: [
        { type: 'external', src: '/_astro/404.24192ae2.css' },
        { type: 'external', src: '/_astro/_page_.2c04177c.css' },
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
      '/Users/melanie/Developer/melkat-blog/src/components/header.astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/layouts/base-layout.astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/layouts/post-layout.astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/[page].astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '\u0000@astro-page:src/pages/[page]@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '\u0000@astrojs-ssr-virtual-entry',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/d/[domain]/[page].astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '\u0000@astro-page:src/pages/d/[domain]/[page]@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/d/[domain]/index.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '\u0000@astro-page:src/pages/d/[domain]/index@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/index.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '\u0000@astro-page:src/pages/index@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/p/[...slug].astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '\u0000@astro-page:src/pages/p/[...slug]@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/q/index.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '\u0000@astro-page:src/pages/q/index@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/t/[tag]/[page].astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '\u0000@astro-page:src/pages/t/[tag]/[page]@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/t/[tag]/index.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '\u0000@astro-page:src/pages/t/[tag]/index@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/404.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '\u0000@astro-page:src/pages/404@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/d/index.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '\u0000@astro-page:src/pages/d/index@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/t/index.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '\u0000@astro-page:src/pages/t/index@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    ['\u0000astro:content', { propagation: 'in-tree', containsHead: false }],
    [
      '/Users/melanie/Developer/melkat-blog/src/pages/feed.json.ts',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      '\u0000@astro-page:src/pages/feed.json@_@ts',
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
    '\u0000@astrojs-manifest': 'manifest_74be7da1.mjs',
    '\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js':
      'chunks/image-endpoint_5524bd26.mjs',
    '\u0000@astro-page:src/pages/index@_@astro': 'chunks/index_7f8acd59.mjs',
    '\u0000@astro-page:src/pages/.well-known/webfinger.json@_@ts':
      'chunks/webfinger_8eddd8f0.mjs',
    '\u0000@astro-page:src/pages/feed.json@_@ts': 'chunks/feed_fbe07e65.mjs',
    '\u0000@astro-page:src/pages/rss.xml@_@ts': 'chunks/rss_b3ef1736.mjs',
    '\u0000@astro-page:src/pages/404@_@astro': 'chunks/404_bd79f860.mjs',
    '\u0000@astro-page:src/pages/d/index@_@astro': 'chunks/index_c6e311f1.mjs',
    '\u0000@astro-page:src/pages/d/[domain]/index@_@astro':
      'chunks/index_611e5712.mjs',
    '\u0000@astro-page:src/pages/d/[domain]/[page]@_@astro':
      'chunks/_page__484b4011.mjs',
    '\u0000@astro-page:src/pages/p/[...slug]@_@astro':
      'chunks/_.._ca187c9d.mjs',
    '\u0000@astro-page:src/pages/q/index@_@astro': 'chunks/index_31b87127.mjs',
    '\u0000@astro-page:src/pages/t/index@_@astro': 'chunks/index_6ee017b1.mjs',
    '\u0000@astro-page:src/pages/t/[tag]/index@_@astro':
      'chunks/index_f3d4d034.mjs',
    '\u0000@astro-page:src/pages/t/[tag]/[page]@_@astro':
      'chunks/_page__27d6ca8d.mjs',
    '\u0000@astro-page:src/pages/[page]@_@astro': 'chunks/_page__9bf0b83d.mjs',
    '/Users/melanie/Developer/melkat-blog/node_modules/astro/dist/assets/services/sharp.js':
      'chunks/sharp_c1afe4f3.mjs',
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
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-09-02.md?astroContentCollectionEntry=true':
      'chunks/links-for-2023-09-02_b437e441.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/mutuals-social.md?astroContentCollectionEntry=true':
      'chunks/mutuals-social_1b26b155.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/notes-for-partner.md?astroContentCollectionEntry=true':
      'chunks/notes-for-partner_3b5151fb.mjs',
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
      'chunks/134400368_9f21490f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/135019114.md?astroPropagatedAssets':
      'chunks/135019114_7ac33bb7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136222383.md?astroPropagatedAssets':
      'chunks/136222383_ea46923f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224879.md?astroPropagatedAssets':
      'chunks/136224879_fe0ae0dd.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224935.md?astroPropagatedAssets':
      'chunks/136224935_975c83ff.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136763858.md?astroPropagatedAssets':
      'chunks/136763858_57cb0ce1.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009001.md?astroPropagatedAssets':
      'chunks/137009001_16747a3f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009091.md?astroPropagatedAssets':
      'chunks/137009091_3993dcd4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138288124.md?astroPropagatedAssets':
      'chunks/138288124_4d86f224.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138860938.md?astroPropagatedAssets':
      'chunks/138860938_90aee0ba.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138917375.md?astroPropagatedAssets':
      'chunks/138917375_6491b6e7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113304.md?astroPropagatedAssets':
      'chunks/140113304_c6b336f4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113399.md?astroPropagatedAssets':
      'chunks/140113399_7352ca40.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113823.md?astroPropagatedAssets':
      'chunks/140113823_89f26f8f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140166273.md?astroPropagatedAssets':
      'chunks/140166273_e2afbcbd.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140179091.md?astroPropagatedAssets':
      'chunks/140179091_1993a69a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140733004.md?astroPropagatedAssets':
      'chunks/140733004_b146b154.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/141385956.md?astroPropagatedAssets':
      'chunks/141385956_9b423fa9.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143872419.md?astroPropagatedAssets':
      'chunks/143872419_497cff0b.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143963126.md?astroPropagatedAssets':
      'chunks/143963126_f37600a6.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145124027.md?astroPropagatedAssets':
      'chunks/145124027_f35fedbe.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145785077.md?astroPropagatedAssets':
      'chunks/145785077_8417d8c8.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/147888188.md?astroPropagatedAssets':
      'chunks/147888188_d22ca4d6.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148032540.md?astroPropagatedAssets':
      'chunks/148032540_0b46021f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553676.md?astroPropagatedAssets':
      'chunks/148553676_29c5805d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553739.md?astroPropagatedAssets':
      'chunks/148553739_48756163.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148896468.md?astroPropagatedAssets':
      'chunks/148896468_94f43c07.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856049.md?astroPropagatedAssets':
      'chunks/151856049_31324ebf.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856082.md?astroPropagatedAssets':
      'chunks/151856082_ea6f4d75.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152139015.md?astroPropagatedAssets':
      'chunks/152139015_66a1256f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152242486.md?astroPropagatedAssets':
      'chunks/152242486_8611314e.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164564932.md?astroPropagatedAssets':
      'chunks/164564932_500653d1.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164601922.md?astroPropagatedAssets':
      'chunks/164601922_e3f7aaad.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712813.md?astroPropagatedAssets':
      'chunks/170712813_8a5f9f7d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712882.md?astroPropagatedAssets':
      'chunks/170712882_73a0604f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170716411.md?astroPropagatedAssets':
      'chunks/170716411_6be6c41c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/173958130.md?astroPropagatedAssets':
      'chunks/173958130_e3c51ded.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175577875.md?astroPropagatedAssets':
      'chunks/175577875_4b96c666.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175926290.md?astroPropagatedAssets':
      'chunks/175926290_53bc4b8f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176035092.md?astroPropagatedAssets':
      'chunks/176035092_3a48a0df.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176243918.md?astroPropagatedAssets':
      'chunks/176243918_a42bcfd4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183883395.md?astroPropagatedAssets':
      'chunks/183883395_cfa792da.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183916694.md?astroPropagatedAssets':
      'chunks/183916694_55d7f9de.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/186172319.md?astroPropagatedAssets':
      'chunks/186172319_72f5d7c5.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/187431259.md?astroPropagatedAssets':
      'chunks/187431259_f1a01d0d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/188732962.md?astroPropagatedAssets':
      'chunks/188732962_48f2151c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193430221.md?astroPropagatedAssets':
      'chunks/193430221_1ff37121.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193431338.md?astroPropagatedAssets':
      'chunks/193431338_e400f118.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193580658.md?astroPropagatedAssets':
      'chunks/193580658_1cfecfd8.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193615631.md?astroPropagatedAssets':
      'chunks/193615631_5918d95c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/200629134.md?astroPropagatedAssets':
      'chunks/200629134_3de28cfb.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2019-in-media.md?astroPropagatedAssets':
      'chunks/2019-in-media_2328d2e7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2022-in-media.md?astroPropagatedAssets':
      'chunks/2022-in-media_0aea3c8a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/207807923.md?astroPropagatedAssets':
      'chunks/207807923_2c2bc8d7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/210271102.md?astroPropagatedAssets':
      'chunks/210271102_a0d51cc6.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/211267925.md?astroPropagatedAssets':
      'chunks/211267925_7007a354.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/212977273.md?astroPropagatedAssets':
      'chunks/212977273_28eaeb70.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/219342574.md?astroPropagatedAssets':
      'chunks/219342574_7e000c89.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/233159783.md?astroPropagatedAssets':
      'chunks/233159783_43cf0368.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/239986466.md?astroPropagatedAssets':
      'chunks/239986466_8f02b9a9.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/249382845.md?astroPropagatedAssets':
      'chunks/249382845_38fb7245.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/251027866.md?astroPropagatedAssets':
      'chunks/251027866_6e3ab359.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/279869181.md?astroPropagatedAssets':
      'chunks/279869181_60fe50bb.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/296971514.md?astroPropagatedAssets':
      'chunks/296971514_84e10ef9.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/300794824.md?astroPropagatedAssets':
      'chunks/300794824_d8b94dfa.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/311978752.md?astroPropagatedAssets':
      'chunks/311978752_92301213.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/331418114.md?astroPropagatedAssets':
      'chunks/331418114_64222cbb.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/339029235.md?astroPropagatedAssets':
      'chunks/339029235_ba59a92d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/340858922.md?astroPropagatedAssets':
      'chunks/340858922_2b4b9521.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/astro-rewrite.md?astroPropagatedAssets':
      'chunks/astro-rewrite_8ad1572b.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/commute.md?astroPropagatedAssets':
      'chunks/commute_5ec7cefa.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/dankpods-starter.md?astroPropagatedAssets':
      'chunks/dankpods-starter_a3ceb142.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/essential-apps.md?astroPropagatedAssets':
      'chunks/essential-apps_a26d7968.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/falsehoods-around-names.md?astroPropagatedAssets':
      'chunks/falsehoods-around-names_a638a345.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/gft-0722.md?astroPropagatedAssets':
      'chunks/gft-0722_d04e0a0b.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lastfm-to-mastodon.md?astroPropagatedAssets':
      'chunks/lastfm-to-mastodon_0827b45f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lil-gator-game.md?astroPropagatedAssets':
      'chunks/lil-gator-game_dccc91e7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-02-16.md?astroPropagatedAssets':
      'chunks/links-for-2023-02-16_e1184b10.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-04-02.md?astroPropagatedAssets':
      'chunks/links-for-2023-04-02_5105448f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-09-02.md?astroPropagatedAssets':
      'chunks/links-for-2023-09-02_faae3f33.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/mutuals-social.md?astroPropagatedAssets':
      'chunks/mutuals-social_27c8368d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/notes-for-partner.md?astroPropagatedAssets':
      'chunks/notes-for-partner_775697da.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/omglol-shortcuts.md?astroPropagatedAssets':
      'chunks/omglol-shortcuts_9bf043ed.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/sf-jury-summon.md?astroPropagatedAssets':
      'chunks/sf-jury-summon_ad27a838.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/template.md?astroPropagatedAssets':
      'chunks/template_0c7d6143.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/toot-cards.md?astroPropagatedAssets':
      'chunks/toot-cards_9da01d4c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/uses.md?astroPropagatedAssets':
      'chunks/uses_0f9f7828.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/verify-commits.md?astroPropagatedAssets':
      'chunks/verify-commits_c587ccc4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/vr-sexism.md?astroPropagatedAssets':
      'chunks/vr-sexism_1e33b6a1.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/134400368.md':
      'chunks/134400368_653794d3.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/135019114.md':
      'chunks/135019114_7a86c6d0.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136222383.md':
      'chunks/136222383_5d22ea38.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224879.md':
      'chunks/136224879_77766089.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224935.md':
      'chunks/136224935_8b466038.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136763858.md':
      'chunks/136763858_7aba0a0d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009001.md':
      'chunks/137009001_dcc0aa03.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009091.md':
      'chunks/137009091_44ad6d55.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138288124.md':
      'chunks/138288124_567364a6.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138860938.md':
      'chunks/138860938_f2069750.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138917375.md':
      'chunks/138917375_092efc3f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113304.md':
      'chunks/140113304_6215a6b1.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113399.md':
      'chunks/140113399_69cbe47a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113823.md':
      'chunks/140113823_8bb2b119.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140166273.md':
      'chunks/140166273_cbcf802b.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140179091.md':
      'chunks/140179091_829b3136.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140733004.md':
      'chunks/140733004_dfa129cd.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/141385956.md':
      'chunks/141385956_9f086f77.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143872419.md':
      'chunks/143872419_d6e6c0dc.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143963126.md':
      'chunks/143963126_e35105c3.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145124027.md':
      'chunks/145124027_091c4875.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145785077.md':
      'chunks/145785077_9284316c.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/147888188.md':
      'chunks/147888188_b5b837eb.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148032540.md':
      'chunks/148032540_d227c6b7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553676.md':
      'chunks/148553676_6a0dc06e.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553739.md':
      'chunks/148553739_35bf9d66.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148896468.md':
      'chunks/148896468_a02996c5.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856049.md':
      'chunks/151856049_066927ee.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856082.md':
      'chunks/151856082_a7bf4764.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152139015.md':
      'chunks/152139015_b10b81fc.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152242486.md':
      'chunks/152242486_722f5914.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164564932.md':
      'chunks/164564932_e31c5d8a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164601922.md':
      'chunks/164601922_57cd53b5.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712813.md':
      'chunks/170712813_31d925dd.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712882.md':
      'chunks/170712882_b0405b2a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170716411.md':
      'chunks/170716411_cae92556.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/173958130.md':
      'chunks/173958130_6640f5c1.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175577875.md':
      'chunks/175577875_a53755da.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175926290.md':
      'chunks/175926290_9094648d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176035092.md':
      'chunks/176035092_1e004721.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176243918.md':
      'chunks/176243918_8740cb7d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183883395.md':
      'chunks/183883395_9553a69f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183916694.md':
      'chunks/183916694_a8b546bb.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/186172319.md':
      'chunks/186172319_40346033.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/187431259.md':
      'chunks/187431259_3e778952.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/188732962.md':
      'chunks/188732962_fa986e89.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193430221.md':
      'chunks/193430221_28e154be.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193431338.md':
      'chunks/193431338_37c5d38a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193580658.md':
      'chunks/193580658_f690eaf3.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193615631.md':
      'chunks/193615631_5df4583e.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/200629134.md':
      'chunks/200629134_13815033.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2019-in-media.md':
      'chunks/2019-in-media_014e5066.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2022-in-media.md':
      'chunks/2022-in-media_60fcf0e7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/207807923.md':
      'chunks/207807923_d48b4ba3.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/210271102.md':
      'chunks/210271102_540962a6.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/211267925.md':
      'chunks/211267925_8421b64b.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/212977273.md':
      'chunks/212977273_304fdb32.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/219342574.md':
      'chunks/219342574_946c1335.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/233159783.md':
      'chunks/233159783_2d4bba0d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/239986466.md':
      'chunks/239986466_2ede50fa.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/249382845.md':
      'chunks/249382845_bd401ca4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/251027866.md':
      'chunks/251027866_c15bc1b6.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/279869181.md':
      'chunks/279869181_ab5a8792.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/296971514.md':
      'chunks/296971514_1e863aaf.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/300794824.md':
      'chunks/300794824_aa722c0d.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/311978752.md':
      'chunks/311978752_85c080c9.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/331418114.md':
      'chunks/331418114_7ada4843.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/339029235.md':
      'chunks/339029235_d134eb2f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/340858922.md':
      'chunks/340858922_a01900d4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/astro-rewrite.md':
      'chunks/astro-rewrite_219370a2.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/commute.md':
      'chunks/commute_37802251.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/dankpods-starter.md':
      'chunks/dankpods-starter_d3bf6ba6.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/essential-apps.md':
      'chunks/essential-apps_97562255.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/falsehoods-around-names.md':
      'chunks/falsehoods-around-names_5af2c48f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/gft-0722.md':
      'chunks/gft-0722_45785c01.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lastfm-to-mastodon.md':
      'chunks/lastfm-to-mastodon_8378f565.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lil-gator-game.md':
      'chunks/lil-gator-game_615a7cea.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-02-16.md':
      'chunks/links-for-2023-02-16_869292a5.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-04-02.md':
      'chunks/links-for-2023-04-02_f647c696.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-09-02.md':
      'chunks/links-for-2023-09-02_76d55ba7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/mutuals-social.md':
      'chunks/mutuals-social_be887357.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/notes-for-partner.md':
      'chunks/notes-for-partner_148f3802.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/omglol-shortcuts.md':
      'chunks/omglol-shortcuts_2f83dfaf.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/sf-jury-summon.md':
      'chunks/sf-jury-summon_9150accb.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/template.md':
      'chunks/template_8e693671.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/toot-cards.md':
      'chunks/toot-cards_515584df.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/uses.md':
      'chunks/uses_bb565c09.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/verify-commits.md':
      'chunks/verify-commits_40335b0a.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/vr-sexism.md':
      'chunks/vr-sexism_8762706b.mjs',
    '/astro/hoisted.js?q=0': '_astro/hoisted.3fc75ea0.js',
    'astro:scripts/before-hydration.js': '',
  },
  assets: [
    '/_astro/404.24192ae2.css',
    '/_astro/_page_.2c04177c.css',
    '/apple-touch-icon.png',
    '/cover.png',
    '/favicon.ico',
    '/mask-icon.svg',
    '/robots.txt',
    '/_astro/hoisted.3fc75ea0.js',
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
    '/img/notes-for-partner.png',
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
    '/t/astro/index.html',
    '/t/article/index.html',
    '/t/cli/index.html',
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
    '/t/link/index.html',
    '/t/lastfm/index.html',
    '/t/link-list/index.html',
    '/t/live2d/index.html',
    '/t/macos/index.html',
    '/t/mastodon/index.html',
    '/t/me/index.html',
    '/t/manga/index.html',
    '/t/media/index.html',
    '/t/miku/index.html',
    '/t/music/index.html',
    '/t/names/index.html',
    '/t/neopets/index.html',
    '/t/nintendo/index.html',
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
    '/t/windows/index.html',
    '/t/women/index.html',
    '/t/ableist/1/index.html',
    '/t/amazon/1/index.html',
    '/t/android/1/index.html',
    '/t/animalcrossing/1/index.html',
    '/t/app/1/index.html',
    '/t/apps/1/index.html',
    '/t/astro/1/index.html',
    '/t/article/1/index.html',
    '/t/article/2/index.html',
    '/t/cli/1/index.html',
    '/t/code/1/index.html',
    '/t/criticism/1/index.html',
    '/t/dankpods/1/index.html',
    '/t/discrimination/1/index.html',
    '/t/environment/1/index.html',
    '/t/extension/1/index.html',
    '/t/facebook/1/index.html',
    '/t/fatphobic/1/index.html',
    '/t/games/1/index.html',
    '/t/gifs/1/index.html',
    '/t/girlfriend-technology/1/index.html',
    '/t/git/1/index.html',
    '/t/google/1/index.html',
    '/t/green/1/index.html',
    '/t/guns/1/index.html',
    '/t/hack/1/index.html',
    '/t/hardware/1/index.html',
    '/t/headphones/1/index.html',
    '/t/how-to/1/index.html',
    '/t/interviews/1/index.html',
    '/t/introduction/1/index.html',
    '/t/ios/1/index.html',
    '/t/javascript/1/index.html',
    '/t/js/1/index.html',
    '/t/link/1/index.html',
    '/t/link/2/index.html',
    '/t/lastfm/1/index.html',
    '/t/link-list/1/index.html',
    '/t/macos/1/index.html',
    '/t/live2d/1/index.html',
    '/t/mastodon/1/index.html',
    '/t/me/1/index.html',
    '/t/manga/1/index.html',
    '/t/media/1/index.html',
    '/t/music/1/index.html',
    '/t/miku/1/index.html',
    '/t/names/1/index.html',
    '/t/neopets/1/index.html',
    '/t/omglol/1/index.html',
    '/t/nintendo/1/index.html',
    '/t/panic/1/index.html',
    '/t/patreon/1/index.html',
    '/t/post/1/index.html',
    '/t/pc/1/index.html',
    '/t/queer/1/index.html',
    '/t/queerphobic/1/index.html',
    '/t/race/1/index.html',
    '/t/review/1/index.html',
    '/t/safari/1/index.html',
    '/t/react/1/index.html',
    '/t/sanfrancisco/1/index.html',
    '/t/security/1/index.html',
    '/t/scriptable/1/index.html',
    '/t/sexism/1/index.html',
    '/t/shortcuts/1/index.html',
    '/t/spacetwinks/1/index.html',
    '/t/steam/1/index.html',
    '/t/switch/1/index.html',
    '/t/tech/1/index.html',
    '/t/translations/1/index.html',
    '/t/tiktok/1/index.html',
    '/t/trans/1/index.html',
    '/t/tv/1/index.html',
    '/t/uses/1/index.html',
    '/t/twine/1/index.html',
    '/t/unions/1/index.html',
    '/t/video/1/index.html',
    '/t/virtual/1/index.html',
    '/t/vscode/1/index.html',
    '/t/vr/1/index.html',
    '/t/wages/1/index.html',
    '/t/webcomic/1/index.html',
    '/t/windows/1/index.html',
    '/t/women/1/index.html',
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
