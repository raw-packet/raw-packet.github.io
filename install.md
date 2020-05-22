---
layout: page
title: Install
nav_order: 1
permalink: /install/
---

## Debian based OS install:
```
sudo apt update
sudo apt install -y python3 python3-pip wireless-tools tshark
pip3 install --upgrade pip
sudo pip3 install raw-packet
```

## MacOS install:

#### 1. Install Homebrew:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

#### 2. Adding repository to Homebrew:
```
brew tap raw-packet/raw-packet
```

#### 3. Install Raw-packet:
```
brew install raw-packet
```

## Windows install:

#### 1. Install [Wireshark](https://www.wireshark.org/download.html)

#### 2. Install [Python 3.8](https://www.microsoft.com/en-us/p/python-38/9mssztt1n39l)

#### 3. Install Raw-packet:
```
pip3 install --upgrade pip
pip3 install raw-packet
```
