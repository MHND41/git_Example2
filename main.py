from re import template
from helper import nornir_setup
from nornir_netmiko import netmiko_send_command, netmiko_send_config
from nornir_jinja2.plugins.tasks import template_file
from nornir.core.task import Task, Result
from ttp import ttp
import time, logging, json, datetime
import pandas as pd 
import openpyxl
from mac_vendor_lookup import MacLookup
import os


#import ipdb

# Perform the Nornir initialization
nr = nornir_setup()

# Console logging 
#logging.basicConfig(level='DEBUG')

def task_1(task):
    # Netmiko send command to the host  

    # output_sys = task.run(task = netmiko_send_command, delay_factor=60, read_timeout=60, command_string = 'show system')
    # task.host['system'] = output_sys.result

    # with open("/home/luke/network_automation/parser/ttp_parsers/dell_os6_show_system.ttp","r") as f:
    #     template_sys = f.read()

    # # Instantiating the ttp object in a variable called parsing and feeding the data and template from the 
    # # with open context manager
    # parsing = ttp(data=task.host['system'],template=template_sys)
    # parsing.parse()
    # parsed_sys = json.loads(parsing.result(format="json")[0])
    # uptime = parsed_sys[0]['system']['up_time']

    ############################################################################################################################

    output = task.run(task = netmiko_send_command, delay_factor=60, read_timeout=60, command_string = 'show interfaces')
    task.host['interfaces'] = output.result
    
    with open("/home/luke/network_automation/parser/ttp_parsers/dell_os6_show_interfaces.ttp","r") as f:
        template = f.read()

    # Instantiating the ttp object in a variable called parsing and feeding the data and template from the 
    # with open context manager
    parsing = ttp(data=task.host['interfaces'],template=template)
    parsing.parse()
    parsed = json.loads(parsing.result(format="json")[0])

    site_code = task.host.data['site']['name']
    # Getting the total number of ACCESS port by eliminating Te ports and just leaving Gi ports
    # This will be used later to create the report but will not be used in the script to disable any ports
    total_access_ports = list(filter(lambda x: x["int_name"].startswith("Gi"), parsed[0]["interface"])) 

    # Here we are looking for Gi ports that shows as down and are either configured for voice and data (10),20
    # or that are down and in VLAN1, as best practice VLAN 1 ports should also be shutdown
    ports_to_disable = list(filter(lambda x: x["int_name"].startswith("Gi")
                                         and (x["link_status"].startswith("Down") and (x["vlan"]=="(10),20" or x["vlan"]=="1" or x["vlan"]=="10" or x["vlan"]=="20")),
                                         parsed[0]["interface"]))
    # New algo considering the packets transmitted and received as well 
    ports_to_disable_new = list(filter(lambda x: x["int_name"].startswith("Gi")
                                         and (x["link_status"].startswith("Down") and (x["vlan"]=="(10),20" or x["vlan"]=="1" or x["vlan"]=="10" or x["vlan"]=="20")) 
                                         and (x["unicast_pkts_tx"]=="0" and x["multicast_pkts_tx"]=="0" and x["broadcast_pkts_tx"]=="0" and x["unicast_pkts_rx"]=="0"),
                                         parsed[0]["interface"]))
                                         
    # This can will be used only for the reports and it is finding the name of the Te ports, any port that was Up at the time we
    # ran the script and also will list all the ports that are Down on either vlan 30 and 40
    ports_not_to_disable = list(filter(lambda x: x["int_name"].startswith("Te") 
                                      or (x["int_name"].startswith("Gi") and x["link_status"].startswith("Up") and x["vlan"]!="1") 
                                      or (x["int_name"].startswith("Gi") and x["link_status"].startswith("Down") and not(x["vlan"]=="(10),20" or x["vlan"]=="1" or x["vlan"]=="10" or x["vlan"]=="20")),
                                      parsed[0]["interface"]))

    
    
    ports_all = len(total_access_ports)
    ports_down = 0
    ports_shut = 0
    ports_up = 0
    for i in total_access_ports:
        if 'Down' in i["link_status"]:
           ports_down += 1
        if 'shut' in i["link_status"]:
           ports_shut += 1
        if 'Up' in i["link_status"]:
           ports_up += 1

    port_will_be_disabled = 0
    for i in ports_to_disable:
        if True:
            port_will_be_disabled += 1
            
    port_will_be_disabled_new = 0
    for i in ports_to_disable_new:
        if True:
            port_will_be_disabled_new += 1

    ports_staying_down = ports_down - port_will_be_disabled_new 
    return Result  (host=task.host, 
                    result_down=ports_down, 
                    result_up = ports_up, 
                    result_shut = ports_shut, 
                    result_disable = port_will_be_disabled,
                    result_disable_new = port_will_be_disabled_new,
                    result_all = ports_all,
                    result_staying = ports_staying_down,
                    result_data = ports_not_to_disable,
                    result_backout = ports_to_disable,
                    result_backout_new = ports_to_disable_new,
                    result_site = site_code,
                    result_acc_ports = total_access_ports,
                    # result_uptime = uptime
                    )



def task_2(task):
    mac = task.run(task = netmiko_send_command, delay_factor=60, read_timeout=60, command_string = 'show mac address-table',use_ttp = True, ttp_template = '/home/luke/network_automation/parser/ttp_parsers/dell_os6_mac_address_table.ttp')
    len_mac = len(mac[0].result[0][0]['MAC_table'])
    i=0
    port = []
    address = []
    vendor = []
    switchname = []
    tempstr = f'{task.host}'

    while i < len_mac:
        address.append(mac[0].result[0][0]['MAC_table'][i]['mac'])
        port.append(mac[0].result[0][0]['MAC_table'][i]['port'])
                
        try:
            # Lookup the vendor using MacLookup
            # MacLookup().update_vendors()
            vendor_value = MacLookup().lookup(mac[0].result[0][0]['MAC_table'][i]['mac'])
        except KeyError as e:
            print(f"Error: {e}")
            vendor_value = "UNKNOWN"

        vendor.append(vendor_value)

        switchname.append(tempstr)
        
        i=i+1

    df = pd.DataFrame({'Port': port, 'MAC': address, 'Vendor':vendor ,'host': switchname})
    df = df.drop_duplicates(subset=['Port'], keep='first')
    return Result  (host=task.host, 
                    vendorslist = df
                    )

# Running show system, returning port status and other information
output = nr.run(task=task_1)


# Running show mac address-table and processing result, returning dataframe containing each
output2 = nr.run(task=task_2)



# Updating / creating excel file report 
for hostname, host_result in output.items():

    file_path = os.path.join('/home/luke/network_automation/wireless_first_report_Mohanad/output', f'{hostname}.xlsx')
    dftemp = output2[hostname].vendorslist
    # Creating new excel sheet
    
    if output[hostname].failed == False:
        
        length_not_dis = len(output[hostname][0].result_acc_ports)
        ports =[]
        vlans =[]
        name = f'{hostname}'
        switchname = []
        for i in range(length_not_dis):
            port_name = output[hostname][0].result_acc_ports[i]['int_name']
            port_status = output[hostname][0].result_acc_ports[i]['link_status']
        
            port_site = output[hostname][0].result_site
            ports.append(port_name)
            vlan = output[hostname][0].result_acc_ports[i]['vlan']
            vlans.append(vlan)
            switchname.append(name)
            
        
        df = pd.DataFrame({'Port': ports, 'VLAN': vlans, 'host': switchname})
        
        df = pd.merge(df, dftemp, left_on=['host', 'Port'], right_on=['host', 'Port'], how='left')
        df = df.drop_duplicates(subset=['Port'], keep='first')
        tempdf = df
        df = df.drop('host', axis=1)
        
        if not os.path.exists(file_path):

            df.to_excel(f'/home/luke/network_automation/wireless_first_report_Mohanad/output/{hostname}.xlsx', index=False, sheet_name= f'{hostname}')

        
    else:
        pass
    
    # Adding new report for current time
    if os.path.exists(file_path):
        
        if output[hostname].failed == False:
            print(f'Proceeding with report for {hostname}')
            length_not_dis = len(output[hostname][0].result_acc_ports)
            status = [ str(datetime.datetime.now())]
            
            for i in range(length_not_dis):
                port_status = output[hostname][0].result_acc_ports[i]['link_status']
                status.append(port_status)
                
            
            df = pd.DataFrame(status)
    
            workbook = openpyxl.load_workbook(f'/home/luke/network_automation/wireless_first_report_Mohanad/output/{hostname}.xlsx')
            worksheet = workbook[f'{hostname}']
            num_columns = worksheet.max_column
           
            with pd.ExcelWriter(f'/home/luke/network_automation/wireless_first_report_Mohanad/output/{hostname}.xlsx', engine='openpyxl', mode='a', if_sheet_exists= 'overlay') as writer:
                df.to_excel(writer, sheet_name=f'{hostname}', header=False, index=False, startcol=num_columns)

            excel_df = pd.read_excel(f'/home/luke/network_automation/wireless_first_report_Mohanad/output/{hostname}.xlsx')

            # NEW, to write new MAC
            excel_df = excel_df.assign(host = f'{hostname}')
           
            merged_df = pd.merge(excel_df[['host', 'Port', 'MAC', 'Vendor']], tempdf[['host', 'Port', 'MAC', 'Vendor']], on=['host', 'Port'], how='right')
            
            excel_df['MAC'] = merged_df['MAC_y']
            excel_df['Vendor'] = merged_df['Vendor_y']
            excel_df.drop(excel_df.columns[-1], axis=1, inplace=True)
   
            excel_df.to_excel(f'/home/luke/network_automation/wireless_first_report_Mohanad/output/{hostname}.xlsx', index=False, sheet_name= f'{hostname}')
          
                
        else: 
            print(f'{hostname} fail on task 1, check password in helper is correct')
            pass

        
        
    
        




