import mime from 'mime'
import sharp$1 from 'sharp'
/* empty css                         */ import 'kleur/colors'
import 'node:fs/promises'
import 'node:path'
import 'node:url'
import 'http-cache-semantics'
import 'node:os'
import 'image-size'
import 'magic-string'
import 'node:stream'
import {
  c as createAstro,
  a as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  b as addAttribute,
  d as renderComponent,
  e as renderSlot,
  f as renderHead,
  s as spreadAttributes,
  F as Fragment,
  g as createCollectionToGlobResultMap,
  h as createGetCollection,
} from '../astro.35b77837.mjs'
/* empty css                            */ import map from 'lodash/map.js'
import uFuzzy from '@leeoniya/ufuzzy'

function isOutputFormat(value) {
  return ['avif', 'jpeg', 'jpg', 'png', 'webp', 'svg'].includes(value)
}
function isOutputFormatSupportsAlpha(value) {
  return ['avif', 'png', 'webp'].includes(value)
}
function isAspectRatioString(value) {
  return /^\d*:\d*$/.test(value)
}
function parseAspectRatio(aspectRatio) {
  if (!aspectRatio) {
    return void 0
  }
  if (typeof aspectRatio === 'number') {
    return aspectRatio
  } else {
    const [width, height] = aspectRatio.split(':')
    return parseInt(width) / parseInt(height)
  }
}
function isSSRService(service) {
  return 'transform' in service
}
class BaseSSRService {
  async getImageAttributes(transform) {
    const { width, height, src, format, quality, aspectRatio, ...rest } =
      transform
    return {
      ...rest,
      width,
      height,
    }
  }
  serializeTransform(transform) {
    const searchParams = new URLSearchParams()
    if (transform.quality) {
      searchParams.append('q', transform.quality.toString())
    }
    if (transform.format) {
      searchParams.append('f', transform.format)
    }
    if (transform.width) {
      searchParams.append('w', transform.width.toString())
    }
    if (transform.height) {
      searchParams.append('h', transform.height.toString())
    }
    if (transform.aspectRatio) {
      searchParams.append('ar', transform.aspectRatio.toString())
    }
    if (transform.fit) {
      searchParams.append('fit', transform.fit)
    }
    if (transform.background) {
      searchParams.append('bg', transform.background)
    }
    if (transform.position) {
      searchParams.append('p', encodeURI(transform.position))
    }
    searchParams.append('href', transform.src)
    return { searchParams }
  }
  parseTransform(searchParams) {
    if (!searchParams.has('href')) {
      return void 0
    }
    let transform = { src: searchParams.get('href') }
    if (searchParams.has('q')) {
      transform.quality = parseInt(searchParams.get('q'))
    }
    if (searchParams.has('f')) {
      const format = searchParams.get('f')
      if (isOutputFormat(format)) {
        transform.format = format
      }
    }
    if (searchParams.has('w')) {
      transform.width = parseInt(searchParams.get('w'))
    }
    if (searchParams.has('h')) {
      transform.height = parseInt(searchParams.get('h'))
    }
    if (searchParams.has('ar')) {
      const ratio = searchParams.get('ar')
      if (isAspectRatioString(ratio)) {
        transform.aspectRatio = ratio
      } else {
        transform.aspectRatio = parseFloat(ratio)
      }
    }
    if (searchParams.has('fit')) {
      transform.fit = searchParams.get('fit')
    }
    if (searchParams.has('p')) {
      transform.position = decodeURI(searchParams.get('p'))
    }
    if (searchParams.has('bg')) {
      transform.background = searchParams.get('bg')
    }
    return transform
  }
}

class SharpService extends BaseSSRService {
  async transform(inputBuffer, transform) {
    if (transform.format === 'svg') {
      return {
        data: inputBuffer,
        format: transform.format,
      }
    }
    const sharpImage = sharp$1(inputBuffer, { failOnError: false, pages: -1 })
    sharpImage.rotate()
    if (transform.width || transform.height) {
      const width = transform.width && Math.round(transform.width)
      const height = transform.height && Math.round(transform.height)
      sharpImage.resize({
        width,
        height,
        fit: transform.fit,
        position: transform.position,
        background: transform.background,
      })
    }
    if (transform.format) {
      sharpImage.toFormat(transform.format, { quality: transform.quality })
      if (
        transform.background &&
        !isOutputFormatSupportsAlpha(transform.format)
      ) {
        sharpImage.flatten({ background: transform.background })
      }
    }
    const { data, info } = await sharpImage.toBuffer({
      resolveWithObject: true,
    })
    return {
      data,
      format: info.format,
    }
  }
}
const service = new SharpService()
var sharp_default = service

const sharp = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: sharp_default,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

const fnv1a52 = str => {
  const len = str.length
  let i = 0,
    t0 = 0,
    v0 = 8997,
    t1 = 0,
    v1 = 33826,
    t2 = 0,
    v2 = 40164,
    t3 = 0,
    v3 = 52210
  while (i < len) {
    v0 ^= str.charCodeAt(i++)
    t0 = v0 * 435
    t1 = v1 * 435
    t2 = v2 * 435
    t3 = v3 * 435
    t2 += v0 << 8
    t3 += v1 << 8
    t1 += t0 >>> 16
    v0 = t0 & 65535
    t2 += t1 >>> 16
    v1 = t1 & 65535
    v3 = (t3 + (t2 >>> 16)) & 65535
    v2 = t2 & 65535
  }
  return (
    (v3 & 15) * 281474976710656 +
    v2 * 4294967296 +
    v1 * 65536 +
    (v0 ^ (v3 >> 4))
  )
}
const etag = (payload, weak = false) => {
  const prefix = weak ? 'W/"' : '"'
  return (
    prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"'
  )
}

function isRemoteImage(src) {
  return /^(https?:)?\/\//.test(src)
}
function removeQueryString(src) {
  const index = src.lastIndexOf('?')
  return index > 0 ? src.substring(0, index) : src
}
function extname(src) {
  const base = basename(src)
  const index = base.lastIndexOf('.')
  if (index <= 0) {
    return ''
  }
  return base.substring(index)
}
function basename(src) {
  return removeQueryString(src.replace(/^.*[\\\/]/, ''))
}

async function loadRemoteImage(src) {
  try {
    const res = await fetch(src)
    if (!res.ok) {
      return void 0
    }
    return Buffer.from(await res.arrayBuffer())
  } catch (err) {
    console.error(err)
    return void 0
  }
}
const get = async ({ request }) => {
  try {
    const url = new URL(request.url)
    const transform = sharp_default.parseTransform(url.searchParams)
    let inputBuffer = void 0
    const sourceUrl = isRemoteImage(transform.src)
      ? new URL(transform.src)
      : new URL(transform.src, url.origin)
    inputBuffer = await loadRemoteImage(sourceUrl)
    if (!inputBuffer) {
      return new Response('Not Found', { status: 404 })
    }
    const { data, format } = await sharp_default.transform(
      inputBuffer,
      transform
    )
    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': mime.getType(format) || '',
        'Cache-Control': 'public, max-age=31536000',
        ETag: etag(data.toString()),
        Date: new Date().toUTCString(),
      },
    })
  } catch (err) {
    console.error(err)
    return new Response(`Server Error: ${err}`, { status: 500 })
  }
}

const _page0 = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      get,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

const $$Astro$l = createAstro('https://melkat.blog')
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots)
  Astro2.self = $$Logo
  const { className, width } = Astro2.props
  return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(className, 'class')}${addAttribute(width, 'width')} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><path fill="none" d="M0 0h40v40H0z"></path><path d="M25.373 8.27a12.995 12.995 0 0 1 6.126-3.841L33 4l.296 2.965a14.918 14.918 0 0 1-1.663 8.472A11.992 11.992 0 0 1 33 20.998v7.392a1.561 1.561 0 0 0 3 .61v.631A3.369 3.369 0 0 1 32.631 33h-.676a3.368 3.368 0 0 1-1.97-.636A5.116 5.116 0 0 0 32 35h-.001a8.108 8.108 0 0 1-3.705-.453c.081.19.168.378.261.563L29 36a9 9 0 0 1-4.781-1.375l-1.096.876a4.998 4.998 0 0 1-6.246 0l-1.096-.876A9 9 0 0 1 11 36l.445-.89c.093-.185.18-.373.261-.563A8.108 8.108 0 0 1 8.001 35H8a5.116 5.116 0 0 0 2.015-2.636 3.368 3.368 0 0 1-1.97.636h-.676A3.369 3.369 0 0 1 4 29.631V29l.002.005A1.562 1.562 0 0 0 7 28.39v-7.392c0-1.955.477-3.86 1.367-5.561a14.918 14.918 0 0 1-1.663-8.472L7 4l1.501.429a12.995 12.995 0 0 1 6.126 3.841A12.003 12.003 0 0 1 20 7s0 0 0 0c1.883 0 3.721.443 5.373 1.27Z" fill="none" stroke="#000" stroke-width="4"></path><path d="M20 27.056A9 9 0 0 1 11 36l.445-.89c.093-.185.18-.373.261-.563A8.108 8.108 0 0 1 8.001 35H8a5.117 5.117 0 0 0 2.126-5.498l-.086-.341a16.022 16.022 0 0 1 .138-8.285L11 18h5a.997.997 0 0 1 1 1h6v-.001c0-.552.447-.999.999-.999H29l.822 2.876c.772 2.702.819 5.559.138 8.285l-.086.341A5.117 5.117 0 0 0 32 35h-.001a8.108 8.108 0 0 1-3.705-.453c.081.19.168.378.261.563L29 36a9 9 0 0 1-9-9v.056Z" fill="#573421"></path><path d="M8.815 14.653A11.996 11.996 0 0 1 20 7a11.996 11.996 0 0 1 11.185 7.653A11.994 11.994 0 0 1 33 20.998v7.392a1.561 1.561 0 0 0 3 .61v.631A3.369 3.369 0 0 1 32.631 33h-.676a3.369 3.369 0 0 1-2.925-1.698L26.571 27H13.429l-2.459 4.302A3.369 3.369 0 0 1 8.045 33h-.676A3.369 3.369 0 0 1 4 29.631V29l.002.005A1.562 1.562 0 0 0 7 28.39v-7.392c0-2.261.638-4.457 1.815-6.345Z" fill="#875033"></path><path d="m24 19-1-7 .443-.885a12.998 12.998 0 0 1 8.056-6.686L33 4l.296 2.965a14.916 14.916 0 0 1-4.295 12.034L29 19h-5Z" fill="#fbfbfb"></path><path d="m24 19-1-7 .443-.885a12.998 12.998 0 0 1 8.056-6.686L33 4l.296 2.965a14.916 14.916 0 0 1-4.295 12.034L29 19h-5Zm4.577-1h-3.71l-.833-5.832.303-.606a12.004 12.004 0 0 1 7.436-6.172l.351-.1.177 1.774A13.918 13.918 0 0 1 28.577 18Zm-4.712-5.499-.019.031.019-.031Zm.028-.053-.022.043.022-.043ZM16 19l1-7-.443-.885a12.998 12.998 0 0 0-8.056-6.686L7 4l-.296 2.965a14.916 14.916 0 0 0 4.295 12.034L11 19h5Z" fill="#fbfbfb"></path><path d="M11.949 19H11l-.001-.001A14.916 14.916 0 0 1 6.704 6.965L7 4l1.501.429a12.998 12.998 0 0 1 8.056 6.686L17 12l-1 7h-4c0-.118-.021-.232-.058-.337a.644.644 0 0 1 .007.337Zm-.242-.707.006.006-.006-.006Zm4.259-6.125L15.133 18h-3.71A13.918 13.918 0 0 1 7.699 7.064l.177-1.774.351.1a12.004 12.004 0 0 1 7.436 6.172l.303.606Z" fill="#fbfbfb"></path><path d="m32.5 5-1.026.456a9.69 9.69 0 0 0-4.972 5.039L25 14v5h3a14.565 14.565 0 0 0 4.679-12.387L32.5 5ZM7.5 5l1.026.456a9.69 9.69 0 0 1 4.972 5.039L15 14v5h-3A14.565 14.565 0 0 1 7.321 6.613L7.5 5Z" fill="#ffb4b7"></path><path d="m29.5 9 2-1v.197A3.369 3.369 0 0 1 30 11s0 0 0 0h1c0 .625-.312 1.208-.832 1.555L29.5 13M10.5 9l-2-1v.197c0 1.127.563 2.178 1.5 2.803 0 0 0 0 0 0H9h0c0 .625.312 1.208.832 1.555L10.5 13" fill="none" stroke="#ef8e91"></path><g><path d="M10 23.536V20c0-5.523 4.477-10 10-10s10 4.477 10 10v3.536c-.589-.341-1.886 7.463-1.829 7.46a9.759 9.759 0 0 1-1.837 1.937l-3.211 2.568a4.998 4.998 0 0 1-6.246 0l-3.211-2.568a9.759 9.759 0 0 1-1.837-1.937c.057.003-1.24-7.801-1.829-7.46Z" fill="#fbd7c1"></path><path d="M10 23.536A4.001 4.001 0 0 1 16 27a4.001 4.001 0 0 1-4.171 3.996A9.765 9.765 0 0 1 10 25.305v-1.769Zm18.171 7.46A4.001 4.001 0 0 1 24 27a4.001 4.001 0 0 1 6-3.464v1.769a9.765 9.765 0 0 1-1.829 5.691Z" fill="#f9bfb1"></path>
  </g><g><path d="m15 30 3 2h3l4-2v.849c0 .762-.123 1.52-.364 2.243L24 35h-8l-.636-1.908A7.096 7.096 0 0 1 15 30.849V30Z" fill="none"></path><clipPath id="a"><path d="m15 30 3 2h3l4-2v.849c0 .762-.123 1.52-.364 2.243L24 35h-8l-.636-1.908A7.096 7.096 0 0 1 15 30.849V30Z"></path>
    </clipPath><g clip-path="url(#a)" fill="none" stroke="#e0af91" stroke-width="2"><path d="m24.5 30.5-1.75 3-.5-1.5 2.25-1.5ZM15.5 30.5l1.75 3 .5-1.5-2.25-1.5Z"></path>
    </g><path d="m16 31 .419-.419A3.103 3.103 0 0 1 20 30a3.103 3.103 0 0 1 3.581.581L24 31l-2 1h-3l-3-1Z" fill="#e74572"></path><path d="m16 31 .891 1.336A3.734 3.734 0 0 0 19.999 34h.002a3.734 3.734 0 0 0 3.108-1.664L24 31l-2 1h-3l-3-1Z" fill="#e74572"></path><path d="m15 30 3 2h3l4-2h3v5H12v-5h3Z" fill="none"></path><clipPath id="b"><path d="m15 30 3 2h3l4-2h3v5H12v-5h3Z"></path>
    </clipPath><g clip-path="url(#b)" fill="#fff"><path d="m24.5 30.5-1.75 3-.5-1.5 2.25-1.5ZM15.5 30.5l1.75 3 .5-1.5-2.25-1.5Z"></path>
    </g><path d="m15.5 30.5.019.014A7.426 7.426 0 0 0 19.977 32h.046a7.426 7.426 0 0 0 4.458-1.486l.019-.014" fill="none" stroke="#6f273b" stroke-width="1.5"></path><path d="M24.984 22.127 22 22.5v-.752A2.748 2.748 0 0 1 24.748 19h.449c1.176 0 2.325.348 3.303 1l-.959.767c.298.524.459 1.12.459 1.733v.5c0 .796-.316 1.559-.879 2.121A2.996 2.996 0 0 1 25 26h-.5l.484-3.873Zm-12.525-1.36L11.5 20c.978-.652 2.127-1 3.303-1h.449A2.748 2.748 0 0 1 18 21.748v.752l-2.984-.373L15.5 26H15a2.996 2.996 0 0 1-2.121-.879A2.996 2.996 0 0 1 12 23v-.5c0-.613.161-1.209.459-1.733Z" fill="#7e6c61"></path><path d="M27 22.5a2.5 2.5 0 1 0-5 0v1a2.5 2.5 0 1 0 5 0v-1ZM13 22.5a2.5 2.5 0 1 1 5 0v1a2.5 2.5 0 1 1-5 0v-1Z" fill="#fff"></path><path d="M15 22a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2ZM25 22a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0v-2Z" fill="#cd761d"></path><path d="M21.5 16.75 22 18l.446-.149A7.352 7.352 0 0 1 27.5 18l-.68-.397a7.434 7.434 0 0 0-4.969-.911 64.02 64.02 0 0 0-.351.058ZM18.5 16.75 18 18l-.446-.149A7.352 7.352 0 0 0 12.5 18l.68-.397a7.434 7.434 0 0 1 4.969-.911l.351.058Z" fill="#604333"></path><path d="m18.5 27 1.506 1 1.494-1" fill="none" stroke="#db9f7b" stroke-width="1.5"></path>
  </g><g><path d="m14 14 1-2-.445-.074a5.499 5.499 0 0 0-6.351 4.649l-.38 2.654a8.78 8.78 0 0 0 4.175 8.77L12 28l-.629-1.886A7.237 7.237 0 0 1 11 23.826v-5.665A4.386 4.386 0 0 1 13.999 14H14ZM32 27.573v-5.104 5.104ZM15.623 9.812c1.129-.042 1.458-.136 2.764.117.355.068 4.428.538 7.865 3.03C29.428 15.262 32 19.472 32 22.453v-2.224C32 14.027 26.973 9 20.771 9h-2.672c-.9 0-1.766.29-2.476.812Z" fill="#875033"></path><path d="M14 14v-.001c1.263-1.799 2.187-2.953 4.456-2.514.684.132 1.972.201 2.726.347 5.389 1.043 8.579 5.28 8.579 10.769 0 2.185-1.011 8.323-1.604 8.385.103.009.208.014.313.014h.103A3.427 3.427 0 0 0 32 27.573v-5.12A12.959 12.959 0 0 0 21.504 9.731l-2.172-.42a5.827 5.827 0 0 0-3.709.501A4.178 4.178 0 0 0 14 14Z" fill="#598b7e"></path><path d="M17 13.118v.883a6.097 6.097 0 0 0 4.902 5.979L22 20a6.847 6.847 0 0 1-1.299-1.814A5.983 5.983 0 0 0 25 20a9.489 9.489 0 0 1-.728-1.982A5.489 5.489 0 0 0 28.5 20a9.46 9.46 0 0 1-.914-2.966A8.833 8.833 0 0 1 29 21.827v3.051A3.22 3.22 0 0 1 25.002 28H25l.219.657a3.428 3.428 0 0 0 2.938 2.329 2.616 2.616 0 0 0 2.343-2.602v-5.931a11.458 11.458 0 0 0-9.281-11.249l-2.172-.421A4.35 4.35 0 0 0 14 13.999V14l1.635-.545A8.834 8.834 0 0 1 17 13.118Z" fill="#3ee6f1"></path>
  </g>
</svg>`
}, '/Users/melanie/Developer/melkat-blog/src/components/logo.astro')

const pageSize = 25
const description = 'hi there! please enjoy my blog!'
const title = 'melkat.blog'
const baseUrl = 'https://melkat.blog'
const defaultCover = '/cover.png'
const cxs = {
  a: 'text-cerulean-700 dark:text-cerulean-500 underline',
  aHover:
    'no-underline hover:underline text-cerulean-700 dark:text-cerulean-500',
  h1: 'font-light text-4xl my-6',
  h2: 'mb-4 text-xl font-medium',
  li: 'inline-block uppercase my-1',
  prose: 'prose prose-melkat dark:prose-invert',
}

const $$Astro$k = createAstro('https://melkat.blog')
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots)
  Astro2.self = $$Header
  const cx = {
    h1: 'font-light text-4xl my-6',
    link: 'no-underline hover:underline',
    logo: 'inline-block mr-2 align-middle',
  }
  return renderTemplate`${maybeRenderHead($$result)}<header role="banner">
  <h1${addAttribute(cx.h1, 'class')}>
    <a href="/"${addAttribute(cx.link, 'class')}>
      <div${addAttribute(cx.logo, 'class')} title="emoji by dzuk.zone">
        ${renderComponent($$result, 'Logo', $$Logo, { width: 64 })}
      </div>${title}
    </a>
  </h1>
</header>`
}, '/Users/melanie/Developer/melkat-blog/src/components/header.astro')

const $$Astro$j = createAstro('https://melkat.blog')
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots)
  Astro2.self = $$Button
  const cx =
    'rounded-md bg-cerulean-600 font-bold text-white transition-colors hover:bg-cerulean-500 active:bg-cerulean-700 text-center px-3 py-2 focus:ring-2 ring-offset-2 ring-sky-300 focus:outline-none border border-cerulean-600'
  const { className = cx, ...rest } = Astro2.props
  const El = rest.href ? 'a' : 'button'
  return renderTemplate`${renderComponent($$result, 'El', El, { class: className, ...rest }, { default: $$result2 => renderTemplate`${renderSlot($$result2, $$slots['default'])}` })}`
}, '/Users/melanie/Developer/melkat-blog/src/components/button.astro')

const $$Astro$i = createAstro('https://melkat.blog')
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots)
  Astro2.self = $$Search
  const cx = {
    form: 'mb-8 flex flex-row items-center',
    div: 'flex-grow mr-2',
    label: 'hidden',
    input:
      'appearance-none focus:outline-none bg-transparent border border-cerulean-700 rounded-md px-3 py-2 focus:ring-2 ring-offset-2 ring-sky-300 w-full',
    p: 'mb-8 italic',
  }
  const { defaultValue = '' } = Astro2.props
  return renderTemplate`${maybeRenderHead($$result)}<form action="/q"${addAttribute(cx.form, 'class')} method="get">
  <div${addAttribute(cx.div, 'class')}>
    <label${addAttribute(cx.label, 'class')} for="search">Search</label>
    <input${addAttribute(cx.input, 'class')} type="search" id="search" name="q" placeholder="Type to search"${addAttribute(defaultValue, 'value')}>
  </div>
  ${renderComponent($$result, 'Button', $$Button, { type: 'submit' }, { default: $$result2 => renderTemplate`Search` })}
</form>`
}, '/Users/melanie/Developer/melkat-blog/src/components/search.astro')

const $$Astro$h = createAstro('https://melkat.blog')
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots)
  Astro2.self = $$Footer
  const cx = {
    footer: 'text-center leading-normal',
    p: 'my-4',
    a: cxs.aHover,
  }
  const { showSearch = true } = Astro2.props
  return renderTemplate`${maybeRenderHead($$result)}<footer${addAttribute(cx.footer, 'class')} role="contentinfo">
  ${showSearch && renderTemplate`${renderComponent($$result, 'Search', $$Search, {})}`}
  <p${addAttribute(cx.p, 'class')}>
    <a${addAttribute(cx.a, 'class')} href="/d">browse domains</a>
    ${' \u2022 '}
    <a${addAttribute(cx.a, 'class')} href="/t">browse tags</a>
    <br>
    <a${addAttribute(cx.a, 'class')} href="/rss.xml">rss feed</a>
    ${' \u2022 '}
    <a${addAttribute(cx.a, 'class')} href="/feed.json">json feed</a>
  </p>
  <p${addAttribute(cx.p, 'class')}>
    melkat emoji by
    <a${addAttribute(cx.a, 'class')} href="https://dzuk.zone">dzuk</a>
  </p>
  <p${addAttribute(cx.p, 'class')}>
    a blog by
    <a${addAttribute(cx.a, 'class')} href="https://melaniekat.com" rel="me">melanie kat</a> &lt;3
  </p>
</footer>`
}, '/Users/melanie/Developer/melkat-blog/src/components/footer.astro')

const $$Astro$g = createAstro('https://melkat.blog')
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots)
  Astro2.self = $$BaseLayout
  const {
    className = 'font-sans max-w-xl mx-auto px-2',
    cover = defaultCover,
    description: description$1 = description,
    permalink = '',
    showSearch = true,
    title: title$1 = `${title} - ${description}`,
  } = Astro2.props
  return renderTemplate`<html lang="en">
  <head>
    <title>${title$1}</title>
    <meta charset="utf-8">
    <meta name="description"${addAttribute(description$1, 'content')}>
    <meta name="keywords" content="melkat, blog">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <meta property="og:description"${addAttribute(description$1, 'content')}>
    <meta property="og:image:height" content="630">
    <meta property="og:image:width" content="1200">
    <meta property="og:image"${addAttribute(`${baseUrl}${cover}`, 'content')}>
    <meta property="og:title"${addAttribute(title$1, 'content')}>
    <meta property="og:type" content="website">
    <meta property="og:url"${addAttribute(`${baseUrl}${permalink}`, 'content')}>
    <link rel="alternate" type="application/feed+json"${addAttribute(title, 'title')} href="/feed.json">
    <link rel="alternate" type="application/rss+xml"${addAttribute(title, 'title')} href="/rss.xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="canonical"${addAttribute(`${baseUrl}${permalink.replace(/\/1$/gi, '')}`, 'href')}>
    <link rel="icon" href="/favicon.ico">
    <link rel="mask-icon" sizes="any" href="/mask-icon.svg" color="#0caceb">
  ${renderHead($$result)}</head>
  <body${addAttribute(className, 'class')}>
    ${renderComponent($$result, 'Header', $$Header, {})}
    <main role="main">
      ${renderSlot($$result, $$slots['default'])}
    </main>
    ${renderComponent($$result, 'Footer', $$Footer, { showSearch: showSearch })}
  </body></html>`
}, '/Users/melanie/Developer/melkat-blog/src/layouts/base-layout.astro')

const getDomain = (link = '') =>
  link
    .replace(/^https?:\/\//, '')
    .split('/')[0]
    .split('.')
    .slice(-2)
    .join('.')

const $$Astro$f = createAstro('https://melkat.blog')
const $$Domain = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots)
  Astro2.self = $$Domain
  const cx = {
    a: cxs.aHover,
  }
  const { link } = Astro2.props
  const domain = getDomain(link)
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(cx.a, 'class')}${addAttribute(`/d/${domain}`, 'href')}${addAttribute(`Posts linking to ${domain}`, 'aria-label')}>${domain}
</a>`
}, '/Users/melanie/Developer/melkat-blog/src/components/domain.astro')

const formatDate = pubDate => {
  if (!pubDate) return ''
  const date = new Date(pubDate)
  const prettyDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
  return prettyDate
}

const $$Astro$e = createAstro('https://melkat.blog')
const $$Date = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots)
  Astro2.self = $$Date
  const { date } = Astro2.props
  return renderTemplate`${maybeRenderHead($$result)}<time${addAttribute(date.toISOString(), 'datetime')}>
  ${formatDate(date)}
</time>`
}, '/Users/melanie/Developer/melkat-blog/src/components/date.astro')

const $$Astro$d = createAstro('https://melkat.blog')
const $$Details = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots)
  Astro2.self = $$Details
  const cx = {
    details: 'uppercase text-sm my-4',
  }
  const { date, link, seperator = ' \u2022 ' } = Astro2.props
  return renderTemplate`${maybeRenderHead($$result)}<p${addAttribute(cx.details, 'class')}>
  ${link && renderTemplate`${renderComponent($$result, 'Domain', $$Domain, { link: link })}`}
  ${link ? seperator : ''}
  ${renderComponent($$result, 'Date', $$Date, { date: date })}
</p>`
}, '/Users/melanie/Developer/melkat-blog/src/components/details.astro')

const $$Astro$c = createAstro('https://melkat.blog')
const $$Body = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots)
  Astro2.self = $$Body
  const cx = {
    div: `${cxs.prose} my-4`,
  }
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(cx.div, 'class')}>${renderSlot($$result, $$slots['default'])}</div>`
}, '/Users/melanie/Developer/melkat-blog/src/components/body.astro')

function resolveSize(transform) {
  if (transform.width && transform.height) {
    return transform
  }
  if (!transform.width && !transform.height) {
    throw new Error(`"width" and "height" cannot both be undefined`)
  }
  if (!transform.aspectRatio) {
    throw new Error(
      `"aspectRatio" must be included if only "${transform.width ? 'width' : 'height'}" is provided`
    )
  }
  let aspectRatio
  if (typeof transform.aspectRatio === 'number') {
    aspectRatio = transform.aspectRatio
  } else {
    const [width, height] = transform.aspectRatio.split(':')
    aspectRatio = Number.parseInt(width) / Number.parseInt(height)
  }
  if (transform.width) {
    return {
      ...transform,
      width: transform.width,
      height: Math.round(transform.width / aspectRatio),
    }
  } else if (transform.height) {
    return {
      ...transform,
      width: Math.round(transform.height * aspectRatio),
      height: transform.height,
    }
  }
  return transform
}
async function resolveTransform(input) {
  if (typeof input.src === 'string') {
    return resolveSize(input)
  }
  const metadata = 'then' in input.src ? (await input.src).default : input.src
  let {
    width,
    height,
    aspectRatio,
    background,
    format = metadata.format,
    ...rest
  } = input
  if (!width && !height) {
    width = metadata.width
    height = metadata.height
  } else if (width) {
    let ratio =
      parseAspectRatio(aspectRatio) || metadata.width / metadata.height
    height = height || Math.round(width / ratio)
  } else if (height) {
    let ratio =
      parseAspectRatio(aspectRatio) || metadata.width / metadata.height
    width = width || Math.round(height * ratio)
  }
  return {
    ...rest,
    src: metadata.src,
    width,
    height,
    aspectRatio,
    format,
    background,
  }
}
async function getImage(transform) {
  var _a, _b, _c
  if (!transform.src) {
    throw new Error('[@astrojs/image] `src` is required')
  }
  let loader = (_a = globalThis.astroImage) == null ? void 0 : _a.loader
  if (!loader) {
    const { default: mod } = await Promise.resolve()
      .then(() => sharp)
      .catch(() => {
        throw new Error(
          '[@astrojs/image] Builtin image loader not found. (Did you remember to add the integration to your Astro config?)'
        )
      })
    loader = mod
    globalThis.astroImage = globalThis.astroImage || {}
    globalThis.astroImage.loader = loader
  }
  const resolved = await resolveTransform(transform)
  const attributes = await loader.getImageAttributes(resolved)
  const isDev =
    (_b = Object.assign(
      {
        BASE_URL: '/',
        MODE: 'production',
        DEV: false,
        PROD: true,
        SITE: '"https://melkat.blog"',
        SSR: true,
      },
      { _: process.env._, SSR: true }
    )) == null
      ? void 0
      : _b.DEV
  const isLocalImage = !isRemoteImage(resolved.src)
  const _loader =
    isDev && isLocalImage ? globalThis.astroImage.defaultLoader : loader
  if (!_loader) {
    throw new Error('@astrojs/image: loader not found!')
  }
  const { searchParams } = isSSRService(_loader)
    ? _loader.serializeTransform(resolved)
    : globalThis.astroImage.defaultLoader.serializeTransform(resolved)
  const imgSrc =
    !isLocalImage && resolved.src.startsWith('//')
      ? `https:${resolved.src}`
      : resolved.src
  let src
  if (/^[\/\\]?@astroimage/.test(imgSrc)) {
    src = `${imgSrc}?${searchParams.toString()}`
  } else {
    searchParams.set('href', imgSrc)
    src = `/_image?${searchParams.toString()}`
  }
  if ((_c = globalThis.astroImage) == null ? void 0 : _c.addStaticImage) {
    src = globalThis.astroImage.addStaticImage(resolved)
  }
  return {
    ...attributes,
    src,
  }
}

async function resolveAspectRatio({ src, aspectRatio }) {
  if (typeof src === 'string') {
    return parseAspectRatio(aspectRatio)
  } else {
    const metadata = 'then' in src ? (await src).default : src
    return parseAspectRatio(aspectRatio) || metadata.width / metadata.height
  }
}
async function resolveFormats({ src, formats }) {
  const unique = new Set(formats)
  if (typeof src === 'string') {
    unique.add(extname(src).replace('.', ''))
  } else {
    const metadata = 'then' in src ? (await src).default : src
    unique.add(extname(metadata.src).replace('.', ''))
  }
  return Array.from(unique).filter(Boolean)
}
async function getPicture(params) {
  const { src, alt, widths, fit, position, background } = params
  if (!src) {
    throw new Error('[@astrojs/image] `src` is required')
  }
  if (!widths || !Array.isArray(widths)) {
    throw new Error(
      '[@astrojs/image] at least one `width` is required. ex: `widths={[100]}`'
    )
  }
  const aspectRatio = await resolveAspectRatio(params)
  if (!aspectRatio) {
    throw new Error('`aspectRatio` must be provided for remote images')
  }
  const allFormats = await resolveFormats(params)
  const lastFormat = allFormats[allFormats.length - 1]
  const maxWidth = Math.max(...widths)
  let image
  async function getSource(format) {
    const imgs = await Promise.all(
      widths.map(async width => {
        const img = await getImage({
          src,
          alt,
          format,
          width,
          fit,
          position,
          background,
          aspectRatio,
        })
        if (format === lastFormat && width === maxWidth) {
          image = img
        }
        return `${img.src} ${width}w`
      })
    )
    return {
      type: mime.getType(format) || format,
      srcset: imgs.join(','),
    }
  }
  const sources = await Promise.all(allFormats.map(format => getSource(format)))
  return {
    sources,
    image,
  }
}

const $$Astro$b = createAstro('https://melkat.blog')
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots)
  Astro2.self = $$Image
  const { loading = 'lazy', decoding = 'async', ...props } = Astro2.props
  if (props.alt === void 0 || props.alt === null) {
    warnForMissingAlt()
  }
  const attrs = await getImage(props)
  return renderTemplate`${maybeRenderHead($$result)}<img${spreadAttributes(attrs)}${addAttribute(loading, 'loading')}${addAttribute(decoding, 'decoding')}>`
}, '/Users/melanie/Developer/melkat-blog/node_modules/@astrojs/image/components/Image.astro')

const $$Astro$a = createAstro('https://melkat.blog')
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots)
  Astro2.self = $$Picture
  const {
    src,
    alt,
    sizes,
    widths,
    aspectRatio,
    fit,
    background,
    position,
    formats = ['avif', 'webp'],
    loading = 'lazy',
    decoding = 'async',
    ...attrs
  } = Astro2.props
  if (alt === void 0 || alt === null) {
    warnForMissingAlt()
  }
  const { image, sources } = await getPicture({
    src,
    widths,
    formats,
    aspectRatio,
    fit,
    background,
    position,
    alt,
  })
  delete image.width
  delete image.height
  return renderTemplate`${maybeRenderHead($$result)}<picture>
	${sources.map(attrs2 => renderTemplate`<source${spreadAttributes(attrs2)}${addAttribute(sizes, 'sizes')}>`)}
	<img${spreadAttributes(image)}${addAttribute(loading, 'loading')}${addAttribute(decoding, 'decoding')}${spreadAttributes(attrs)}>
</picture>`
}, '/Users/melanie/Developer/melkat-blog/node_modules/@astrojs/image/components/Picture.astro')

let altWarningShown = false
function warnForMissingAlt() {
  if (altWarningShown === true) {
    return
  }
  altWarningShown = true
  console.warn(`
[@astrojs/image] "alt" text was not provided for an <Image> or <Picture> component.

A future release of @astrojs/image may throw a build error when "alt" text is missing.

The "alt" attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility. Set to an empty string (alt="") if the image is not a key part of the content (it's decoration or a tracking pixel).
`)
}

const $$Astro$9 = createAstro('https://melkat.blog')
const $$Cover = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots)
  Astro2.self = $$Cover
  const cx = {
    img: 'h-16 rounded ml-2 mb-2 float-right',
  }
  const { title, cover } = Astro2.props
  return renderTemplate`${renderComponent($$result, 'Picture', $$Picture, { alt: title, aspectRatio: 16 / 9, background: void 0, class: cx.img, sizes: '(min-device-pixel-ratio: 2) 360px, (min-device-pixel-ratio: 2) 240px, 120px)', src: cover, widths: [120, 240, 360] })}`
}, '/Users/melanie/Developer/melkat-blog/src/components/cover.astro')

const $$Astro$8 = createAstro('https://melkat.blog')
const $$Permalink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots)
  Astro2.self = $$Permalink
  const cx = {
    a: cxs.aHover,
  }
  const { title, url } = Astro2.props
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(cx.a, 'class')}${addAttribute(url, 'href')}${addAttribute(`Permalink for ${title}`, 'aria-label')}><span role="img" aria-label="Star icon">★</span> Permalink
</a>`
}, '/Users/melanie/Developer/melkat-blog/src/components/permalink.astro')

const $$Astro$7 = createAstro('https://melkat.blog')
const $$Tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots)
  Astro2.self = $$Tag
  const cx = {
    a: cxs.aHover,
  }
  const { tag } = Astro2.props
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(cx.a, 'class')}${addAttribute(`/t/${tag}`, 'href')}${addAttribute(`Posts tagged #${tag}`, 'aria-label')}>#${tag}
</a>`
}, '/Users/melanie/Developer/melkat-blog/src/components/tag.astro')

const $$Astro$6 = createAstro('https://melkat.blog')
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots)
  Astro2.self = $$Tags
  const cx = {
    li: cxs.li,
    tag: `${cxs.li} pr-1`,
    ul: 'list-none mt-4',
  }
  const { url, tags, title } = Astro2.props
  return renderTemplate`${maybeRenderHead($$result)}<ul${addAttribute(cx.ul, 'class')}>
  <li${addAttribute(cx.li, 'class')}>
    ${renderComponent($$result, 'Permalink', $$Permalink, { url: url, title: title })}
  </li>
  ${!!tags && renderTemplate`<li${addAttribute(cx.li, 'class')}>•</li>`}
  ${tags.map(
    tag => renderTemplate`<li${addAttribute(cx.tag, 'class')}>
        ${renderComponent($$result, 'Tag', $$Tag, { tag: tag })}
      </li>`
  )}
</ul>`
}, '/Users/melanie/Developer/melkat-blog/src/components/tags.astro')

const $$Astro$5 = createAstro('https://melkat.blog')
const $$PageHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots)
  Astro2.self = $$PageHeader
  const cx = {
    h2: 'mb-4 text-xl font-medium',
  }
  return renderTemplate`${maybeRenderHead($$result)}<h2${addAttribute(cx.h2, 'class')}>
  ${renderSlot($$result, $$slots['default'])}
</h2>`
}, '/Users/melanie/Developer/melkat-blog/src/components/page-header.astro')

const $$Astro$4 = createAstro('https://melkat.blog')
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots)
  Astro2.self = $$Title
  const { title = '', link = '', isExternal = false } = Astro2.props
  return renderTemplate`${renderComponent(
    $$result,
    'PageHeader',
    $$PageHeader,
    {},
    {
      default:
        $$result2 => renderTemplate`${maybeRenderHead($$result2)}<a${addAttribute(link, 'href')}${addAttribute(isExternal ? cxs.a : cxs.aHover, 'class')}${addAttribute(`${isExternal ? 'Link to ' : 'Permalink for '}${title}`, 'aria-label')}>
    ${title}
  </a>`,
    }
  )}`
}, '/Users/melanie/Developer/melkat-blog/src/components/title.astro')

const $$Astro$3 = createAstro('https://melkat.blog')
const $$Article = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots)
  Astro2.self = $$Article
  const cx = {
    article:
      'pb-8 mb-8 border-solid border-b cv-auto border-black/10 dark:border-white/25',
  }
  const { cover, date, link, tags = [], title, url } = Astro2.props
  return renderTemplate`${maybeRenderHead($$result)}<article${addAttribute(cx.article, 'class')}>
  ${cover && renderTemplate`${renderComponent($$result, 'Cover', $$Cover, { cover: cover, title: title })}`}
  ${renderComponent($$result, 'Title', $$Title, { title: title, link: link ? link : url, isExternal: !!link })}
  ${renderComponent($$result, 'Details', $$Details, { link: link, date: date })}
  ${renderComponent($$result, 'Body', $$Body, {}, { default: $$result2 => renderTemplate`${renderSlot($$result2, $$slots['default'])}` })}
  ${renderComponent($$result, 'Tags', $$Tags, { url: url, tags: tags, title: title })}
</article>`
}, '/Users/melanie/Developer/melkat-blog/src/components/article.astro')

const $$Astro$2 = createAstro('https://melkat.blog')
const $$PostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots)
  Astro2.self = $$PostLayout
  const { post } = Astro2.props
  const {
    data: { title: title$1, cover, date, link, tags },
    slug,
  } = post
  const permalink = `/p/${slug}`
  const isPermalink = `${Astro2.url}`.indexOf('/p/') > -1
  const Component = isPermalink ? $$BaseLayout : Fragment
  const { Content } = await post.render()
  return renderTemplate`${renderComponent($$result, 'Component', Component, { cover: cover, description: post.body.split('\n')[0], permalink: permalink, title: `${title} - ${title$1}` }, { default: $$result2 => renderTemplate`${renderComponent($$result2, 'Article', $$Article, { cover: cover, date: date, link: link, tags: tags, title: title$1, url: permalink }, { default: $$result3 => renderTemplate`${renderComponent($$result3, 'Content', Content, {})}` })}` })}`
}, '/Users/melanie/Developer/melkat-blog/src/layouts/post-layout.astro')

const byDate = (a, b) =>
  new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
const byCount = (a, b) => b.count - a.count

// astro-head-inject

const contentDir = '/src/content/'

const entryGlob = /* #__PURE__ */ Object.assign({
  '/src/content/posts/134400368.md': () => import('../134400368.3ffc4374.mjs'),
  '/src/content/posts/135019114.md': () => import('../135019114.6e5c2973.mjs'),
  '/src/content/posts/136222383.md': () => import('../136222383.df4e0caa.mjs'),
  '/src/content/posts/136224879.md': () => import('../136224879.6e1c9f84.mjs'),
  '/src/content/posts/136224935.md': () => import('../136224935.51b834c5.mjs'),
  '/src/content/posts/136763858.md': () => import('../136763858.d5572664.mjs'),
  '/src/content/posts/137009001.md': () => import('../137009001.32752abd.mjs'),
  '/src/content/posts/137009091.md': () => import('../137009091.0f1f9cbb.mjs'),
  '/src/content/posts/138288124.md': () => import('../138288124.25233e34.mjs'),
  '/src/content/posts/138860938.md': () => import('../138860938.34fa72c1.mjs'),
  '/src/content/posts/138917375.md': () => import('../138917375.5c8f1782.mjs'),
  '/src/content/posts/140113304.md': () => import('../140113304.a983c336.mjs'),
  '/src/content/posts/140113399.md': () => import('../140113399.a4aa3d6d.mjs'),
  '/src/content/posts/140113823.md': () => import('../140113823.cf826b1b.mjs'),
  '/src/content/posts/140166273.md': () => import('../140166273.93c6143b.mjs'),
  '/src/content/posts/140179091.md': () => import('../140179091.65a1eadd.mjs'),
  '/src/content/posts/140733004.md': () => import('../140733004.8f1d6e1b.mjs'),
  '/src/content/posts/141385956.md': () => import('../141385956.59753f7a.mjs'),
  '/src/content/posts/143872419.md': () => import('../143872419.59d9589b.mjs'),
  '/src/content/posts/143963126.md': () => import('../143963126.60d24eef.mjs'),
  '/src/content/posts/145124027.md': () => import('../145124027.bded4c84.mjs'),
  '/src/content/posts/145785077.md': () => import('../145785077.1b636ce6.mjs'),
  '/src/content/posts/147888188.md': () => import('../147888188.46e7910d.mjs'),
  '/src/content/posts/148032540.md': () => import('../148032540.dd786ab1.mjs'),
  '/src/content/posts/148553676.md': () => import('../148553676.649c61e4.mjs'),
  '/src/content/posts/148553739.md': () => import('../148553739.65048d09.mjs'),
  '/src/content/posts/148896468.md': () => import('../148896468.8762f42e.mjs'),
  '/src/content/posts/151856049.md': () => import('../151856049.12f7e0e8.mjs'),
  '/src/content/posts/151856082.md': () => import('../151856082.c0eed784.mjs'),
  '/src/content/posts/152139015.md': () => import('../152139015.47fe1425.mjs'),
  '/src/content/posts/152242486.md': () => import('../152242486.6dbfccf3.mjs'),
  '/src/content/posts/164564932.md': () => import('../164564932.df85dd95.mjs'),
  '/src/content/posts/164601922.md': () => import('../164601922.b1aae67c.mjs'),
  '/src/content/posts/170712813.md': () => import('../170712813.cdea074a.mjs'),
  '/src/content/posts/170712882.md': () => import('../170712882.a2e4c60f.mjs'),
  '/src/content/posts/170716411.md': () => import('../170716411.06d5ccb4.mjs'),
  '/src/content/posts/173958130.md': () => import('../173958130.7cbdd617.mjs'),
  '/src/content/posts/175577875.md': () => import('../175577875.4adb537d.mjs'),
  '/src/content/posts/175926290.md': () => import('../175926290.80d8c0b0.mjs'),
  '/src/content/posts/176035092.md': () => import('../176035092.73b30dba.mjs'),
  '/src/content/posts/176243918.md': () => import('../176243918.e5dd3492.mjs'),
  '/src/content/posts/183883395.md': () => import('../183883395.1c2293f1.mjs'),
  '/src/content/posts/183916694.md': () => import('../183916694.1e4f71dc.mjs'),
  '/src/content/posts/186172319.md': () => import('../186172319.32f1a339.mjs'),
  '/src/content/posts/187431259.md': () => import('../187431259.0179e123.mjs'),
  '/src/content/posts/188732962.md': () => import('../188732962.70c6142b.mjs'),
  '/src/content/posts/193430221.md': () => import('../193430221.4ac8c9ae.mjs'),
  '/src/content/posts/193431338.md': () => import('../193431338.c6945c97.mjs'),
  '/src/content/posts/193580658.md': () => import('../193580658.7ebe38a8.mjs'),
  '/src/content/posts/193615631.md': () => import('../193615631.d8a4862e.mjs'),
  '/src/content/posts/200629134.md': () => import('../200629134.0270d7fe.mjs'),
  '/src/content/posts/2019-in-media.md': () =>
    import('../2019-in-media.46bb6408.mjs'),
  '/src/content/posts/2022-in-media.md': () =>
    import('../2022-in-media.984a208e.mjs'),
  '/src/content/posts/207807923.md': () => import('../207807923.938853c7.mjs'),
  '/src/content/posts/210271102.md': () => import('../210271102.82643cd0.mjs'),
  '/src/content/posts/211267925.md': () => import('../211267925.03a5a419.mjs'),
  '/src/content/posts/212977273.md': () => import('../212977273.512e22c4.mjs'),
  '/src/content/posts/219342574.md': () => import('../219342574.7eab48ce.mjs'),
  '/src/content/posts/233159783.md': () => import('../233159783.38f7992b.mjs'),
  '/src/content/posts/239986466.md': () => import('../239986466.7cfdc573.mjs'),
  '/src/content/posts/249382845.md': () => import('../249382845.63c997a1.mjs'),
  '/src/content/posts/251027866.md': () => import('../251027866.96869c03.mjs'),
  '/src/content/posts/279869181.md': () => import('../279869181.b51f74a7.mjs'),
  '/src/content/posts/296971514.md': () => import('../296971514.3868b24d.mjs'),
  '/src/content/posts/300794824.md': () => import('../300794824.2cabe89e.mjs'),
  '/src/content/posts/311978752.md': () => import('../311978752.f9975b8d.mjs'),
  '/src/content/posts/331418114.md': () => import('../331418114.a6b2a37e.mjs'),
  '/src/content/posts/339029235.md': () => import('../339029235.0e4fe273.mjs'),
  '/src/content/posts/340858922.md': () => import('../340858922.abe29ee8.mjs'),
  '/src/content/posts/astro-rewrite.md': () =>
    import('../astro-rewrite.2b5084a8.mjs'),
  '/src/content/posts/commute.md': () => import('../commute.cc538ffb.mjs'),
  '/src/content/posts/dankpods-starter.md': () =>
    import('../dankpods-starter.875c6312.mjs'),
  '/src/content/posts/essential-apps.md': () =>
    import('../essential-apps.6e10120f.mjs'),
  '/src/content/posts/falsehoods-around-names.md': () =>
    import('../falsehoods-around-names.58156e46.mjs'),
  '/src/content/posts/gft-0722.md': () => import('../gft-0722.0b9586b2.mjs'),
  '/src/content/posts/lastfm-to-mastodon.md': () =>
    import('../lastfm-to-mastodon.fc196b2c.mjs'),
  '/src/content/posts/lil-gator-game.md': () =>
    import('../lil-gator-game.0805c1e9.mjs'),
  '/src/content/posts/links-for-2023-02-16.md': () =>
    import('../links-for-2023-02-16.709de073.mjs'),
  '/src/content/posts/mutuals-social.md': () =>
    import('../mutuals-social.fa836056.mjs'),
  '/src/content/posts/omglol-shortcuts.md': () =>
    import('../omglol-shortcuts.1b20cc3f.mjs'),
  '/src/content/posts/sf-jury-summon.md': () =>
    import('../sf-jury-summon.8caf9932.mjs'),
  '/src/content/posts/template.md': () => import('../template.d41340d0.mjs'),
  '/src/content/posts/toot-cards.md': () =>
    import('../toot-cards.bb435172.mjs'),
  '/src/content/posts/uses.md': () => import('../uses.93547ffa.mjs'),
  '/src/content/posts/verify-commits.md': () =>
    import('../verify-commits.57945790.mjs'),
  '/src/content/posts/vr-sexism.md': () => import('../vr-sexism.16a5dc42.mjs'),
})
const collectionToEntryMap = createCollectionToGlobResultMap({
  globResult: entryGlob,
  contentDir,
})

const renderEntryGlob = /* #__PURE__ */ Object.assign({
  '/src/content/posts/134400368.md': () => import('../134400368.3a6a4b7b.mjs'),
  '/src/content/posts/135019114.md': () => import('../135019114.defb606a.mjs'),
  '/src/content/posts/136222383.md': () => import('../136222383.877505f8.mjs'),
  '/src/content/posts/136224879.md': () => import('../136224879.ed25bd9a.mjs'),
  '/src/content/posts/136224935.md': () => import('../136224935.24474e33.mjs'),
  '/src/content/posts/136763858.md': () => import('../136763858.67135ef6.mjs'),
  '/src/content/posts/137009001.md': () => import('../137009001.67519130.mjs'),
  '/src/content/posts/137009091.md': () => import('../137009091.90855a91.mjs'),
  '/src/content/posts/138288124.md': () => import('../138288124.a9a9fb6e.mjs'),
  '/src/content/posts/138860938.md': () => import('../138860938.5240afec.mjs'),
  '/src/content/posts/138917375.md': () => import('../138917375.49de80c0.mjs'),
  '/src/content/posts/140113304.md': () => import('../140113304.16536659.mjs'),
  '/src/content/posts/140113399.md': () => import('../140113399.666049f1.mjs'),
  '/src/content/posts/140113823.md': () => import('../140113823.fa22f15e.mjs'),
  '/src/content/posts/140166273.md': () => import('../140166273.2151d365.mjs'),
  '/src/content/posts/140179091.md': () => import('../140179091.dc863718.mjs'),
  '/src/content/posts/140733004.md': () => import('../140733004.67372210.mjs'),
  '/src/content/posts/141385956.md': () => import('../141385956.f649db1a.mjs'),
  '/src/content/posts/143872419.md': () => import('../143872419.4b680ade.mjs'),
  '/src/content/posts/143963126.md': () => import('../143963126.5d5cae81.mjs'),
  '/src/content/posts/145124027.md': () => import('../145124027.ac024c94.mjs'),
  '/src/content/posts/145785077.md': () => import('../145785077.98a1dc98.mjs'),
  '/src/content/posts/147888188.md': () => import('../147888188.61fd81a9.mjs'),
  '/src/content/posts/148032540.md': () => import('../148032540.dd781ea8.mjs'),
  '/src/content/posts/148553676.md': () => import('../148553676.9a02977f.mjs'),
  '/src/content/posts/148553739.md': () => import('../148553739.1d15695d.mjs'),
  '/src/content/posts/148896468.md': () => import('../148896468.b27c0010.mjs'),
  '/src/content/posts/151856049.md': () => import('../151856049.ba692b42.mjs'),
  '/src/content/posts/151856082.md': () => import('../151856082.9e02f14c.mjs'),
  '/src/content/posts/152139015.md': () => import('../152139015.df138ad2.mjs'),
  '/src/content/posts/152242486.md': () => import('../152242486.22ec235c.mjs'),
  '/src/content/posts/164564932.md': () => import('../164564932.141e3711.mjs'),
  '/src/content/posts/164601922.md': () => import('../164601922.ce9555a4.mjs'),
  '/src/content/posts/170712813.md': () => import('../170712813.bc436d1b.mjs'),
  '/src/content/posts/170712882.md': () => import('../170712882.c40cb937.mjs'),
  '/src/content/posts/170716411.md': () => import('../170716411.e88cbcd8.mjs'),
  '/src/content/posts/173958130.md': () => import('../173958130.3561a06f.mjs'),
  '/src/content/posts/175577875.md': () => import('../175577875.179ea668.mjs'),
  '/src/content/posts/175926290.md': () => import('../175926290.1aab69d3.mjs'),
  '/src/content/posts/176035092.md': () => import('../176035092.7d615e9a.mjs'),
  '/src/content/posts/176243918.md': () => import('../176243918.bf9d6511.mjs'),
  '/src/content/posts/183883395.md': () => import('../183883395.e99e80a3.mjs'),
  '/src/content/posts/183916694.md': () => import('../183916694.3b96a66a.mjs'),
  '/src/content/posts/186172319.md': () => import('../186172319.633d48c4.mjs'),
  '/src/content/posts/187431259.md': () => import('../187431259.bee06500.mjs'),
  '/src/content/posts/188732962.md': () => import('../188732962.8f5f634b.mjs'),
  '/src/content/posts/193430221.md': () => import('../193430221.62c9ea59.mjs'),
  '/src/content/posts/193431338.md': () => import('../193431338.15e39320.mjs'),
  '/src/content/posts/193580658.md': () => import('../193580658.445096db.mjs'),
  '/src/content/posts/193615631.md': () => import('../193615631.0dc9058a.mjs'),
  '/src/content/posts/200629134.md': () => import('../200629134.58d81dc9.mjs'),
  '/src/content/posts/2019-in-media.md': () =>
    import('../2019-in-media.cd990c40.mjs'),
  '/src/content/posts/2022-in-media.md': () =>
    import('../2022-in-media.e342664e.mjs'),
  '/src/content/posts/207807923.md': () => import('../207807923.2122e062.mjs'),
  '/src/content/posts/210271102.md': () => import('../210271102.2b0ee962.mjs'),
  '/src/content/posts/211267925.md': () => import('../211267925.202e581d.mjs'),
  '/src/content/posts/212977273.md': () => import('../212977273.cc8cc2dc.mjs'),
  '/src/content/posts/219342574.md': () => import('../219342574.3fa2f225.mjs'),
  '/src/content/posts/233159783.md': () => import('../233159783.3b955b71.mjs'),
  '/src/content/posts/239986466.md': () => import('../239986466.b88ae9c7.mjs'),
  '/src/content/posts/249382845.md': () => import('../249382845.12c98515.mjs'),
  '/src/content/posts/251027866.md': () => import('../251027866.cf9fc84f.mjs'),
  '/src/content/posts/279869181.md': () => import('../279869181.d12613ae.mjs'),
  '/src/content/posts/296971514.md': () => import('../296971514.70b51caa.mjs'),
  '/src/content/posts/300794824.md': () => import('../300794824.7b6d1f5e.mjs'),
  '/src/content/posts/311978752.md': () => import('../311978752.97cc45c3.mjs'),
  '/src/content/posts/331418114.md': () => import('../331418114.0e0e1faf.mjs'),
  '/src/content/posts/339029235.md': () => import('../339029235.7851aa3e.mjs'),
  '/src/content/posts/340858922.md': () => import('../340858922.432fdb74.mjs'),
  '/src/content/posts/astro-rewrite.md': () =>
    import('../astro-rewrite.6f96fcc7.mjs'),
  '/src/content/posts/commute.md': () => import('../commute.e5a35135.mjs'),
  '/src/content/posts/dankpods-starter.md': () =>
    import('../dankpods-starter.8b1d2ea5.mjs'),
  '/src/content/posts/essential-apps.md': () =>
    import('../essential-apps.2d435199.mjs'),
  '/src/content/posts/falsehoods-around-names.md': () =>
    import('../falsehoods-around-names.a535dfe2.mjs'),
  '/src/content/posts/gft-0722.md': () => import('../gft-0722.8419d8fe.mjs'),
  '/src/content/posts/lastfm-to-mastodon.md': () =>
    import('../lastfm-to-mastodon.b99eae7f.mjs'),
  '/src/content/posts/lil-gator-game.md': () =>
    import('../lil-gator-game.2720ebc5.mjs'),
  '/src/content/posts/links-for-2023-02-16.md': () =>
    import('../links-for-2023-02-16.bbc9070b.mjs'),
  '/src/content/posts/mutuals-social.md': () =>
    import('../mutuals-social.b9aa7d91.mjs'),
  '/src/content/posts/omglol-shortcuts.md': () =>
    import('../omglol-shortcuts.7615d263.mjs'),
  '/src/content/posts/sf-jury-summon.md': () =>
    import('../sf-jury-summon.83199f95.mjs'),
  '/src/content/posts/template.md': () => import('../template.a5bd9736.mjs'),
  '/src/content/posts/toot-cards.md': () =>
    import('../toot-cards.c43612d0.mjs'),
  '/src/content/posts/uses.md': () => import('../uses.c402554c.mjs'),
  '/src/content/posts/verify-commits.md': () =>
    import('../verify-commits.34e4f44b.mjs'),
  '/src/content/posts/vr-sexism.md': () => import('../vr-sexism.9d35c64a.mjs'),
})
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
  globResult: renderEntryGlob,
  contentDir,
})

const getCollection = createGetCollection({
  collectionToEntryMap,
  collectionToRenderEntryMap,
})

const noDrafts = ({ data }) => !data.draft
const hasLinkNoDrafts = ({ data }) => !data.draft && !!data.link
const hasTagsNoDrafts = ({ data }) => !data.draft && !!data.tags
const hasLink = ({ data }) => !!data.link
const hasTags = ({ data }) => !!data.tags

const $$Astro$1 = createAstro('https://melkat.blog')
const $$Browse = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots)
  Astro2.self = $$Browse
  const cx = {
    div: cxs.prose,
  }
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(cx.div, 'class')}>
  <h2>Browse by</h2>
  <ul>
    <li>
      <a href="/d">Domain</a>
    </li>
    <li>
      <a href="/t">Tag</a>
    </li>
  </ul>
</div>`
}, '/Users/melanie/Developer/melkat-blog/src/components/browse.astro')

const uf = new uFuzzy()
const getSearchableDb = db =>
  map(
    db,
    ({ body = '', data: { title, tags, link } }) =>
      `${title} ${body} ${link} ${tags.join(' ')}`
  )
function fuzzySearch(q, entries) {
  if (!q || !entries) {
    return []
  }
  const stringDb = getSearchableDb(entries)
  const idxs = uf.filter(stringDb, q)
  const info = uf.info(idxs, stringDb, q)
  const order = uf.sort(info, stringDb, q)
  return map(order, i => {
    const idx = idxs[i]
    return entries[idx]
  }).slice(0, pageSize * 2)
}

const $$Astro = createAstro('https://melkat.blog')
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
  Astro2.self = $$Index
  const { searchParams } = Astro2.url
  const query = searchParams.get('q') || ''
  let allPosts = await getCollection('posts', noDrafts)
  allPosts = allPosts.sort(byDate)
  const results = fuzzySearch(query, allPosts)
  return renderTemplate`${renderComponent($$result, 'Layout', $$BaseLayout, { title: 'melkat.blog - Search', permalink: '/q', showSearch: false }, { default: $$result2 => renderTemplate`${renderComponent($$result2, 'PageHeader', $$PageHeader, {}, { default: $$result3 => renderTemplate`Search` })}${renderComponent($$result2, 'Search', $$Search, { defaultValue: query })}${results.map(entry => renderTemplate`${renderComponent($$result2, 'PostLayout', $$PostLayout, { post: entry })}`)}${results.length <= 0 && renderTemplate`${renderComponent($$result2, 'Browse', $$Browse, {})}`}` })}`
}, '/Users/melanie/Developer/melkat-blog/src/pages/q/index.astro')

const $$file = '/Users/melanie/Developer/melkat-blog/src/pages/q/index.astro'
const $$url = '/q'

const _page10 = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Index,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

export {
  $$PostLayout as $,
  _page0 as _,
  $$BaseLayout as a,
  byDate as b,
  cxs as c,
  description as d,
  baseUrl as e,
  byCount as f,
  getCollection as g,
  getDomain as h,
  hasLink as i,
  hasTags as j,
  hasLinkNoDrafts as k,
  $$PageHeader as l,
  hasTagsNoDrafts as m,
  noDrafts as n,
  _page10 as o,
  pageSize as p,
  title as t,
}
