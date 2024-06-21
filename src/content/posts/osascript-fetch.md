---
date: 2024-03-05T05:23:13.954Z
title: Fetching Data with Osascript
tags: [post, javascript, code, osascript, alfred]
---

Every time [Alfred](https://www.alfredapp.com) has a new update, I think about writing workflows for it again, and every time I get caught up in what is the easiest way to write code for it, just in case I want to share it. I don't want to worry about what languages and packages they have installed on their machine. I used to work with AppleScript, but it feels kind of outdated. In 2014, Apple started bundling a JavaScript version of AppleScript, but it never had proper documentation, and every once in a while I'd look at it and be disappointed that I couldn't make an API request. That was until I looked at the [Amazon Suggest](https://alfred.app/workflows/alfredapp/amazon-suggest/) workflow and saw that the Alfred team had figured out how to do it.

I took what I learned from them and turned it into a function that I can drop it where I need it.

```js
function fetch(url) {
  const queryURL = $.NSURL.URLWithString(url);
  const requestData = $.NSData.dataWithContentsOfURL(queryURL);
  const requestString = $.NSString.alloc.initWithDataEncoding(
    requestData,
    $.NSUTF8StringEncoding,
  ).js;
  return JSON.parse(requestString);
}

const json = fetch("/gifs/api")
console.log(JSON.stringify(json))
```

You can run the script above by saving it to a file and running `osascript -l JavaScript script.js` or by placing it in to an Alfred workflow script with the language set to `/usr/bin/osascript (JavaScript)`. However, it will not work in Apple's classic AppleScript editor Script Editor when set to JavaScript.
