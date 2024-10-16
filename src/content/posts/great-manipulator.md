---
title: A Great (Image) Manipulator
date: 2024-10-16T11:22:06-07:00
tags: [post, linux, apps]
---

Well, I found a stumbling block on Linux. So much of what I do requires some sort of image editing and manipulation. I would use Affinity Photo, Affinity Designer, and Paint.net on Windows. On iOS and Mac, I use the same Affinity apps and Pixelmator. The options for Linux aren't great. There's Krita, which looks like a lovely app for drawing, but that's for a different purpose.

The only choice I am aware of is to follow [this guide to installing Affinity apps on Linux](https://affinity.liz.pet). I did it, and it works well enough but feels fragile. It requires using a pretty old script and compiling a bespoke version of Wine. For example, when I go to export an image, it works, but then the app crashes. When I open an image, I have to navigate to my home directory from the root of my drive. I assume that part is fixable, but I need to take the time to investigate.

This whole issue came up because I wanted to make a [Steam Deck frame](https://some.pics/670f50e73e4b9) for the iOS app [Shareshot](https://shareshot.app/). I did it with Affinity on Linux, but it took a few tries. Affinity has some quirks on any platform that make pixel-perfect editing a challenge after coming from other apps.

I should address an elephant in the Linux room: the GNU Image Manipulation Program, but more commonly referred to as the slur its name abbreviates to. The fact that the name remains after 26 years is sad and pathetic. I worry that no one in the development community has been able to change it, and it reflects poorly on everyone involved. I haven't tried it since I was young, but even if they did fix all those deeply ingrained poor UX choices, I don't feel comfortable using it. I'd rather use ImageMagick from the command line.

As Canva bought Affinity, I have little faith in the app continuing in its current pay-once, no-AI form. If they didn't sell out, I could see it getting a proper Linux port, but I don't see that happening now.

Maybe Adobe's apps would be decent. However, as long as they charge absurdly high prices, surprise their users with contract lock-ins on their subscriptions, offer no simple way for people to cancel those subscriptions, and continue down their AI slop hellhole, that's a no-go.
