---
layout: page
title: DHCPv4
permalink: /scripts/dhcpv4/
parent: Scripts
---

# DHCPv4

The [Dynamic Host Configuration Protocol (DHCP)](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) is a network management protocol used on UDP/IP networks whereby a DHCP server dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks.

## Script: [dhcpv4_server](https://github.com/raw-packet/raw-packet/blob/master/raw_packet/Scripts/DHCPv4/dhcpv4_server.py)

This script implements an attack on network clients by using fake DHCPv4 server which answers with malicius configuration faster than legitimate DHCPv4 server. 
This attack also known as Rogue DHCPv4 Server Attack.

```
root@kali:~# dhcpv4_server --help
usage: dhcpv4_server [-h] [-i INTERFACE] [-f FIRST_OFFER_IP] [-l LAST_OFFER_IP]
                     [-m TARGET_MAC] [-t TARGET_IP] [--netmask NETMASK]
                     [--dhcp_mac DHCP_MAC] [--dhcp_ip DHCP_IP] [--router ROUTER]
                     [--dns DNS] [--tftp TFTP] [--wins WINS] [--domain DOMAIN]
                     [--lease_time LEASE_TIME] [--discover] [-O SHELLSHOCK_OPTION_CODE]
                     [-c SHELLSHOCK_COMMAND] [-b] [-p BIND_PORT] [-N] [-E] [-R]
                     [-e REVERSE_PORT] [-n] [-B] [--ip_path IP_PATH]
                     [--iface_name IFACE_NAME] [--broadcast_response] [--dnsop] [--exit]
                     [--apple] [-q]

             DHCPv4 server (dhcpv4_server)

optional arguments:
  -h, --help            show this help message and exit
  -i INTERFACE, --interface INTERFACE
                        Set interface name for send reply packets
  -f FIRST_OFFER_IP, --first_offer_ip FIRST_OFFER_IP
                        Set first client ip for offering
  -l LAST_OFFER_IP, --last_offer_ip LAST_OFFER_IP
                        Set last client ip for offering
  -m TARGET_MAC, --target_mac TARGET_MAC
                        Set target MAC address
  -t TARGET_IP, --target_ip TARGET_IP
                        Set client IP address with MAC in --target_mac
  --netmask NETMASK     Set network mask
  --dhcp_mac DHCP_MAC   Set DHCP server MAC address, if not set use your MAC address
  --dhcp_ip DHCP_IP     Set DHCP server IP address, if not set use your IP address
  --router ROUTER       Set router IP address, if not set use your ip address
  --dns DNS             Set DNS server IP address, if not set use your ip address
  --tftp TFTP           Set TFTP server IP address
  --wins WINS           Set WINS server IP address
  --domain DOMAIN       Set domain name for search, default=local
  --lease_time LEASE_TIME
                        Set lease time, default=172800
  --discover            Send DHCP discover packets in the background thread
  -O SHELLSHOCK_OPTION_CODE, --shellshock_option_code SHELLSHOCK_OPTION_CODE
                        Set dhcp option code for inject shellshock payload, default=114
  -c SHELLSHOCK_COMMAND, --shellshock_command SHELLSHOCK_COMMAND
                        Set shellshock command in DHCP client
  -b, --bind_shell      Use awk bind tcp shell in DHCP client
  -p BIND_PORT, --bind_port BIND_PORT
                        Set port for listen bind shell (default=1234)
  -N, --nc_reverse_shell
                        Use nc reverse tcp shell in DHCP client
  -E, --nce_reverse_shell
                        Use nc -e reverse tcp shell in DHCP client
  -R, --bash_reverse_shell
                        Use bash reverse tcp shell in DHCP client
  -e REVERSE_PORT, --reverse_port REVERSE_PORT
                        Set port for listen bind shell (default=443)
  -n, --without_network
                        Do not add network configure in payload
  -B, --without_base64  Do not use base64 encode in payload
  --ip_path IP_PATH     Set path to "ip" in shellshock payload, default = /bin/
  --iface_name IFACE_NAME
                        Set iface name in shellshock payload, default = eth0
  --broadcast_response  Send broadcast response
  --dnsop               Do not send DHCP OFFER packets
  --exit                Exit on success MiTM attack
  --apple               Add delay before send DHCP ACK
  -q, --quiet           Minimal output
```

### Sample script output:
![dhcpv4_server output](https://raw-packet.github.io/static/images/screenshots/dhcpv4_server_screenshot.png)

---
