---
layout: page
title: ICMPv4
permalink: /scripts/icmpv4/
parent: Scripts
---

# ICMPv4

## Script: [icmpv4_redirect](https://github.com/raw-packet/raw-packet/blob/master/raw_packet/Scripts/ICMPv4/icmpv4_redirect.py)

This script implement the ICMPv4 redirect attack. 

```
root@kali:~# icmpv4_redirect --help
usage: icmpv4_redirect [-h] [-i INTERFACE] [-t TARGET_IP] [-m TARGET_MAC] [-g GATEWAY_IP]
                       [-r REDIRECT_IP] [-q]

           ICMPv4 redirect (icmpv4_redirect)

optional arguments:
  -h, --help            show this help message and exit
  -i INTERFACE, --interface INTERFACE
                        Set interface name for send ICMP redirect packets
  -t TARGET_IP, --target_ip TARGET_IP
                        Set target IPv4 address
  -m TARGET_MAC, --target_mac TARGET_MAC
                        Set target MAC address
  -g GATEWAY_IP, --gateway_ip GATEWAY_IP
                        Set gateway IPv4 address (default: <your_ipv4_gateway>)
  -r REDIRECT_IP, --redirect_ip REDIRECT_IP
                        Set IP addresses where to redirect (example: "1.1.1.1,8.8.8.8")
  -q, --quiet           Minimal output
```

### Sample script output:
![icmpv4_redirect output](https://raw-packet.github.io/static/images/screenshots/icmpv4_redirect_screenshot.png)

---
