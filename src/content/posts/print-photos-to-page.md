---
date: 2024-02-21T21:50:07.473Z
title: Print Photos to a Single Page
tags: [post, shortcuts, ios]
cover: /img/print-photos-to-page.jpg
coverAlt: A screenshot of the iPad's print dialog with example output from this shortcut
---

When the iPhone was released in 2007, it came without the ability to print. The concept of printing from a wireless device wasn't impossible, but it wasn't expected. In 2010, Apple introduced AirPrint, which finally brought printing to the iPhone. Well, not quite, because it definitely didn't work with your printer, so you had to install a  Mac-only third-party app to act as an AirPrint server. The lifespan of a printer isn't that long, so sometime in the next decade it became commonplace for your printer to support printing from an iPhone or iPad. So here we are 13 years after the release of AirPrint, and there isn't much more support for it in Apple's apps than there was when it first came out.

Apple likes to use green, eco-friendly language and claims in its marketing. Like in 2016, when they announced Liam, a recycling robot that was going to revolutionize the recycling of Apple products. A year later it was reported that [Apple was forcing people to shred their products and not actually recycle them](https://www.vice.com/en/article/yp73jw/apple-recycling-iphones-macbooks). In 2022 they announced another recycling robot called Taz. I don't even remember Taz. What happened to Liam? Can recycling robots recycle themselves, or do they have to go in the shredder too? In 2023, Apple announced that their products were now "carbon neutral," but that was quickly revealed to be more [greenwashing marketing](https://www.ft.com/content/90392004-97e0-4444-a5cd-82220fe52510). Turns out buying carbon credits doesn't really make the world a better place if you are still destroying it and the annual upgrade cycle for Apple products with minor updates instead of using what you already have is not sustainable.

So when my dad asked me how to print multiple photos on a single page, I started recording my iPhone screen to show him how you select multiple photos in the Photos app on the iPhone and then you print them and somehow say "print these on a single page" and I was kind of shocked to see that Apple had not figured out how to do that in the last 13 years.

Instead, you have to print one photo per page. Of course, my next thought was to look at the App Store and, ugh, it's all ads and scam apps. In fact, other than using Pages, which is more complicated than it needs to be, I could not find a safe and easy way to do this. The only app I could think of that would come close is to use Instagram's 2015 app, Layout, which somehow still exists and has not had a proper update in 8 years. He wants to print on paper, not post to squares on Instagram to be mined for AI training data.

My next thought was "can I build this?" and "can I build this in a way that my dad could actually use?" Of course I could make it in Shortcuts but would a web app be better? I made a quick prototype in HTML that I would then convert to an app, but I found the finickiness of writing CSS for a printer was more trouble than it was worth. Shortcuts it is. At least then he could still select multiple photos and go to the same share sheet he would need for printing.

Creating a complex shortcut in the Shortcuts app is a painful process. A process I put up with, but gosh, is it not great. What I end up doing is writing code in another language that I am familiar enough with to convert into a shortcut. I came up with a function to determine how many rows and columns a given number of photos should have.

```js
function calculateGridDimensions(numPhotos) {
  const columns = Math.floor(Math.sqrt(numPhotos));
  const rows = Math.ceil(numPhotos / columns);
  return [columns, rows];
}
```

Pretty basic in JavaScript, but in Shortcuts it becomes a piece of abstract art. To get the number of columns, I take the square root of the number of photos selected for printing, and drop the decimal by rounding down. To get the rows, I divide the number of photos by the number of columns and round the decimal up to the nearest number.

The rest of the shortcut is making a lot of Shortcuts conventions match how actual programming works, and making compromises. The short of it is, I take the number of photos that make up a row and combine the photos horizontally. Then I take each row and combine them vertically. Now that I have a single image, I send it to the printer.

This is not perfect, but I think it will do what my dad needs. If you have a bunch of drastically different photo sizes, it can look a little funky. I could fix this by determining the image sizes and trying to make them  all similar by resizing and cropping. I played around with some ideas in a new shortcut, but I couldn't say for sure that I wasn't making things look worse, so I decided to scrap it and release it as is.

[**Get Print Photos to Page.shortcut**](https://www.icloud.com/shortcuts/a9692c108b87450095d792b1ac0ec01e)

_Update: As of the time of this post, using the print action from a shortcut is only supported when you run a shortcut directly, not as a share sheet action. So I have replaced the Print action with Share so you can manually hit print._
