---
date: 2024-03-09T21:17:16.439Z
title: Hosting the Jamstack
tags: [post, javascript]
---

Vercel and Netlify offer amazing free hosting but what happens when you use more than they like? Well it's time to pay. Not only is it time to pay, but it's time to pay a lot and there are no in-between tiers. Both Netlify and Vercel start off at **$20 per month per person**.

I found their free features to be great, and their integration with git repositories is pretty nice, but once you start trying to figure out what you need to pay for, it gets confusing. You see, those prices I listed are just the “basics,” and when you go over things like traffic limits, build times, edge function usage, and many other bullet points on their very long pricing chart pages, you end up with additional fees.

While I've used each of these services for years, last month Netlify sent me an email telling me that my _pay-as-you-go plan_ now requires a credit card because something was using my blog's search function more than they (or I) expected. What pay-as-you-go plan? I didn’t sign up for that and now would I have. So I responded by immediately removing the few websites I had on Netlify and deleting my account. This is a sleazy way to do business. Surprise: Hidden fees! Apparently, I was lucky, because other people have reported getting [hundreds of thousands of dollars in bills](https://wheresbaldo.dev/tech/netlify/is-hosting-on-netlify-going-to-bankrupt-you) from bad actors hitting their site. I’ve seen similar reports from Vercel users, but the sources were all on a social network where everyone has deleted their stuff and left.

These companies are also taking tons of money from venture capitalists, so I will go out on a limb and say that they are not profitable. They probably don't even have a sustainable business plan. That may be fine for them, but it's not a solid foundation. That's a "hope their investors don't have a mood swing and demand mass layoffs" foundation.

My websites are simple Next.js and Astro projects that output to mostly static html with the occasional search or authentication function. I’m also not very popular. I can get by on very little, and as much as I like using `git push` to deploy, so sending me a bill greater than a [$5 Neocities Supporter](https://neocities.org/supporter) plan is a bad deal. It’s always a good idea to support the indie web.

I’m always looking in to other options in this space and would love to find something I can feel good about paying for, but Vercel and Netlify are not it.
