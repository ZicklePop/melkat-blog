---
date: 2023-09-13T05:44:55.629Z
title: Auto-connect to Nearby Mullvad Servers with Tailscale on iOS
tags: [post, tailscale, mullvad, shortcuts, ios]
---

A while back I had a VPN app that would look out for unknown Wi-Fi networks and automatically connect to the closest VPN server to your location. That app is no longer around, but I've been wanting to replicate that feature ever since.

[Tailscale has a new integration with Mullvad](https://tailscale.com/blog/mullvad-integration/). If you're not familiar with Tailscale, it basically lets you securely connect to your machines over any network. You can set up one of your machines to be an "exit node", allowing you to route all your traffic through that machine using the same VPN. With the Mullvad integration, your exit node can be one of their secure servers around the world, while still being able to access your machines.

Using the automation feature of Apple's Shortcuts.app, we can set up a shortcut to run whenever we connect to a Wi-Fi network. When installing the shortcut, you need to give it your primary Wi-Fi network name. If you connect to it, it will turn off the exit nodes. If you connect to a different one, it will use a customizable list and your current location to figure out which one is closest to your current location.

The list looks like this:

```
San Francisco:us-sjc-wg-001
Los Angeles:us-lax-wg-101
Nashville:us-atl-wg-001
Tokyo:jp-tyo-wg-001
Osaka:jp-osa-wg-001
Warsaw:pl-waw-wg-101
```

The structure is basically `city name:server name`. You can find Mullvad's list of server names by filtering the [Mullvad server list](https://mullvad.net/en/servers) website for servers of type WireGuard.

Feel free to customize this shortcut to suit your needs. I know some people have more than one Wi-Fi network they trust, city names alone may not be specific enough for you.

[**Download Auto Exit Nodes Shortcut**](https://www.icloud.com/shortcuts/f0738293325b4aa5bb6f07b2d3571d19)