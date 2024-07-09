---
title: key-down, A Web Component for Key Commands
tags: [post, me, javascript, code]
date: 2024-06-14T11:53:52-07:00
cover: ./key-down.jpg
coverAlt: A screen shot of the key commands modal on this blog
---

After my [false start](https://melkat.blog/p/fix-your-heart) of releasing web component packages on NPM, I decided to take a portion of this website I've never mentioned is a feature here and give it it's own proper web component. [Introducing the `<key-down>` web component.](https://github.com/ZicklePop/key-down)

Did you know that this blog has key commands? I added it months ago behind a custom modal system you could activate by pressing `Shift+/` or `?` to explain the other key commands. When I replaced the modal with the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API), I started tearing apart the logic for key commands too.

To quickly focus on the search box on my blog you can press `/`, a common method for searching on websites and Vim. To make this happen I [wrap the input box](https://github.com/ZicklePop/melkat-blog/blob/394a65ee89eed61d041ee7d77e26af914b0101b9/src/components/search.astro#L24-L29) with my key-down component.

The code looks like this:

```html
<key-down
  data-key="/"
  data-shiftKey="false"
  data-action="focus"
  data-scroll="true"
>
  <input
    type="search"
    placeholder="Search for posts"
  />
</key-down>
```

You can also navigate the pagination of this blog with `h` and `l`, you know, like going left and right Vim. When I render the pagination buttons [they are wrapped with the `key-down` component](https://github.com/ZicklePop/melkat-blog/blob/394a65ee89eed61d041ee7d77e26af914b0101b9/src/components/page-navigator.astro#L19-L29) too.

```html
<key-down data-key="h">
  <a href={prev} title="Newer posts">
    Newer
  </a>
</key-down>
```

The non-JavaScript method for opening and closing a popover is to use a button. The button I am using right now is hidden, but it can still be [wrapped in the `key-down` component](https://github.com/ZicklePop/melkat-blog/blob/394a65ee89eed61d041ee7d77e26af914b0101b9/src/components/key-commands.astro#L25-L34).

```html
<key-down data-key="?">
  <button
    popovertarget="key-commands"
    popovertargetaction="toggle"
  >
    Toggle keyboard shortcuts
  </button>
</key-down>
```

I have found this makes adding dynamic keyboard shortcuts to my website incredibly easy while keeping things accessible and I hope you do too.

You can install it with the NPM-compatible package manager of your choice.

```sh
npm install --save @zicklepop/key-down
```

If you don't use a package manager with your website you can do a simple script import.

```html
<script type="module" src="https://esm.sh/@zicklepop/key-down" defer></script>
```

Learn more:

- [On GitHub](https://github.com/zicklepop/key-down)
- [On NPM](https://www.npmjs.com/package/@zicklepop/key-down)
- [On JSR](https://jsr.io/@zicklepop/key-down)
- [Try out some demos](http://zicklepop.github.io/key-down/demo.html)
