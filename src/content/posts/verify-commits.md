---
date: 2023-02-21T05:49:38.453Z
title: How to Verify Your Commits
tags: [post, git, how-to]
---

Anyone can be anyone when it comes to commits. For example, [here is a commit where ””Linus Torvalds”” deletes Linux](https://github.com/torvalds/linux/tree/8bcab0346d4fcf21b97046eb44db8cf37ddd6da0). I put this document together for myself a while back, but I thought I would share it with other people who want a straightforward guide to setting up commit signing with GPG.


## Instructions

1. Install gpg `brew install gnupg2` (or `sudo apt-get install gnupg2`, etc)
2. Generate the key with `gpg --full-generate-key` (the default type is probably fine)
3. Make sure it is at least `4096` bits
4. Make sure you use your Github no-reply email or an email provided to your Github account.
5. Get the signing key by running `gpg --list-secret-keys --keyid-format=long`
  * In the following list, the signing key is `3AA5C34371567BD2`
```shell
sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
uid                          Hubot 
ssb   4096R/42B317FD4BA89E7A 2016-03-10
```
6. Get your public key by running `gpg --armor --export YOUR-SIGNING-KEY-HERE | pbcopy`
7. Add your gpg key to your [Github key settings](https://github.com/settings/keys)
8. Turn on Vigilant mode at the bottom of that page.
9. Add your signing key to your Git config `git config --global user.signingkey YOUR-SIGNING-KEY-HERE`
10. To sign all commits run `git config --global commit.gpgsign true`
11. Add the GPG export to your zshconfig `echo 'export GPG_TTY=$(tty)' >> ~/.zshrc;`


## For Mac

1. Mac: You can let Keychain manage your pin entry by running `brew install pinentry-mac`
2. Tell gpg about it with `echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf`
3. Restart gpg agent `killall gpg-agent`


## Backup Key

1. Export the public key `gpg --export -a YOUR-SIGNING-KEY-HERE > gpg-public.asc`
2. Export the private key `gpg --export-secret-keys -a YOUR-SIGNING-KEY-HERE > gpg-secret.asc`
3. You now should have two files `gpg-public.asc` and `gpg-secret.asc` in your current directory


## Restore Key

1. Import the public key `gpg --import gpg-pub.asc`
2. Import the secret key `gpg --import gpg-sc.asc`


## References

- [Generating a new GPG key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
- [Adding a new GPG key to your GitHub account](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account)
- [Enabling Vigilant mode](https://docs.github.com/en/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits#enabling-vigilant-mode)
- [Telling Git about your signing key](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)
- [Migrate GPG Keys from One Workstation to Another](https://gist.github.com/angela-d/8b27670bac26e4bf7c431715fef5cc51)
