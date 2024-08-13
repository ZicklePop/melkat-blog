---
title: in-view, A Web Component for Loading In View
tags: [post, me, javascript, code]
date: 2024-08-13T11:27:37-07:00
---

In Astro, when you use a UI framework you have the ability to only load the [island](https://docs.astro.build/en/concepts/islands/) of JavaScript when it becomes [in view of the browser window](https://docs.astro.build/en/reference/directives-reference/#clientvisible). When you use web components, you have to build this functionality out yourself. This is exactly what I did in my new web component NPM package, in-view.

I ran into this when I decided to start rebuilding parts of my [personal website](https://melaniekat.com) in web components on my ongoing journey to hyper-optimize my websites. I previously mentioned building a [timeline page](https://melkat.blog/p/my-feed) where you could see all of my online activity across a variety of websites and services. I decided to move it from its own page to the main page, just underneath a healthy amount of scrolling. The immediate issue is how much this increased the page load. I wanted to make sure it was only rendered for people who would actually view it.

When all you have is a web component hammer, everything looks like a web component nail.

I thought this would be a good time to dig in to two things: the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) and the [HTML template tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template). The template tag means that you can continue to write code like you normally would, but the browser won't render it until the template is cloned on to the page.

```html
<in-view>
  <template>I show up when I'm in view!</template>
</in-view>
```

So for my website the code looks like this:

```html
<in-view data-rootMargin="240px">
  <template>
    <timeline-feed>
    </timeline-feed>
  </template>
</in-view>
```

The root margin attribute is roughly the size of the timeline filter buttons and the timeline header. This will give it an advantage loading the JSON Feed I use to build out the timeline. For my site, it would also be nice to have some loading states or no-JS fallbacks, but this is a pretty good start for now.

You can install it with the NPM-compatible package manager of your choice.

```sh
npm install --save @zicklepop/in-view
```

If you don't use a package manager with your site, you can use this snippet.

```html
<script type="module" src="https://esm.sh/@zicklepop/in-view" defer></script>
```

Learn more:

- [On GitHub](https://github.com/zicklepop/in-view)
- [On NPM](https://www.npmjs.com/package/@zicklepop/in-view)
- [Try out some demos](http://zicklepop.github.io/in-view/demo.html)
