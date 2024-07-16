---
title: First Impressions of iOS 18 and The Gang
cover: ./ios-18-beta.jpg
coverAlt: The new betas running on an iPad, iPhone, and Apple Watch
date: 2024-07-16T12:41:53-07:00
tags: [post, tech, criticism]
---

I've made it clear that I have a huge dislike of Apple's yearly update cycle for their software (and hardware, to be honest). It's bad from a software perspective because you're giving people a lot of change all at once with a high probability that something will go wrong. You're also constantly playing catch up with the rest of the world. Yes, I know there are one or two feature updates outside of the fall OS update, but it's typically features that were held back for marketing purposes.

So what features does this brand new big OS update give us? Weird tinted icons. I'm going to use them to just make brands and Jony Ive cry in their generative AI grave. We should be able to set any icon to anything we want without having to make slow and limited shortcuts, but instead we get this compromise that won't please many.

The other big addition is a minimum viable product version of Keychain that's only slightly better: Passwords. It doesn't support login items that don't have a password, that don't have a website, or custom fields. It makes a lot of assumptions about credentials that are falsehoods. It also doesn't import 1Password's export format, so if you're wanting to move between the two frustrating apps, you're exporting a CSV file.

My frustration here is also with 1Password. They've made exporting individual vaults impossible without taking advantage of [Travel Mode](https://support.1password.com/travel-mode/), and even then you can't tell it not to export archived logins. So get ready to import that CSV in to a spreadsheet app and work some magic. 1Password will make no attempt to add custom fields to the export, which unless they let you put the data in the `Notes` field, Apple's Password app wouldn't accept either. I feel like there's an opportunity to build a shell script that makes this easier.

But let's not overlook my favorite new feature in iOS 18: the ability to remove that awful flashlight icon on the lock screen of the iPhone. Finally people will stop telling me to turn off my headlights when it accidentally activates.

Enjoy a quick intermission to tell you what's new for the watch and TV:

---

The big change in watchOS is the addition of a translation app and when you swipe up on the clock screen you can now see a digital clock instead of an analogue clock.

The big change in tvOS is that they updated the about screen text to say the version number of the beta you installed. Riveting.

---

Hey, we're back. Let's talk about the Mac.

Remember when iPads and Macs got the Continuity feature that let you share a mouse and keyboard between the devices? It never really worked outside of Apple's own mouse and keyboard. Sometimes the shift key just doesn't shift, sometimes the scroll wheel just doesn't scroll. Well, here we are years later and now we can do this between the Mac and iPhone. Every bug that's existed in Continuity since it came out still exists, but this time you can use your iPhone when the phone is locked from your Mac.

Yes I know these are betas and things are subject to change, but I don't have any new annoyances that I didn't already have with the "stable" releases. You are probably fine installing them if you want to play around with tinting app icons. That said, a future update could make me eat these words.

That's it. I know you're thinking, did I forget the iPad? No, Apple did.
