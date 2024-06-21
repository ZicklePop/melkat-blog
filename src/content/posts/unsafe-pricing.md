---
title: Unsafe Pricing at Any Scale
tags: [post, tech, javascript]
date: 2024-06-21T12:06:27-07:00
---

I'm exiting the "serverless" Jamstack hosting space. It's served me well and I've been able to build fun websites utilizing them. I mean, automatic deploys, branch-based staging instances, and server-side rendering are all excellent things that I think everyone should have access to. The problem is that it's either free or the price of a house with nothing in between. They all have "pro" subscriptions that are on the high-end of reasonable that do nothing to protect you against huge overage fees. What even is the subscription fee for? I've used Vercel since it was called "now" or "zeit" or whatever, and I still don't know.

That's not a healthy way to host a website.

Is what I'm using _really_ worth four to six figures monthly? No. Hell, a lot of my side projects aren't worth as much as I spend on my Mastodon and Pixelfed servers, and that's less than a streaming service. Anyway, this is nothing I haven't [already written about before](https://melkat.blog/p/jamstack-hosting).

When I saw John Bowdre's post on [going down the Bunny.net hole](https://runtimeterror.dev/further-down-the-bunny-hole/) I got excited and started moving my static websites to it. I was casually playing with [Dokploy](https://dokploy.com/) as an alternative, and I might still for my more complicated projects, but do I need more than Bunny offers? Not really. Bunny seems pretty cheap. (and I guess I will find out shortly if that's the case or not)

I am in the process of removing features from my websites that rely on server-side rendering. For some, like this blog's search function, I have converted to using web components. I can't make use of the same Astro components for UI so it looks a little barebones in comparison, but it works fine despite needing a little bit of JavaScript.

Other features I am removing are some projects that have gotten stale, like my gif library and my mutuals club. I might bring them back, but for now I think they are safe to remove.

Something else I've been doing this year is blocking AI bots. I started by implementing [Cory's](https://coryd.dev) [AI blocking robots.txt](https://github.com/ai-robots-txt/ai.robots.txt), and then taking that list and converting it to a [Next.js/Vercel compatible way to block them at the server level](https://paste.melanie.lol/no-ai--next.config.js). And by block I mean pointing them to a 10GB file used for speed tests.

I'm not saying you should do this, but I'm not saying you shouldn't do this.

```
https://hil-speed.hetzner.com/10GB.bin
```

Oops, dropped a url. I'm sure it's fine.

When I moved my sites to Bunny.net, I wanted to preserve this feature because I'm not your free content mill. Bunny lets you block 5 user-agents manually at a time with their CDN edge rules and I needed to do this for a handful of, what they call "pull zones." So I asked around and the omg.lol community came through by pointing me in the direction of the [Bunny API](https://docs.bunny.net/reference/pullzonepublic_addedgerule) and I quickly coded this script to take your API key and an array of pull zone IDs and it injects the user-agents defined in Cory's robots.txt file on GitHub. I probably need to clean it up and add GUIDs to it so that I can update them in-place, but [here it is](https://paste.melanie.lol/bunny-ai-blocking.js).

[Fuck off, thieves.](https://rknight.me/blog/perplexity-ai-is-lying-about-its-user-agent/)

I haven't moved my main website, [melaniekat.com](https://melaniekat.com), yet, but I'm working on it.

Because you can't trust search engine companies who are now all-in on AI, even the [indie ones](https://blog.mojeek.com/2024/04/mojeek-search-summary.html), not to rip off my content, and because [they don't really drive traffic to websites anymore](https://www.wheresyoured.at/the-men-who-killed-google/) anyway, I've told my robots.txt files to just block them all. It's not worth my time to keep up with it.

This is the future big tech wants, let's give it to them.
