import * as adapter from '@astrojs/netlify/netlify-functions.js'
import { renderers } from './renderers.mjs'
import { manifest } from './manifest_uwtyWMBJ.mjs'

const _page0 = () => import('./chunks/generic_msjyxgVU.mjs')
const _page1 = () => import('./chunks/index_Wh1vsXHL.mjs')
const _page2 = () => import('./chunks/webfinger_PQI8qdwQ.mjs')
const _page3 = () => import('./chunks/feed_lakNkgYb.mjs')
const _page4 = () => import('./chunks/rss_QrOktz4B.mjs')
const _page5 = () => import('./chunks/404_sjmHoA7m.mjs')
const _page6 = () => import('./chunks/index_clT3aokR.mjs')
const _page7 = () => import('./chunks/index_XL7DR2lv.mjs')
const _page8 = () => import('./chunks/_page__tIxg7RVz.mjs')
const _page9 = () => import('./chunks/_.._mPV-c-_Z.mjs')
const _page10 = () => import('./chunks/index_ULAImwf8.mjs')
const _page11 = () => import('./chunks/index_tZCBRXMO.mjs')
const _page12 = () => import('./chunks/index_eGvXzp-d.mjs')
const _page13 = () => import('./chunks/_page__cLA6uE0V.mjs')
const _page14 = () => import('./chunks/_page__jm70kAN9.mjs')
const pageMap = new Map([
  ['node_modules/astro/dist/assets/endpoint/generic.js', _page0],
  ['src/pages/index.astro', _page1],
  ['src/pages/.well-known/webfinger.json.ts', _page2],
  ['src/pages/feed.json.ts', _page3],
  ['src/pages/rss.xml.ts', _page4],
  ['src/pages/404.astro', _page5],
  ['src/pages/d/index.astro', _page6],
  ['src/pages/d/[domain]/index.astro', _page7],
  ['src/pages/d/[domain]/[page].astro', _page8],
  ['src/pages/p/[...slug].astro', _page9],
  ['src/pages/q/index.astro', _page10],
  ['src/pages/t/index.astro', _page11],
  ['src/pages/t/[tag]/index.astro', _page12],
  ['src/pages/t/[tag]/[page].astro', _page13],
  ['src/pages/[page].astro', _page14],
])
const _manifest = Object.assign(manifest, {
  pageMap,
  renderers,
})
const _args = {}

const _exports = adapter.createExports(_manifest, _args)
const handler = _exports['handler']

const _start = 'start'
if (_start in adapter) {
  adapter[_start](_manifest, _args)
}

export { handler, pageMap }
