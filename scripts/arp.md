---
layout: page
title: ARP
permalink: /scripts/arp/
parent: Scripts
---

# ARP

The [Address Resolution Protocol (ARP)](https://en.wikipedia.org/wiki/Address_Resolution_Protocol) is a communication protocol used for discovering the link layer address, such as a MAC address, associated with a given internet layer address, typically an IPv4 address.

---

## Script: [arp_scan](https://github.com/raw-packet/raw-packet/blob/master/raw_packet/Scripts/ARP/arp_scan.py)
This script creates and sends ARP requests (Who has?) to search for alive hosts on the local network.

```
root@kali:~# arp_scan --help
usage: arp_scan [-h] [-i INTERFACE] [-t TARGET_IP] [--timeout TIMEOUT] [--retry RETRY]

                ARP Scanner (arp_scan)

optional arguments:
  -h, --help            show this help message and exit
  -i INTERFACE, --interface INTERFACE
                        Set interface name for ARP scanner
  -t TARGET_IP, --target_ip TARGET_IP
                        Set target IPv4 address
  --timeout TIMEOUT     Set timeout (default=5)
  --retry RETRY         Set number of retry packets (default=5)
```

### Sample script output:
![arp_scan output](https://raw-packet.github.io/static/images/screenshots/arp_scan_screenshot.png)

---

## Script: [arp_spoof](https://github.com/raw-packet/raw-packet/blob/master/raw_packet/Scripts/ARP/arp_spoof.py)

This script implement the ARP spoofing attack. 
ARP spoofing, ARP cache poisoning or ARP poison routing, is a technique that  an attacker sends fake (spoofed) Address Resolution Protocol (ARP) messages onto a local network.

```
root@kali:~# arp_spoof --help
usage: arp_spoof [-h] [-i INTERFACE] [-t TARGET_IP] [-m TARGET_MAC] [-g GATEWAY_IP] [-r] [--ipv4_multicast]
                 [--ipv6_multicast] [--broadcast] [-q]

               ARP Spoofing (arp_spoof)

optional arguments:
  -h, --help            show this help message and exit
  -i INTERFACE, --interface INTERFACE
                        Set interface name for send ARP packets
  -t TARGET_IP, --target_ip TARGET_IP
                        Set target IP address
  -m TARGET_MAC, --target_mac TARGET_MAC
                        Set target MAC address
  -g GATEWAY_IP, --gateway_ip GATEWAY_IP
                        Set gateway IP address
  -r, --requests        Send only ARP requests
  --ipv4_multicast      Send ARP replies/requests to IPv4 multicast MAC address
  --ipv6_multicast      Send ARP replies/requests to IPv6 multicast MAC address
  --broadcast           Send ARP replies/requests to broadcast MAC address
  -q, --quiet           Minimal output
```

### Sample script output:
![arp_spoof output](https://raw-packet.github.io/static/images/screenshots/arp_spoof_screenshot.png)

---
