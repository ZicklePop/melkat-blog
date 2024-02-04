const id = 'tailscale-nearby-exit-nodes.md'
const collection = 'posts'
const slug = 'tailscale-nearby-exit-nodes'
const body =
  "\nA while back I had a VPN app that would look out for unknown Wi-Fi networks and automatically connect to the closest VPN server to your location. That app is no longer around, but I've been wanting to replicate that feature ever since.\n\n[Tailscale has a new integration with Mullvad](https://tailscale.com/blog/mullvad-integration/). If you're not familiar with Tailscale, it basically lets you securely connect to your machines over any network. You can set up one of your machines to be an \"exit node\", allowing you to route all your traffic through that machine using the same VPN. With the Mullvad integration, your exit node can be one of their secure servers around the world, while still being able to access your machines.\n\nUsing the automation feature of Apple's Shortcuts.app, we can set up a shortcut to run whenever we connect to a Wi-Fi network. When installing the shortcut, you need to give it your primary Wi-Fi network name. If you connect to it, it will turn off the exit nodes. If you connect to a different one, it will use a customizable list and your current location to figure out which one is closest to your current location.\n\nThe list looks like this:\n\n```\nSan Francisco:us-sjc-wg-001\nLos Angeles:us-lax-wg-101\nNashville:us-atl-wg-001\nTokyo:jp-tyo-wg-001\nOsaka:jp-osa-wg-001\nWarsaw:pl-waw-wg-101\n```\n\nThe structure is basically `city name:server name`. You can find Mullvad's list of server names by filtering the [Mullvad server list](https://mullvad.net/en/servers) website for servers of type WireGuard.\n\nFeel free to customize this shortcut to suit your needs. I know some people have more than one Wi-Fi network they trust, city names alone may not be specific enough for you.\n\n[**Download Auto Exit Nodes Shortcut**](https://www.icloud.com/shortcuts/4b2c836b2ebd42f08d2d56aa3bc9ea7c)"
const data = {
  date: new Date(1694583895629),
  tags: ['post', 'tailscale', 'mullvad', 'shortcuts', 'ios'],
  title: 'Auto-connect to Nearby Mullvad Servers with Tailscale on iOS',
}
const _internal = {
  type: 'content',
  filePath:
    '/Users/melanie/Developer/melkat-blog/src/content/posts/tailscale-nearby-exit-nodes.md',
  rawData:
    '\ndate: 2023-09-13T05:44:55.629Z\ntitle: Auto-connect to Nearby Mullvad Servers with Tailscale on iOS\ntags: [post, tailscale, mullvad, shortcuts, ios]',
}

export { _internal, body, collection, data, id, slug }
