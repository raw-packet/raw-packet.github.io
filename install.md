---
layout: page
title: Install
nav_order: 1
permalink: /install/
---

## Python 3

## Debian based OS install with apt (recommended):
```
sudo apt update && sudo apt install -y python3 python3-pip python3-netifaces \
                                       python-ipaddress python3-netaddr \
                                       python3-psutil python3-prettytable \
                                       python3-distro python3-xmltodict \
                                       python3-paramiko python3-colorama \
                                       apache2 php lsof net-tools nmap \
                                       wireless-tools aircrack-ng tshark git
pip3 install npyscreen scapy pycryptodomex getmac
git clone https://github.com/raw-packet/raw-packet && cd ./raw-packet
```

## Debian based OS install with pip:
```
sudo apt update && sudo apt install -y python3 python3-pip apache2 php \
                                       lsof net-tools wireless-tools \
                                       nmap aircrack-ng tshark git
git clone https://github.com/raw-packet/raw-packet && cd ./raw-packet
pip3 install -r requirements.txt
```

## MacOS install:

### 1. Install Homebrew:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### 2. Install/upgrade wireshark and python3:
```
if brew ls --versions wireshark; then brew upgrade wireshark; else brew install wireshark; fi
brew cask install wireshark-chmodbpf
if brew ls --versions python3; then brew upgrade python3; else brew install python3; fi
```

### 3. Reboot

### 4. Install Raw-packet:
```
git clone https://github.com/raw-packet/raw-packet && cd ./raw-packet
pip3 install -r requirements.txt
```
