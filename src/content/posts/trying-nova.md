---
title: Trying to Like Nova
tags: [post, apps, criticism]
date: 2024-07-08T14:03:43-07:00
cover: ./trying-nova.png
coverAlt: A bunch of Nova crash dialogs.
---

I really want to like Nova. It is a very nice and well-crafted editor that I think has potential. I figured I should give Nova a third chance at being my editor after moving to Portland. You got to cheer for the home team right? Well, it was going great! Until things started falling apart. It started with a sudden shift in the JavaScript community: Prettier was out and Biome was in. Nova only has Prettier support because someone was nice enough to build a Nova extension on behalf of Panic and Prettier. It hasn't been updated in over a year.

I need Astro support so I installed the Astro plugin, also made by someone nice enough to do it on behalf of Panic and Astro. This worked fine for a while. For some reason, while working on keyboard commands for my blog, Nova kept crashing every time I would open a certain file. I started purging extensions I had installed that I didn't heavily rely on trying to figure out what was happening. Well, it turned out to be the extension that lets Astro files have syntax highlighting and etc. I started reading logs to see if I could get any sort of idea as to what made this stop working all of a sudden. Not a clue, but it led me to reading the extension's code on GitHub, and then things became clearer. This extension hasn't been maintained in over two years, and Astro has changed pretty drastically a few times since then. Now I'm shocked it ever worked. I poked around to see if simply upgrading some dependencies would fix it. No luck. I know I could invest the time and effort to build my own extensions for Nova, but that's not what interests me. All this goes to show me that I'm, for better or worse, stuck with VS Code.

Open source projects aren't going to invest their time in supporting every little editor out there, and relying on really nice individual people to keep these delicate extensions up to date isn't sustainable. The best case scenario I can imagine is that editors adopt the extension format of the dominate editor, like web browser extensions have. Some editors have done exactly that, which is cool, but I imagine that isn't an easy path for a native Mac app.

A girl can dream, though.
