---
layout: page
title: Apple
permalink: /scripts/apple/
parent: Scripts
---

# Apple attacks


## [apple_dhcp_mitm.py](https://github.com/raw-packet/raw-packet/blob/master/Scripts/Apple/apple_dhcp_mitm.py)
Данный скрипт в автоматическом режиме обнаруживает Apple устройства в сети и с помощью протокола DHCP изменяет IP-адреса маршрутизатора и DNS-сервера на всех устройствах на ваш IP-адрес.

```
root@kali:~/raw-packet# ./apple_dhcp_mitmer.py -h
usage: apple_dhcp_mitmer.py [-h] [-i LISTEN_IFACE] [-r AIREPLAY_IFACE]
                            [-d DEAUTH]

Apple DHCP MiTM creator

optional arguments:
  -h, --help            show this help message and exit
  -i LISTEN_IFACE, --listen_iface LISTEN_IFACE
                        Set interface name for send DHCPACK packets
  -c, --use_network_conflict
                        Use network conflict technique
  -r AIREPLAY_IFACE, --aireplay_iface AIREPLAY_IFACE
                        Set interface name for aireplay
  -d DEAUTH, --deauth DEAUTH
                        Set number of deauth packets (dafault=35)
```

### Demo video with deauth packets technique:
[![Apple WiFi MiTM preview](https://j.gifs.com/nZnOX5.gif)](https://youtu.be/MmPluMxOyMk)

### Demo video with network conflict technique:
[![Apple network conflict MiTM](https://j.gifs.com/2v43V1.gif)](https://youtu.be/-vg2gNiQ53s)

---


## [apple_arp_dos.py](https://github.com/raw-packet/raw-packet/blob/master/Scripts/Apple/apple_arp_dos.py)

**Under Construction**

---

## [apple_rogue_dhcp.py](https://github.com/raw-packet/raw-packet/blob/master/Scripts/Apple/apple_rogue_dhcp.py)

**Under Construction**

```
root@kali:~/raw-packet# python Scripts/Apple/apple_rogue_dhcp.py --help
usage: apple_rogue_dhcp.py [-h] [-i INTERFACE] -t TARGET_MAC -I TARGET_IP [-q]

Rogue DHCP server for Apple devices

optional arguments:
  -h, --help            show this help message and exit
  -i INTERFACE, --interface INTERFACE
                        Set interface name for send DHCP reply packets
  -t TARGET_MAC, --target_mac TARGET_MAC
                        Set target MAC address, required!
  -I TARGET_IP, --target_ip TARGET_IP
                        Set client IP address, required!
  -q, --quiet           Minimal output
```