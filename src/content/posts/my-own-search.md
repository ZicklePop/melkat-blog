---
date: 2024-05-22T20:30:00Z
title: I guess I'm my own search engine
tags: [post, tech, hosting]
cover: /img/my-own-search.png
coverAlt: Left - Custom web portal with a search bar. Right - Customized self-hosted search engine SearXNG
---

I can't believe it's come to this but I have spun up my own search engine with [SearXNG](https://github.com/searxng/searxng). I love self-hosting things inside my private Tailscale network that my wife and I have access to. I don't know that I'd love it if I had to debug and constantly do maintenance on it, to be honest. That's why my time self-hosting an [Invidious](https://invidious.io/) server ended after a week.

SearXNG isn't an indexing engine, but a "meta" one. Think [early 2000's Dogpile.com](https://en.wikipedia.org/wiki/Dogpile). Which, is basically what all the alternatives to the big two are doing to some extent. Instead of focusing on its own index, it focuses on preserving privacy at every step of the way. Sometimes to an annoying degree, but I get it.

But here's the thing: did you know it's not that easy to configure your own browser's default search engines anymore? It's never really been an option for Safari, but Firefox! should! not! be! this! difficult! I guess when all your money comes from an anticompetitive default search deal with Google, you can't be making it too easy. (and they need that money to focus on AI trash!)

Instead of letting me customize a search engine URL I had to install an extension called "[Add custom search engine](https://addons.mozilla.org/en-US/firefox/addon/add-custom-search-engine/)." If you're not already annoyed, you will be when you hear about how it works: It generates a payload, stores it to [Mozilla's pastebin](https://paste.mozilla.org/) and then reads it back to the browser.

For Safari on Mac, iPhone, and iPad I knew I would have to jump through some silly hoops, it's kinda Apple's whole thing: use our products, play silly games. Luckily this silly game is just a $3 browser extension called [xSearch](https://apps.apple.com/us/app/xsearch-for-safari/id1579902068). Not to be confused with the developer's other app xEngine which I still cannot tell the difference between, maybe just $1?

Anyway, time will tell how this works out for me.

P.S. [Never use Kagi.](https://d-shoot.net/kagi.html)
