---
layout: page
title: ICMPv6
permalink: /scripts/icmpv6/
parent: Scripts
---

# IPv6

## Script: [ipv6_scan.py](https://github.com/raw-packet/raw-packet/blob/testing/raw_packet/Scripts/IPv6/ipv6_scan.py)

Search for hosts that support IPv6 in local network using ICMPv6 protocol

```
root@kali:~# ipv6_scan --help
usage: ipv6_scan [-h] [-i INTERFACE] [-m TARGET_MAC] [-t TIMEOUT] [-r RETRY] [-s]

               ICMPv6 scan (icmpv6_scan)

optional arguments:
  -h, --help            show this help message and exit
  -i INTERFACE, --interface INTERFACE
                        Set interface name for ARP scanner
  -m TARGET_MAC, --target_mac TARGET_MAC
                        Set target MAC address
  -t TIMEOUT, --timeout TIMEOUT
                        Set timeout (default=5)
  -r RETRY, --retry RETRY
                        Set number of retry (default=5)
  -s, --router_search   Search router IPv6 link local address
```

### Sample script output:
![ipv6_scan output](https://raw-packet.github.io/static/images/screenshots/ipv6_scan_screenshot.png)

### Search IPv6 router
![ipv6_router_search output](https://raw-packet.github.io/static/images/screenshots/ipv6_scan_router_search_screenshot.png)

---

## Script: [ipv6_spoof](https://github.com/raw-packet/raw-packet/blob/testing/raw_packet/Scripts/IPv6/ipv6_spoof.py)

This script implements Router Advertisement and Neighbor Advertisement spoofing attack

```
root@kali:~# ipv6_spoof --help
usage: ipv6_spoof [-h] [-T TECHNIQUE] [-i INTERFACE] [-t TARGET_IP] [-m TARGET_MAC]
                  [-g GATEWAY_IP] [-p IPV6_PREFIX] [-d DNS_IP] [-n DNS_DOMAIN_SEARCH] [-q]

              IPv6 Spoofing (ipv6_spoof)

optional arguments:
  -h, --help            show this help message and exit
  -T TECHNIQUE, --technique TECHNIQUE
                        Set ICMPv6 MiTM technique (example: 1)
                        1. ICMPv6 RA (Router Advertisement) Spoofing
                        2. ICMPv6 NA (Neighbor Advertisement) Spoofing
  -i INTERFACE, --interface INTERFACE
                        Set interface name for send ARP packets
  -t TARGET_IP, --target_ip TARGET_IP
                        Set target IPv6 link local address
  -m TARGET_MAC, --target_mac TARGET_MAC
                        Set target MAC address
  -g GATEWAY_IP, --gateway_ip GATEWAY_IP
                        Set gateway IPv6 link local address
  -p IPV6_PREFIX, --ipv6_prefix IPV6_PREFIX
                        Set IPv6 prefix, default="fde4:8dba:82e1:ffff::/64"
  -d DNS_IP, --dns_ip DNS_IP
                        Set DNS server IPv6 link local address
  -n DNS_DOMAIN_SEARCH, --dns_domain_search DNS_DOMAIN_SEARCH
                        Set DNS domain search; default: "local"
  -q, --quiet           Minimal output
```

## Router Advertisement spoofing

### Sample script output:
![ipv6_spoof_ra output](https://raw-packet.github.io/static/images/screenshots/ipv6_spoof_ra_screenshot.png)

## Neighbor Advertisement spoofing

### Sample script output:
![ipv6_spoof_na output](https://raw-packet.github.io/static/images/screenshots/na_spoof.py_screenshot.png)

---
