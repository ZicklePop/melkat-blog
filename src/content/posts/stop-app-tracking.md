---
title: Apple's Privacy Protections Aren't Enough
tags: [post, tech, criticism, security]
date: 2024-07-06T13:10:22-07:00
---

In Safari, there's a feature that was heavily touted at launch called Privacy Reports. The idea is that Apple will protect you from trackers on the internet. In typical Apple fashion, it's not as straight forward as that, because of course it's not. I don't even think it blocks trackers, it just holds back on the amount of data it gives. Apple uses the word "block" in many places, but at the same time claims it does not "break" Google Analytics. Well, why not? Break it.

This morning I installed [Little Snitch Mini](https://obdev.at/products/littlesnitch-mini/index.html), a freemium alternative to [Little Snitch](https://obdev.at/products/littlesnitch/index.html). Little Snitch tells you which websites an app is sending data to. This seems like an important tool for protecting privacy and I would say everyone should have it, but it's probably a better idea to block these targets at the DNS or router level. The idea behind Little Snitch (not mini) is that you have to approve these connections as they are made. I like that idea a lot.

Little Snitch Mini, for free, shows you all the apps making network requests on your computer. With this information, I've learned two things:

1. People still use Mixpanel, [lol](https://www.theregister.com/2018/02/07/mixpanel_slurped_passwords_in_library_update_slip/)
2. Apple should also provide privacy reports for apps, not just Safari

Apps should be forced to ask for permission to collect any data. If you want to monitor my computer when I'm not actively using your app, you need consent, and I don't recall giving it.

We all know the reason websites with apps are always nagging you to install the app: better tracking. "Limited Tracking" with Apple's App Tracking Transparency doesn't go far enough, like all of Apple's privacy "protections."

When your customers are confused and not clear on what "block" means, you are clearly up to no good. Apple may not want to step on Google and other big tech company's toes but I do. I need to break in these [Doc Martens](https://www.youtube.com/watch?v=iEIqsI-F8wE).

So what you can do today?

- Install the firewall included in [1Blocker](https://1blocker.com) on your iOS devices
- Check if your router has a way to block ads and trackers. My Synology router calls this feature [Safe Access](https://kb.synology.com/en-global/SRM/tutorial/Quick_Start_Safe_Access)
- Use [NextDNS](https://nextdns.io/?from=qa2cg8e9) and turn on one of their many blocklists
- Set up a [Pi-hole](https://pi-hole.net) if you're that kind of nerd

I have also come across some websites that allow you to test how good your current defenses are.

- [Test Ad Block - Toolz](https://d3ward.github.io/toolz/adblock.html)
- [AdBlock Tester](https://adblock-tester.com/)

The most important thing is to stay vigilant, informed, and keep an eye on your network.
