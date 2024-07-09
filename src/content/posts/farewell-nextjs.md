---
title: Escape from Next.js
tags: [post, tech, javascript, criticism, hosting]
date: 2024-06-22T09:13:47-07:00
---

It's always good to check in with what the current export strategy is for any given framework, app, or service. It's also good to keep an eye on it over time. There was a time where Next.js had some good principals and allowed you to deploy your project anywhere.

_(Tim Robinson voice)_ **I SAID WAS**

Yes, I'm late to paying attention to a common complaint of modern Next.js. As part of my current _""divestment""_ of the [serverless jammy stack hosting space](https://melkat.blog/p/unsafe-pricing) I mentioned I was working on migrating my website [melaniekat.com](https://melaniekat.com) to Bunny's CDN. I thought it would be super easy, barely an inconvenience, and maybe it would be if I didn't mind spending a lot of money on [dynamic image optimization](https://bunny.net/optimizer/). I don't know that I need dynamic on-the-fly image optimization though. Let's just generate that at build time or something. What a fool I was.

You see, doing a static export of Next.js gives you a build output that won't work on your average server. Without knowing the secret handshake of `trailingSlash: true` it outputs links like `/about` as `/about.html`.

Then there's the whole `next/image` thing. When you do a static export of your Next.js project by default it just breaks all the images as this is something that can only be done on Vercel's special servers. You can work around this by writing a function like `({ src }) => src` but then you're just serving up huge unoptimized images. It almost feels like this function at build-time should run the image through optimization and store it somewhere and return a path to the optimized image. I'm sure it's not that simple, because _reasons_.

Before some asks: yes, I saw where someone made a thing called `next-image-export-optimizer` and that's great and all but at this point why do I want to further lock myself in to more Next.js specific tooling? I tried it, it was interesting, but I don't want to rely on someone doing their best to keep up with the whims of Vercel.

Some back story: I was already feeling the grasp of Next.js's framework lock-in. I think my person website should enable me to try new things and build things with the tools I want to use for a given thing. Using web components with Next.js was already kinda grossing me out.

My disappointment is immeasurable and my day is ruined. Now I have to spend time doing a quick rewrite of my site in Astro. Nothing I haven't done many times before, and will probably do many times in the future.

Someone once told me the great part of front-end is the disposable nature of it: you can change frameworks and tooling pretty easily once you have the general idea of what it should do down. I tend to agree. I don't get attached to code. This makes some people uncomfortable, but software has never really been a "write once, works forever with no problems everything is fine lets go home and never look back" place. It's nice when that works out, but look at Steam's Mac game store: a graveyard of 32bit games that won't run on any Mac from the last decade. (I don't know why it still exists, shut it down if you don't care about the Mac, Valve! At a minimum, stop selling games that can't run!)

Ok, enough writing words, time to write code.
