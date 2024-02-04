/* empty css                         */ import {
  c as createAstro,
  b as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  e as addAttribute,
  f as renderComponent,
  g as renderSlot,
  h as renderHead,
  F as Fragment,
  A as AstroError,
  C as CollectionDoesNotExistError,
  i as UnknownContentCollectionError,
  j as renderUniqueStylesheet,
  k as renderScriptElement,
  l as createHeadAndContent,
  u as unescapeHTML,
} from '../astro_13acd68d.mjs'
import 'clsx'
/* empty css                            */ import { prependForwardSlash } from '@astrojs/internal-helpers/path'
import { $ as $$Image } from './image-endpoint_2bac92e6.mjs'
import map from 'lodash/map.js'
import uFuzzy from '@leeoniya/ufuzzy'

const $$Astro$i = createAstro('https://melkat.blog')
const $$Logo = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots)
    Astro2.self = $$Logo
    const { className, width } = Astro2.props
    return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, 'class')}${addAttribute(width, 'width')} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><path fill="none" d="M0 0h40v40H0z"></path><path d="M25.373 8.27a12.995 12.995 0 0 1 6.126-3.841L33 4l.296 2.965a14.918 14.918 0 0 1-1.663 8.472A11.992 11.992 0 0 1 33 20.998v7.392a1.561 1.561 0 0 0 3 .61v.631A3.369 3.369 0 0 1 32.631 33h-.676a3.368 3.368 0 0 1-1.97-.636A5.116 5.116 0 0 0 32 35h-.001a8.108 8.108 0 0 1-3.705-.453c.081.19.168.378.261.563L29 36a9 9 0 0 1-4.781-1.375l-1.096.876a4.998 4.998 0 0 1-6.246 0l-1.096-.876A9 9 0 0 1 11 36l.445-.89c.093-.185.18-.373.261-.563A8.108 8.108 0 0 1 8.001 35H8a5.116 5.116 0 0 0 2.015-2.636 3.368 3.368 0 0 1-1.97.636h-.676A3.369 3.369 0 0 1 4 29.631V29l.002.005A1.562 1.562 0 0 0 7 28.39v-7.392c0-1.955.477-3.86 1.367-5.561a14.918 14.918 0 0 1-1.663-8.472L7 4l1.501.429a12.995 12.995 0 0 1 6.126 3.841A12.003 12.003 0 0 1 20 7s0 0 0 0c1.883 0 3.721.443 5.373 1.27Z" fill="none" stroke="#000" stroke-width="4"></path><path d="M20 27.056A9 9 0 0 1 11 36l.445-.89c.093-.185.18-.373.261-.563A8.108 8.108 0 0 1 8.001 35H8a5.117 5.117 0 0 0 2.126-5.498l-.086-.341a16.022 16.022 0 0 1 .138-8.285L11 18h5a.997.997 0 0 1 1 1h6v-.001c0-.552.447-.999.999-.999H29l.822 2.876c.772 2.702.819 5.559.138 8.285l-.086.341A5.117 5.117 0 0 0 32 35h-.001a8.108 8.108 0 0 1-3.705-.453c.081.19.168.378.261.563L29 36a9 9 0 0 1-9-9v.056Z" fill="#573421"></path><path d="M8.815 14.653A11.996 11.996 0 0 1 20 7a11.996 11.996 0 0 1 11.185 7.653A11.994 11.994 0 0 1 33 20.998v7.392a1.561 1.561 0 0 0 3 .61v.631A3.369 3.369 0 0 1 32.631 33h-.676a3.369 3.369 0 0 1-2.925-1.698L26.571 27H13.429l-2.459 4.302A3.369 3.369 0 0 1 8.045 33h-.676A3.369 3.369 0 0 1 4 29.631V29l.002.005A1.562 1.562 0 0 0 7 28.39v-7.392c0-2.261.638-4.457 1.815-6.345Z" fill="#875033"></path><path d="m24 19-1-7 .443-.885a12.998 12.998 0 0 1 8.056-6.686L33 4l.296 2.965a14.916 14.916 0 0 1-4.295 12.034L29 19h-5Z" fill="#fbfbfb"></path><path d="m24 19-1-7 .443-.885a12.998 12.998 0 0 1 8.056-6.686L33 4l.296 2.965a14.916 14.916 0 0 1-4.295 12.034L29 19h-5Zm4.577-1h-3.71l-.833-5.832.303-.606a12.004 12.004 0 0 1 7.436-6.172l.351-.1.177 1.774A13.918 13.918 0 0 1 28.577 18Zm-4.712-5.499-.019.031.019-.031Zm.028-.053-.022.043.022-.043ZM16 19l1-7-.443-.885a12.998 12.998 0 0 0-8.056-6.686L7 4l-.296 2.965a14.916 14.916 0 0 0 4.295 12.034L11 19h5Z" fill="#fbfbfb"></path><path d="M11.949 19H11l-.001-.001A14.916 14.916 0 0 1 6.704 6.965L7 4l1.501.429a12.998 12.998 0 0 1 8.056 6.686L17 12l-1 7h-4c0-.118-.021-.232-.058-.337a.644.644 0 0 1 .007.337Zm-.242-.707.006.006-.006-.006Zm4.259-6.125L15.133 18h-3.71A13.918 13.918 0 0 1 7.699 7.064l.177-1.774.351.1a12.004 12.004 0 0 1 7.436 6.172l.303.606Z" fill="#fbfbfb"></path><path d="m32.5 5-1.026.456a9.69 9.69 0 0 0-4.972 5.039L25 14v5h3a14.565 14.565 0 0 0 4.679-12.387L32.5 5ZM7.5 5l1.026.456a9.69 9.69 0 0 1 4.972 5.039L15 14v5h-3A14.565 14.565 0 0 1 7.321 6.613L7.5 5Z" fill="#ffb4b7"></path><path d="m29.5 9 2-1v.197A3.369 3.369 0 0 1 30 11s0 0 0 0h1c0 .625-.312 1.208-.832 1.555L29.5 13M10.5 9l-2-1v.197c0 1.127.563 2.178 1.5 2.803 0 0 0 0 0 0H9h0c0 .625.312 1.208.832 1.555L10.5 13" fill="none" stroke="#ef8e91"></path><g><path d="M10 23.536V20c0-5.523 4.477-10 10-10s10 4.477 10 10v3.536c-.589-.341-1.886 7.463-1.829 7.46a9.759 9.759 0 0 1-1.837 1.937l-3.211 2.568a4.998 4.998 0 0 1-6.246 0l-3.211-2.568a9.759 9.759 0 0 1-1.837-1.937c.057.003-1.24-7.801-1.829-7.46Z" fill="#fbd7c1"></path><path d="M10 23.536A4.001 4.001 0 0 1 16 27a4.001 4.001 0 0 1-4.171 3.996A9.765 9.765 0 0 1 10 25.305v-1.769Zm18.171 7.46A4.001 4.001 0 0 1 24 27a4.001 4.001 0 0 1 6-3.464v1.769a9.765 9.765 0 0 1-1.829 5.691Z" fill="#f9bfb1"></path></g><g><path d="m15 30 3 2h3l4-2v.849c0 .762-.123 1.52-.364 2.243L24 35h-8l-.636-1.908A7.096 7.096 0 0 1 15 30.849V30Z" fill="none"></path><clipPath id="a"><path d="m15 30 3 2h3l4-2v.849c0 .762-.123 1.52-.364 2.243L24 35h-8l-.636-1.908A7.096 7.096 0 0 1 15 30.849V30Z"></path></clipPath><g clip-path="url(#a)" fill="none" stroke="#e0af91" stroke-width="2"><path d="m24.5 30.5-1.75 3-.5-1.5 2.25-1.5ZM15.5 30.5l1.75 3 .5-1.5-2.25-1.5Z"></path></g><path d="m16 31 .419-.419A3.103 3.103 0 0 1 20 30a3.103 3.103 0 0 1 3.581.581L24 31l-2 1h-3l-3-1Z" fill="#e74572"></path><path d="m16 31 .891 1.336A3.734 3.734 0 0 0 19.999 34h.002a3.734 3.734 0 0 0 3.108-1.664L24 31l-2 1h-3l-3-1Z" fill="#e74572"></path><path d="m15 30 3 2h3l4-2h3v5H12v-5h3Z" fill="none"></path><clipPath id="b"><path d="m15 30 3 2h3l4-2h3v5H12v-5h3Z"></path></clipPath><g clip-path="url(#b)" fill="#fff"><path d="m24.5 30.5-1.75 3-.5-1.5 2.25-1.5ZM15.5 30.5l1.75 3 .5-1.5-2.25-1.5Z"></path></g><path d="m15.5 30.5.019.014A7.426 7.426 0 0 0 19.977 32h.046a7.426 7.426 0 0 0 4.458-1.486l.019-.014" fill="none" stroke="#6f273b" stroke-width="1.5"></path><path d="M24.984 22.127 22 22.5v-.752A2.748 2.748 0 0 1 24.748 19h.449c1.176 0 2.325.348 3.303 1l-.959.767c.298.524.459 1.12.459 1.733v.5c0 .796-.316 1.559-.879 2.121A2.996 2.996 0 0 1 25 26h-.5l.484-3.873Zm-12.525-1.36L11.5 20c.978-.652 2.127-1 3.303-1h.449A2.748 2.748 0 0 1 18 21.748v.752l-2.984-.373L15.5 26H15a2.996 2.996 0 0 1-2.121-.879A2.996 2.996 0 0 1 12 23v-.5c0-.613.161-1.209.459-1.733Z" fill="#7e6c61"></path><path d="M27 22.5a2.5 2.5 0 1 0-5 0v1a2.5 2.5 0 1 0 5 0v-1ZM13 22.5a2.5 2.5 0 1 1 5 0v1a2.5 2.5 0 1 1-5 0v-1Z" fill="#fff"></path><path d="M15 22a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2ZM25 22a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0v-2Z" fill="#cd761d"></path><path d="M21.5 16.75 22 18l.446-.149A7.352 7.352 0 0 1 27.5 18l-.68-.397a7.434 7.434 0 0 0-4.969-.911 64.02 64.02 0 0 0-.351.058ZM18.5 16.75 18 18l-.446-.149A7.352 7.352 0 0 0 12.5 18l.68-.397a7.434 7.434 0 0 1 4.969-.911l.351.058Z" fill="#604333"></path><path d="m18.5 27 1.506 1 1.494-1" fill="none" stroke="#db9f7b" stroke-width="1.5"></path></g><g><path d="m14 14 1-2-.445-.074a5.499 5.499 0 0 0-6.351 4.649l-.38 2.654a8.78 8.78 0 0 0 4.175 8.77L12 28l-.629-1.886A7.237 7.237 0 0 1 11 23.826v-5.665A4.386 4.386 0 0 1 13.999 14H14ZM32 27.573v-5.104 5.104ZM15.623 9.812c1.129-.042 1.458-.136 2.764.117.355.068 4.428.538 7.865 3.03C29.428 15.262 32 19.472 32 22.453v-2.224C32 14.027 26.973 9 20.771 9h-2.672c-.9 0-1.766.29-2.476.812Z" fill="#875033"></path><path d="M14 14v-.001c1.263-1.799 2.187-2.953 4.456-2.514.684.132 1.972.201 2.726.347 5.389 1.043 8.579 5.28 8.579 10.769 0 2.185-1.011 8.323-1.604 8.385.103.009.208.014.313.014h.103A3.427 3.427 0 0 0 32 27.573v-5.12A12.959 12.959 0 0 0 21.504 9.731l-2.172-.42a5.827 5.827 0 0 0-3.709.501A4.178 4.178 0 0 0 14 14Z" fill="#598b7e"></path><path d="M17 13.118v.883a6.097 6.097 0 0 0 4.902 5.979L22 20a6.847 6.847 0 0 1-1.299-1.814A5.983 5.983 0 0 0 25 20a9.489 9.489 0 0 1-.728-1.982A5.489 5.489 0 0 0 28.5 20a9.46 9.46 0 0 1-.914-2.966A8.833 8.833 0 0 1 29 21.827v3.051A3.22 3.22 0 0 1 25.002 28H25l.219.657a3.428 3.428 0 0 0 2.938 2.329 2.616 2.616 0 0 0 2.343-2.602v-5.931a11.458 11.458 0 0 0-9.281-11.249l-2.172-.421A4.35 4.35 0 0 0 14 13.999V14l1.635-.545A8.834 8.834 0 0 1 17 13.118Z" fill="#3ee6f1"></path></g></svg>`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/logo.astro',
  void 0
)

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

const $$Astro$h = createAstro('https://melkat.blog')
const $$Header = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots)
    Astro2.self = $$Header
    const cx = {
      h1: 'font-light text-4xl my-6',
      link: 'no-underline hover:underline',
      logo: 'inline-block mr-2 align-middle',
    }
    return renderTemplate`${maybeRenderHead()}<header role="banner"><h1${addAttribute(cx.h1, 'class')}><a href="/"${addAttribute(cx.link, 'class')}><div${addAttribute(cx.logo, 'class')} title="emoji by dzuk.zone">${renderComponent($$result, 'Logo', $$Logo, { width: 64 })}</div>${title}</a></h1></header>`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/header.astro',
  void 0
)

const $$Astro$g = createAstro('https://melkat.blog')
const $$Button = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots)
    Astro2.self = $$Button
    const cx =
      'rounded-lg bg-cerulean-600 font-bold text-white transition-colors hover:bg-cerulean-500 active:bg-cerulean-700 text-center px-3 py-2 focus:ring-2 ring-offset-2 ring-sky-300 focus:outline-none border border-cerulean-600'
    const { className = cx, ...rest } = Astro2.props
    const El = rest.href ? 'a' : 'button'
    return renderTemplate`${renderComponent($$result, 'El', El, { class: className, ...rest }, { default: $$result2 => renderTemplate`${renderSlot($$result2, $$slots['default'])}` })}`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/button.astro',
  void 0
)

const $$Astro$f = createAstro('https://melkat.blog')
const $$Search = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots)
    Astro2.self = $$Search
    const cx = {
      form: 'mb-8 flex flex-row items-center',
      div: 'flex-grow mr-2',
      label: 'hidden',
      input:
        'appearance-none focus:outline-none bg-transparent border border-cerulean-700 rounded-lg px-3 py-2 focus:ring-2 ring-offset-2 ring-sky-300 w-full',
      p: 'mb-8 italic',
    }
    const { defaultValue = '' } = Astro2.props
    return renderTemplate`${maybeRenderHead()}<form action="/q"${addAttribute(cx.form, 'class')} method="get"><div${addAttribute(cx.div, 'class')}><label${addAttribute(cx.label, 'class')} for="search">Search</label><input${addAttribute(cx.input, 'class')} type="search" id="search" name="q" placeholder="Search for posts"${addAttribute(defaultValue, 'value')}></div>${renderComponent($$result, 'Button', $$Button, { type: 'submit' }, { default: $$result2 => renderTemplate`Search` })}</form>`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/search.astro',
  void 0
)

const $$Astro$e = createAstro('https://melkat.blog')
const $$Footer = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots)
    Astro2.self = $$Footer
    const cx = {
      a: cxs.aHover,
      footer: 'text-center leading-normal',
      p: 'my-4',
      search: 'max-w-md mx-auto',
    }
    const { showSearch = true } = Astro2.props
    return renderTemplate`${maybeRenderHead()}<footer${addAttribute(cx.footer, 'class')} role="contentinfo">${showSearch && renderTemplate`<div${addAttribute(cx.search, 'class')}>${renderComponent($$result, 'Search', $$Search, {})}</div>`}<p${addAttribute(cx.p, 'class')}><a${addAttribute(cx.a, 'class')} href="/d">browse domains</a>${' \u2022 '}<a${addAttribute(cx.a, 'class')} href="/t">browse tags</a><br><a${addAttribute(cx.a, 'class')} href="/rss.xml">rss feed</a>${' \u2022 '}<a${addAttribute(cx.a, 'class')} href="/feed.json">json feed</a></p><p${addAttribute(cx.p, 'class')}>
melkat emoji by
<a${addAttribute(cx.a, 'class')} href="https://dzuk.zone">dzuk</a></p><p${addAttribute(cx.p, 'class')}>
a blog by
<a${addAttribute(cx.a, 'class')} href="https://melaniekat.com" rel="me">melanie kat</a> &lt;3
</p></footer>`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/footer.astro',
  void 0
)

const $$Astro$d = createAstro('https://melkat.blog')
const $$BaseLayout = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots)
    Astro2.self = $$BaseLayout
    const {
      className = 'font-sans max-w-xl mx-auto px-2',
      cover = defaultCover,
      description: description$1 = description,
      permalink = '',
      showSearch = true,
      title: title$1 = `${title} - ${description}`,
    } = Astro2.props
    return renderTemplate`<html lang="en"><head><title>${title$1}</title><meta charset="utf-8"><meta name="description"${addAttribute(description$1, 'content')}><meta name="keywords" content="melkat, blog"><meta name="viewport" content="initial-scale=1.0, width=device-width"><meta property="og:description"${addAttribute(description$1, 'content')}><meta property="og:image:height" content="630"><meta property="og:image:width" content="1200"><meta property="og:image"${addAttribute(`${baseUrl}${cover}`, 'content')}><meta property="og:title"${addAttribute(title$1, 'content')}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(`${baseUrl}${permalink}`, 'content')}><link rel="alternate" type="application/feed+json"${addAttribute(title, 'title')} href="/feed.json"><link rel="alternate" type="application/rss+xml"${addAttribute(title, 'title')} href="/rss.xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="canonical"${addAttribute(`${baseUrl}${permalink.replace(/\/1$/gi, '')}`, 'href')}><link rel="icon" href="/favicon.ico"><link rel="mask-icon" sizes="any" href="/mask-icon.svg" color="#0caceb">${renderHead()}</head><body${addAttribute(className, 'class')}>${renderComponent($$result, 'Header', $$Header, {})}<main role="main">${renderSlot($$result, $$slots['default'])}</main>${renderComponent($$result, 'Footer', $$Footer, { showSearch: showSearch })}</body></html>`
  },
  '/Users/melanie/Developer/melkat-blog/src/layouts/base-layout.astro',
  void 0
)

const getDomain = (link = '') =>
  link
    .replace(/^https?:\/\//, '')
    .split('/')[0]
    .split('.')
    .slice(-2)
    .join('.')

const $$Astro$c = createAstro('https://melkat.blog')
const $$Domain = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots)
    Astro2.self = $$Domain
    const cx = {
      a: cxs.aHover,
    }
    const { link } = Astro2.props
    const domain = getDomain(link)
    return renderTemplate`${maybeRenderHead()}<a${addAttribute(cx.a, 'class')}${addAttribute(`/d/${domain}`, 'href')}${addAttribute(`Posts linking to ${domain}`, 'aria-label')}>${domain}</a>`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/domain.astro',
  void 0
)

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

const $$Astro$b = createAstro('https://melkat.blog')
const $$Date = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots)
    Astro2.self = $$Date
    const { date } = Astro2.props
    return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), 'datetime')}>${formatDate(date)}</time>`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/date.astro',
  void 0
)

const $$Astro$a = createAstro('https://melkat.blog')
const $$Details = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots)
    Astro2.self = $$Details
    const cx = {
      details: 'uppercase text-sm my-4',
    }
    const { date, link, seperator = ' \u2022 ' } = Astro2.props
    return renderTemplate`${maybeRenderHead()}<p${addAttribute(cx.details, 'class')}>${link && renderTemplate`${renderComponent($$result, 'Domain', $$Domain, { link: link })}`}${link ? seperator : ''}${renderComponent($$result, 'Date', $$Date, { date: date })}</p>`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/details.astro',
  void 0
)

const $$Astro$9 = createAstro('https://melkat.blog')
const $$Body = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots)
    Astro2.self = $$Body
    const cx = {
      div: `${cxs.prose} my-4`,
    }
    return renderTemplate`${maybeRenderHead()}<div${addAttribute(cx.div, 'class')}>${renderSlot($$result, $$slots['default'])}</div>`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/body.astro',
  void 0
)

const $$Astro$8 = createAstro('https://melkat.blog')
const $$Cover = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots)
    Astro2.self = $$Cover
    const cx = {
      img: 'rounded-lg aspect-video object-cover mb-3',
    }
    const { title, cover } = Astro2.props
    return renderTemplate`${renderComponent($$result, 'Image', $$Image, { alt: title, class: cx.img, src: cover, width: 560, height: 315 })}`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/cover.astro',
  void 0
)

const $$Astro$7 = createAstro('https://melkat.blog')
const $$Permalink = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots)
    Astro2.self = $$Permalink
    const cx = {
      a: cxs.aHover,
    }
    const { title, url } = Astro2.props
    return renderTemplate`${maybeRenderHead()}<a${addAttribute(cx.a, 'class')}${addAttribute(url, 'href')}${addAttribute(`Permalink for ${title}`, 'aria-label')}><span role="img" aria-label="Star icon">★</span> Permalink
</a>`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/permalink.astro',
  void 0
)

const $$Astro$6 = createAstro('https://melkat.blog')
const $$Tag = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots)
    Astro2.self = $$Tag
    const cx = {
      a: cxs.aHover,
    }
    const { tag } = Astro2.props
    return renderTemplate`${maybeRenderHead()}<a${addAttribute(cx.a, 'class')}${addAttribute(`/t/${tag}`, 'href')}${addAttribute(`Posts tagged #${tag}`, 'aria-label')}>#${tag}</a>`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/tag.astro',
  void 0
)

const $$Astro$5 = createAstro('https://melkat.blog')
const $$Tags = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots)
    Astro2.self = $$Tags
    const cx = {
      li: cxs.li,
      tag: `${cxs.li} pr-1`,
      ul: 'list-none mt-4',
    }
    const { url, tags, title } = Astro2.props
    return renderTemplate`${maybeRenderHead()}<ul${addAttribute(cx.ul, 'class')}><li${addAttribute(cx.li, 'class')}>${renderComponent($$result, 'Permalink', $$Permalink, { url: url, title: title })}</li>${!!tags && renderTemplate`<li${addAttribute(cx.li, 'class')}>•</li>`}${tags.map(tag => renderTemplate`<li${addAttribute(cx.tag, 'class')}>${renderComponent($$result, 'Tag', $$Tag, { tag: tag })}</li>`)}</ul>`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/tags.astro',
  void 0
)

const $$Astro$4 = createAstro('https://melkat.blog')
const $$PageHeader = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots)
    Astro2.self = $$PageHeader
    const cx = {
      h2: 'mb-4 text-xl font-medium',
    }
    return renderTemplate`${maybeRenderHead()}<h2${addAttribute(cx.h2, 'class')}>${renderSlot($$result, $$slots['default'])}</h2>`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/page-header.astro',
  void 0
)

const $$Astro$3 = createAstro('https://melkat.blog')
const $$Title = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots)
    Astro2.self = $$Title
    const { title = '', link = '', isExternal = false } = Astro2.props
    return renderTemplate`${renderComponent($$result, 'PageHeader', $$PageHeader, {}, { default: $$result2 => renderTemplate`${maybeRenderHead()}<a${addAttribute(link, 'href')}${addAttribute(isExternal ? cxs.a : cxs.aHover, 'class')}${addAttribute(`${isExternal ? 'Link to ' : 'Permalink for '}${title}`, 'aria-label')}${addAttribute({ textWrap: 'balance' }, 'style')}>${title}</a>` })}`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/title.astro',
  void 0
)

const $$Astro$2 = createAstro('https://melkat.blog')
const $$Article = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots)
    Astro2.self = $$Article
    const cx = {
      article:
        'pb-8 mb-8 border-solid border-b cv-auto border-black/10 dark:border-white/25',
    }
    const { cover, date, link, tags = [], title, url } = Astro2.props
    return renderTemplate`${maybeRenderHead()}<article${addAttribute(cx.article, 'class')}>${renderComponent($$result, 'Title', $$Title, { title: title, link: link ? link : url, isExternal: !!link })}${renderComponent($$result, 'Details', $$Details, { link: link, date: date })}${cover && renderTemplate`${renderComponent($$result, 'Cover', $$Cover, { cover: cover, title: title })}`}${renderComponent($$result, 'Body', $$Body, {}, { default: $$result2 => renderTemplate`${renderSlot($$result2, $$slots['default'])}` })}${renderComponent($$result, 'Tags', $$Tags, { url: url, tags: tags, title: title })}</article>`
  },
  '/Users/melanie/Developer/melkat-blog/src/components/article.astro',
  void 0
)

const $$Astro$1 = createAstro('https://melkat.blog')
const $$PostLayout = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots)
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
  },
  '/Users/melanie/Developer/melkat-blog/src/layouts/post-layout.astro',
  void 0
)

const byDate = (a, b) =>
  new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
const byCount = (a, b) => b.count - a.count

function createCollectionToGlobResultMap({ globResult, contentDir }) {
  const collectionToGlobResultMap = {}
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(
      new RegExp(`^${contentDir}`),
      ''
    )
    const segments = keyRelativeToContentDir.split('/')
    if (segments.length <= 1) continue
    const collection = segments[0]
    collectionToGlobResultMap[collection] ??= {}
    collectionToGlobResultMap[collection][key] = globResult[key]
  }
  return collectionToGlobResultMap
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map()
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
}) {
  return async function getCollection(collection, filter) {
    let type
    if (collection in contentCollectionToEntryMap) {
      type = 'content'
    } else if (collection in dataCollectionToEntryMap) {
      type = 'data'
    } else {
      throw new AstroError({
        ...CollectionDoesNotExistError,
        message: CollectionDoesNotExistError.message(collection),
      })
    }
    const lazyImports = Object.values(
      type === 'content'
        ? contentCollectionToEntryMap[collection]
        : dataCollectionToEntryMap[collection]
    )
    let entries = []
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)]
    } else {
      entries = await Promise.all(
        lazyImports.map(async lazyImport => {
          const entry = await lazyImport()
          return type === 'content'
            ? {
                id: entry.id,
                slug: entry.slug,
                body: entry.body,
                collection: entry.collection,
                data: entry.data,
                async render() {
                  return render({
                    collection: entry.collection,
                    id: entry.id,
                    renderEntryImport: await getRenderEntryImport(
                      collection,
                      entry.slug
                    ),
                  })
                },
              }
            : {
                id: entry.id,
                collection: entry.collection,
                data: entry.data,
              }
        })
      )
      cacheEntriesByCollection.set(collection, entries)
    }
    if (typeof filter === 'function') {
      return entries.filter(filter)
    } else {
      return entries
    }
  }
}
async function render({ collection, id, renderEntryImport }) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`,
  })
  if (typeof renderEntryImport !== 'function') throw UnexpectedRenderError
  const baseMod = await renderEntryImport()
  if (baseMod == null || typeof baseMod !== 'object')
    throw UnexpectedRenderError
  const { default: defaultMod } = baseMod
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } =
      defaultMod
    if (typeof getMod !== 'function') throw UnexpectedRenderError
    const propagationMod = await getMod()
    if (propagationMod == null || typeof propagationMod !== 'object')
      throw UnexpectedRenderError
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = '',
          links = '',
          scripts = ''
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles
            .map(style => {
              return renderUniqueStylesheet(result, {
                type: 'inline',
                content: style,
              })
            })
            .join('')
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks
            .map(link => {
              return renderUniqueStylesheet(result, {
                type: 'external',
                src: prependForwardSlash(link),
              })
            })
            .join('')
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts
            .map(script => renderScriptElement(script))
            .join('')
        }
        let props = baseProps
        if (id.endsWith('mdx')) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps,
          }
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            'Content',
            propagationMod.Content,
            props,
            slots
          )}`
        )
      },
      propagation: 'self',
    })
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {},
    }
  } else if (baseMod.Content && typeof baseMod.Content === 'function') {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {},
    }
  } else {
    throw UnexpectedRenderError
  }
}
function isPropagatedAssetsModule(module) {
  return (
    typeof module === 'object' &&
    module != null &&
    '__astroPropagation' in module
  )
}

// astro-head-inject

const contentDir = '/src/content/'

const contentEntryGlob = /* #__PURE__ */ Object.assign({
  '/src/content/posts/134400368.md': () => import('../134400368_48e6b6e6.mjs'),
  '/src/content/posts/135019114.md': () => import('../135019114_a77ebc7d.mjs'),
  '/src/content/posts/136222383.md': () => import('../136222383_19895cc3.mjs'),
  '/src/content/posts/136224879.md': () => import('../136224879_2e2e2e85.mjs'),
  '/src/content/posts/136224935.md': () => import('../136224935_4f46fd9b.mjs'),
  '/src/content/posts/136763858.md': () => import('../136763858_2f798ac2.mjs'),
  '/src/content/posts/137009001.md': () => import('../137009001_4bf04851.mjs'),
  '/src/content/posts/137009091.md': () => import('../137009091_fc413530.mjs'),
  '/src/content/posts/138288124.md': () => import('../138288124_28a43164.mjs'),
  '/src/content/posts/138860938.md': () => import('../138860938_38ace2a4.mjs'),
  '/src/content/posts/138917375.md': () => import('../138917375_464d0641.mjs'),
  '/src/content/posts/140113304.md': () => import('../140113304_c2286e84.mjs'),
  '/src/content/posts/140113399.md': () => import('../140113399_e4483542.mjs'),
  '/src/content/posts/140113823.md': () => import('../140113823_ce8db9b1.mjs'),
  '/src/content/posts/140166273.md': () => import('../140166273_49b9cd7f.mjs'),
  '/src/content/posts/140179091.md': () => import('../140179091_5ed276ef.mjs'),
  '/src/content/posts/140733004.md': () => import('../140733004_1fa94927.mjs'),
  '/src/content/posts/141385956.md': () => import('../141385956_e30d78f3.mjs'),
  '/src/content/posts/143872419.md': () => import('../143872419_5a7da9c1.mjs'),
  '/src/content/posts/143963126.md': () => import('../143963126_75d00abd.mjs'),
  '/src/content/posts/145124027.md': () => import('../145124027_277d5c60.mjs'),
  '/src/content/posts/145785077.md': () => import('../145785077_d466441f.mjs'),
  '/src/content/posts/147888188.md': () => import('../147888188_119a94b3.mjs'),
  '/src/content/posts/148032540.md': () => import('../148032540_9546e89d.mjs'),
  '/src/content/posts/148553676.md': () => import('../148553676_a79d0d66.mjs'),
  '/src/content/posts/148553739.md': () => import('../148553739_3d15973f.mjs'),
  '/src/content/posts/148896468.md': () => import('../148896468_2d759290.mjs'),
  '/src/content/posts/151856049.md': () => import('../151856049_cceb47b3.mjs'),
  '/src/content/posts/151856082.md': () => import('../151856082_fbcadd09.mjs'),
  '/src/content/posts/152139015.md': () => import('../152139015_2e22e973.mjs'),
  '/src/content/posts/152242486.md': () => import('../152242486_608b13a5.mjs'),
  '/src/content/posts/164564932.md': () => import('../164564932_8feb58e4.mjs'),
  '/src/content/posts/164601922.md': () => import('../164601922_6157c9d7.mjs'),
  '/src/content/posts/170712813.md': () => import('../170712813_1c11be50.mjs'),
  '/src/content/posts/170712882.md': () => import('../170712882_1d349b50.mjs'),
  '/src/content/posts/170716411.md': () => import('../170716411_b937e6fd.mjs'),
  '/src/content/posts/173958130.md': () => import('../173958130_d36a1e5b.mjs'),
  '/src/content/posts/175577875.md': () => import('../175577875_a340dc17.mjs'),
  '/src/content/posts/175926290.md': () => import('../175926290_00f3c95e.mjs'),
  '/src/content/posts/176035092.md': () => import('../176035092_8dd447d2.mjs'),
  '/src/content/posts/176243918.md': () => import('../176243918_8cd0e2e6.mjs'),
  '/src/content/posts/183883395.md': () => import('../183883395_5e9d8cdd.mjs'),
  '/src/content/posts/183916694.md': () => import('../183916694_a0f66b4c.mjs'),
  '/src/content/posts/186172319.md': () => import('../186172319_143e8822.mjs'),
  '/src/content/posts/187431259.md': () => import('../187431259_f34d16ea.mjs'),
  '/src/content/posts/188732962.md': () => import('../188732962_89ffca37.mjs'),
  '/src/content/posts/193430221.md': () => import('../193430221_bf529493.mjs'),
  '/src/content/posts/193431338.md': () => import('../193431338_876abbd0.mjs'),
  '/src/content/posts/193580658.md': () => import('../193580658_8ff6a389.mjs'),
  '/src/content/posts/193615631.md': () => import('../193615631_6d9fdc54.mjs'),
  '/src/content/posts/200629134.md': () => import('../200629134_c1764309.mjs'),
  '/src/content/posts/2019-in-media.md': () =>
    import('../2019-in-media_384cd5ce.mjs'),
  '/src/content/posts/2022-in-media.md': () =>
    import('../2022-in-media_8c2368e2.mjs'),
  '/src/content/posts/207807923.md': () => import('../207807923_a8a431f7.mjs'),
  '/src/content/posts/210271102.md': () => import('../210271102_4b9bb729.mjs'),
  '/src/content/posts/211267925.md': () => import('../211267925_5ed60823.mjs'),
  '/src/content/posts/212977273.md': () => import('../212977273_3a839097.mjs'),
  '/src/content/posts/219342574.md': () => import('../219342574_2e0bfa96.mjs'),
  '/src/content/posts/233159783.md': () => import('../233159783_4bb92571.mjs'),
  '/src/content/posts/239986466.md': () => import('../239986466_facea762.mjs'),
  '/src/content/posts/249382845.md': () => import('../249382845_19ea6efc.mjs'),
  '/src/content/posts/251027866.md': () => import('../251027866_369317d9.mjs'),
  '/src/content/posts/279869181.md': () => import('../279869181_74698251.mjs'),
  '/src/content/posts/296971514.md': () => import('../296971514_95aedc80.mjs'),
  '/src/content/posts/300794824.md': () => import('../300794824_fba62144.mjs'),
  '/src/content/posts/311978752.md': () => import('../311978752_d97fd85c.mjs'),
  '/src/content/posts/331418114.md': () => import('../331418114_e06dcbc6.mjs'),
  '/src/content/posts/339029235.md': () => import('../339029235_e67b53d0.mjs'),
  '/src/content/posts/340858922.md': () => import('../340858922_5f4eac86.mjs'),
  '/src/content/posts/astro-rewrite.md': () =>
    import('../astro-rewrite_35e478f7.mjs'),
  '/src/content/posts/commute.md': () => import('../commute_bd692e56.mjs'),
  '/src/content/posts/dankpods-starter.md': () =>
    import('../dankpods-starter_55192884.mjs'),
  '/src/content/posts/essential-apps.md': () =>
    import('../essential-apps_d377af02.mjs'),
  '/src/content/posts/falsehoods-around-names.md': () =>
    import('../falsehoods-around-names_1e7d88de.mjs'),
  '/src/content/posts/gft-0722.md': () => import('../gft-0722_7187a06e.mjs'),
  '/src/content/posts/lastfm-to-mastodon.md': () =>
    import('../lastfm-to-mastodon_e12a86c8.mjs'),
  '/src/content/posts/lil-gator-game.md': () =>
    import('../lil-gator-game_785cbd2c.mjs'),
  '/src/content/posts/links-for-2023-02-16.md': () =>
    import('../links-for-2023-02-16_7cffd8eb.mjs'),
  '/src/content/posts/links-for-2023-04-02.md': () =>
    import('../links-for-2023-04-02_582224bc.mjs'),
  '/src/content/posts/mutuals-social.md': () =>
    import('../mutuals-social_1b26b155.mjs'),
  '/src/content/posts/omglol-shortcuts.md': () =>
    import('../omglol-shortcuts_9be73580.mjs'),
  '/src/content/posts/sf-jury-summon.md': () =>
    import('../sf-jury-summon_172b5041.mjs'),
  '/src/content/posts/template.md': () => import('../template_bb237c70.mjs'),
  '/src/content/posts/toot-cards.md': () =>
    import('../toot-cards_50582e23.mjs'),
  '/src/content/posts/uses.md': () => import('../uses_9f61c684.mjs'),
  '/src/content/posts/verify-commits.md': () =>
    import('../verify-commits_3bdaa717.mjs'),
  '/src/content/posts/vr-sexism.md': () => import('../vr-sexism_65db8260.mjs'),
})
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
  globResult: contentEntryGlob,
  contentDir,
})

const dataEntryGlob = /* #__PURE__ */ Object.assign({})
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
  globResult: dataEntryGlob,
  contentDir,
})
createCollectionToGlobResultMap({
  globResult: { ...contentEntryGlob, ...dataEntryGlob },
  contentDir,
})

let lookupMap = {}
lookupMap = {
  posts: {
    type: 'content',
    entries: {
      134400368: '/src/content/posts/134400368.md',
      135019114: '/src/content/posts/135019114.md',
      136222383: '/src/content/posts/136222383.md',
      136224879: '/src/content/posts/136224879.md',
      136224935: '/src/content/posts/136224935.md',
      136763858: '/src/content/posts/136763858.md',
      137009001: '/src/content/posts/137009001.md',
      137009091: '/src/content/posts/137009091.md',
      138288124: '/src/content/posts/138288124.md',
      138860938: '/src/content/posts/138860938.md',
      138917375: '/src/content/posts/138917375.md',
      140113304: '/src/content/posts/140113304.md',
      140113399: '/src/content/posts/140113399.md',
      140113823: '/src/content/posts/140113823.md',
      140166273: '/src/content/posts/140166273.md',
      140179091: '/src/content/posts/140179091.md',
      140733004: '/src/content/posts/140733004.md',
      141385956: '/src/content/posts/141385956.md',
      143872419: '/src/content/posts/143872419.md',
      143963126: '/src/content/posts/143963126.md',
      145124027: '/src/content/posts/145124027.md',
      145785077: '/src/content/posts/145785077.md',
      147888188: '/src/content/posts/147888188.md',
      148032540: '/src/content/posts/148032540.md',
      148553676: '/src/content/posts/148553676.md',
      148553739: '/src/content/posts/148553739.md',
      148896468: '/src/content/posts/148896468.md',
      151856049: '/src/content/posts/151856049.md',
      151856082: '/src/content/posts/151856082.md',
      152139015: '/src/content/posts/152139015.md',
      152242486: '/src/content/posts/152242486.md',
      164564932: '/src/content/posts/164564932.md',
      164601922: '/src/content/posts/164601922.md',
      170712813: '/src/content/posts/170712813.md',
      170712882: '/src/content/posts/170712882.md',
      170716411: '/src/content/posts/170716411.md',
      173958130: '/src/content/posts/173958130.md',
      175577875: '/src/content/posts/175577875.md',
      175926290: '/src/content/posts/175926290.md',
      176035092: '/src/content/posts/176035092.md',
      176243918: '/src/content/posts/176243918.md',
      183883395: '/src/content/posts/183883395.md',
      183916694: '/src/content/posts/183916694.md',
      186172319: '/src/content/posts/186172319.md',
      187431259: '/src/content/posts/187431259.md',
      188732962: '/src/content/posts/188732962.md',
      193430221: '/src/content/posts/193430221.md',
      193431338: '/src/content/posts/193431338.md',
      193580658: '/src/content/posts/193580658.md',
      193615631: '/src/content/posts/193615631.md',
      200629134: '/src/content/posts/200629134.md',
      207807923: '/src/content/posts/207807923.md',
      210271102: '/src/content/posts/210271102.md',
      211267925: '/src/content/posts/211267925.md',
      212977273: '/src/content/posts/212977273.md',
      219342574: '/src/content/posts/219342574.md',
      233159783: '/src/content/posts/233159783.md',
      239986466: '/src/content/posts/239986466.md',
      249382845: '/src/content/posts/249382845.md',
      251027866: '/src/content/posts/251027866.md',
      279869181: '/src/content/posts/279869181.md',
      296971514: '/src/content/posts/296971514.md',
      300794824: '/src/content/posts/300794824.md',
      311978752: '/src/content/posts/311978752.md',
      331418114: '/src/content/posts/331418114.md',
      339029235: '/src/content/posts/339029235.md',
      340858922: '/src/content/posts/340858922.md',
      '2019-in-media': '/src/content/posts/2019-in-media.md',
      '2022-in-media': '/src/content/posts/2022-in-media.md',
      'astro-rewrite': '/src/content/posts/astro-rewrite.md',
      commute: '/src/content/posts/commute.md',
      'dankpods-starter': '/src/content/posts/dankpods-starter.md',
      'essential-apps': '/src/content/posts/essential-apps.md',
      'falsehoods-around-names':
        '/src/content/posts/falsehoods-around-names.md',
      'gft-0722': '/src/content/posts/gft-0722.md',
      'lastfm-to-mastodon': '/src/content/posts/lastfm-to-mastodon.md',
      'lil-gator-game': '/src/content/posts/lil-gator-game.md',
      'links-for-2023-02-16': '/src/content/posts/links-for-2023-02-16.md',
      'links-for-2023-04-02': '/src/content/posts/links-for-2023-04-02.md',
      'mutuals-social': '/src/content/posts/mutuals-social.md',
      'omglol-shortcuts': '/src/content/posts/omglol-shortcuts.md',
      'sf-jury-summon': '/src/content/posts/sf-jury-summon.md',
      template: '/src/content/posts/template.md',
      'toot-cards': '/src/content/posts/toot-cards.md',
      uses: '/src/content/posts/uses.md',
      'vr-sexism': '/src/content/posts/vr-sexism.md',
      'verify-commits': '/src/content/posts/verify-commits.md',
    },
  },
}

function createGlobLookup(glob) {
  return async (collection, lookupId) => {
    const filePath = lookupMap[collection]?.entries[lookupId]

    if (!filePath) return undefined
    return glob[collection][filePath]
  }
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({
  '/src/content/posts/134400368.md': () => import('../134400368_019f7b12.mjs'),
  '/src/content/posts/135019114.md': () => import('../135019114_1f40e37e.mjs'),
  '/src/content/posts/136222383.md': () => import('../136222383_0a77db5a.mjs'),
  '/src/content/posts/136224879.md': () => import('../136224879_b728cb0b.mjs'),
  '/src/content/posts/136224935.md': () => import('../136224935_734ead47.mjs'),
  '/src/content/posts/136763858.md': () => import('../136763858_fd340c4f.mjs'),
  '/src/content/posts/137009001.md': () => import('../137009001_a4fb6c76.mjs'),
  '/src/content/posts/137009091.md': () => import('../137009091_effa8f1d.mjs'),
  '/src/content/posts/138288124.md': () => import('../138288124_bd4f00b0.mjs'),
  '/src/content/posts/138860938.md': () => import('../138860938_dd8b8c1c.mjs'),
  '/src/content/posts/138917375.md': () => import('../138917375_4bc0d34b.mjs'),
  '/src/content/posts/140113304.md': () => import('../140113304_eead509f.mjs'),
  '/src/content/posts/140113399.md': () => import('../140113399_ec67afab.mjs'),
  '/src/content/posts/140113823.md': () => import('../140113823_1b4e3f12.mjs'),
  '/src/content/posts/140166273.md': () => import('../140166273_1727167a.mjs'),
  '/src/content/posts/140179091.md': () => import('../140179091_ef57751f.mjs'),
  '/src/content/posts/140733004.md': () => import('../140733004_55032a18.mjs'),
  '/src/content/posts/141385956.md': () => import('../141385956_f3400e57.mjs'),
  '/src/content/posts/143872419.md': () => import('../143872419_71bbf828.mjs'),
  '/src/content/posts/143963126.md': () => import('../143963126_53185560.mjs'),
  '/src/content/posts/145124027.md': () => import('../145124027_ab6537e1.mjs'),
  '/src/content/posts/145785077.md': () => import('../145785077_6c3a396c.mjs'),
  '/src/content/posts/147888188.md': () => import('../147888188_1e2adf55.mjs'),
  '/src/content/posts/148032540.md': () => import('../148032540_4dffab9d.mjs'),
  '/src/content/posts/148553676.md': () => import('../148553676_ef4cec02.mjs'),
  '/src/content/posts/148553739.md': () => import('../148553739_c684e459.mjs'),
  '/src/content/posts/148896468.md': () => import('../148896468_85693d2b.mjs'),
  '/src/content/posts/151856049.md': () => import('../151856049_0d623b73.mjs'),
  '/src/content/posts/151856082.md': () => import('../151856082_d30b8153.mjs'),
  '/src/content/posts/152139015.md': () => import('../152139015_167a52a3.mjs'),
  '/src/content/posts/152242486.md': () => import('../152242486_48c82c4d.mjs'),
  '/src/content/posts/164564932.md': () => import('../164564932_ad8ec32d.mjs'),
  '/src/content/posts/164601922.md': () => import('../164601922_36786bab.mjs'),
  '/src/content/posts/170712813.md': () => import('../170712813_7173797f.mjs'),
  '/src/content/posts/170712882.md': () => import('../170712882_d90477be.mjs'),
  '/src/content/posts/170716411.md': () => import('../170716411_837d4c31.mjs'),
  '/src/content/posts/173958130.md': () => import('../173958130_ed89ed2b.mjs'),
  '/src/content/posts/175577875.md': () => import('../175577875_4da0a8fa.mjs'),
  '/src/content/posts/175926290.md': () => import('../175926290_5ff994dc.mjs'),
  '/src/content/posts/176035092.md': () => import('../176035092_b3510795.mjs'),
  '/src/content/posts/176243918.md': () => import('../176243918_7708c858.mjs'),
  '/src/content/posts/183883395.md': () => import('../183883395_0ad96299.mjs'),
  '/src/content/posts/183916694.md': () => import('../183916694_e72eb631.mjs'),
  '/src/content/posts/186172319.md': () => import('../186172319_fdb10543.mjs'),
  '/src/content/posts/187431259.md': () => import('../187431259_83604cb0.mjs'),
  '/src/content/posts/188732962.md': () => import('../188732962_be51c65d.mjs'),
  '/src/content/posts/193430221.md': () => import('../193430221_285438d5.mjs'),
  '/src/content/posts/193431338.md': () => import('../193431338_53d15594.mjs'),
  '/src/content/posts/193580658.md': () => import('../193580658_21ad7e2f.mjs'),
  '/src/content/posts/193615631.md': () => import('../193615631_3c22d9b0.mjs'),
  '/src/content/posts/200629134.md': () => import('../200629134_e51dcd56.mjs'),
  '/src/content/posts/2019-in-media.md': () =>
    import('../2019-in-media_26057d45.mjs'),
  '/src/content/posts/2022-in-media.md': () =>
    import('../2022-in-media_fc79181a.mjs'),
  '/src/content/posts/207807923.md': () => import('../207807923_588bcf45.mjs'),
  '/src/content/posts/210271102.md': () => import('../210271102_c429d3f4.mjs'),
  '/src/content/posts/211267925.md': () => import('../211267925_f6af75a5.mjs'),
  '/src/content/posts/212977273.md': () => import('../212977273_2a11d4d4.mjs'),
  '/src/content/posts/219342574.md': () => import('../219342574_ff9e53b5.mjs'),
  '/src/content/posts/233159783.md': () => import('../233159783_b2018b97.mjs'),
  '/src/content/posts/239986466.md': () => import('../239986466_0d51782d.mjs'),
  '/src/content/posts/249382845.md': () => import('../249382845_9f217403.mjs'),
  '/src/content/posts/251027866.md': () => import('../251027866_76341607.mjs'),
  '/src/content/posts/279869181.md': () => import('../279869181_fd26551d.mjs'),
  '/src/content/posts/296971514.md': () => import('../296971514_6ecfd4a8.mjs'),
  '/src/content/posts/300794824.md': () => import('../300794824_5a4daee5.mjs'),
  '/src/content/posts/311978752.md': () => import('../311978752_a6f78e2c.mjs'),
  '/src/content/posts/331418114.md': () => import('../331418114_c0b2de29.mjs'),
  '/src/content/posts/339029235.md': () => import('../339029235_4b02d242.mjs'),
  '/src/content/posts/340858922.md': () => import('../340858922_92221664.mjs'),
  '/src/content/posts/astro-rewrite.md': () =>
    import('../astro-rewrite_14f79e72.mjs'),
  '/src/content/posts/commute.md': () => import('../commute_fa3acb32.mjs'),
  '/src/content/posts/dankpods-starter.md': () =>
    import('../dankpods-starter_da9c66fb.mjs'),
  '/src/content/posts/essential-apps.md': () =>
    import('../essential-apps_bf1853ea.mjs'),
  '/src/content/posts/falsehoods-around-names.md': () =>
    import('../falsehoods-around-names_9e63841b.mjs'),
  '/src/content/posts/gft-0722.md': () => import('../gft-0722_22efdf63.mjs'),
  '/src/content/posts/lastfm-to-mastodon.md': () =>
    import('../lastfm-to-mastodon_52a01e4a.mjs'),
  '/src/content/posts/lil-gator-game.md': () =>
    import('../lil-gator-game_c13128df.mjs'),
  '/src/content/posts/links-for-2023-02-16.md': () =>
    import('../links-for-2023-02-16_283daef8.mjs'),
  '/src/content/posts/links-for-2023-04-02.md': () =>
    import('../links-for-2023-04-02_e528d1fe.mjs'),
  '/src/content/posts/mutuals-social.md': () =>
    import('../mutuals-social_3807889a.mjs'),
  '/src/content/posts/omglol-shortcuts.md': () =>
    import('../omglol-shortcuts_34593da1.mjs'),
  '/src/content/posts/sf-jury-summon.md': () =>
    import('../sf-jury-summon_0c7d5d67.mjs'),
  '/src/content/posts/template.md': () => import('../template_5c5a2c5d.mjs'),
  '/src/content/posts/toot-cards.md': () =>
    import('../toot-cards_86f6e328.mjs'),
  '/src/content/posts/uses.md': () => import('../uses_5653c75f.mjs'),
  '/src/content/posts/verify-commits.md': () =>
    import('../verify-commits_919c1117.mjs'),
  '/src/content/posts/vr-sexism.md': () => import('../vr-sexism_e822a332.mjs'),
})
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
  globResult: renderEntryGlob,
  contentDir,
})

const getCollection = createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
})

const noDrafts = ({ data }) => !data.draft
const hasLinkNoDrafts = ({ data }) => !data.draft && !!data.link
const hasTagsNoDrafts = ({ data }) => !data.draft && !!data.tags
const hasLink = ({ data }) => !!data.link
const hasTags = ({ data }) => !!data.tags

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
const $$Index = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
    Astro2.self = $$Index
    const cx = {
      p: 'pv-8 mb-8',
    }
    const { searchParams } = Astro2.url
    const query = searchParams.get('q') || ''
    let allPosts = await getCollection('posts', noDrafts)
    allPosts = allPosts.sort(byDate)
    const results = fuzzySearch(query, allPosts)
    const noResults = !!query && results.length <= 0
    const permalink = noResults ? '/q' : `/q?q=${encodeURIComponent(query)}`
    return renderTemplate`${renderComponent($$result, 'Layout', $$BaseLayout, { title: 'melkat.blog - Search', permalink: permalink, showSearch: false }, { default: $$result2 => renderTemplate`${renderComponent($$result2, 'PageHeader', $$PageHeader, {}, { default: $$result3 => renderTemplate`${maybeRenderHead()}<label for="search">Search</label>` })}${renderComponent($$result2, 'Search', $$Search, { defaultValue: query })}${results.map(entry => renderTemplate`${renderComponent($$result2, 'PostLayout', $$PostLayout, { post: entry })}`)}${noResults && renderTemplate`<p${addAttribute(cx.p, 'class')}>${'No results :('}</p>`}` })}`
  },
  '/Users/melanie/Developer/melkat-blog/src/pages/q/index.astro',
  void 0
)

const $$file = '/Users/melanie/Developer/melkat-blog/src/pages/q/index.astro'
const $$url = '/q'

const index = /*#__PURE__*/ Object.freeze(
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
  $$BaseLayout as a,
  byDate as b,
  cxs as c,
  description as d,
  baseUrl as e,
  byCount as f,
  getCollection as g,
  hasLink as h,
  getDomain as i,
  hasTags as j,
  hasLinkNoDrafts as k,
  $$PageHeader as l,
  hasTagsNoDrafts as m,
  noDrafts as n,
  index as o,
  pageSize as p,
  title as t,
}
