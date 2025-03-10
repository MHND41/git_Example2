


Vlan_uplink = input("enter uplink Vlan  : ")
IP_address_uplink =input("enter IP address uplink with subnet : ")
LoopBack_IP =input("enter Loopback IP address : ")
Hostname = input("enter Hostname : ")
SNMP_Describtion = input("enter SNMP description :  ")
Vlan10_Virtual_IP = input("enter Vlan 10 Virtual IP : ")
Vlan10_IP_Address = input("enter Vlan 10 IP address with Subnet : ")
Vlan20_Virtual_IP = input("enter Vlan 20 Virtual IP : ")
Vlan20_IP_Address = input("enter Vlan 20 IP address with Subnet : ")
Vlan30_Virtual_IP = input("enter Vlan 30 Virtual IP : ")
Vlan30_IP_Address = input("enter Vlan 30 IP address with Subnet : ")
Vlan40_Virtual_IP = input("enter Vlan 40 Virtual IP : ")
Vlan40_IP_Address = input("enter Vlan 40 IP address with Subnet : ")
Vlan500_Virtual_IP = input("enter Vlan 500 Virtual IP : ")
Vlan500_IP_Address = input("enter Vlan 500 IP address with Subnet : ")
SONiC_SW01 = input("enter SONiC switch 1 Hostname : ")
SONiC_SW02 = input("enter SONiC switch 2 Hostname : ")
SONiC_SW03 = input("enter SONiC switch 3 Hostname : ")



print (f"""

=================================== uplinks =================================================


port-group 1/1/1
 mode Eth 10g-4x
!
port-group 1/1/2
 mode Eth 25g-4x
!
port-group 1/1/3
 mode Eth 10g-4x
!
port-group 1/1/4
 mode Eth 100g-1x
!
port-group 1/1/5
 mode Eth 100g-1x
!
port-group 1/1/6
 mode Eth 10g-4x
!
!
interface vlan {Vlan_uplink}
 description L3-OSPF-to-rr3core4k1
 no shutdown
 mtu 9216
 ip address {IP_address_uplink}
 ip ospf 1 area 0.0.0.3
!
!
interface port-channel110
 description uplink-rr3core4k1
 no shutdown
 switchport mode trunk
 switchport trunk allowed vlan  {Vlan_uplink}
 mtu 9100 
!
interface ethernet1/1/15:1
 description uplink-rr3core4k1-Te1/<<..Port number in Core..>>
 no shutdown
 channel-group 110 mode active
 no switchport
 flowcontrol receive off
!
!
interface loopback0
 no shutdown
 ip address {LoopBack_IP}/32
 ip ospf 1 area 0.0.0.3
 ip ospf passive
!


========================================== Basic Config =================================================



banner motd ^C

 ===========================================================
 |        THIS DEVICE IS THE PROPERTY OF DELL INC.         |
 |                                                         |
 |        Contact: Dell Global Network Services            |
 |          E-mail: dellnoc@dell.com                       |
 ===========================================================
 |             UNAUTHORIZED ACCESS PROHIBITED              |
 ===========================================================
^C
clock timezone standard-timezone GMT0
hostname {Hostname}
ip ssh server cipher aes256-ctr
ip ssh server kex diffie-hellman-group14-sha1 curve25519-sha256 curve25519-sha256@libssh.org diffie-hellman-group14-sha256 diffie-hellman-group16-sha512 diffie-hellman-group18-sha512 diffie-hellman-group-exchange-sha256 ecdh-sha2-nistp256 ecdh-sha2-nistp384 ecdh-sha2-nistp521
ip ssh server mac hmac-sha2-256 hmac-sha2-256-etm@openssh.com hmac-sha2-512 hmac-sha2-512-etm@openssh.com
ip multicast-routing
spanning-tree mode rstp
spanning-tree rstp priority 8192
logging console disable
ip domain-name networks.dell.com
ip name-server 10.8.8.8 10.7.7.7
username netops password r00t@cc3$$ role sysadmin priv-lvl 15
tacacs-server host 10.174.0.11 key 0 D3ll@cs5
tacacs-server host 10.24.248.81 key 0 D3ll@cs5
userrole default inherit sysadmin
!
!
!
!
!
mac address-table aging-time 300
!
logging source-interface loopback0
!
ip tacacs source-interface loopback0
!
logging server 10.0.201.129
!
ip access-list std_snmp_ro_1350
 seq 1 remark "SNMP RO ACL Global Standard ACL version 2.14"
 seq 2 permit ip 163.244.100.18/32 any
 seq 3 permit ip 143.166.233.251/32 any
 seq 4 permit ip 143.166.233.253/32 any
 seq 5 permit ip 163.244.78.86/32 any
 seq 6 permit ip 143.166.6.71/32 any
 seq 7 permit ip 163.244.194.252/32 any
 seq 8 permit ip 143.166.141.11/32 any
 seq 9 permit ip 143.166.251.12/32 any
 seq 10 permit ip 143.166.216.22/32 any
 seq 11 permit ip 163.244.79.228/32 any
 seq 12 remark "AMER Monitoring Networks"
 seq 13 permit ip 10.173.0.0/23 any
 seq 14 permit ip 10.174.0.0/23 any
 seq 15 permit ip 10.0.200.0/24 any
 seq 16 permit ip 10.0.201.0/24 any
 seq 17 remark "VRNI COLLECTORS"
 seq 18 permit ip 10.175.15.150/32 any
 seq 19 permit ip 10.175.65.85/32 any
 seq 20 permit ip 10.152.132.71/32 any
 seq 21 permit ip 10.175.65.84/32 any
 seq 22 permit ip 10.182.154.20/32 any
 seq 23 permit ip 10.186.148.139/32 any
 seq 24 permit ip 10.175.65.82/32 any
 seq 25 permit ip 10.139.132.68/32 any
 seq 26 permit ip 10.34.182.26/32 any
 seq 27 permit ip 10.182.154.18/32 any
 seq 28 permit ip 10.186.148.138/32 any
 seq 29 permit ip 10.175.15.149/32 any
 seq 30 permit ip 10.186.148.137/32 any
 seq 31 permit ip 10.182.154.19/32 any
 seq 32 permit ip 10.175.15.148/32 any
 seq 33 permit ip 10.155.74.53/32 any
 seq 34 permit ip 10.155.74.51/32 any
 seq 35 permit ip 10.155.74.52/32 any
 seq 36 permit ip 10.162.192.71/32 any
 seq 37 permit ip 10.162.192.72/32 any
 seq 38 permit ip 10.162.192.73/32 any
 seq 39 permit ip 10.132.1.51/32 any
 seq 40 permit ip 10.132.1.52/32 any
 seq 41 permit ip 10.132.1.53/32 any
 seq 42 permit ip 10.132.1.54/32 any
 seq 43 permit ip 10.175.72.211/32 any
 seq 44 permit ip 10.175.72.213/32 any
 seq 45 permit ip 10.175.72.212/32 any
 seq 46 permit ip 10.152.132.69/32 any
 seq 47 permit ip 10.152.132.70/32 any
 seq 48 permit ip 10.185.132.90/32 any
 seq 49 permit ip 10.139.132.66/32 any
 seq 50 permit ip 10.139.132.88/32 any
 seq 51 permit ip 10.139.132.67/32 any
 seq 52 permit ip 10.162.222.41/32 any
 seq 53 permit ip 10.171.158.64/32 any
 seq 54 permit ip 10.171.162.11/32 any
 seq 55 permit ip 10.152.132.177/32 any
 seq 56 permit ip 10.162.222.40/32 any
 seq 57 permit ip 10.171.170.37/32 any
 seq 58 permit ip 10.162.222.39/32 any
 seq 59 permit ip 10.139.132.209/32 any
 seq 60 permit ip 10.34.182.23/32 any
 seq 61 permit ip 10.34.182.24/32 any
 seq 62 permit ip 10.34.182.25/32 any
 seq 63 permit ip 10.93.65.51/32 any
 seq 64 permit ip 10.92.64.43/32 any
 seq 65 permit ip 10.92.64.45/32 any
 seq 66 permit ip 10.92.64.44/32 any
 seq 67 permit ip 10.93.65.52/32 any
 seq 68 permit ip 10.93.65.53/32 any
 seq 69 permit ip 10.152.132.90/32 any
 seq 70 permit ip 10.130.16.230/32 any
 seq 71 permit ip 10.130.16.231/32 any
 seq 72 permit ip 10.130.16.232/32 any
 seq 73 remark "EMC US Monitoring Networks"
 seq 74 permit ip 10.146.194.0/23 any
 seq 75 remark "EMEA Monitoring Networks"
 seq 76 permit ip 10.24.248.0/24 any
 seq 77 permit ip 10.24.249.0/24 any
 seq 78 remark "APAC Monitoring Networks"
 seq 79 permit ip 10.99.5.0/24 any
 seq 80 permit ip 10.103.218.0/24 any
 seq 81 remark "Penang DDC VM VLANS"
 seq 82 permit ip 10.92.80.0/24 any
 seq 83 remark "Netbrain Servers"
 seq 84 permit ip 10.34.176.112/32 any
 seq 85 permit ip 10.175.113.150/32 any
 seq 86 permit ip 10.92.40.189/32 any
 seq 87 permit ip 10.139.143.92/32 any
 seq 88 permit ip 10.152.142.137/32 any
 seq 89 permit ip 10.94.220.25/32 any
 seq 90 permit ip 10.139.143.93/32 any
 seq 91 remark "Zabbix Servers"
 seq 92 permit ip 10.34.176.134/32 any
 seq 93 permit ip 10.34.176.163/32 any
 seq 94 permit ip 10.98.252.15/32 any
 seq 95 permit ip 10.41.160.17/32 any
 seq 96 permit ip 10.41.160.15/32 any
 seq 97 permit ip 10.92.80.85/32 any
 seq 98 permit ip 10.92.80.84/32 any
 seq 99 permit ip 10.92.80.89/32 any
 seq 100 permit ip 10.92.80.86/32 any
 seq 101 permit ip 10.92.80.62/32 any
 seq 102 permit ip 10.92.80.61/32 any
 seq 103 permit ip 10.92.80.87/32 any
 seq 104 permit ip 10.92.80.88/32 any
 seq 105 permit ip 10.130.87.31/32 any
 seq 106 permit ip 10.130.87.57/32 any
 seq 107 permit ip 10.167.33.156/32 any
 seq 108 permit ip 10.167.33.235/32 any
 seq 109 permit ip 10.139.142.97/32 any
 seq 110 permit ip 10.139.142.64/32 any
 seq 111 permit ip 10.139.136.39/32 any
 seq 112 permit ip 10.139.142.95/32 any
 seq 113 permit ip 10.139.142.101/32 any
 seq 114 permit ip 10.139.142.100/32 any
 seq 115 permit ip 10.139.142.98/32 any
 seq 116 permit ip 10.139.142.99/32 any
 seq 117 permit ip 10.139.142.102/32 any
 seq 118 permit ip 10.139.142.103/32 any
 seq 119 permit ip 10.139.142.104/32 any
 seq 120 permit ip 10.139.142.105/32 any
 seq 121 permit ip 10.152.136.110/32 any
 seq 122 permit ip 10.152.136.100/32 any
 seq 123 permit ip 10.152.136.112/32 any
 seq 124 permit ip 10.152.136.41/32 any
 seq 125 permit ip 10.152.136.47/32 any
 seq 126 permit ip 10.152.136.115/32 any
 seq 127 permit ip 10.152.136.116/32 any
 seq 128 permit ip 10.152.136.117/32 any
 seq 129 permit ip 10.152.136.118/32 any
 seq 130 permit ip 10.152.136.119/32 any
 seq 131 permit ip 10.152.136.120/32 any
 seq 132 permit ip 10.152.136.122/32 any
 seq 133 permit ip 10.152.142.181/32 any
 seq 134 permit ip 10.152.142.185/32 any
 seq 135 permit ip 10.152.142.186/32 any
 seq 136 permit ip 10.152.142.187/32 any
 seq 137 permit ip 10.152.143.45/32 any
 seq 138 permit ip 10.152.143.44/32 any
 seq 139 permit ip 10.152.143.34/32 any
 seq 140 permit ip 10.152.143.39/32 any
 seq 141 permit ip 10.218.176.205/32 any
 seq 142 permit ip 10.218.176.210/32 any
 seq 143 permit ip 10.218.176.199/32 any
 seq 144 permit ip 10.218.176.202/32 any
 seq 145 remark "Netscout Server"
 seq 146 permit ip 10.58.217.130/32 any
 seq 147 remark "Gravity Servers"
 seq 148 permit ip 10.174.103.131/32 any
 seq 149 permit ip 10.174.103.129/32 any
 seq 150 permit ip 10.174.103.132/32 any
 seq 151 permit ip 10.174.103.134/32 any
 seq 152 remark "MID Servers"
 seq 153 permit ip 10.174.103.168/32 any
 seq 154 permit ip 10.174.103.219/32 any
 seq 155 permit ip 10.174.103.172/32 any
 seq 156 permit ip 10.174.103.170/32 any
 seq 157 permit ip 10.174.103.171/32 any
 seq 158 permit ip 10.174.103.206/32 any
 seq 159 permit ip 10.174.103.173/32 any
 seq 160 permit ip 10.174.103.174/32 any
 seq 161 permit ip 10.174.103.175/32 any
 seq 162 permit ip 10.174.103.207/32 any
 seq 163 permit ip 10.174.103.192/32 any
 seq 164 permit ip 10.174.103.205/32 any
 seq 165 permit ip 10.174.103.191/32 any
 seq 166 permit ip 10.174.103.204/32 any
 seq 167 permit ip 10.174.103.203/32 any
 seq 168 permit ip 10.174.103.177/32 any
 seq 169 permit ip 10.174.103.183/32 any
 seq 170 permit ip 10.174.103.184/32 any
 seq 171 permit ip 10.174.103.185/32 any
 seq 172 permit ip 10.174.103.186/32 any
 seq 173 permit ip 10.174.103.218/32 any
 seq 174 permit ip 10.174.103.178/32 any
 seq 175 permit ip 10.174.103.169/32 any
 seq 176 permit ip 10.174.103.179/32 any
 seq 177 permit ip 10.174.103.202/32 any
 seq 178 permit ip 10.174.103.180/32 any
 seq 179 permit ip 10.174.103.181/32 any
 seq 180 permit ip 10.174.103.201/32 any
 seq 181 permit ip 10.174.103.182/32 any
 seq 182 permit ip 10.182.169.185/32 any
 seq 183 permit ip 10.182.169.186/32 any
 seq 184 permit ip 10.182.169.192/32 any
 seq 185 permit ip 10.182.169.193/32 any
 seq 186 permit ip 10.182.169.194/32 any
 seq 187 permit ip 10.182.169.195/32 any
 seq 188 permit ip 10.182.169.196/32 any
 seq 189 permit ip 10.182.169.197/32 any
 seq 190 permit ip 10.182.169.198/32 any
 seq 191 remark "Forward Networks"
 seq 192 permit ip 10.152.92.98/32 any
 seq 193 permit ip 10.152.92.99/32 any
 seq 194 permit ip 10.152.92.101/32 any
 seq 195 permit ip 10.152.92.102/32 any
 seq 196 permit ip 10.152.92.108/32 any
 seq 197 remark "LOG Exceptions"
!
ip access-list std_snmp_rw_1351
 seq 1 remark "--SNMP RW ACL Global Standard--"
 seq 2 remark "- ACL version 2.2  -"
 seq 5 permit ip host 10.67.90.50 any
 seq 10 permit ip host 163.244.100.18 any
 seq 15 permit ip host 163.244.180.204 any
 seq 20 permit ip host 143.166.233.251 any
 seq 30 permit ip host 163.244.78.86 any
 seq 35 permit ip host 163.244.52.62 any
 seq 40 permit ip host 143.166.6.71 any
 seq 45 permit ip host 163.244.194.252 any
 seq 50 permit ip host 143.166.141.11 any
 seq 55 permit ip host 163.244.234.10 any
 seq 60 permit ip host 143.166.251.12 any
 seq 65 permit ip host 143.166.216.22 any
 seq 70 permit ip host 163.244.153.61 any
 seq 75 permit ip host 163.244.79.228 any
 seq 80 permit ip 10.24.248.0/24 any
 seq 85 permit ip 10.24.249.0/24 any
 seq 90 permit ip 10.0.200.0/24 any
 seq 95 permit ip 10.0.201.0/24 any
 seq 100 permit ip 10.99.5.0/24 any
 seq 105 permit ip 10.103.218.0/24 any
 seq 998 remark "- LOG Exceptions -"
 seq 999 deny ip any any log
!
snmp-server community d311n3t ro acl std_snmp_ro_1350
snmp-server community F0x42Ump1r3 ro acl std_snmp_ro_1350
snmp-server community tran5f3r rw acl std_snmp_rw_1351
snmp-server contact DellNOC@dell.com
snmp-server location "{SNMP_Describtion}"
!
enable password 0 r00t@cc3$$ priv-lvl 15
ntp server ntp1.dell.com prefer
ntp server ntp2.dell.com
!
ip pim rp-address 10.250.1.1 group-address 224.0.1.38/31
!
aaa re-authenticate enable
aaa authentication login default group tacacs+ local
aaa authentication login console local group tacacs+
aaa accounting commands all default start-stop group tacacs+ 
aaa accounting exec default start-stop group tacacs+
!


================================= Heart Beat and VLT ===============================================

interface ethernet1/1/13
 no shutdown
 no switchport
 flowcontrol receive off
!
interface ethernet1/1/14
 no shutdown
 no switchport
 flowcontrol receive off
!
! 
interface ethernet1/1/12:1
 description to_Peer-Distro-Heart-Beat
 no shutdown
 no switchport
 ip address 192.168.1.9/30
 flowcontrol receive off
!
vlt-domain 1
 backup destination 192.168.1.10
 discovery-interface ethernet1/1/13-1/1/14
 peer-routing
 primary-priority 1
 vlt-mac 00:00:00:00:00:03
!


========================================= VLANS ========================


interface vlan10
 description <<Data-Network>>
 no shutdown
 ip address {Vlan10_IP_Address}
 ip pim sparse-mode
 ip pim query-interval 5
 ip igmp version 3
 ip ospf 1 area 0.0.0.3
 ip ospf passive
 ip helper-address 10.170.20.83
 ip helper-address 10.170.26.243
 !
 vrrp-group 10
  priority 110
  virtual-address {Vlan10_Virtual_IP}
!
interface vlan20
 description <<Voice-Network>>
 no shutdown
 ip address {Vlan20_IP_Address}
 ip pim sparse-mode
 ip pim query-interval 5
 ip igmp version 3
 ip ospf 1 area 0.0.0.3
 ip ospf passive
 ip helper-address 10.170.20.83
 ip helper-address 10.170.26.243
 !
 vrrp-group 20
  priority 110
  virtual-address {Vlan20_Virtual_IP}
!
interface vlan30
 description <<Wireless>>
 no shutdown
 ip address {Vlan30_IP_Address}
 ip pim sparse-mode
 ip pim query-interval 5
 ip igmp version 3
 ip ospf 1 area 0.0.0.3
 ip ospf passive
 ip helper-address 10.170.20.83
 ip helper-address 10.170.26.243
!
 vrrp-group 30
  priority 110
  virtual-address {Vlan30_Virtual_IP}
!
!
interface vlan40
 description <<Fixed-Asset>>
 no shutdown
 ip address {Vlan40_IP_Address}
 ip pim sparse-mode
 ip pim query-interval 5
 ip igmp version 3
 ip ospf 1 area 0.0.0.3
 ip ospf passive
 !
 vrrp-group 40
  priority 110
  virtual-address {Vlan40_Virtual_IP}
!
interface vlan500
 description <<Management>>
 no shutdown
 ip address {Vlan500_IP_Address}
 ip ospf 1 area 0.0.0.3
 ip ospf passive
 !
 vrrp-group 55
  priority 110
  virtual-address {Vlan500_Virtual_IP}
!

================================= Down Links ============================================


interface port-channel1
 description {SONiC_SW01}
 no shutdown
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30,40,500
 mtu 9100
 vlt-port-channel 1
!
interface ethernet1/1/1:1
 description {SONiC_SW01}-Te1/49
 no shutdown
 channel-group 1 mode active
 no switchport
 mtu 9100
 flowcontrol receive off
!
interface port-channel2
 description {SONiC_SW02}
 no shutdown
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30,40,500
 mtu 9100
 vlt-port-channel 2
!
interface ethernet1/1/2:1
 description {SONiC_SW02}-Te1/49
 no shutdown
 channel-group 2 mode active
 no switchport
 mtu 9100
 flowcontrol receive off
!
interface port-channel3
 description {SONiC_SW03}
 no shutdown
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30,40,500
 mtu 9100
 vlt-port-channel 3
!
interface ethernet1/1/3:1
 description {SONiC_SW03}-Te1/49
 no shutdown
 channel-group 3 mode active
 no switchport
 mtu 9100
 flowcontrol receive off
!
!




================================== OSPF ================================================



router ospf 1
 log-adjacency-changes
 area 0.0.0.3 nssa 
 router-id {LoopBack_IP}
!

  """)


input("Press Enter to exit...")
