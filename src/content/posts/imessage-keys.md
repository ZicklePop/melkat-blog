---
date: 2024-05-20T06:43:50Z
title: Enabling iMessage Contact Verification Keys
tags: [post, imessage, shortcuts, security]
---

I slept on this feature when it first came out, but when I noticed that [omg.lol](https://home.omg.lol/referred-by/melanie) added support for sharing public iMessage Contact Verification keys, I woke up.

This means that when you send a message to someone you have verified, you will get a little check mark next to their name, and if it doesn't match, you will get a warning that this message might not be authentic.

Turning it on is pretty easy:

- Go to Settings, tap on your iCloud account, scroll to the bottom and select "Contact Key Verification"
- Turn on "Verification in iMesssage"

You might want to make a note of your public key by copying it and putting it somewhere you can refer to later. You can always go back and copy it later. For example, if you share your personal contact card with people from iCloud, you can paste your public key into the "verification code" section when you edit your personal contact so they will have it when you share your card.

Now, when you are in an iMessage chat, if you tap on the name and picture of the person you are messaging at the top of the app and scroll to the bottom of the list that pops up, you will see a section called "Advance Message Security". If it says "Verification Off," link them to this blog post. Otherwise, you can exchange keys, which will add their public key to the verification code section of their contact card in your address book. Don't forget to make sure that the keys that show up match what you and the other person expect.

If you use omg.lol, you can add your public key to the Keys section of the dashboard for your omg.lol address. Now when you put `{imessage-key}` in your web page it will insert a link to your public key. For example, [here's where mine links to.](https://home.omg.lol/keychain/melanie/imessage)

## More Resources

- [About iMessage Contact Key Verification](https://support.apple.com/en-us/118246) - Apple's support document on this
- [Contact Key Verification shortcut](https://www.icloud.com/shortcuts/3b54e025ab834ad0afe4eea5ad9402d6) - Opens the settings app directly to Contact Key Verification using the deep link `prefs:root=APPLE_ACCOUNT&path=TRANSPARENCY`
