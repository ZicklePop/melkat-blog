---
cover: ./how-to-read-news.png
coverAlt: Three popular news websites with ads and popups covering everything.
date: 2024-03-17T17:45:45.332Z
title: How to Read a News Website
tags: [post, apps, ios, safari, pc, macos]
---
So you want to read a dying media publication. You might think that you can _simply_ walk in to a news website and read it. Well! You'd be wrong. You've run out of free articles this month. You need to subscribe to our email newsletter. You also need to provide a credit card for a subscription that requires you to call a phone number to cancel.

Or not. Preferably not.

Here are some ways to improve this experience better without rewarding bad behavior, bad ethics, and supporting a company that regularly publishes transphobic content.

## Reader mode

The easiest method is to use your browser's reader mode feature. This will bring up a view of just the article and nothing else. In browsers like Safari and Firefox, you can look for a reader icon in your address bar. It's usually something that looks like a document with lines on it to represent text. In Safari, it might be hidden behind either a circle with three dots in it or an icon with two A's (aA).

If you have a keyboard, you can press `Command + Shift + R` in Safari. For Firefox, it is `Command + Option + R` on Mac or `Control + Alt + R` on Windows and Linux. 

Safari on iOS goes one step further because when you tap on the icon with two A's (aA) there is a menu labeled `Website Settings`. In it, you can turn on this neat feature so that whenever you are on a publication's website, it will automatically activate reader mode when there is an article. You do this by turning on `Use Reader Automatically`.

To do this in Safari for Mac, you need to open up Settings (you can press `Command + Comma`) and then go to the `Websites` tab at the top. On the left side you should see that the first option is `Reader` and on the right side there is a list of sites where you can enable the ability to automatically enter reading mode when available.

## Block cookies

**Caution: This can break your ability to log in to some websites, but I am going to assume you wouldn't want to do that anyway.**

This method works well for Chrome and Chromium-based browsers. To the left of your address bar there is a settings icon (a dot and a line on top of a line and a dot). Click it and select `Cookies and Site Data` and then select `Manage on-device site data`. You should now see a list of websites. To the right of this list is a vertical stack of three dots. Select that icon and choose `Don't allow to save data`.

For Safari I recommend using [1Blocker](https://1blocker.com) to block cookies for a domain. In the app there are a bunch of filters you can turn on and off, but for this I will recommend going to the `Custom` tab, and selecting `Block Cookies` and adding the website's domain name like `example.com`.

## Block JavaScript

**Caution: This may break things, but again, I am going to assume you just want to read articles on a website more than you want to be served nag screens and ads.**

For Chrome and Chromium-based browsers, on the left of your address bar there is a settings icon (a dot and a line on top of a line and a dot, same as in blocking cookies). Click on that and select `Site Settings`. This will take you to a list of permissions for a website. In this list is `JavaScript` and on the right you should see a drop down menu that says `Allow (default)`. Click on it and choose `Block`.

This is a bit more complicated for Safari browsers. Again, I recommend using [1Blocker](https://1blocker.com) to block JavaScript resources for a domain. Head to the app's `Custom` tab. This time we will scroll down to the bottom and create what they call `Advanced Customizations`. I named my new group `Block Scripts`, but you can name it whatever you like. This uses regular expressions, which is a way of matching characters based on patterns, so you might see some weird ways of typing a website. All you need to know is that if you want to block `example.com` you will put `https?://+([^:/]+\.)?example.com[:/]` in the URL field. Replace `example.com` with the domain name of a media publication that has probably has laid off hundreds of writers this year alone. You know, for example. Then scroll to the bottom of this list and uncheck `Block Resources of Any Type` and this will allow us to be more granular with what we can block so that images and the page itself can still load. In the list you will want to check the box next to `Scripts`.

## In conclusion

I hope this helped. I tried to keep it pretty light and general so you can apply this to any device, browser, or website. Yes, you should absolutely support independent media, but you cannot support everyone everywhere at once. The problems these big media companies are facing are not going to be solved by advertising or subscription revenue in their current state. And what's the point of putting stuff online if people can't read it?
