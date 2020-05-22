---
layout: page
title: DHCPv6
permalink: /scripts/dhcpv6/
parent: Scripts
---

# DHCPv6

The [Dynamic Host Configuration Protocol version 6 (DHCPv6)](https://en.wikipedia.org/wiki/DHCPv6) is a network protocol for configuring Internet Protocol version 6 (IPv6) hosts with IP addresses, IP prefixes and other configuration data required to operate in an IPv6 network. It is the IPv6 equivalent of the Dynamic Host Configuration Protocol for IPv4.

## Script: [dhcpv6_server](https://github.com/raw-packet/raw-packet/blob/master/raw_packet/Scripts/DHCPv6/dhcpv6_server.py)

This script implements fake DHCPv6 server for perfom SLAAC attack/Rogue DHCPv6.

```
root@kali:~# dhcpv6_server --help
usage: dhcpv6_server [-h] [-i INTERFACE] [-p PREFIX] [-f FIRST_SUFFIX] [-l LAST_SUFFIX]
                     [-t TARGET_MAC] [-T TARGET_IPV6] [-D] [-d DNS] [-s DNS_SEARCH]
                     [--delay DELAY] [-q]

          SLAAC/DHCPv6 server (dhcpv6_server)

optional arguments:
  -h, --help            show this help message and exit
  -i INTERFACE, --interface INTERFACE
                        Set interface name for send reply packets
  -p PREFIX, --prefix PREFIX
                        Set network prefix
  -f FIRST_SUFFIX, --first_suffix FIRST_SUFFIX
                        Set first suffix client IPv6 for offering
  -l LAST_SUFFIX, --last_suffix LAST_SUFFIX
                        Set last suffix client IPv6 for offering
  -t TARGET_MAC, --target_mac TARGET_MAC
                        Set target MAC address
  -T TARGET_IPV6, --target_ipv6 TARGET_IPV6
                        Set client Global IPv6 address with MAC --target_mac
  -D, --disable_dhcpv6  Do not use DHCPv6 protocol
  -d DNS, --dns DNS     Set recursive DNS IPv6 address
  -s DNS_SEARCH, --dns_search DNS_SEARCH
                        Set DNS search domain
  --delay DELAY         Set delay between packets
  -q, --quiet           Minimal output
```

### Sample script output:
![dhcpv6_server output](https://raw-packet.github.io/static/images/screenshots/dhcpv6_server_screenshot.png)

---
