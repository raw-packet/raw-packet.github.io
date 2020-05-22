---
layout: page
title: WiFi
permalink: /scripts/wifi/
parent: Scripts
---

# WiFi

## Script: [wat](https://github.com/raw-packet/raw-packet/blob/testing/raw_packet/Scripts/WiFi/wat.py)

### Cross-platform WiFi attack tool (wat)
1. Works on MacOS and Linux
1. Collects wireless AP information
1. Sends association packets
1. Sends deauthentication packets
1. Switch between WiFi channels
1. Saves WPA handshakes in formats: pcap, hccapx, 22000
1. Supports PMKID (AP clientless attack)
1. Saves WPA RSN PMKID in format for hashcat brute
1. Supports vulnerability CVE-2019-15126 kr00k (decryption of CCMP packet with NULL 128 bits - temporary key)

```
root@kali:~# wat --help
usage: wat [-h] [-i INTERFACE] [-c CHANNEL] [-d]

         Cross platform WiFi attack tool (wat)

Ctrl-E Show Wireless access point information
Ctrl-D Send IEEE 802.11 deauth packets
Ctrl-D Switch WiFi channel
Ctrl-A Send IEEE 802.11 association packet
Ctrl-R Start scanner (switch between WiFi channels)
Ctrl-H Show help information
Ctrl-C Exit

optional arguments:
  -h, --help            show this help message and exit
  -i INTERFACE, --interface INTERFACE
                        Set wireless interface name for sniff packets
  -c CHANNEL, --channel CHANNEL
                        Set WiFi channel
  -d, --debug           Maximum output
```

### Sample script output:
![wat output](https://raw-packet.github.io/static/images/screenshots/wat_screenshot.png)

### Video demo:
[![wat demo video](https://raw-packet.github.io/static/images/gifs/attack_tool.gif)](https://youtu.be/IcZVmDHQvLE)

---
