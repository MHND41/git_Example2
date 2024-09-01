from netmiko import ConnectHandler
import os


Dell_devices = [
    {
        'device_type': 'dell_os6',
        'host': 'USRRX02-CC-010B-SW01',
        'username': 'ADMMohanad_Alshawi',
        'password': '=Btc*og+1xyUz8Q#',
    },
    {
        'device_type': 'dell_os6',
        'host': 'USRRX02-CC-010B-SW02',
        'username': 'ADMMohanad_Alshawi',
        'password': '=Btc*og+1xyUz8Q#',
    },
    {
        'device_type': 'dell_os6',
        'host': 'USRRX02-CC-010B-SW03',
        'username': 'ADMMohanad_Alshawi',
        'password': '=Btc*og+1xyUz8Q#',
    },
    {
        'device_type': 'dell_os6',
        'host': 'USRRX02-CC-010B-SW04',
        'username': 'ADMMohanad_Alshawi',
        'password': '=Btc*og+1xyUz8Q#',
    },
    {
        'device_type': 'dell_os6',
        'host': 'USRRX02-CC-010B-SW05',
        'username': 'ADMMohanad_Alshawi',
        'password': '=Btc*og+1xyUz8Q#',
    },
    {
        'device_type': 'dell_os6',
        'host': 'USRRX02-CC-010B-SW06',
        'username': 'ADMMohanad_Alshawi',
        'password': '=Btc*og+1xyUz8Q#',
    },
    {
        'device_type': 'dell_os6',
        'host': 'USRRX02-CC-010B-SW07',
        'username': 'ADMMohanad_Alshawi',
        'password': '=Btc*og+1xyUz8Q#',
    },
    {
        'device_type': 'dell_os6',
        'host': 'USRRX02-CC-010B-SW08',
        'username': 'ADMMohanad_Alshawi',
        'password': '=Btc*og+1xyUz8Q#',
    },
    {
        'device_type': 'dell_os6',
        'host': 'USRRX02-CC-010B-SW09',
        'username': 'ADMMohanad_Alshawi',
        'password': '=Btc*og+1xyUz8Q#',
    },
    {
        'device_type': 'dell_os6',
        'host': 'USRRX02-CC-010B-SW10',
        'username': 'ADMMohanad_Alshawi',
        'password': '=Btc*og+1xyUz8Q#',
    }
]


# Connect to the first device to retrieve show commands
net_connect = ConnectHandler(**Dell_devices[0])
show_outputA = net_connect.send_command('show lldp remote-device all')
show_outputA2 = net_connect.send_command('show ip route')
show_outputA3 = net_connect.send_command('show interfaces port-channel 1')
show_outputA4 = net_connect.send_command('show mac address-table')
net_connect.disconnect()

net_connect = ConnectHandler(**Dell_devices[1])
show_outputB = net_connect.send_command('show lldp remote-device all')
show_outputB2 = net_connect.send_command('show ip route')
show_outputB3 = net_connect.send_command('show interfaces port-channel 1')
show_outputB4 = net_connect.send_command('show mac address-table')
net_connect.disconnect()

net_connect = ConnectHandler(**Dell_devices[2])
show_outputC = net_connect.send_command('show lldp remote-device all')
show_outputC2 = net_connect.send_command('show ip route')
show_outputC3 = net_connect.send_command('show interfaces port-channel 1')
show_outputC4 = net_connect.send_command('show mac address-table')
net_connect.disconnect()

net_connect = ConnectHandler(**Dell_devices[3])
show_outputD = net_connect.send_command('show lldp remote-device all')
show_outputD2 = net_connect.send_command('show ip route')
show_outputD3 = net_connect.send_command('show interfaces port-channel 1')
show_outputD4 = net_connect.send_command('show mac address-table')
net_connect.disconnect()

net_connect = ConnectHandler(**Dell_devices[4])
show_outputE = net_connect.send_command('show lldp remote-device all')
show_outputE2 = net_connect.send_command('show ip route')
show_outputE3 = net_connect.send_command('show interfaces port-channel 1')
show_outputE4 = net_connect.send_command('show mac address-table')
net_connect.disconnect()

net_connect = ConnectHandler(**Dell_devices[5])
show_outputF = net_connect.send_command('show lldp remote-device all')
show_outputF2 = net_connect.send_command('show ip route')
show_outputF3 = net_connect.send_command('show interfaces port-channel 1')
show_outputF4 = net_connect.send_command('show mac address-table')
net_connect.disconnect()

net_connect = ConnectHandler(**Dell_devices[6])
show_outputG = net_connect.send_command('show lldp remote-device all')
show_outputG2 = net_connect.send_command('show ip route')
show_outputG3 = net_connect.send_command('show interfaces port-channel 1')
show_outputG4 = net_connect.send_command('show mac address-table')
net_connect.disconnect()

net_connect = ConnectHandler(**Dell_devices[7])
show_outputH = net_connect.send_command('show lldp remote-device all')
show_outputH2 = net_connect.send_command('show ip route')
show_outputH3 = net_connect.send_command('show interfaces port-channel 1')
show_outputH4 = net_connect.send_command('show mac address-table')
net_connect.disconnect()

net_connect = ConnectHandler(**Dell_devices[8])
show_outputI = net_connect.send_command('show lldp remote-device all')
show_outputI2 = net_connect.send_command('show ip route')
show_outputI3 = net_connect.send_command('show interfaces port-channel 1')
show_outputI4 = net_connect.send_command('show mac address-table')
net_connect.disconnect()

net_connect = ConnectHandler(**Dell_devices[9])
show_outputJ = net_connect.send_command('show lldp remote-device all')
show_outputJ2 = net_connect.send_command('show ip route')
show_outputJ3 = net_connect.send_command('show interfaces port-channel 1')
show_outputJ4 = net_connect.send_command('show mac address-table')
net_connect.disconnect()


# Append show command output to file

filename = f"{Dell_devices[0]['host']}.txt"
filename02 = f"{Dell_devices[1]['host']}.txt"
filename03 = f"{Dell_devices[2]['host']}.txt"
filename04 = f"{Dell_devices[3]['host']}.txt"
filename05 = f"{Dell_devices[4]['host']}.txt"
filename06 = f"{Dell_devices[5]['host']}.txt"
filename07 = f"{Dell_devices[6]['host']}.txt"
filename08 = f"{Dell_devices[7]['host']}.txt"
filename09 = f"{Dell_devices[8]['host']}.txt"
filename10 = f"{Dell_devices[9]['host']}.txt"


directory_path = '/home/luke/network_automation/wireless_first_report_Mohanad/'

file_path = os.path.join(directory_path, filename)
file_path02 = os.path.join(directory_path, filename02)
file_path03 = os.path.join(directory_path, filename03)
file_path04 = os.path.join(directory_path, filename04)
file_path05 = os.path.join(directory_path, filename05)
file_path06 = os.path.join(directory_path, filename06)
file_path07 = os.path.join(directory_path, filename07)
file_path08 = os.path.join(directory_path, filename08)
file_path09 = os.path.join(directory_path, filename09)
file_path10 = os.path.join(directory_path, filename10)



with open(file_path, "w") as f:
    f.write(f"Output from {Dell_devices[0]['host']}:\n")
    f.write(show_outputA)
    f.write("\n\n\n")
    f.write(show_outputA2)
    f.write("\n\n\n")
    f.write(show_outputA3)
    f.write("\n\n\n")
    f.write(show_outputA4)
    f.write("\n\n\n")

with open(file_path02, "w") as f:
    f.write(f"Output from {Dell_devices[1]['host']}:\n")
    f.write(show_outputB)
    f.write("\n\n\n")
    f.write(show_outputB2)
    f.write("\n\n\n")
    f.write(show_outputB3)
    f.write("\n\n\n")
    f.write(show_outputB4)
    f.write("\n\n\n")

with open(file_path03, "w") as f:
    f.write(f"Output from {Dell_devices[2]['host']}:\n")
    f.write(show_outputC)
    f.write("\n\n\n")
    f.write(show_outputC2)
    f.write("\n\n\n")
    f.write(show_outputC3)
    f.write("\n\n\n")
    f.write(show_outputC4)
    f.write("\n\n\n")

with open(file_path04, "w") as f:
    f.write(f"Output from {Dell_devices[3]['host']}:\n")
    f.write(show_outputD)
    f.write("\n\n\n")
    f.write(show_outputD2)
    f.write("\n\n\n")
    f.write(show_outputD3)
    f.write("\n\n\n")
    f.write(show_outputD4)
    f.write("\n\n\n")

with open(file_path05, "w") as f:
    f.write(f"Output from {Dell_devices[4]['host']}:\n")
    f.write(show_outputE)
    f.write("\n\n\n")
    f.write(show_outputE2)
    f.write("\n\n\n")
    f.write(show_outputE3)
    f.write("\n\n\n")
    f.write(show_outputE4)
    f.write("\n\n\n")

with open(file_path06, "w") as f:
    f.write(f"Output from {Dell_devices[5]['host']}:\n")
    f.write(show_outputF)
    f.write("\n\n\n")
    f.write(show_outputF2)
    f.write("\n\n\n")
    f.write(show_outputF3)
    f.write("\n\n\n")
    f.write(show_outputF4)
    f.write("\n\n\n")

with open(file_path07, "w") as f:
    f.write(f"Output from {Dell_devices[6]['host']}:\n")
    f.write(show_outputG)
    f.write("\n\n\n")
    f.write(show_outputG2)
    f.write("\n\n\n")
    f.write(show_outputG3)
    f.write("\n\n\n")
    f.write(show_outputG4)
    f.write("\n\n\n")

with open(file_path08, "w") as f:
    f.write(f"Output from {Dell_devices[7]['host']}:\n")
    f.write(show_outputH)
    f.write("\n\n\n")
    f.write(show_outputH2)
    f.write("\n\n\n")
    f.write(show_outputH3)
    f.write("\n\n\n")
    f.write(show_outputH4)
    f.write("\n\n\n")

with open(file_path09, "w") as f:
    f.write(f"Output from {Dell_devices[8]['host']}:\n")
    f.write(show_outputI)
    f.write("\n\n\n")
    f.write(show_outputI2)
    f.write("\n\n\n")
    f.write(show_outputI3)
    f.write("\n\n\n")
    f.write(show_outputI4)
    f.write("\n\n\n")

with open(file_path10, "w") as f:
    f.write(f"Output from {Dell_devices[9]['host']}:\n")
    f.write(show_outputJ)
    f.write("\n\n\n")
    f.write(show_outputJ2)
    f.write("\n\n\n")
    f.write(show_outputJ3)
    f.write("\n\n\n")
    f.write(show_outputJ4)
    f.write("\n\n\n")

