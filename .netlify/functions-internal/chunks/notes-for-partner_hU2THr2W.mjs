const id = 'notes-for-partner.md'
const collection = 'posts'
const slug = 'notes-for-partner'
const body =
  '\n[Sindre Sorhus](https://sindresorhus.com/) launched yet another excellent free app for your iPhone and iPad: [Any Text](https://apps.apple.com/us/app/any-text-lock-screen-widgets/id1643199620). It’s a widget that lets you type text and have it show up as a lock screen widget.\n\nSo I had an idea: can I make it so that my girlfriend [Vivi](https://vivi.the.enbywit.ch/) can send me a message that stays on my lock screen? Obviously yes or I wouldn’t be writing this.\n\n\n## The Start\n\nI started by making a shared folder in iCloud Drive that Vivi and I can edit. In the folder I made three files `for-vivi.txt` `for-melanie.txt`.\n\nAny Text may seem incredibly simple, and it is, but it also contains a shortcut for the Shortcuts app that can set the text.\n\nSo I made two shortcuts: Get Message to Lock Screen and Send Message to Lock Screen.\n\n\n### Get Message to Lock Screen\n\nThis shortcut reads the last line of the file `for-vivi.txt` or `for-melanie.txt` and sends it to the Any Text.\n\n[Download Get Message to Lock Screen Shortcut](https://www.icloud.com/shortcuts/877f311be7334921b56b68779e847138)\n\n\n### Send Message to Lock Screen\n\nThis shortcut writes to a new line at the end of the file `for-vivi.txt` or `for-melanie.txt` with the inputted message.\n\n[Download Send Message to Lock Screen Shortcut](https://www.icloud.com/shortcuts/877f311be7334921b56b68779e847138)\n\n\n## Automate It\n\nIn the `Automation` tab of the Shortcuts app, you can tap the plus button in the top right hand corner to create a new automation. We’re going to make two of them. The first thing it asks is if this is a `Personal Automation` or `Home Automation`. For these, they will both be `Personal Automation`.\n\n\n### Set It\n\nI’ve set this automation to run at `Time of Day` and I chose `6am`. The action is a simple `Run Shortcut` action that runs the `Get Message to Lock Screen` shortcut. I turned off `Ask Before Running` and `Notify When Run` for seamless background execution. So now, every morning when I wake up I will get the latest message from Vivi.\n\n\n### Send It\n\nThis isn’t as fun if you aren’t sending a new message, so I sent this `Time of Day` automation to run at `9pm`, a few hours before I go to bed and before Vivi wakes up. This too is configured with a simple action to run the `Send Message to Lock Screen`. I left `Ask Before Running` enabled, because I may not be ready to send a new message right at that moment. I just simply tap the notification that shows up when I’m ready to write.\n\nIn the latest versions of Any Text there is a feature in the advanced settings called `Widget Tap Action` and I set this to `Run Shortcut` and then I typed in `Send Message to Lock Screen`. Now when I tap the lock screen widget I can send a message back right from there.\n\n\n## In Conclusion\n\nNow Vivi and I have a fun way to leave each other a daily message on each other’s phone. I hope you find this useful and come up with your own fun uses for Any Text.\n'
const data = {
  cover: '/img/notes-for-partner.png',
  date: new Date(1693891341488),
  tags: ['post', 'shortcuts', 'ios', 'anytext'],
  title: 'Leave a Note On Your Partner’s Lock Screen',
}
const _internal = {
  type: 'content',
  filePath:
    '/Users/melanie/Developer/melkat-blog/src/content/posts/notes-for-partner.md',
  rawData:
    '\ndate: 2023-09-05T05:22:21.488Z\ntitle: Leave a Note On Your Partner’s Lock Screen\ntags: [post, shortcuts, ios, anytext]\ncover: /img/notes-for-partner.png',
}

export { _internal, body, collection, data, id, slug }
