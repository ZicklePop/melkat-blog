---
date: 2024-04-07T20:47:00Z
title: Embrace the JSON Feed
tags: [post, code, javascript]
---

[JSON Feeds](https://www.jsonfeed.org) have been around since 2017 but the adoption of them hasn't gone far enough. [RSS](https://en.wikipedia.org/wiki/RSS) became a thing in 1999, [Atom](https://en.wikipedia.org/wiki/Atom_\(web_standard\)) in 2005, and yet those are what most people use to this day. As a front-end engineer, this sucks. Working with XML is a nightmare and drags down my code's efficiency, but I do it because that's the best feed option provided most of the time.

Working with JSON is just so much more straightforward than working with XML. It's easier to make a JSON feed. It's easier to read a JSON feed.

To underline my point to get the latest feed item in XML it would look roughly like this:
    
```javascript
import { XMLParser } from 'fast-xml-parser'
const parser = new XMLParser({
  ignoreAttributes: false,
})
const parsedXML = parser.parse(xmlAsString, {})
if (parsedXML?.feed?.entry) {
  // If the feed is Atom
  console.log(parsedXML.feed.entry[0])
} else if (parsedXML?.rss?.channel?.item) {
  // If the feed is RSS
  console.log(parsedXML.rss.channel.item[0])
}
```

But with JSON Feed it's only:
    
```javascript
console.log(myJsonFeed.items[0])
```

It's time to move on: no new RSS feeds in 2024
