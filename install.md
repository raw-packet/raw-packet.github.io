---
layout: page
title: Install
nav_order: 1
permalink: /install/
---

## Python 3

**Debian based OS install with apt (recommended):**
```
sudo apt update && sudo apt install -y python3 python3-pip python3-netifaces \
                                       python-ipaddress python3-netaddr \
                                       python3-psutil python3-prettytable \
                                       python3-distro python3-xmltodict \
                                       python3-paramiko apache2 php lsof \
                                       net-tools wireless-tools nmap \
                                       aircrack-ng tshark wireshark git
pip3 install npyscreen
pip3 install scapy
git clone https://github.com/raw-packet/raw-packet && cd ./raw-packet

```

**Debian based OS install with pip:**
```
sudo apt update && sudo apt install -y python3 python3-pip apache2 php \
                                       lsof net-tools wireless-tools nmap \
                                       aircrack-ng tshark wireshark git
git clone https://github.com/raw-packet/raw-packet && cd ./raw-packet
sudo pip3 install -r requirements.txt

```
