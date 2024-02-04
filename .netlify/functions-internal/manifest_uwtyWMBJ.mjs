import '@astrojs/internal-helpers/path'
import 'cookie'
import 'kleur/colors'
import 'string-width'
import './chunks/astro_5SK3W5mn.mjs'
import 'clsx'
import { compile } from 'path-to-regexp'

if (typeof process !== 'undefined') {
  let proc = process
  if ('argv' in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes('--verbose'));
    else if (proc.argv.includes('--silent'));
    else;
  }
}

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
    fallbackRoutes: rawRouteData.fallbackRoutes.map(fallback => {
      return deserializeRouteData(fallback)
    }),
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
        fallbackRoutes: [],
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
        fallbackRoutes: [],
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
        fallbackRoutes: [],
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
        fallbackRoutes: [],
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
        fallbackRoutes: [],
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
        fallbackRoutes: [],
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
        fallbackRoutes: [],
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
        component: 'node_modules/astro/dist/assets/endpoint/generic.js',
        pathname: '/_image',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'ignore' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.rfglzoOR.js' }],
      styles: [
        { type: 'external', src: '/_astro/_page_.CU7hC1jb.css' },
        { type: 'external', src: '/_astro/_page_.gKACxwvl.css' },
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
        fallbackRoutes: [],
        _meta: { trailingSlash: 'ignore' },
      },
    },
  ],
  site: 'https://melkat.blog',
  base: '/',
  trailingSlash: 'ignore',
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
      '(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();',
    ],
  ],
  entryModules: {
    '\u0000@astrojs-ssr-virtual-entry': 'entry.mjs',
    '\u0000@astro-renderers': 'renderers.mjs',
    '\u0000empty-middleware': '_empty-middleware.mjs',
    '\u0000@astrojs-manifest': 'manifest_uwtyWMBJ.mjs',
    '\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js':
      'chunks/generic_msjyxgVU.mjs',
    '\u0000@astro-page:src/pages/index@_@astro': 'chunks/index_Wh1vsXHL.mjs',
    '\u0000@astro-page:src/pages/.well-known/webfinger.json@_@ts':
      'chunks/webfinger_PQI8qdwQ.mjs',
    '\u0000@astro-page:src/pages/feed.json@_@ts': 'chunks/feed_lakNkgYb.mjs',
    '\u0000@astro-page:src/pages/rss.xml@_@ts': 'chunks/rss_QrOktz4B.mjs',
    '\u0000@astro-page:src/pages/404@_@astro': 'chunks/404_sjmHoA7m.mjs',
    '\u0000@astro-page:src/pages/d/index@_@astro': 'chunks/index_clT3aokR.mjs',
    '\u0000@astro-page:src/pages/d/[domain]/index@_@astro':
      'chunks/index_XL7DR2lv.mjs',
    '\u0000@astro-page:src/pages/d/[domain]/[page]@_@astro':
      'chunks/_page__tIxg7RVz.mjs',
    '\u0000@astro-page:src/pages/p/[...slug]@_@astro':
      'chunks/_.._mPV-c-_Z.mjs',
    '\u0000@astro-page:src/pages/q/index@_@astro': 'chunks/index_ULAImwf8.mjs',
    '\u0000@astro-page:src/pages/t/index@_@astro': 'chunks/index_tZCBRXMO.mjs',
    '\u0000@astro-page:src/pages/t/[tag]/index@_@astro':
      'chunks/index_eGvXzp-d.mjs',
    '\u0000@astro-page:src/pages/t/[tag]/[page]@_@astro':
      'chunks/_page__cLA6uE0V.mjs',
    '\u0000@astro-page:src/pages/[page]@_@astro': 'chunks/_page__jm70kAN9.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/134400368.md?astroContentCollectionEntry=true':
      'chunks/134400368_AAe4zyLz.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/135019114.md?astroContentCollectionEntry=true':
      'chunks/135019114_L5dOZK8o.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136222383.md?astroContentCollectionEntry=true':
      'chunks/136222383_-9iNfmyk.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224879.md?astroContentCollectionEntry=true':
      'chunks/136224879_rJ0EBPXE.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224935.md?astroContentCollectionEntry=true':
      'chunks/136224935_0V-RJJNV.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136763858.md?astroContentCollectionEntry=true':
      'chunks/136763858_aQA9BSnu.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009001.md?astroContentCollectionEntry=true':
      'chunks/137009001_O8TQZ0Ql.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009091.md?astroContentCollectionEntry=true':
      'chunks/137009091_Vnbo7Wn_.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138288124.md?astroContentCollectionEntry=true':
      'chunks/138288124_0fP0riiX.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138860938.md?astroContentCollectionEntry=true':
      'chunks/138860938_V5BddhwF.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138917375.md?astroContentCollectionEntry=true':
      'chunks/138917375_76ek-5Aw.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113304.md?astroContentCollectionEntry=true':
      'chunks/140113304_PZo9Zqy_.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113399.md?astroContentCollectionEntry=true':
      'chunks/140113399_HZWio-HJ.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113823.md?astroContentCollectionEntry=true':
      'chunks/140113823_kcRdmm8h.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140166273.md?astroContentCollectionEntry=true':
      'chunks/140166273_OpSYfFvp.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140179091.md?astroContentCollectionEntry=true':
      'chunks/140179091_SrNeQEs4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140733004.md?astroContentCollectionEntry=true':
      'chunks/140733004_7dOgO2eo.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/141385956.md?astroContentCollectionEntry=true':
      'chunks/141385956_zRjf7dmr.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143872419.md?astroContentCollectionEntry=true':
      'chunks/143872419_67aMYaiQ.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143963126.md?astroContentCollectionEntry=true':
      'chunks/143963126_QrjsoJIE.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145124027.md?astroContentCollectionEntry=true':
      'chunks/145124027_oOWPr2rv.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145785077.md?astroContentCollectionEntry=true':
      'chunks/145785077_pCO_rlh2.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/147888188.md?astroContentCollectionEntry=true':
      'chunks/147888188_a2lBz4kJ.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148032540.md?astroContentCollectionEntry=true':
      'chunks/148032540_pH5CSjqI.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553676.md?astroContentCollectionEntry=true':
      'chunks/148553676_Ek_0bluc.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553739.md?astroContentCollectionEntry=true':
      'chunks/148553739_xJDLxA4N.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148896468.md?astroContentCollectionEntry=true':
      'chunks/148896468_y5TnNZ3K.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856049.md?astroContentCollectionEntry=true':
      'chunks/151856049_2nmp0NpD.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856082.md?astroContentCollectionEntry=true':
      'chunks/151856082_Us7ZVizq.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152139015.md?astroContentCollectionEntry=true':
      'chunks/152139015_JL6pu1fM.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152242486.md?astroContentCollectionEntry=true':
      'chunks/152242486_GdkDT3bU.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164564932.md?astroContentCollectionEntry=true':
      'chunks/164564932_VWsx-J80.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164601922.md?astroContentCollectionEntry=true':
      'chunks/164601922_Mng4Dehv.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712813.md?astroContentCollectionEntry=true':
      'chunks/170712813_vA6UrO5s.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712882.md?astroContentCollectionEntry=true':
      'chunks/170712882_Jh3zwhzl.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170716411.md?astroContentCollectionEntry=true':
      'chunks/170716411_bSZFNxt_.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/173958130.md?astroContentCollectionEntry=true':
      'chunks/173958130_LH43N16K.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175577875.md?astroContentCollectionEntry=true':
      'chunks/175577875_cZa5x2F2.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175926290.md?astroContentCollectionEntry=true':
      'chunks/175926290_hSp9C8KK.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176035092.md?astroContentCollectionEntry=true':
      'chunks/176035092_-jOQcTOH.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176243918.md?astroContentCollectionEntry=true':
      'chunks/176243918_35xfNLG7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183883395.md?astroContentCollectionEntry=true':
      'chunks/183883395_8EaT3w1n.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183916694.md?astroContentCollectionEntry=true':
      'chunks/183916694_ZcEF7lXS.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/186172319.md?astroContentCollectionEntry=true':
      'chunks/186172319_HO5RLN3E.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/187431259.md?astroContentCollectionEntry=true':
      'chunks/187431259_SdjSxjJN.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/188732962.md?astroContentCollectionEntry=true':
      'chunks/188732962_KyjWZ2Wv.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193430221.md?astroContentCollectionEntry=true':
      'chunks/193430221_EgUh2AKV.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193431338.md?astroContentCollectionEntry=true':
      'chunks/193431338_NfhZfWHm.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193580658.md?astroContentCollectionEntry=true':
      'chunks/193580658_P74-Sh7W.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193615631.md?astroContentCollectionEntry=true':
      'chunks/193615631_tzJYNgGl.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/200629134.md?astroContentCollectionEntry=true':
      'chunks/200629134_vsQV3YCS.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2019-in-media.md?astroContentCollectionEntry=true':
      'chunks/2019-in-media_dpTVvFsb.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2022-in-media.md?astroContentCollectionEntry=true':
      'chunks/2022-in-media_SlFIblHV.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/207807923.md?astroContentCollectionEntry=true':
      'chunks/207807923_vxefcuNB.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/210271102.md?astroContentCollectionEntry=true':
      'chunks/210271102_s7mZvA7H.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/211267925.md?astroContentCollectionEntry=true':
      'chunks/211267925_afJ22LED.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/212977273.md?astroContentCollectionEntry=true':
      'chunks/212977273_9oGqigP-.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/219342574.md?astroContentCollectionEntry=true':
      'chunks/219342574_GIPWc9vN.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/233159783.md?astroContentCollectionEntry=true':
      'chunks/233159783__zb99LwU.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/239986466.md?astroContentCollectionEntry=true':
      'chunks/239986466_41YPWx3R.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/249382845.md?astroContentCollectionEntry=true':
      'chunks/249382845_btzHjB8s.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/251027866.md?astroContentCollectionEntry=true':
      'chunks/251027866_4LrvvSUK.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/279869181.md?astroContentCollectionEntry=true':
      'chunks/279869181_R0NotO7R.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/296971514.md?astroContentCollectionEntry=true':
      'chunks/296971514_IzU0SD1z.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/300794824.md?astroContentCollectionEntry=true':
      'chunks/300794824_rek7H8_i.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/311978752.md?astroContentCollectionEntry=true':
      'chunks/311978752_L8Qr0Gi5.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/331418114.md?astroContentCollectionEntry=true':
      'chunks/331418114_D6TYhUs4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/339029235.md?astroContentCollectionEntry=true':
      'chunks/339029235_6gJ5NWrK.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/340858922.md?astroContentCollectionEntry=true':
      'chunks/340858922_RrF4AFeK.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/astro-rewrite.md?astroContentCollectionEntry=true':
      'chunks/astro-rewrite_InwauKLt.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/commute.md?astroContentCollectionEntry=true':
      'chunks/commute_h4kRIqnt.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/dankpods-starter.md?astroContentCollectionEntry=true':
      'chunks/dankpods-starter_w1q1rAY9.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/essential-apps.md?astroContentCollectionEntry=true':
      'chunks/essential-apps_2ix-n0Ca.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/falsehoods-around-names.md?astroContentCollectionEntry=true':
      'chunks/falsehoods-around-names_KO3XXQU0.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/gft-0722.md?astroContentCollectionEntry=true':
      'chunks/gft-0722_gw7eTPVK.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lastfm-to-mastodon.md?astroContentCollectionEntry=true':
      'chunks/lastfm-to-mastodon_-aNK3y__.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lil-gator-game.md?astroContentCollectionEntry=true':
      'chunks/lil-gator-game_BWO2t5gh.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-02-16.md?astroContentCollectionEntry=true':
      'chunks/links-for-2023-02-16_5JxrYsMA.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-04-02.md?astroContentCollectionEntry=true':
      'chunks/links-for-2023-04-02_AhXko6qh.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-09-02.md?astroContentCollectionEntry=true':
      'chunks/links-for-2023-09-02_OtnyHV3i.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/mutuals-social.md?astroContentCollectionEntry=true':
      'chunks/mutuals-social_ABNMUN4z.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/notes-for-partner.md?astroContentCollectionEntry=true':
      'chunks/notes-for-partner_hU2THr2W.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/omglol-shortcuts.md?astroContentCollectionEntry=true':
      'chunks/omglol-shortcuts_tK8TlGgG.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/pride-frames.md?astroContentCollectionEntry=true':
      'chunks/pride-frames_z2_ROcgJ.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/sf-jury-summon.md?astroContentCollectionEntry=true':
      'chunks/sf-jury-summon_BC62Jiwe.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/tailscale-nearby-exit-nodes.md?astroContentCollectionEntry=true':
      'chunks/tailscale-nearby-exit-nodes_thPAfIFl.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/template.md?astroContentCollectionEntry=true':
      'chunks/template_mNkqaUtB.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/toot-cards.md?astroContentCollectionEntry=true':
      'chunks/toot-cards_Exr0kClT.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/uses.md?astroContentCollectionEntry=true':
      'chunks/uses_cSf8Fnz4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/verify-commits.md?astroContentCollectionEntry=true':
      'chunks/verify-commits_eWzsWKa1.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/vr-sexism.md?astroContentCollectionEntry=true':
      'chunks/vr-sexism_R6BKh1NT.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/134400368.md?astroPropagatedAssets':
      'chunks/134400368_JTsTyUpf.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/135019114.md?astroPropagatedAssets':
      'chunks/135019114_zz82LSCZ.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136222383.md?astroPropagatedAssets':
      'chunks/136222383_Ll86LOvS.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224879.md?astroPropagatedAssets':
      'chunks/136224879_S5TihzRH.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224935.md?astroPropagatedAssets':
      'chunks/136224935_TF6o21-9.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136763858.md?astroPropagatedAssets':
      'chunks/136763858_6YnKWMpu.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009001.md?astroPropagatedAssets':
      'chunks/137009001_nAorstV7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009091.md?astroPropagatedAssets':
      'chunks/137009091_6Y6m_-Ax.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138288124.md?astroPropagatedAssets':
      'chunks/138288124_TZubcDM5.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138860938.md?astroPropagatedAssets':
      'chunks/138860938_1D7JeDgP.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138917375.md?astroPropagatedAssets':
      'chunks/138917375_JJC0C9UA.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113304.md?astroPropagatedAssets':
      'chunks/140113304_MeOC-wf0.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113399.md?astroPropagatedAssets':
      'chunks/140113399_3QEcXH6r.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113823.md?astroPropagatedAssets':
      'chunks/140113823_AItcg7C4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140166273.md?astroPropagatedAssets':
      'chunks/140166273_kL0Sj3ij.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140179091.md?astroPropagatedAssets':
      'chunks/140179091_LXHPZ5K2.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140733004.md?astroPropagatedAssets':
      'chunks/140733004_F0aV-nsQ.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/141385956.md?astroPropagatedAssets':
      'chunks/141385956_aCxcW8fA.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143872419.md?astroPropagatedAssets':
      'chunks/143872419_-ViXklx-.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143963126.md?astroPropagatedAssets':
      'chunks/143963126_u_s-oVKG.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145124027.md?astroPropagatedAssets':
      'chunks/145124027_ersfReSu.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145785077.md?astroPropagatedAssets':
      'chunks/145785077_KPXuSt8K.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/147888188.md?astroPropagatedAssets':
      'chunks/147888188_iueS-x9Z.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148032540.md?astroPropagatedAssets':
      'chunks/148032540_ade88GoH.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553676.md?astroPropagatedAssets':
      'chunks/148553676_iIBCfVu7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553739.md?astroPropagatedAssets':
      'chunks/148553739_bIhkCh0s.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148896468.md?astroPropagatedAssets':
      'chunks/148896468_4n_rct5E.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856049.md?astroPropagatedAssets':
      'chunks/151856049_YtSH27zT.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856082.md?astroPropagatedAssets':
      'chunks/151856082_q0SjGt8C.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152139015.md?astroPropagatedAssets':
      'chunks/152139015_kw0puzFx.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152242486.md?astroPropagatedAssets':
      'chunks/152242486_HCC2WJkI.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164564932.md?astroPropagatedAssets':
      'chunks/164564932_3_CgiuoU.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164601922.md?astroPropagatedAssets':
      'chunks/164601922_L2BkdfS4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712813.md?astroPropagatedAssets':
      'chunks/170712813_ZE482LMC.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712882.md?astroPropagatedAssets':
      'chunks/170712882_ZeJq3OaY.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170716411.md?astroPropagatedAssets':
      'chunks/170716411_o2QDfEH1.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/173958130.md?astroPropagatedAssets':
      'chunks/173958130_oSIRBg0U.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175577875.md?astroPropagatedAssets':
      'chunks/175577875_I48GA3rK.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175926290.md?astroPropagatedAssets':
      'chunks/175926290_xTldv7h8.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176035092.md?astroPropagatedAssets':
      'chunks/176035092_XXer6SNC.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176243918.md?astroPropagatedAssets':
      'chunks/176243918_hCW3pT4f.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183883395.md?astroPropagatedAssets':
      'chunks/183883395_Qci6_zxb.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183916694.md?astroPropagatedAssets':
      'chunks/183916694_3P8f9yfd.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/186172319.md?astroPropagatedAssets':
      'chunks/186172319_2EBibgSL.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/187431259.md?astroPropagatedAssets':
      'chunks/187431259_bMvX8Wvr.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/188732962.md?astroPropagatedAssets':
      'chunks/188732962_ydBC3ebF.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193430221.md?astroPropagatedAssets':
      'chunks/193430221_P0oso8Fp.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193431338.md?astroPropagatedAssets':
      'chunks/193431338_Xzg1e8r9.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193580658.md?astroPropagatedAssets':
      'chunks/193580658_OEvExzxH.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193615631.md?astroPropagatedAssets':
      'chunks/193615631_sVJOd8gA.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/200629134.md?astroPropagatedAssets':
      'chunks/200629134_FMq4KIGB.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2019-in-media.md?astroPropagatedAssets':
      'chunks/2019-in-media_5q4VhOK8.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2022-in-media.md?astroPropagatedAssets':
      'chunks/2022-in-media_Frs3OfaC.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/207807923.md?astroPropagatedAssets':
      'chunks/207807923_hm4aVKZM.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/210271102.md?astroPropagatedAssets':
      'chunks/210271102_y0Va4z7o.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/211267925.md?astroPropagatedAssets':
      'chunks/211267925_ZBT-fmyq.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/212977273.md?astroPropagatedAssets':
      'chunks/212977273_AmXE_ozd.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/219342574.md?astroPropagatedAssets':
      'chunks/219342574_N0E7R3bn.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/233159783.md?astroPropagatedAssets':
      'chunks/233159783_MmSY6Jj4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/239986466.md?astroPropagatedAssets':
      'chunks/239986466_oyKsFsZw.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/249382845.md?astroPropagatedAssets':
      'chunks/249382845_YbIrT279.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/251027866.md?astroPropagatedAssets':
      'chunks/251027866_EfqnFb-w.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/279869181.md?astroPropagatedAssets':
      'chunks/279869181_1j0gyuPF.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/296971514.md?astroPropagatedAssets':
      'chunks/296971514_rXdLLcrZ.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/300794824.md?astroPropagatedAssets':
      'chunks/300794824_JtTvnnyh.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/311978752.md?astroPropagatedAssets':
      'chunks/311978752__LVgZtQv.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/331418114.md?astroPropagatedAssets':
      'chunks/331418114_TIBiSM7n.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/339029235.md?astroPropagatedAssets':
      'chunks/339029235_H28S8iAH.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/340858922.md?astroPropagatedAssets':
      'chunks/340858922_4pSlXjuj.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/astro-rewrite.md?astroPropagatedAssets':
      'chunks/astro-rewrite_QiUp308k.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/commute.md?astroPropagatedAssets':
      'chunks/commute_TaFXrROc.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/dankpods-starter.md?astroPropagatedAssets':
      'chunks/dankpods-starter_ENniVfI4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/essential-apps.md?astroPropagatedAssets':
      'chunks/essential-apps_ZUnmtUhx.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/falsehoods-around-names.md?astroPropagatedAssets':
      'chunks/falsehoods-around-names_-HhHLEdN.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/gft-0722.md?astroPropagatedAssets':
      'chunks/gft-0722_69yRkKly.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lastfm-to-mastodon.md?astroPropagatedAssets':
      'chunks/lastfm-to-mastodon_UhllMcgv.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lil-gator-game.md?astroPropagatedAssets':
      'chunks/lil-gator-game_0-nPM0Zv.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-02-16.md?astroPropagatedAssets':
      'chunks/links-for-2023-02-16_wW8JXsMs.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-04-02.md?astroPropagatedAssets':
      'chunks/links-for-2023-04-02_VypyS141.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-09-02.md?astroPropagatedAssets':
      'chunks/links-for-2023-09-02_MH7bK0LU.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/mutuals-social.md?astroPropagatedAssets':
      'chunks/mutuals-social_7IaUwhY9.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/notes-for-partner.md?astroPropagatedAssets':
      'chunks/notes-for-partner_14suuPy5.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/omglol-shortcuts.md?astroPropagatedAssets':
      'chunks/omglol-shortcuts_RDIC4JCj.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/pride-frames.md?astroPropagatedAssets':
      'chunks/pride-frames_p5cKLTwc.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/sf-jury-summon.md?astroPropagatedAssets':
      'chunks/sf-jury-summon_w_z35nU3.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/tailscale-nearby-exit-nodes.md?astroPropagatedAssets':
      'chunks/tailscale-nearby-exit-nodes_zFxuhwz2.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/template.md?astroPropagatedAssets':
      'chunks/template_QsMKxmNd.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/toot-cards.md?astroPropagatedAssets':
      'chunks/toot-cards_zvNc5I4w.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/uses.md?astroPropagatedAssets':
      'chunks/uses_f3wBXr0v.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/verify-commits.md?astroPropagatedAssets':
      'chunks/verify-commits_iyMoe40s.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/vr-sexism.md?astroPropagatedAssets':
      'chunks/vr-sexism_8r4-ECYJ.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/134400368.md':
      'chunks/134400368_Oo1Poods.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/135019114.md':
      'chunks/135019114_8_nLnX27.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136222383.md':
      'chunks/136222383_MrQ2WYVn.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224879.md':
      'chunks/136224879_Cp4yrZCe.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136224935.md':
      'chunks/136224935_6ZNe3xKN.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/136763858.md':
      'chunks/136763858_FNA0R39T.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009001.md':
      'chunks/137009001_K3EBga7A.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/137009091.md':
      'chunks/137009091_ELaA7Moy.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138288124.md':
      'chunks/138288124_HG6ArmWC.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138860938.md':
      'chunks/138860938_17p0Ihr7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/138917375.md':
      'chunks/138917375_HcpzAkGx.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113304.md':
      'chunks/140113304_ddNtfUmO.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113399.md':
      'chunks/140113399_zHJbFq2_.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140113823.md':
      'chunks/140113823_hv3TigL0.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140166273.md':
      'chunks/140166273_LV5kEvQq.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140179091.md':
      'chunks/140179091_QWOy4opx.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/140733004.md':
      'chunks/140733004_2X39WB6F.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/141385956.md':
      'chunks/141385956_LSCFX7yt.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143872419.md':
      'chunks/143872419_HRZ0pwlA.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/143963126.md':
      'chunks/143963126_YbldMwoF.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145124027.md':
      'chunks/145124027_x4cF5Z_L.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/145785077.md':
      'chunks/145785077_o2vc6bZh.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/147888188.md':
      'chunks/147888188_bziSheqh.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148032540.md':
      'chunks/148032540_14O2UPbV.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553676.md':
      'chunks/148553676_PmVwANrA.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148553739.md':
      'chunks/148553739_pgtz42Hd.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/148896468.md':
      'chunks/148896468_K4B8SlV2.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856049.md':
      'chunks/151856049_zJK9c95C.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/151856082.md':
      'chunks/151856082_4h0Axy_X.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152139015.md':
      'chunks/152139015_BN1J782t.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/152242486.md':
      'chunks/152242486_Ut-ka3Is.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164564932.md':
      'chunks/164564932_f5fg4AYK.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/164601922.md':
      'chunks/164601922_g8j3xqD0.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712813.md':
      'chunks/170712813_TLjcpjez.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170712882.md':
      'chunks/170712882_nEZy2qT4.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/170716411.md':
      'chunks/170716411_Ui3rxU45.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/173958130.md':
      'chunks/173958130_xp7QF2sf.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175577875.md':
      'chunks/175577875_Kqjx6LlN.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/175926290.md':
      'chunks/175926290_w5364hlt.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176035092.md':
      'chunks/176035092_kZ9dDaif.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/176243918.md':
      'chunks/176243918_t4v3ee1h.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183883395.md':
      'chunks/183883395_7ZWeqPCu.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/183916694.md':
      'chunks/183916694_zHaDVTQK.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/186172319.md':
      'chunks/186172319_xsaUm-Mm.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/187431259.md':
      'chunks/187431259_EAE4q7cy.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/188732962.md':
      'chunks/188732962_BVqKEYzr.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193430221.md':
      'chunks/193430221_Bsmq5u31.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193431338.md':
      'chunks/193431338_h3GbplXc.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193580658.md':
      'chunks/193580658_-DmeTwaC.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/193615631.md':
      'chunks/193615631_j1k3SxId.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/200629134.md':
      'chunks/200629134_r9L5BWPG.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2019-in-media.md':
      'chunks/2019-in-media_yMtPTkWB.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/2022-in-media.md':
      'chunks/2022-in-media_1Ios2wmw.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/207807923.md':
      'chunks/207807923_MHnrfhYa.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/210271102.md':
      'chunks/210271102_dgYW0SV_.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/211267925.md':
      'chunks/211267925_sL7_RxGy.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/212977273.md':
      'chunks/212977273_awuivydl.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/219342574.md':
      'chunks/219342574_AD3KPnQt.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/233159783.md':
      'chunks/233159783_18deNSRd.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/239986466.md':
      'chunks/239986466_YnQixJJx.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/249382845.md':
      'chunks/249382845_MLpSGiAv.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/251027866.md':
      'chunks/251027866_96E-tqVq.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/279869181.md':
      'chunks/279869181_HMeYef0n.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/296971514.md':
      'chunks/296971514_YA-1ehkC.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/300794824.md':
      'chunks/300794824_8bun8z4x.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/311978752.md':
      'chunks/311978752_3qhLoj-C.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/331418114.md':
      'chunks/331418114_cFVl8U9N.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/339029235.md':
      'chunks/339029235_mNPH7U_t.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/340858922.md':
      'chunks/340858922_jRgpc1M7.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/astro-rewrite.md':
      'chunks/astro-rewrite_pamMkN7w.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/commute.md':
      'chunks/commute_tZxMWzqR.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/dankpods-starter.md':
      'chunks/dankpods-starter_WuY5QJXP.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/essential-apps.md':
      'chunks/essential-apps_enzU0oyV.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/falsehoods-around-names.md':
      'chunks/falsehoods-around-names_zaWMzXdf.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/gft-0722.md':
      'chunks/gft-0722_W8AnU_vg.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lastfm-to-mastodon.md':
      'chunks/lastfm-to-mastodon_f8RawZwG.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/lil-gator-game.md':
      'chunks/lil-gator-game_9Q1GIOOk.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-02-16.md':
      'chunks/links-for-2023-02-16_oJqcObeK.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-04-02.md':
      'chunks/links-for-2023-04-02_TB4CYimm.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/links-for-2023-09-02.md':
      'chunks/links-for-2023-09-02__OlNc58q.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/mutuals-social.md':
      'chunks/mutuals-social_s7eX3owo.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/notes-for-partner.md':
      'chunks/notes-for-partner_QY3nW2Fa.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/omglol-shortcuts.md':
      'chunks/omglol-shortcuts_Yr6Z_dWK.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/pride-frames.md':
      'chunks/pride-frames_cm6Orgeb.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/sf-jury-summon.md':
      'chunks/sf-jury-summon_40eIYO2Z.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/tailscale-nearby-exit-nodes.md':
      'chunks/tailscale-nearby-exit-nodes_VoRhh3ME.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/template.md':
      'chunks/template__K74NffQ.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/toot-cards.md':
      'chunks/toot-cards_h9xaSuFX.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/uses.md':
      'chunks/uses_49wJgti8.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/verify-commits.md':
      'chunks/verify-commits_qmGMK10C.mjs',
    '/Users/melanie/Developer/melkat-blog/src/content/posts/vr-sexism.md':
      'chunks/vr-sexism_RPdRM4Pj.mjs',
    '/astro/hoisted.js?q=0': '_astro/hoisted.rfglzoOR.js',
    'astro:scripts/before-hydration.js': '',
  },
  assets: [
    '/_astro/_page_.gKACxwvl.css',
    '/_astro/_page_.CU7hC1jb.css',
    '/apple-touch-icon.png',
    '/cover.png',
    '/favicon.ico',
    '/mask-icon.svg',
    '/robots.txt',
    '/_astro/hoisted.rfglzoOR.js',
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
    '/img/pride-frames.png',
    '/img/sfjuryduty.jpg',
    '/img/toot-cards.png',
    '/img/uses.jpg',
    '/img/vr-sexism.jpg',
    '/t/index.html',
    '/t/ableist/index.html',
    '/t/amazon/index.html',
    '/t/animalcrossing/index.html',
    '/t/anytext/index.html',
    '/t/app/index.html',
    '/t/android/index.html',
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
    '/t/interviews/index.html',
    '/t/how-to/index.html',
    '/t/ios/index.html',
    '/t/javascript/index.html',
    '/t/introduction/index.html',
    '/t/js/index.html',
    '/t/lastfm/index.html',
    '/t/link/index.html',
    '/t/link-list/index.html',
    '/t/macos/index.html',
    '/t/live2d/index.html',
    '/t/manga/index.html',
    '/t/mastodon/index.html',
    '/t/media/index.html',
    '/t/me/index.html',
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
    '/t/review/index.html',
    '/t/react/index.html',
    '/t/safari/index.html',
    '/t/scriptable/index.html',
    '/t/sanfrancisco/index.html',
    '/t/security/index.html',
    '/t/sexism/index.html',
    '/t/steam/index.html',
    '/t/spacetwinks/index.html',
    '/t/shortcuts/index.html',
    '/t/switch/index.html',
    '/t/tech/index.html',
    '/t/tiktok/index.html',
    '/t/trans/index.html',
    '/t/tv/index.html',
    '/t/translations/index.html',
    '/t/twine/index.html',
    '/t/unions/index.html',
    '/t/uses/index.html',
    '/t/video/index.html',
    '/t/vr/index.html',
    '/t/virtual/index.html',
    '/t/vscode/index.html',
    '/t/wages/index.html',
    '/t/webcomic/index.html',
    '/t/windows/index.html',
    '/t/women/index.html',
    '/t/ableist/1/index.html',
    '/t/amazon/1/index.html',
    '/t/app/1/index.html',
    '/t/anytext/1/index.html',
    '/t/animalcrossing/1/index.html',
    '/t/android/1/index.html',
    '/t/apps/1/index.html',
    '/t/astro/1/index.html',
    '/t/article/1/index.html',
    '/t/cli/1/index.html',
    '/t/article/2/index.html',
    '/t/code/1/index.html',
    '/t/criticism/1/index.html',
    '/t/discrimination/1/index.html',
    '/t/dankpods/1/index.html',
    '/t/environment/1/index.html',
    '/t/extension/1/index.html',
    '/t/facebook/1/index.html',
    '/t/fatphobic/1/index.html',
    '/t/games/1/index.html',
    '/t/girlfriend-technology/1/index.html',
    '/t/gifs/1/index.html',
    '/t/google/1/index.html',
    '/t/green/1/index.html',
    '/t/git/1/index.html',
    '/t/guns/1/index.html',
    '/t/hardware/1/index.html',
    '/t/hack/1/index.html',
    '/t/headphones/1/index.html',
    '/t/how-to/1/index.html',
    '/t/interviews/1/index.html',
    '/t/ios/1/index.html',
    '/t/javascript/1/index.html',
    '/t/introduction/1/index.html',
    '/t/js/1/index.html',
    '/t/lastfm/1/index.html',
    '/t/link/1/index.html',
    '/t/link/2/index.html',
    '/t/link-list/1/index.html',
    '/t/macos/1/index.html',
    '/t/live2d/1/index.html',
    '/t/manga/1/index.html',
    '/t/mastodon/1/index.html',
    '/t/me/1/index.html',
    '/t/miku/1/index.html',
    '/t/music/1/index.html',
    '/t/media/1/index.html',
    '/t/names/1/index.html',
    '/t/neopets/1/index.html',
    '/t/omglol/1/index.html',
    '/t/nintendo/1/index.html',
    '/t/panic/1/index.html',
    '/t/patreon/1/index.html',
    '/t/pc/1/index.html',
    '/t/post/1/index.html',
    '/t/queer/1/index.html',
    '/t/queerphobic/1/index.html',
    '/t/race/1/index.html',
    '/t/review/1/index.html',
    '/t/react/1/index.html',
    '/t/safari/1/index.html',
    '/t/scriptable/1/index.html',
    '/t/sexism/1/index.html',
    '/t/sanfrancisco/1/index.html',
    '/t/steam/1/index.html',
    '/t/security/1/index.html',
    '/t/spacetwinks/1/index.html',
    '/t/shortcuts/1/index.html',
    '/t/switch/1/index.html',
    '/t/tech/1/index.html',
    '/t/tiktok/1/index.html',
    '/t/trans/1/index.html',
    '/t/translations/1/index.html',
    '/t/uses/1/index.html',
    '/t/twine/1/index.html',
    '/t/unions/1/index.html',
    '/t/tv/1/index.html',
    '/t/vr/1/index.html',
    '/t/virtual/1/index.html',
    '/t/vscode/1/index.html',
    '/t/wages/1/index.html',
    '/t/webcomic/1/index.html',
    '/t/video/1/index.html',
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
