import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p><a href="https://sindresorhus.com/">Sindre Sorhus</a> launched yet another excellent free app for your iPhone and iPad: <a href="https://apps.apple.com/us/app/any-text-lock-screen-widgets/id1643199620">Any Text</a>. It’s a widget that lets you type text and have it show up as a lock screen widget.</p>\n<p>So I had an idea: can I make it so that my girlfriend <a href="https://vivi.the.enbywit.ch/">Vivi</a> can send me a message that stays on my lock screen? Obviously yes or I wouldn’t be writing this.</p>\n<h2 id="the-start">The Start</h2>\n<p>I started by making a shared folder in iCloud Drive that Vivi and I can edit. In the folder I made three files <code>for-vivi.txt</code> <code>for-melanie.txt</code>.</p>\n<p>Any Text may seem incredibly simple, and it is, but it also contains a shortcut for the Shortcuts app that can set the text.</p>\n<p>So I made two shortcuts: Get Message to Lock Screen and Send Message to Lock Screen.</p>\n<h3 id="get-message-to-lock-screen">Get Message to Lock Screen</h3>\n<p>This shortcut reads the last line of the file <code>for-vivi.txt</code> or <code>for-melanie.txt</code> and sends it to the Any Text.</p>\n<p><a href="https://www.icloud.com/shortcuts/877f311be7334921b56b68779e847138">Download Get Message to Lock Screen Shortcut</a></p>\n<h3 id="send-message-to-lock-screen">Send Message to Lock Screen</h3>\n<p>This shortcut writes to a new line at the end of the file <code>for-vivi.txt</code> or <code>for-melanie.txt</code> with the inputted message.</p>\n<p><a href="https://www.icloud.com/shortcuts/877f311be7334921b56b68779e847138">Download Send Message to Lock Screen Shortcut</a></p>\n<h2 id="automate-it">Automate It</h2>\n<p>In the <code>Automation</code> tab of the Shortcuts app, you can tap the plus button in the top right hand corner to create a new automation. We’re going to make two of them. The first thing it asks is if this is a <code>Personal Automation</code> or <code>Home Automation</code>. For these, they will both be <code>Personal Automation</code>.</p>\n<h3 id="set-it">Set It</h3>\n<p>I’ve set this automation to run at <code>Time of Day</code> and I chose <code>6am</code>. The action is a simple <code>Run Shortcut</code> action that runs the <code>Get Message to Lock Screen</code> shortcut. I turned off <code>Ask Before Running</code> and <code>Notify When Run</code> for seamless background execution. So now, every morning when I wake up I will get the latest message from Vivi.</p>\n<h3 id="send-it">Send It</h3>\n<p>This isn’t as fun if you aren’t sending a new message, so I sent this <code>Time of Day</code> automation to run at <code>9pm</code>, a few hours before I go to bed and before Vivi wakes up. This too is configured with a simple action to run the <code>Send Message to Lock Screen</code>. I left <code>Ask Before Running</code> enabled, because I may not be ready to send a new message right at that moment. I just simply tap the notification that shows up when I’m ready to write.</p>\n<p>In the latest versions of Any Text there is a feature in the advanced settings called <code>Widget Tap Action</code> and I set this to <code>Run Shortcut</code> and then I typed in <code>Send Message to Lock Screen</code>. Now when I tap the lock screen widget I can send a message back right from there.</p>\n<h2 id="in-conclusion">In Conclusion</h2>\n<p>Now Vivi and I have a fun way to leave each other a daily message on each other’s phone. I hope you find this useful and come up with your own fun uses for Any Text.</p>'

const frontmatter = {
  date: '2023-09-05T05:22:21.488Z',
  title: 'Leave a Note On Your Partner’s Lock Screen',
  tags: ['post', 'shortcuts', 'ios', 'anytext'],
  cover: '/img/notes-for-partner.png',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/notes-for-partner.md'
const url = undefined
function rawContent() {
  return '\n[Sindre Sorhus](https://sindresorhus.com/) launched yet another excellent free app for your iPhone and iPad: [Any Text](https://apps.apple.com/us/app/any-text-lock-screen-widgets/id1643199620). It’s a widget that lets you type text and have it show up as a lock screen widget.\n\nSo I had an idea: can I make it so that my girlfriend [Vivi](https://vivi.the.enbywit.ch/) can send me a message that stays on my lock screen? Obviously yes or I wouldn’t be writing this.\n\n\n## The Start\n\nI started by making a shared folder in iCloud Drive that Vivi and I can edit. In the folder I made three files `for-vivi.txt` `for-melanie.txt`.\n\nAny Text may seem incredibly simple, and it is, but it also contains a shortcut for the Shortcuts app that can set the text.\n\nSo I made two shortcuts: Get Message to Lock Screen and Send Message to Lock Screen.\n\n\n### Get Message to Lock Screen\n\nThis shortcut reads the last line of the file `for-vivi.txt` or `for-melanie.txt` and sends it to the Any Text.\n\n[Download Get Message to Lock Screen Shortcut](https://www.icloud.com/shortcuts/877f311be7334921b56b68779e847138)\n\n\n### Send Message to Lock Screen\n\nThis shortcut writes to a new line at the end of the file `for-vivi.txt` or `for-melanie.txt` with the inputted message.\n\n[Download Send Message to Lock Screen Shortcut](https://www.icloud.com/shortcuts/877f311be7334921b56b68779e847138)\n\n\n## Automate It\n\nIn the `Automation` tab of the Shortcuts app, you can tap the plus button in the top right hand corner to create a new automation. We’re going to make two of them. The first thing it asks is if this is a `Personal Automation` or `Home Automation`. For these, they will both be `Personal Automation`.\n\n\n### Set It\n\nI’ve set this automation to run at `Time of Day` and I chose `6am`. The action is a simple `Run Shortcut` action that runs the `Get Message to Lock Screen` shortcut. I turned off `Ask Before Running` and `Notify When Run` for seamless background execution. So now, every morning when I wake up I will get the latest message from Vivi.\n\n\n### Send It\n\nThis isn’t as fun if you aren’t sending a new message, so I sent this `Time of Day` automation to run at `9pm`, a few hours before I go to bed and before Vivi wakes up. This too is configured with a simple action to run the `Send Message to Lock Screen`. I left `Ask Before Running` enabled, because I may not be ready to send a new message right at that moment. I just simply tap the notification that shows up when I’m ready to write.\n\nIn the latest versions of Any Text there is a feature in the advanced settings called `Widget Tap Action` and I set this to `Run Shortcut` and then I typed in `Send Message to Lock Screen`. Now when I tap the lock screen widget I can send a message back right from there.\n\n\n## In Conclusion\n\nNow Vivi and I have a fun way to leave each other a daily message on each other’s phone. I hope you find this useful and come up with your own fun uses for Any Text.\n'
}
function compiledContent() {
  return html
}
function getHeadings() {
  return [
    { depth: 2, slug: 'the-start', text: 'The Start' },
    {
      depth: 3,
      slug: 'get-message-to-lock-screen',
      text: 'Get Message to Lock Screen',
    },
    {
      depth: 3,
      slug: 'send-message-to-lock-screen',
      text: 'Send Message to Lock Screen',
    },
    { depth: 2, slug: 'automate-it', text: 'Automate It' },
    { depth: 3, slug: 'set-it', text: 'Set It' },
    { depth: 3, slug: 'send-it', text: 'Send It' },
    { depth: 2, slug: 'in-conclusion', text: 'In Conclusion' },
  ]
}

const Content = createComponent((result, _props, slots) => {
  const { layout, ...content } = frontmatter
  content.file = file
  content.url = url

  return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`
})

export {
  Content,
  compiledContent,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url,
}
