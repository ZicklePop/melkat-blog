---
date: 2024-05-16T05:37:00Z
title: Hosting Mastodon and Pixelfed
tags: [post, me, hosting]
---

In 2018, I was running a Mastodon server for my friends. It was a dark time because Mastodon was taking off among nerds, but then suddenly it wasn't. It was a zombie internet of bots reposting people's tweets, and if you bothered to have a conversation with someone, it would go unnoticed. It was also a pain to host. I broke two-factor authentication way too often. I shut it down.

Fast forward to late 2022, and something happened in San Francisco that suddenly made it necessary to bring back my Mastodon server. DigitalOcean made the setup a little easier this time, but I still had to do a lot of manual work. Manual upgrades were also hit or miss if something went wrong. It also cost more than I thought it should.

After almost a year, I migrated to [Masto.host](https://masto.host/). They made it super easy and it's been a pleasure. There's someone in charge who knows what they're doing and it was cheaper than doing it myself. I am very happy with it.

I've been keeping an eye on Pixelfed since 2018. I've kept an eye on the lack of documentation. I've tried numerous ways to self-host it and there's always some incompatibility between something. The furthest I could get was to get it to work with either profile pictures or posting pictures, but not both.

That was until this year when I found available managed hosting for Pixelfed. I had been waiting for [Spacehost](https://spacehost.one/) to launch but I guess I got impatient. So I went with Elestio. It's weird. I created an account and then I had to get manually approved to spin up a service. The way they handle billing is that you have to pay for credits up front. But hey, it actually spun up a Pixelfed server that worked!

Maybe I don't know what "managed" means, but I started having problems. The server they put me on wasn't cheap and it wasn't fast. Every week I would get Docker image upgrade logs where it was clearly failing to upgrade for a variety of reasons. For one, it didn't have the proper authentication. But the bigger problem is that they had to build a new Docker image for each new version of Pixelfed. I don't think they're used to people using them to host Pixelfed because they've never updated that Docker image. I got them to do it once by contacting them via email. When I asked them again, I had to join a Discord server where I was told they would update the image. They never did.

Last week I got the email I had been waiting for: Spacehost was open for business. So I figured I'd give it a shot and see if I could migrate from Elestio, and I'm happy to report that it worked! The server is faster than ever and I'm really happy with the results.

Now to figure out if I can get my money out of Elestio's gross credits system. (*Update*: they did, thanks Elestio!)
