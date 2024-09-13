---
title: Add an RSS Sync Service to New Reeder
date: 2024-09-13T13:45:42-07:00
tags: [post, apps]
---

The new version of [Reeder](https://reederapp.com) has decided to do something radical: not sync with dedicated RSS services. Previously, I wrote about why this is a problem in a post called _[RSS Reader Super Apps](https://melkat.blog/p/rss-super-apps)_. I subscribe to 302 RSS feeds, and when I imported them into the new Reeder and [The Iconfactory's upcoming Tapestry](https://www.kickstarter.com/projects/iconfactory/project-tapestry/description), there was no OPML import. Reeder now offers this feature. Yes, I added 302 feeds to both apps manually. The result? These apps would take over five minutes to finish checking every feed. Well, if it loaded at all. It also killed my battery. So, the first thing I needed to do was manually remove all 302 feeds.

I've been using [Dokploy](https://dokploy.com) on a Raspberry Pi 5 to self-host many free tools on my [Tailscale network](https://tailscale.com) I share with my wife and family. One of the services I spun up was [Miniflux](https://miniflux.app/), a pretty good RSS feed reading service that keeps up with all my RSS feeds. I seamlessly exported my feeds as an OPML file from [Feedbin](https://feedbin.com) and imported them into Miniflux. Now I have a centralized place checking the feeds and not my phone.

Miniflux provides a lot of APIs and integrations, which will come in handy. I then self-hosted [RSSHub](https://docs.rsshub.app), a service that will attempt to make an RSS feed out of almost anything by using whatever means it can hack together. Thankfully, one of those is making an [RSS feed out of all the entries items in your Miniflux account](https://docs.rsshub.app/routes/other#feed-entry). So I took that feed `rsshub.local/miniflux/entry/all/feed/`, and I fed it to Reeder and Tapestry. I know I can write a plugin for Tapestry, but I'm not all that invested in it at this early stage of its development. I recommend going to its feed setting in Reeder's feed list and telling it to open items from it in "reader view." Now, I can use these apps without waiting forever. I still think they need the ability to pull from dedicated RSS services and not hit over 302 feeds every time I launch the app or sporadically in the background.

Is this silly? Yes. Should I use another app instead? Yeah, probably.
