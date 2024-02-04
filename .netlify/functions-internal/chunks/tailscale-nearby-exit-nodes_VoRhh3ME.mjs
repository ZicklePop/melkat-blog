import {
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
  u as unescapeHTML,
} from './astro_5SK3W5mn.mjs'
import 'kleur/colors'
import 'clsx'

const html =
  '<p>A while back I had a VPN app that would look out for unknown Wi-Fi networks and automatically connect to the closest VPN server to your location. That app is no longer around, but I’ve been wanting to replicate that feature ever since.</p>\n<p><a href="https://tailscale.com/blog/mullvad-integration/">Tailscale has a new integration with Mullvad</a>. If you’re not familiar with Tailscale, it basically lets you securely connect to your machines over any network. You can set up one of your machines to be an “exit node”, allowing you to route all your traffic through that machine using the same VPN. With the Mullvad integration, your exit node can be one of their secure servers around the world, while still being able to access your machines.</p>\n<p>Using the automation feature of Apple’s Shortcuts.app, we can set up a shortcut to run whenever we connect to a Wi-Fi network. When installing the shortcut, you need to give it your primary Wi-Fi network name. If you connect to it, it will turn off the exit nodes. If you connect to a different one, it will use a customizable list and your current location to figure out which one is closest to your current location.</p>\n<p>The list looks like this:</p>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span>San Francisco:us-sjc-wg-001</span></span>\n<span class="line"><span>Los Angeles:us-lax-wg-101</span></span>\n<span class="line"><span>Nashville:us-atl-wg-001</span></span>\n<span class="line"><span>Tokyo:jp-tyo-wg-001</span></span>\n<span class="line"><span>Osaka:jp-osa-wg-001</span></span>\n<span class="line"><span>Warsaw:pl-waw-wg-101</span></span></code></pre>\n<p>The structure is basically <code>city name:server name</code>. You can find Mullvad’s list of server names by filtering the <a href="https://mullvad.net/en/servers">Mullvad server list</a> website for servers of type WireGuard.</p>\n<p>Feel free to customize this shortcut to suit your needs. I know some people have more than one Wi-Fi network they trust, city names alone may not be specific enough for you.</p>\n<p><a href="https://www.icloud.com/shortcuts/4b2c836b2ebd42f08d2d56aa3bc9ea7c"><strong>Download Auto Exit Nodes Shortcut</strong></a></p>'

const frontmatter = {
  date: '2023-09-13T05:44:55.629Z',
  title: 'Auto-connect to Nearby Mullvad Servers with Tailscale on iOS',
  tags: ['post', 'tailscale', 'mullvad', 'shortcuts', 'ios'],
}
const file =
  '/Users/melanie/Developer/melkat-blog/src/content/posts/tailscale-nearby-exit-nodes.md'
const url = undefined
function rawContent() {
  return "\nA while back I had a VPN app that would look out for unknown Wi-Fi networks and automatically connect to the closest VPN server to your location. That app is no longer around, but I've been wanting to replicate that feature ever since.\n\n[Tailscale has a new integration with Mullvad](https://tailscale.com/blog/mullvad-integration/). If you're not familiar with Tailscale, it basically lets you securely connect to your machines over any network. You can set up one of your machines to be an \"exit node\", allowing you to route all your traffic through that machine using the same VPN. With the Mullvad integration, your exit node can be one of their secure servers around the world, while still being able to access your machines.\n\nUsing the automation feature of Apple's Shortcuts.app, we can set up a shortcut to run whenever we connect to a Wi-Fi network. When installing the shortcut, you need to give it your primary Wi-Fi network name. If you connect to it, it will turn off the exit nodes. If you connect to a different one, it will use a customizable list and your current location to figure out which one is closest to your current location.\n\nThe list looks like this:\n\n```\nSan Francisco:us-sjc-wg-001\nLos Angeles:us-lax-wg-101\nNashville:us-atl-wg-001\nTokyo:jp-tyo-wg-001\nOsaka:jp-osa-wg-001\nWarsaw:pl-waw-wg-101\n```\n\nThe structure is basically `city name:server name`. You can find Mullvad's list of server names by filtering the [Mullvad server list](https://mullvad.net/en/servers) website for servers of type WireGuard.\n\nFeel free to customize this shortcut to suit your needs. I know some people have more than one Wi-Fi network they trust, city names alone may not be specific enough for you.\n\n[**Download Auto Exit Nodes Shortcut**](https://www.icloud.com/shortcuts/4b2c836b2ebd42f08d2d56aa3bc9ea7c)"
}
function compiledContent() {
  return html
}
function getHeadings() {
  return []
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
