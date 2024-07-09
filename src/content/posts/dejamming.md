---
title: Dejamming the Front-End
tags: [post, tech, hosting]
date: 2024-07-01T12:02:46-07:00
---

I've mentioned a [few](https://melkat.blog/p/jamstack-hosting) [times](https://melkat.blog/p/unsafe-pricing) [about](https://melkat.blog/p/farewell-nextjs) my exodus from services like Vercel and Netlify because of things like their unreasonable pricing strategies.

I moved my blog to [Astro](https://astro.build) early on, but I left [melaniekat.com](https://melaniekat.com) on NextJS. The more I built, the more I locked myself in to services like Vercel, the company that brings us NextJS. When I tried to migrate off of Vercel I noticed all my images were broken and even the hacks that people had come up with to make images work in NextJS when you aren't hosting on Vercel were not a solid fix.

The funny thing is, when I migrated to Astro, I was able to change the image component import from NextJS's to Astro's without having to change any properties. It was a simple change that magically made optimized images that get generated at build. The very thing that NextJS can't do out of the box.

Astro provides a lot of features that NextJS doesn't have. For instance, I don't have to use React. I can. I can also use Svelte. With Astro being the root of my project I could build pages with the code I want to use when I need it. Because I don't need React for most things, I only use React in places that it makes sense to. Astro calls these [islands](https://docs.astro.build/en/concepts/islands/). When I made Pride Frame, I did it as a way to learn more Svelte. Now I can move Pride Frame off its own subdomain and add it to my Astro project. When it's time to play with another framework, [I can](https://docs.astro.build/en/guides/integrations-guide/).

I really like how Astro has typed [content collections](https://docs.astro.build/en/guides/content-collections/). Instead of powering my OC gallery with a big ol json file, it's now powered by a ton of markdown files using frontmatter properties, which gets type-checked with [Zod](https://docs.astro.build/en/guides/content-collections/#defining-datatypes-with-zod). And you know what one of those types can be? Images! That's right I can have an array of optimized images that I can access from anywhere.

I took this rewrite as a chance to swap from the prettier + husky + lint-staged + eslint (+ idk a kitchen sink?) packages to [Biome](https://biomejs.dev) and [lefthook](https://github.com/evilmartians/lefthook). I started following Biome's development back when it was called "Rome" and fell off waiting for it to release something. Due to some bad business decisions they had to rebrand as Biome, and looks to finally be delivering on the promise of Rome. It's got three functions that currently feel the same: "check," "lint," and "format." I feel like I probably only need to use "check," but who knows how things will evolve. It's light weight enough that if I need to rip it out and swap back to prettier and it's set of dependencies I can.

Here's a challenge I ran in to with Biome: getting it to work with Svelte. It's basically the only thing I needed to configure in the `./biome.json` file.

```json
{
  "overrides": [
    {
      "include": ["*.svelte"],
      "linter": {
        "rules": {
          "style": {
            "useConst": "off"
          }
        }
      }
    }
  ]
}
```

Svelte component props work by exporting a `let`, but because it's an export, biome wants it to be a `const` and will forcible change it. I was playing a few rounds of whack-a-mole before I noticed why my code was changing out from under me.

Ignoring issues in Biome is kinda neat because it encourages you to explain why you're doing it.

```jsx
import sanitizeHtml from "sanitize-html";

export default function FeedHTML({ html }: { html: string }) {
  return (
    <div
      // biome-ignore lint/security/noDangerouslySetInnerHtml: That's what the sanitizeHtml package is for
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(html, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        }),
      }}
    />
  );
}
```

I imagine this would be great when reading a coworker's code and trying to figure out if the reason for ignoring a rule is silly or not.

Overall, aside from a little bit of time, it was pretty simple to move off NextJS to Astro and now I can host my site on a predictable low-cost CDN. I'm not anti-NextJS or Vercel. If a company wants to pay me to build for it I'd be happy to. Just don't ask me to foot the bill.
