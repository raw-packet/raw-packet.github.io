---
layout: page
title: NSC
permalink: /scripts/nsc/
parent: Scripts
---

# Network Security Check (nsc)

## Script: [nsc](https://github.com/raw-packet/raw-packet/blob/master/raw_packet/Scripts/NSC/nsc.py)

### Checking network security mechanisms
1. Works on Windows, MacOS and Linux
1. Check ARP Spoofing
1. Check ICMPv4 Redirect 
1. Check Rogue DHCPv4
1. Check ICMPv6 Redirect 
1. Check ICMPv6 Router Advertisement Spoofing
1. Check ICMPv6 Neighbor Advertisement Spoofing
1. Check Rogue DHCPv6
1. Check STP spoofing

```
root@kali:~# nsc --help
usage: nsc [-h] [-i SEND_INTERFACE] [-l LISTEN_INTERFACE] [-n TEST_HOST_INTERFACE]
           [-t TEST_HOST_IP] [-m TEST_HOST_MAC] [-o TEST_HOST_OS] [-u TEST_SSH_USER]
           [-p TEST_SSH_PASS] [-k TEST_SSH_PKEY] [-G GATEWAY_IP] [-g GATEWAY_MAC]
           [-r NUMBER_OF_PACKETS] [-L LISTEN_TIME] [-q]

             Network Security Check (nsc)

optional arguments:
  -h, --help            show this help message and exit
  -i SEND_INTERFACE, --send_interface SEND_INTERFACE
                        Set interface name for send packets
  -l LISTEN_INTERFACE, --listen_interface LISTEN_INTERFACE
                        Set interface name for listen packets
  -n TEST_HOST_INTERFACE, --test_host_interface TEST_HOST_INTERFACE
                        Set test host network interface for listen packets
  -t TEST_HOST_IP, --test_host_ip TEST_HOST_IP
                        Set test host IP address for ssh connection
  -m TEST_HOST_MAC, --test_host_mac TEST_HOST_MAC
                        Set test host MAC address for ssh connection
  -o TEST_HOST_OS, --test_host_os TEST_HOST_OS
                        Set test host OS (MacOS, Linux, Windows)
  -u TEST_SSH_USER, --test_ssh_user TEST_SSH_USER
                        Set test host user name for ssh connection
  -p TEST_SSH_PASS, --test_ssh_pass TEST_SSH_PASS
                        Set test host password for ssh connection
  -k TEST_SSH_PKEY, --test_ssh_pkey TEST_SSH_PKEY
                        Set test host private key for ssh connection
  -G GATEWAY_IP, --gateway_ip GATEWAY_IP
                        Set gateway IPv4 address
  -g GATEWAY_MAC, --gateway_mac GATEWAY_MAC
                        Set gateway MAC address
  -r NUMBER_OF_PACKETS, --number_of_packets NUMBER_OF_PACKETS
                        Set number of spoofing packets for each test (default: 10)
  -L LISTEN_TIME, --listen_time LISTEN_TIME
                        Set time to listen spoofing packets in seconds (default: 60)
  -q, --quiet           Minimal output
```

### Sample script output:
![nsc output](https://raw-packet.github.io/static/images/screenshots/nsc_kali_screenshot.png)

### Sample script output (test host):
![nsc output](https://raw-packet.github.io/static/images/screenshots/nsc_kali_test_host_screenshot.png)

---
