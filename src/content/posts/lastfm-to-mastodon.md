---
date: 2023-03-05T21:00:09.249Z
title: Last.fm to Mastodon Profile
tags: [link, mastodon, lastfm, scriptable]
cover: /img/lastfm-to-mastodon.png
coverAlt: A screenshot of a Mastodon bio showing that the person is listening to 100 gecs album 10,000 gecs and the song Doritos & Fritos with a link to the persons last.fm profile
link: https://paste.melanie.lol/last.fm-to-mastodon.js
---

At this point I’m just coming up with reasons to play with the Mastodon API. I don’t know. I haven’t used [Last.fm](https://www.last.fm/user/ZicklePop) in years but I started again recently just because I love logging things. I was also thinking what if I could automatically update my Mastodon profile with dynamic content. Mastodon profiles, by default, have up to four fields you can customize the label and content of. A common use for one of the fields to list their pronouns, link to their website, or share their location, so why not your last played track from Last.fm? My script works can work in two ways: it will look for a field titled `Last.fm` and set the value to the last played track, or it will look for a field value of a `last.fm` url and set the field title to the last played track.

This script requires [Scriptable.app](https://scriptable.app) but it can easily be converted to just run with Node. You will need to setup the config portion of the script with your Last.fm username, [Last.fm API key](https://www.last.fm/api), Mastodon instance, and Mastodon token. I hope that doesn’t sound like a lot. I’ve documented the code a bit to help you through all of this.

As always, if you have an questions or need help reach out to me on [Mastodon](https://nyan.lol/@zicklepop).
