const id = 'sf-jury-summon.md'
const collection = 'posts'
const slug = 'sf-jury-summon'
const body =
  "\nIn San Francisco, when we get summoned for jury duty, we are lucky enough to have a [website to check](https://www.sfsuperiorcourt.org/divisions/jury-services/jury-reporting) that tells us it will be updated at 4:30 pm on weekdays. It's a pretty simple website, which makes it perfect for automating this task.\n\n\n## Ask Siri\n\nYou can use the Shortcuts.app on your Apple Watch, iPhone, iPad, and Mac. You will need to add your group number to the script for this to work.\n\n[Get San Francisco Jury Duty Status.shortcut](https://www.icloud.com/shortcuts/1f3f5923da1443a5b0ac6160ba1c791c)\n\n\n## Home screen widget\n\nThere is a great app for iPhone and iPad called [Scriptable](https://scriptable.app) that lets you write and run JavaScript that can make home screen widgets. You will need to set your group number on line with `const GROUP_NUMBER`.\n\n[Get SF Jury Duty Widget.js](https://melanie.paste.lol/sf-jury-duty-widget.js)\n"
const data = {
  cover: '\u002Fimg\u002Fsfjuryduty.jpg',
  date: new Date(1676260525182),
  tags: ['post', 'javascript', 'shortcuts', 'scriptable', 'sanfrancisco'],
  title: 'Checking Your SF Jury Summon',
}
const _internal = {
  filePath:
    '/Users/melanie/Developer/melkat-blog/src/content/posts/sf-jury-summon.md',
  rawData:
    '\ndate: 2023-02-13T03:55:25.182Z\ntitle: Checking Your SF Jury Summon\ntags: [post, javascript, shortcuts, scriptable, sanfrancisco]\ncover: /img/sfjuryduty.jpg',
}

export { _internal, body, collection, data, id, slug }
