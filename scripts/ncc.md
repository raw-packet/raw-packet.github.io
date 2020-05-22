---
layout: page
title: NCC
permalink: /scripts/ncc/
parent: Scripts
---

# Network Conflict Creator (ncc)

## Script: [ncc](https://github.com/raw-packet/raw-packet/blob/testing/raw_packet/Scripts/NCC/ncc.py)

Script for creating network conflicts for varius testing.

```
root@kali:~# ncc --help
usage: ncc [-h] [-i INTERFACE] [-t TARGET_IP] [-m TARGET_MAC] [--replies] [--requests]
           [--broadcast] [-p PACKETS] [-q] [-e]

            Network Conflict Creator (ncc)

optional arguments:
  -h, --help            show this help message and exit
  -i INTERFACE, --interface INTERFACE
                        Set interface name for listen and send packets
  -t TARGET_IP, --target_ip TARGET_IP
                        Set target IP address
  -m TARGET_MAC, --target_mac TARGET_MAC
                        Set target MAC address
  --replies             Send only ARP replies
  --requests            Send only ARP requests
  --broadcast           Send broadcast ARP requests
  -p PACKETS, --packets PACKETS
                        Number of ARP packets (default: 10)
  -q, --quiet           Minimal output
  -e, --exit            Exit on success
```

### Sample script output:
![ncc output](https://raw-packet.github.io/static/images/screenshots/ncc_screenshot.png)

---
