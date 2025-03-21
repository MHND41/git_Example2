from netmiko import ConnectHandler
import os




host = input("enter the SONiC Host/IP : ")


dell_device = {
    'device_type': 'dell_sonic',
    'host': host,
    'username': 'wlessserverstv5',
    'password': 'zY&dr84V6$N7R%',
}

try:
    # Connect to the device
    net_connect = ConnectHandler(**dell_device)
    
    # Send commands and collect output
    show_output = net_connect.send_command('show vlan')
    show_output2 = net_connect.send_command('show interface status')
    show_output3 = net_connect.send_command('show mac address-table Vlan 10 | grep Eth')
    show_output4 = net_connect.send_command('show mac address-table Vlan 20 | grep Eth')
    show_output5 = net_connect.send_command('show mac address-table Vlan 30 | grep Eth')
    show_output6 = net_connect.send_command('show mac address-table Vlan 40 | grep Eth')
    show_output7 = net_connect.send_command('show mac address-table | grep Eth')
    show_output8 = net_connect.send_command('show running-configuration interface Vlan 500')
    show_output9 = net_connect.send_command('show running-configuration | grep snooping')
    show_output10 = net_connect.send_command('show interface status | grep Eth1/49|Eth1/50')
    show_output11 = net_connect.send_command('show interface portchannel')
    # show_output12 = net_connect.send_command('show vlan')
    # show_output13 = net_connect.send_command('show snmp-server')
    # show_output14 = net_connect.send_command('show running-configuration')

    # Disconnect from the device
    net_connect.disconnect()


    # Print command outputs to the screen
    print("==================show vlan ")
    print(show_output)
    print("\n\n\n")
    print("==================show interface status ")
    print(show_output2)
    print("\n\n\n")
    print("==================show mac address-table Vlan 10 | grep Eth ")
    print(show_output3)
    print("\n\n\n")
    print("==================show mac address-table Vlan 20 | grep Eth ")
    print(show_output4)
    print("\n\n\n")
    print("==================show mac address-table Vlan 30 | grep Eth ")
    print(show_output5)
    print("\n\n\n")
    print("==================show mac address-table Vlan 40 | grep Eth ")
    print(show_output6)
    print("\n\n\n")
    print("==================show mac address-table | grep Eth ")
    print(show_output7)
    print("\n\n\n")
    print("==================show running-configuration interface Vlan 500 ")
    print(show_output8)
    print("\n\n\n")
    print("==================show running-configuration | grep snooping ")
    print(show_output9)
    print("\n\n\n")
    print("==================show interface status | grep Eth1/49|Eth1/50 ")
    print(show_output10)
    print("\n\n\n")
    print("==================show interface portchannel ")
    print(show_output11)
    print("\n\n\n")
    # print(show_output12)
    # print("\n\n\n")
    # print(show_output13)
    # print("\n\n\n")
    # print(show_output14)
    # print("\n\n\n")

except Exception as e:
    # Handle exceptions (e.g., connection issues)
    print(f"Failed to connect to {host}: {e}")
