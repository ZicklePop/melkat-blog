---
title: What happened to 1Password?
date: 2024-06-08T09:12:40-07:00
tags: [post, tech, apps]
---

For nearly _20 years_, 1Password has been a favorite among people on their Apple devices. It's probably one of the most important applications one can have. It's what a password manager should be: secure, platform agnostic, and reliable. Well, _it was at one time_ reliable.

The current motto of tech companies is infinite growth at all costs. So the only place for them to go after being one of the best consumer apps was to go after the enterprise market. At the time they entered the enterprise market the competitors in the office were the always-has-been-always-will-be security nightmare that is [LastPass](https://en.wikipedia.org/wiki/LastPass#Security_incidents), and a some very user-hostile Java apps like [KeyPassX](https://en.wikipedia.org/wiki/KeePassX).

This wasn't a net negative, this pushed them to become platform agnostic with apps for Android, Windows, and Linux. This is super important for a password manager. If I have to use an Apple device to access my passwords, that's incredibly inconvenient. The problem is paying engineers to make native apps for all platforms is considered a waste of time and money to a corporation when you can do things like: move those engineers to work on A/B testing the smallest of features, or just lay them off and have a few people working on a single website-in-an-app solution that can run on multiple platforms, albeit poorly.

I'm a front-end engineer. I work in JavaScript and other web technologies. I love it. I think this method can be good, actually! It doesn't have to be bad, but when you approach this from rushed method of cutting jobs and cutting costs, you approach it with an attitude that will never result in a good product. So now 1Password has really slow and janky apps, but they are on all platforms so who can say if it was worth it or not?

Apps are important, but for password managers you have to be in the browsers. Fortunately for 1Password, in the last handful of years all browsers basically work the same for extension development, you just need to manage distribution. Unfortunately the big four browsers have all gotten progressively worse.

Instead of working on adding improvements and bug fixes, browsers have decided it would be best for them to work on making sure you use their parent company's other products. Microsoft Edge added cryptocurrency wallets and AI garbage. Mozilla laid off the people who worked on Firefox and turned their focus to investing in AI fads. Google Chrome focused on using your browser history to tune Google Search and other AI nonsense. Safari moves incredibly slow in a good year, but their big recent change was introducing profiles and shared tab groups, a feature they thought we needed for some reason. They all made sure extensions were buggy and more restricted than ever.

All of this combined led to the only thing in life I'm sure of: the 1Password browser extension is unusable garbage. If you try to use it to autofill it might insert your username and not the password. It might try to generate a new password in a field that wants a password you already have stored. It sometimes doesn't autofill at all, so luckily you can copy your account details from the extension, but the copy button doesn't work. Sometimes it autofills a sign up for with a username and password for you, then it offers to save it to your 1Password vault but, surprise, it didn't actually save. Sometimes, "something went wrong while loading." Whatever that means.

I don't know who to blame for all of this, it's probably a combination of all these tech companies just focusing on being terrible for short-term gains. The only way I know to use 1Password that works is to keep the app open and copy things over by hand, which is convoluted and annoying.

As I write this there are rumors that iCloud Passwords might become an actual product. In its current state it can't hold extra data about a login, it can only hold logins, and it can only be accessed in the Settings app or System Preferences. On Windows it needs you to use the terrible iCloud for Windows app and on Linux and Android it's non-existent. If Apple really wants to compete with 1Password, it needs to be everywhere.

Oh, and it needs to work.
