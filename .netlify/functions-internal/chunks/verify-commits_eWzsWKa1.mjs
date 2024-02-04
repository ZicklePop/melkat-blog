const id = 'verify-commits.md'
const collection = 'posts'
const slug = 'verify-commits'
const body =
  '\nAnyone can be anyone when it comes to commits. For example, [here is a commit where ””Linus Torvalds”” deletes Linux](https://github.com/torvalds/linux/tree/8bcab0346d4fcf21b97046eb44db8cf37ddd6da0). I put this document together for myself a while back, but I thought I would share it with other people who want a straightforward guide to setting up commit signing with GPG.\n\n\n## Instructions\n\n1. Install gpg `brew install gnupg2` (or `sudo apt-get install gnupg2`, etc)\n2. Generate the key with `gpg --full-generate-key` (the default type is probably fine)\n3. Make sure it is at least `4096` bits\n4. Make sure you use your Github no-reply email or an email provided to your Github account.\n5. Get the signing key by running `gpg --list-secret-keys --keyid-format=long`\n  * In the following list, the signing key is `3AA5C34371567BD2`\n```shell\nsec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]\nuid                          Hubot \nssb   4096R/42B317FD4BA89E7A 2016-03-10\n```\n6. Get your public key by running `gpg --armor --export YOUR-SIGNING-KEY-HERE | pbcopy`\n7. Add your gpg key to your [Github key settings](https://github.com/settings/keys)\n8. Turn on Vigilant mode at the bottom of that page.\n9. Add your signing key to your Git config `git config --global user.signingkey YOUR-SIGNING-KEY-HERE`\n10. To sign all commits run `git config --global commit.gpgsign true`\n11. Add the GPG export to your zshconfig `echo \'export GPG_TTY=$(tty)\' >> ~/.zshrc;`\n\n\n## For Mac\n\n1. Mac: You can let Keychain manage your pin entry by running `brew install pinentry-mac`\n2. Tell gpg about it with `echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf`\n3. Restart gpg agent `killall gpg-agent`\n\n\n## Backup Key\n\n1. Export the public key `gpg --export -a YOUR-SIGNING-KEY-HERE > gpg-public.asc`\n2. Export the private key `gpg --export-secret-keys -a YOUR-SIGNING-KEY-HERE > gpg-secret.asc`\n3. You now should have two files `gpg-public.asc` and `gpg-secret.asc` in your current directory\n\n\n## Restore Key\n\n1. Import the public key `gpg --import gpg-pub.asc`\n2. Import the secret key `gpg --import gpg-sc.asc`\n\n\n## References\n\n- [Generating a new GPG key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)\n- [Adding a new GPG key to your GitHub account](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account)\n- [Enabling Vigilant mode](https://docs.github.com/en/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits#enabling-vigilant-mode)\n- [Telling Git about your signing key](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)\n- [Migrate GPG Keys from One Workstation to Another](https://gist.github.com/angela-d/8b27670bac26e4bf7c431715fef5cc51)\n'
const data = {
  date: new Date(1676958578453),
  tags: ['post', 'git', 'how-to'],
  title: 'How to Verify Your Commits',
}
const _internal = {
  type: 'content',
  filePath:
    '/Users/melanie/Developer/melkat-blog/src/content/posts/verify-commits.md',
  rawData:
    '\ndate: 2023-02-21T05:49:38.453Z\ntitle: How to Verify Your Commits\ntags: [post, git, how-to]',
}

export { _internal, body, collection, data, id, slug }
