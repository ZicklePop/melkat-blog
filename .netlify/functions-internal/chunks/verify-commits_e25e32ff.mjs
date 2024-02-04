import {
  b as createComponent,
  r as renderTemplate,
  u as unescapeHTML,
  s as spreadAttributes,
} from './astro_13acd68d.mjs'
import '@astrojs/internal-helpers/path'
import './pages/image-endpoint_2bac92e6.mjs'
import 'clsx'
import 'html-escaper'
import 'mime/lite.js'

const images = {}

function updateImageReferences(html) {
  return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) =>
    spreadAttributes({
      src: images[imagePath].src,
      ...images[imagePath].attributes,
    })
  )
}

const html = updateImageReferences(
  '<p>Anyone can be anyone when it comes to commits. For example, <a href="https://github.com/torvalds/linux/tree/8bcab0346d4fcf21b97046eb44db8cf37ddd6da0">here is a commit where ””Linus Torvalds”” deletes Linux</a>. I put this document together for myself a while back, but I thought I would share it with other people who want a straightforward guide to setting up commit signing with GPG.</p>\n<h2 id="instructions">Instructions</h2>\n<ol>\n<li>Install gpg <code>brew install gnupg2</code> (or <code>sudo apt-get install gnupg2</code>, etc)</li>\n<li>Generate the key with <code>gpg --full-generate-key</code> (the default type is probably fine)</li>\n<li>Make sure it is at least <code>4096</code> bits</li>\n<li>Make sure you use your Github no-reply email or an email provided to your Github account.</li>\n<li>Get the signing key by running <code>gpg --list-secret-keys --keyid-format=long</code></li>\n</ol>\n<ul>\n<li>In the following list, the signing key is <code>3AA5C34371567BD2</code></li>\n</ul>\n<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #B392F0">sec</span><span style="color: #E1E4E8">   </span><span style="color: #79B8FF">4096</span><span style="color: #9ECBFF">R/3AA5C34371567BD2</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">2016</span><span style="color: #9ECBFF">-03-10</span><span style="color: #E1E4E8"> [expires: </span><span style="color: #79B8FF">2017</span><span style="color: #9ECBFF">-03-10]</span></span>\n<span class="line"><span style="color: #B392F0">uid</span><span style="color: #E1E4E8">                          </span><span style="color: #9ECBFF">Hubot</span><span style="color: #E1E4E8"> </span></span>\n<span class="line"><span style="color: #B392F0">ssb</span><span style="color: #E1E4E8">   </span><span style="color: #79B8FF">4096</span><span style="color: #9ECBFF">R/42B317FD4BA89E7A</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">2016</span><span style="color: #9ECBFF">-03-10</span></span></code></pre>\n<ol start="6">\n<li>Get your public key by running <code>gpg --armor --export YOUR-SIGNING-KEY-HERE | pbcopy</code></li>\n<li>Add your gpg key to your <a href="https://github.com/settings/keys">Github key settings</a></li>\n<li>Turn on Vigilant mode at the bottom of that page.</li>\n<li>Add your signing key to your Git config <code>git config --global user.signingkey YOUR-SIGNING-KEY-HERE</code></li>\n<li>To sign all commits run <code>git config --global commit.gpgsign true</code></li>\n<li>Add the GPG export to your zshconfig <code>echo \'export GPG_TTY=$(tty)\' >> ~/.zshrc;</code></li>\n</ol>\n<h2 id="for-mac">For Mac</h2>\n<ol>\n<li>Mac: You can let Keychain manage your pin entry by running <code>brew install pinentry-mac</code></li>\n<li>Tell gpg about it with <code>echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf</code></li>\n<li>Restart gpg agent <code>killall gpg-agent</code></li>\n</ol>\n<h2 id="backup-key">Backup Key</h2>\n<ol>\n<li>Export the public key <code>gpg --export -a YOUR-SIGNING-KEY-HERE > gpg-public.asc</code></li>\n<li>Export the private key <code>gpg --export-secret-keys -a YOUR-SIGNING-KEY-HERE > gpg-secret.asc</code></li>\n<li>You now should have two files <code>gpg-public.asc</code> and <code>gpg-secret.asc</code> in your current directory</li>\n</ol>\n<h2 id="restore-key">Restore Key</h2>\n<ol>\n<li>Import the public key <code>gpg --import gpg-pub.asc</code></li>\n<li>Import the secret key <code>gpg --import gpg-sc.asc</code></li>\n</ol>\n<h2 id="references">References</h2>\n<ul>\n<li><a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key">Generating a new GPG key</a></li>\n<li><a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account">Adding a new GPG key to your GitHub account</a></li>\n<li><a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits#enabling-vigilant-mode">Enabling Vigilant mode</a></li>\n<li><a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key">Telling Git about your signing key</a></li>\n<li><a href="https://gist.github.com/angela-d/8b27670bac26e4bf7c431715fef5cc51">Migrate GPG Keys from One Workstation to Another</a></li>\n</ul>'
)

const frontmatter = {
  date: '2023-02-21T05:49:38.453Z',
  title: 'How to Verify Your Commits',
  tags: ['post', 'git', 'how-to'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/verify-commits.md'
const url = undefined
function rawContent() {
  return '\nAnyone can be anyone when it comes to commits. For example, [here is a commit where ””Linus Torvalds”” deletes Linux](https://github.com/torvalds/linux/tree/8bcab0346d4fcf21b97046eb44db8cf37ddd6da0). I put this document together for myself a while back, but I thought I would share it with other people who want a straightforward guide to setting up commit signing with GPG.\n\n\n## Instructions\n\n1. Install gpg `brew install gnupg2` (or `sudo apt-get install gnupg2`, etc)\n2. Generate the key with `gpg --full-generate-key` (the default type is probably fine)\n3. Make sure it is at least `4096` bits\n4. Make sure you use your Github no-reply email or an email provided to your Github account.\n5. Get the signing key by running `gpg --list-secret-keys --keyid-format=long`\n  * In the following list, the signing key is `3AA5C34371567BD2`\n```shell\nsec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]\nuid                          Hubot \nssb   4096R/42B317FD4BA89E7A 2016-03-10\n```\n6. Get your public key by running `gpg --armor --export YOUR-SIGNING-KEY-HERE | pbcopy`\n7. Add your gpg key to your [Github key settings](https://github.com/settings/keys)\n8. Turn on Vigilant mode at the bottom of that page.\n9. Add your signing key to your Git config `git config --global user.signingkey YOUR-SIGNING-KEY-HERE`\n10. To sign all commits run `git config --global commit.gpgsign true`\n11. Add the GPG export to your zshconfig `echo \'export GPG_TTY=$(tty)\' >> ~/.zshrc;`\n\n\n## For Mac\n\n1. Mac: You can let Keychain manage your pin entry by running `brew install pinentry-mac`\n2. Tell gpg about it with `echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf`\n3. Restart gpg agent `killall gpg-agent`\n\n\n## Backup Key\n\n1. Export the public key `gpg --export -a YOUR-SIGNING-KEY-HERE > gpg-public.asc`\n2. Export the private key `gpg --export-secret-keys -a YOUR-SIGNING-KEY-HERE > gpg-secret.asc`\n3. You now should have two files `gpg-public.asc` and `gpg-secret.asc` in your current directory\n\n\n## Restore Key\n\n1. Import the public key `gpg --import gpg-pub.asc`\n2. Import the secret key `gpg --import gpg-sc.asc`\n\n\n## References\n\n- [Generating a new GPG key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)\n- [Adding a new GPG key to your GitHub account](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account)\n- [Enabling Vigilant mode](https://docs.github.com/en/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits#enabling-vigilant-mode)\n- [Telling Git about your signing key](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)\n- [Migrate GPG Keys from One Workstation to Another](https://gist.github.com/angela-d/8b27670bac26e4bf7c431715fef5cc51)\n'
}
function compiledContent() {
  return html
}
function getHeadings() {
  return [
    { depth: 2, slug: 'instructions', text: 'Instructions' },
    { depth: 2, slug: 'for-mac', text: 'For Mac' },
    { depth: 2, slug: 'backup-key', text: 'Backup Key' },
    { depth: 2, slug: 'restore-key', text: 'Restore Key' },
    { depth: 2, slug: 'references', text: 'References' },
  ]
}

const Content = createComponent((result, _props, slots) => {
  const { layout, ...content } = frontmatter
  content.file = file
  content.url = url

  return renderTemplate`${unescapeHTML(html)}`
})
Content[Symbol.for('astro.needsHeadRendering')] = true

export {
  Content,
  compiledContent,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  images,
  rawContent,
  url,
}
