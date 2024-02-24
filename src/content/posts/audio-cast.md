---
cover: /img/audio-cast.jpg
coverAlt: A screenshot showing three apps on an iPad, the apps are Podcasts, Shortcuts, and Files demonstrating the setup for this post
date: 2024-01-07T03:49:59.148Z
title: A Podcast of Articles and Text
tags: [post, shortcuts, ios, php, podcasts]
---

I recently mentioned that I like how modern read-later apps have natural-sounding text-to-speech capabilities. Safari just added the ability to read articles to you. It made me wonder if I could get something like that to read articles aloud without an internet connection.

This was partly inspired by Federico Viticci's [MatterBot](https://club.macstories.net/posts/take-control-of-your-matter-queue-with-matterbot) (paywalled), which makes a podcast of the text-to-speech audio for your reading queue. (I've never tried that, and I don't know if it still works.)

My approach uses Apple Shortcuts to share articles as audio files in a podcast feed. It parses a web page for an article, tells Siri to read it, and stores the audio file on my NAS. I also made a version that accepts text.

[**Get Save Article Shortcut**](https://www.icloud.com/shortcuts/394cac98b3eb4f359637ae6282b2d701)   
[**Get Save Text Shortcut**](https://www.icloud.com/shortcuts/2d6fc7b6f4664fcc9422b23f22bd8122)

The location where the file is saved on my NAS is running a web server with PHP. I haven't used PHP in a long time, but it serves this basic purpose. All I needed it to do was to look for audio files in the current folder and then generate a podcast RSS feed.

[**Get PHP Script**](https://paste.melanie.lol/audio-cast.php)

Since my NAS is accessible over my private network I can now subscribe to my new podcast feed with a URL like `http://ds423/audio-cast` in Apple Podcasts. Personally, I use [Airshow](https://feedbin.com/airshow) to listen to podcasts, but I'm pretty sure it runs feeds through its own network, so it wouldn't be able to reach my NAS.

This works just fine, but the text-to-speech part is slow. I imagine I could speed this up by not using `Siri Voice 4` but that's the only natural-sounding voice offered. In fact, it's the only Siri voice available.