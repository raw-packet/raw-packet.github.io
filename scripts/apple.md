---
layout: page
title: Apple
permalink: /scripts/apple/
parent: Scripts
---

# Apple attacks

## Script: [apple_mitm](https://github.com/raw-packet/raw-packet/blob/master/raw_packet/Scripts/Apple/apple_mitm.py)

This script automatically finds Apple devices on the local network using an ARP, NMAP or ICMPv6 scan and implements the MiTM attack with the following techniques:
1. ARP Spoofing
1. Second DHCP ACK
1. Predict next DHCP transaction ID
1. Rogue SLAAC/DHCPv6 server
1. NA Spoofing (IPv6)
1. RA Spoofing (IPv6)

```
root@kali:~# apple_mitm --help
usage: apple_mitm [-h] [-T TECHNIQUE] [-D DISCONNECT] [-P PHISHING_SITE] [-i MITM_IFACE]
                  [-d DEAUTH_IFACE] [-0 DEAUTH_PACKETS] [-g4 GATEWAY_IPV4] [-g6 GATEWAY_IPV6]
                  [-d4 DNS_IPV4] [-d6 DNS_IPV6] [-m TARGET_MAC] [-t4 TARGET_IPV4]
                  [-n4 TARGET_NEW_IPV4] [-t6 TARGET_IPV6] [-n6 TARGET_NEW_IPV6]
                  [--ipv6_prefix IPV6_PREFIX]
                                                                                                
            MiTM Apple devices (apple_mitm)

optional arguments:
  -h, --help            show this help message and exit
  -T TECHNIQUE, --technique TECHNIQUE
                        Set MiTM technique:
                        1. ARP Spoofing
                        2. Second DHCP ACK
                        3. Predict next DHCP transaction ID
                        4. Rogue SLAAC/DHCPv6 server
                        5. NA Spoofing (IPv6)
                        6. RA Spoofing (IPv6)
  -D DISCONNECT, --disconnect DISCONNECT
                        Set device Disconnect technique:
                        1. IPv4 network conflict detection
                        2. Send WiFi deauthentication packets
                        3. Do not disconnect device after MiTM
  -P PHISHING_SITE, --phishing_site PHISHING_SITE
                        Set Phishing site "apple", "google" or Path to your site
  -i MITM_IFACE, --mitm_iface MITM_IFACE
                        Set interface name for MiTM
  -d DEAUTH_IFACE, --deauth_iface DEAUTH_IFACE
                        Set interface name for send wifi deauth packets
  -0 DEAUTH_PACKETS, --deauth_packets DEAUTH_PACKETS
                        Set number of deauth packets (default: 25)
  -g4 GATEWAY_IPV4, --gateway_ipv4 GATEWAY_IPV4
                        Set gateway IPv4 address
  -g6 GATEWAY_IPV6, --gateway_ipv6 GATEWAY_IPV6
                        Set gateway IPv6 address
  -d4 DNS_IPV4, --dns_ipv4 DNS_IPV4
                        Set DNS server IPv4 address
  -d6 DNS_IPV6, --dns_ipv6 DNS_IPV6
                        Set DNS server IPv6 address
  -m TARGET_MAC, --target_mac TARGET_MAC
                        Set target MAC address
  -t4 TARGET_IPV4, --target_ipv4 TARGET_IPV4
                        Set target IPv4 address
  -n4 TARGET_NEW_IPV4, --target_new_ipv4 TARGET_NEW_IPV4
                        Set new IPv4 address for target
  -t6 TARGET_IPV6, --target_ipv6 TARGET_IPV6
                        Set link local target IPv6 address
  -n6 TARGET_NEW_IPV6, --target_new_ipv6 TARGET_NEW_IPV6
                        Set new global IPv6 address for target
  --ipv6_prefix IPV6_PREFIX
                        Set IPv6 network prefix, default - fde4:8dba:82e1:ffff::/64
```

### Sample script output:
![apple_mitm output](https://raw-packet.github.io/static/images/screenshots/apple_mitm_screenshot.png)

---

## Script: [apple_arp_dos](https://github.com/raw-packet/raw-packet/blob/master/raw_packet/Scripts/Apple/apple_arp_dos.py)

Disconnect Apple device from the local network using ARP packets

```
root@kali:~# apple_arp_dos --help
usage: apple_arp_dos [-h] [-i INTERFACE] [-t TARGET_IP] [-m TARGET_MAC] [-q]

Disconnect Apple device in local network with ARP packets (apple_arp_dos)

optional arguments:
  -h, --help            show this help message and exit
  -i INTERFACE, --interface INTERFACE
                        Set network interface name
  -t TARGET_IP, --target_ip TARGET_IP
                        Set target IPv4 address
  -m TARGET_MAC, --target_mac TARGET_MAC
                        Set target MAC address
  -q, --quiet           Minimal output
```

### Sample script output:
![apple_arp_dos output](https://raw-packet.github.io/static/images/screenshots/apple_arp_dos_screenshot.png)

---

## Script: [apple_dhcp_server](https://github.com/raw-packet/raw-packet/blob/master/raw_packet/Scripts/Apple/apple_dhcp_server.py)

Rogue DHCPv4 server for Apple device with predict next DHCPv4 transaction ID

```
root@kali:~# apple_dhcp_server --help
usage: apple_dhcp_server [-h] [-i INTERFACE] -t TARGET_IP -m TARGET_MAC [-b] [-q]

Rogue DHCPv4 server for Apple devices (apple_dhcp_server)

optional arguments:
  -h, --help            show this help message and exit
  -i INTERFACE, --interface INTERFACE
                        Set network interface name
  -t TARGET_IP, --target_ip TARGET_IP
                        Set new IPv4 address for target
  -m TARGET_MAC, --target_mac TARGET_MAC
                        Set target MAC address
  -b, --broadcast       Send broadcast DHCPv4 responses
  -q, --quiet           Minimal output
```

### Sample script output:
![apple_dhcp_server output](https://raw-packet.github.io/static/images/screenshots/apple_dhcp_server_screenshot.png)

---
