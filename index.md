---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Home
nav_order: 0
ga_tracking: UA-125485820-1
---


![logo](https://raw-packet.github.io/static/images/logo/logo-caption.png)

## **Raw socket programming** 
[View on GitHub](https://github.com/raw-packet/raw-packet){: .btn .btn-purple }
[Install](install){: .btn .btn-blue }
[Usefull Scripts](scripts){: .btn }

---

## Description 
This project implements network protocols such as Ethernet ARP IP IPv6 UDP TCP DNS MDNS DHCP DHCPv6 ICMPv6  on raw socket.

## Disclaimer
This project is created only for educational purposes and can not be used for law violation or personal gain. The author of this project is not responsible for any possible harm caused by the materials of this project.

---

## Publications (on russian)

- [Apple security updates](https://support.apple.com/en-us/HT209341)

- [PHDays: Apple, all about MiTM](https://www.phdays.com/en/program/reports/apple-all-about-mitm/)

- [Yandex IT SEC 2018: Apple vs DHCP](https://events.yandex.ru/lib/talks/5519/)

- [Xakep.ru: Advanced Wi-Fi MiTM](https://xakep.ru/2017/09/25/wifi-mitm-advanced/)

- [Attacking DHCP](https://habrahabr.ru/company/dsec/blog/333978/)

- [Attacking DHCP part 2: Wi-Fi](https://habrahabr.ru/post/338860/)

- [Attacking DHCP part 3: Apple](https://habrahabr.ru/post/338864/)

- [Attacking DHCP part 4: Apple + ARP](https://habrahabr.ru/post/339666/)

---

## Performance 

This project was designed specifically to improve the performance and speed of requests needed for network attacks.

You can compare perfomance of this project with popular python library [SCAPY](https://scapy.net/) via script [time_test.py](https://github.com/raw-packet/raw-packet/blob/master/Scripts/Others/time_test.py)

Our testing you can see bellow

| Number of Packets                          | 10                | 100              | 1000            | 10000         |
|--------------------------------------------|-------------------|------------------|-----------------|---------------|
| ARP requests in Scapy (sec)                | 0,0522048473358   | 0,0785529613495  | 0,302206039429  | 2,95294880867 |
| ARP requests in Raw-packet (sec)           | 0,00202298164368  | 0,00270104408264 | 0,090922832489  | 1,3037519455  |
| DHCP discover requests in Scapy (sec)      | 0,397399187088    | 4,16092181206    | 39,5892789364   |       -       |
| DHCP discover requests in Raw-packet (sec) | 0,00177597999573  | 0,0219049453735  | 0,162989854813  |       -       |
| DNS requests in Scapy (sec)                | 0.608256101608    | 6.05325508118    | 58.4151289463   |       -       |
| DNS requests in Raw-packet (sec)           | 0.00274395942688  | 0.0127770900726  | 0.0796978473663 |       -       |


![Scapy vs. Raw-packet ARP requests](https://raw-packet.github.io/static/images/others/ARP_requests_timing.png)

![Scapy vs. Raw-packet DHCP discover requests](https://raw-packet.github.io/static/images/others/DHCP_discover_requests_timing.png)

![Scapy vs. Raw-packet DNS requests](https://raw-packet.github.io/static/images/others/DNS_requests_timing.png)


