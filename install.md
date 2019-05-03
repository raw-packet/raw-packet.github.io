---
layout: page
title: Install
nav_order: 1
permalink: /install/
---

**Debian based OS install with apt (recommended):**
```
git clone https://github.com/raw-packet/raw-packet && cd ./raw-packet
sudo apt update && sudo apt install -y python python-pip python-scapy \
                                       python-netifaces python-ipaddress \
                                       python-netaddr python-psutil \
                                       php lsof net-tools wireless-tools \
                                       nmap aircrack-ng
```

**Debian based OS install with pip:**
```
git clone https://github.com/raw-packet/raw-packet && cd ./raw-packet
sudo pip install -r requirements.txt
sudo apt update && sudo apt install -y python python-pip apache2 php \
                                       lsof net-tools wireless-tools \
                                       nmap aircrack-ng
```