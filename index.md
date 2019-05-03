---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Home
nav_order: 0
---

![logo](https://camo.githubusercontent.com/785e76091fe56b85124a3147d70bea8cefb000ef/68747470733a2f2f7261772d7061636b65742e6769746875622e696f2f7374617469632f696d616765732f6c6f676f2f6c6f676f2d63617074696f6e2e706e67){:height="300px" width="600px"}

## **Ultimate Swiss Knife for MiTM** 
[View on GitHub](https://github.com/raw-packet/raw-packet){: .btn .btn-purple }
[Install](install){: .btn .btn-blue }
[Usefull Scripts](scripts){: .btn }

---

## Description 
This project implements... bla bla bla bla bla

## Disclaimer
This project is created only for educational purposes and can not be used for law violation or personal gain. The author of this project is not responsible for any possible harm caused by the materials of this project.

---

## Publications (on russian)

- [Apple security updates](https://support.apple.com/en-us/HT209341)

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


![test1](https://camo.githubusercontent.com/87926cc842d95a63efc7808322ab6080d6a9660e/68747470733a2f2f7261772d7061636b65742e6769746875622e696f2f7374617469632f696d616765732f6f74686572732f4152505f72657175657374735f74696d696e672e706e67)

![test2](https://camo.githubusercontent.com/fa2d9d5f056bd304ea602767fb77000facf185c6/68747470733a2f2f7261772d7061636b65742e6769746875622e696f2f7374617469632f696d616765732f6f74686572732f444843505f646973636f7665725f72657175657374735f74696d696e672e706e67)