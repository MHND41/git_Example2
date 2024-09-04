from netmiko import ConnectHandler
import os

# Define the path to your devices file
devices_file_path = '/home/luke/network_automation/wireless_first_report_Mohanad/runbook/DEVICES.txt'

# Define the directory where output files will be saved
directory_path = '/home/luke/network_automation/wireless_first_report_Mohanad/runbook/OUTOUT_CONFIG_TEST'

# Ensure the output directory exists
os.makedirs(directory_path, exist_ok=True)

# Open the devices file and process each device
with open(devices_file_path) as host_list:
    for host in host_list:
        # Strip any extra whitespace including newlines
        host = host.strip()
        
        # Define the device parameters
        dell_device = {
            'device_type': 'dell_os6',
            'host': host,
            'username': 'ADMMohanad_Alshawi',
            'password': 'L9*=y.w_XzRMSg4+',
        }
        
        try:
            # Connect to the device
            net_connect = ConnectHandler(**dell_device)
            
            # Send commands and collect output
            show_output = net_connect.send_command('show lldp remote-device all')
            show_output2 = net_connect.send_command('show ip route')
            show_output3 = net_connect.send_command('show interfaces port-channel 1')
            show_output4 = net_connect.send_command('show mac address-table')
            
            # Disconnect from the device
            net_connect.disconnect()

            # Define the output file path
            filename = f"{host}.txt"
            file_path = os.path.join(directory_path, filename)
            
            # Write command outputs to the file
            with open(file_path, "w") as f:
                f.write(f"Output from {host}:\n")
                f.write(show_output)
                f.write("\n\n\n")
                f.write(show_output2)
                f.write("\n\n\n")
                f.write(show_output3)
                f.write("\n\n\n")
                f.write(show_output4)
                f.write("\n\n\n")
        
        except Exception as e:
            # Handle exceptions (e.g., connection issues)
            print(f"Failed to connect to {host}: {e}")
