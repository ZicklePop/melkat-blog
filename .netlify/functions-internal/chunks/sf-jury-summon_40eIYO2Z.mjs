import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>In San Francisco, when we get summoned for jury duty, we are lucky enough to have a <a href="https://www.sfsuperiorcourt.org/divisions/jury-services/jury-reporting">website to check</a> that tells us it will be updated at 4:30 pm on weekdays. It’s a pretty simple website, which makes it perfect for automating this task.</p>\n<h2 id="ask-siri">Ask Siri</h2>\n<p>You can use the Shortcuts.app on your Apple Watch, iPhone, iPad, and Mac. You will need to add your group number to the script for this to work.</p>\n<p><a href="https://www.icloud.com/shortcuts/1f3f5923da1443a5b0ac6160ba1c791c">Get San Francisco Jury Duty Status.shortcut</a></p>\n<h2 id="home-screen-widget">Home screen widget</h2>\n<p>There is a great app for iPhone and iPad called <a href="https://scriptable.app">Scriptable</a> that lets you write and run JavaScript that can make home screen widgets. You will need to set your group number on line with <code>const GROUP_NUMBER</code>.</p>\n<p><a href="https://melanie.paste.lol/sf-jury-duty-widget.js">Get SF Jury Duty Widget.js</a></p>'

const frontmatter = {
  date: '2023-02-13T03:55:25.182Z',
  title: 'Checking Your SF Jury Summon',
  tags: ['post', 'javascript', 'shortcuts', 'scriptable', 'sanfrancisco'],
  cover: '/img/sfjuryduty.jpg',
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/sf-jury-summon.md'
const url = undefined
function rawContent() {
  return "\nIn San Francisco, when we get summoned for jury duty, we are lucky enough to have a [website to check](https://www.sfsuperiorcourt.org/divisions/jury-services/jury-reporting) that tells us it will be updated at 4:30 pm on weekdays. It's a pretty simple website, which makes it perfect for automating this task.\n\n\n## Ask Siri\n\nYou can use the Shortcuts.app on your Apple Watch, iPhone, iPad, and Mac. You will need to add your group number to the script for this to work.\n\n[Get San Francisco Jury Duty Status.shortcut](https://www.icloud.com/shortcuts/1f3f5923da1443a5b0ac6160ba1c791c)\n\n\n## Home screen widget\n\nThere is a great app for iPhone and iPad called [Scriptable](https://scriptable.app) that lets you write and run JavaScript that can make home screen widgets. You will need to set your group number on line with `const GROUP_NUMBER`.\n\n[Get SF Jury Duty Widget.js](https://melanie.paste.lol/sf-jury-duty-widget.js)\n"
}
function compiledContent() {
  return html
}
function getHeadings() {
  return [
    { depth: 2, slug: 'ask-siri', text: 'Ask Siri' },
    { depth: 2, slug: 'home-screen-widget', text: 'Home screen widget' },
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
