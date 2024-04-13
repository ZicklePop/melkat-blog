---
cover: /img/beryl-tailscale-mullvad.png
coverAlt: Beryl Router's Tailscale Configuration Screen in Safari and Inspect Browser
date: 2024-04-12T05:44:55.629Z
title: How I Set Up My Travel Router with Tailscale's Mullvad Exit Nodes
tags: [post, tailscale, mullvad, beryl, ios]
---

After my last trip, I bought what might be one of my favorite routers ever, let alone a travel router, the [GL-iNet's Beryl AX (GL-MT3000)](https://www.gl-inet.com/products/gl-mt3000/). One of the killer features for me was that, unlike my collection of tiny TP-Link travel routers, was that it has built-in Wireguard and Tailscale support. I've written before about [using Tailscale's Mullvad integration for added security on public Wi-Fi networks](https://melkat.blog/p/tailscale-nearby-exit-nodes), but what about when your router is connected to someone else's network?

The web interface for GL-iNet's Tailscale configuration leaves a lot to be desired and I am currently in a hotel room with my iPad. So I loaded up the admin web page with the [Inspect Browser](https://apps.apple.com/us/app/inspect-browser/id1203594958) for iOS so I could take a look at the list of IP addresses it populates the dropdown box with. This gave me an array of about [430 IP addresses](https://paste.melanie.lol/tailscale-mullvad-exit-node-ips.txt). These addresses are not labeled anywhere online that I could find, so I ran one of them at random through the app [Net Analyzer](https://apps.apple.com/us/app/network-analyzer-pro/id557405467) and it was able to tell me that `100.102.95.55` has a PTR record pointing at a `de-fra-wg-008.mullvad.ts.net` address. That's helpful! Now I know which Mullvad server this is, and can visually see that it's a Wireguard (wg) server in Frankfurt (fra), Germany (de) server, which we can confirm against [Mullvad's server list](https://mullvad.net/en/servers). So now I just need to go through all 430 or so IP addresses. So I wrote a shell script to do just that. Oh, and I need a way to run that shell command on my iPad. For this I used [iSH](https://apps.apple.com/us/app/ish-shell/id1436902243) which has File.app integration which means I can use any app on my iPad to write and edit files directly to the app's file system.

![Net Analyzer doing a lookup on a Tailscale IP address for a Mullvad exit node](https://melkat.blog/img/beryl-tailscale-mullvad2.png)

I took all of these IP addresses and saved it to a file in iSH at `/root/ips.txt`. I don't know if these IP addresses are the same for everyone, but I think they might be, so I have published them [here](https://paste.melanie.lol/tailscale-mullvad-exit-node-ips.txt).

I wrote a shell script to loop through each IP address, run `nslookup`, and output the results by saving the following script to `bulk-nslookup.sh` in iSH's `/root` directory:

```sh
#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage: $0 <file>"
    exit 1
fi

input_file="$1"

if [ ! -f "$input_file" ]; then
    echo "File not found: $input_file"
    exit 1
fi

while IFS= read -r ip_address; do
    echo "Performing nslookup for $ip_address"
    nslookup "$ip_address"
    echo "-----"
done < "$input_file"
```

[This script is available as a paste](https://paste.melanie.lol/bulk-nslookup.sh)

It could probably be cleaned up and whatnot, but I really just wanted to see if this would work Now all I had to do was make the script executable and log the output to a file.

```sh
chmod a+x bulk-nslookup.sh
sh bulk-nslookup.sh ips.txt > out.log
```

And then check the file `out.log` I was looking for an IP address in the Pacific Northwest, so I looked for a hostname with `sea` in it. For your convenience, I've published this [mapping of IP addresses to Mullvad hostnames](https://paste.melanie.lol/mullvad-to-tailscale-ip.txt). Then all I had to do was look for the corresponding IP address in our list of IP addresses in the awful dropdown menu of the GL-iNet router web interface. I love tedious tasks! You don't have to do this part, we'll set it from an SSH connection at the end. Yes, we'll need to do some SSH later.

Unfortunately, that's not all you need to do to make a Mullvad exit node to work with your Beryl travel router. You need to expose some subnet routes to Tailscale. Another great feature of this travel router is that it runs OpenWRT which is an open source Linux-based router OS. Fortunately, I wasn't [the first person to do this](https://forum.openwrt.org/t/help-to-configure-tailscale-as-a-proxy-service/142428/2).

I now had to go to the router's `Advanced Settings` inside of `System Settings` to get the URL to LuCI, the OpenWRT's standard web user interface. Once in there we need to go to the `Network` dropdown menu and select `Firewall`. In the section called `Zones` we need to hit `Add`. Let's call this zone `tailscale`, set `Input`, `Output`, and `Forward` to `accept` and check the boxes next to `Masquerading` and `MSS Clamping` and before saving let's go to the `Advanced Settings` tab and hit the dropdown next to `Covered devices` and check the box next to `Ethernet Adapter: "tailscale0"`. Now we can hit save.

Back to the list of zones, we will hit `Edit` on the line for `lan` and add our new zone `tailscale` to `Allow forward to destination zones` and `Allow forward from source zones`. Hit save, go back to our list of zones and add `lan` and `wan` to `Allow forward to destination zones`. Then add `lan` to `Allow forward from source zones`. Hit save, then in our list of zones hit `Save & Apply`.

For this next bit we need to enable SSH on the router. From LuCI, go to the `System` dropdown menu at the top, go to `Administrative` and select the `SSH Access` tab. I just hit `Save & Apply` here, but if you want to configure it a special way, be my guest. I used the app [Blink](https://apps.apple.com/us/app/blink-shell-build-code/id1594898306) to SSH into the router, for me it was as simple as running `ssh root@192.168.8.1` and typing in the router's password. Remember when we first started out we were trying to find the right IP address in that drop-down list? Well, it turns out you can just use it here and save yourself the tedious task, more on that at the end, so keep your SSH connection open. I ran the command `tailscale up --advertise-exit-node --advertise-routes=192.168.2.0/24 --accept-dns=false --accept-routes --exit-node-allow-lan-access`. I swear we're almost done.

Now go to the Tailscale Admin website, find the machine for your router and Edit Route Settings and check the boxes next to `192.168.2.0/24` and `Use as exit note`. Back in our SSH connection we just need to run: `tailscale up --advertise-exit-node --advertise-routes=192.168.2.0/24 --accept-dns=false --accept-routes --exit-node-allow-lan-access --exit-node={EXIT-NODE-IP}` replacing `{EXIT-NODE-IP}` with the IP address we found at the beginning of this post, when we were all much younger than we are here at the end of this post.

And that's it! You can [check your connection on Mullvad's website](https://mullvad.net/en/check) and see that you're connected, assuming you're not also using iCloud Private Relay.
