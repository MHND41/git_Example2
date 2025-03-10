# import requests
# import json

# url = "https://USEDP02-CP01DSW09.networks.dell.com/restconf/data/openconfig-lldp:lldp"

# # Your username and password
# username = "wlessserverstv5"
# password = "zY&dr84V6$N7R%"

# # Headers (you don't need to manually set 'Authorization' here)
# headers = {
#     'Accept': 'application/yang-data+json',
# }

# # Send GET request with basic authentication (requests will handle the Authorization header)
# response = requests.get(url, headers=headers, auth=(username, password), verify=False)

# # Parse the JSON response
# parsed_data = json.loads(response.text)

# # Print the parsed data
# # print(json.dumps(parsed_data, indent=4))  # Pretty print the parsed data
# # print("name:", parsed_data["interfaces"])
# # print("Age:", parsed_data["age"])
# # print("City:", parsed_data["city"])

# system_name = parsed_data.get("openconfig-lldp:lldp", {})\
#     .get("interfaces", {})\
#     .get("interface", [{}])[0]\
#     .get("neighbors", {})\
#     .get("neighbor", [{}])[0]\
#     .get("state", {})\
#     .get("system-name", "Unknown")



# # Print the system name
# print("System Name:", system_name)



########################### option 2 ###################################################



import requests
import json
import urllib3
from urllib3.exceptions import InsecureRequestWarning


urllib3.disable_warnings(InsecureRequestWarning)


# Example URL (replace with your actual URL)
Hostname = input("Hostname : ")
url = f"https://{Hostname}.networks.dell.com/restconf/data/openconfig-lldp:lldp"

# Your username and password
username = input("Username : ")
password = input("Password : ")

# Send GET request
response = requests.get(url, auth=(username, password), verify=False)

# Parse JSON response
parsed_data = json.loads(response.text)

# List to store all system names and their corresponding management addresses
system_info = []

# Loop through each interface and its neighbors
interfaces = parsed_data.get("openconfig-lldp:lldp", {}).get("interfaces", {}).get("interface", [])
for interface in interfaces:
    neighbors = interface.get("neighbors", {}).get("neighbor", [])
    for neighbor in neighbors:
        # Extract system name and management address and MAC from state
        system_name = neighbor.get("state", {}).get("system-name", None)
        management_address = neighbor.get("state", {}).get("management-address", None)
        chassis_id = neighbor.get("state", {}).get("chassis-id", None)

        # Only add to the list if both values are found
        if system_name and management_address:
            system_info.append({
                "system-name": system_name,
                "management-address": management_address,
                "chassis-id": chassis_id
            })

# Print all system names and management addresses and MAC
if system_info:
    print("System Information (System Name and Management Address and MAC):")
    for info in system_info:
        print(f"System Name: {info['system-name']}, Management Address: {info['management-address']}, MAC: {info['chassis-id']}")
else:
    print("No system names and management addresses found.")


input("Press Enter to exit...")




########################### option 3 ###################################################




# import requests
# import json
# from concurrent.futures import ThreadPoolExecutor, as_completed
# import urllib3
# from urllib3.exceptions import InsecureRequestWarning


# urllib3.disable_warnings(InsecureRequestWarning)

# # List of device URLs
# device_urls = [
#     "https://USEDP02-CP01DSW01.networks.dell.com/restconf/data/openconfig-lldp:lldp",
#     "https://USEDP02-CP01DSW02.networks.dell.com/restconf/data/openconfig-lldp:lldp",
#     "https://USEDP02-CP01DSW09.networks.dell.com/restconf/data/openconfig-lldp:lldp"
# ]

# # Your username and password (replace with your actual credentials)
# username = "wlessserverstv5"
# password = "zY&dr84V6$N7R%"

# # Function to fetch system name and management address from a device
# def fetch_system_info(url):
#     try:
#         # Send GET request to the device
#         response = requests.get(url, auth=(username, password), verify=False)  # Disable SSL verification if needed
#         response.raise_for_status()  # Raise an error for bad status codes
        
#         # Parse JSON response
#         parsed_data = json.loads(response.text)
        
#         # List to store all system names and management addresses
#         system_info = []
        
#         # Loop through each interface and its neighbors
#         interfaces = parsed_data.get("openconfig-lldp:lldp", {}).get("interfaces", {}).get("interface", [])
#         for interface in interfaces:
#             neighbors = interface.get("neighbors", {}).get("neighbor", [])
#             for neighbor in neighbors:
#                 system_name = neighbor.get("state", {}).get("system-name", None)
#                 management_address = neighbor.get("state", {}).get("management-address", None)

#                 # Only add to the list if both values are found
#                 if system_name and management_address:
#                     system_info.append({
#                         "system-name": system_name,
#                         "management-address": management_address
#                     })
        
#         return system_info
    
#     except requests.exceptions.RequestException as e:
#         # Handle any request errors (e.g., network issues, invalid response)
#         print(f"Error fetching data from {url}: {e}")
#         return []

# # Function to handle concurrent requests
# def get_system_info_from_multiple_devices():
#     # Create a ThreadPoolExecutor to handle multiple requests concurrently
#     with ThreadPoolExecutor(max_workers=5) as executor:
#         # Submit all tasks to the executor
#         future_to_url = {executor.submit(fetch_system_info, url): url for url in device_urls}

#         # Wait for all futures to complete
#         for future in as_completed(future_to_url):
#             url = future_to_url[future]
#             try:
#                 # Retrieve the result of each request (list of system info)
#                 system_info = future.result()
                
#                 # Print the result for each device
#                 if system_info:
#                     print(f"System Information from {url}:")
#                     for info in system_info:
#                         print(f"  System Name: {info['system-name']}, Management Address: {info['management-address']}")
#                 else:
#                     print(f"No system names and management addresses found for {url}.")
#             except Exception as exc:
#                 print(f"Error processing request for {url}: {exc}")

# # Run the concurrent fetching
# get_system_info_from_multiple_devices()

