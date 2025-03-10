import requests
import requests
import json
import urllib3
from urllib3.exceptions import InsecureRequestWarning
import paramiko


urllib3.disable_warnings(InsecureRequestWarning)

Hostname = input("Hostname : ")
New_Hostname = input("New_Hostname : ")

# Your username and password
username = ("wlessserverstv5")
password = ("zY&dr84V6$N7R%")


url = f"https://{Hostname}.networks.dell.com/restconf/data/openconfig-system:system/config/hostname"

payload = json.dumps({
  "openconfig-system:hostname": f"{New_Hostname}"
})
headers = {
  'Content-Type': 'application/yang-data+json',
}

response = requests.request("PUT", url,  auth=(username, password), headers=headers, data=payload, verify=False)

print(response.text)



# Create SSH client and connect
ssh_client = paramiko.SSHClient()
ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh_client.connect(f"{Hostname}.networks.dell.com", username=username, password=password)

# Run the command to save the configuration and automatically confirm 'y' to the prompt
stdin, stdout, stderr = ssh_client.exec_command("echo y | sudo config save")

# Output the result
print(stdout.read().decode())
print(stderr.read().decode())

# Close SSH connection
ssh_client.close()


input("Press Enter to exit...")

