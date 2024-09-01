import os, os.path
from pathlib import Path
from nornir import InitNornir
from nornir.core.filter import F
from netmiko import ConnectHandler
from nornir.core.inventory import ConnectionOptions

# Set the path to the Nornir config file
NORNIR_CONFIG_FILE = f"{Path(__file__).parent.parent}/inventory/config_netbox.yaml"

def nornir_setup():
    # Initialize Nornir
    nr = InitNornir(config_file=NORNIR_CONFIG_FILE, 
    #runner={"plugin": "serial"}
    runner={"plugin": "threaded", "options": {"num_workers": 60}}
    )

    # Set the username and password using the environment variables
    nr.inventory.defaults.username = "ADMMohanad_Alshawi"
    nr.inventory.defaults.password = "h3Su9FJqid>KBv0="
    nr.inventory.defaults.connection_options['netmiko'] = ConnectionOptions(
        extras= 
        {"fast_cli": False, 
        "conn_timeout": 600, 
        "auth_timeout": 600,
        "banner_timeout": 600,
        "secret":"h3Su9FJqid>KBv0="}
        )  


    #Site filter for switch name

    # Site Filter
    site_filter = nr.filter(F(name__any=['USRRX02-CC-010A-SW01','USRRX02-CC-010A-SW02','USRRX02-CC-010A-SW03','USRRX02-CC-010A-SW04','USRRX02-CC-010B-SW01','USRRX02-CC-010B-SW02','USRRX02-CC-010B-SW03','USRRX02-CC-010B-SW04','USRRX02-CC-010B-SW05','USRRX02-CC-010B-SW06','USRRX02-CC-010B-SW07','USRRX02-CC-010B-SW08','USRRX02-CC-010B-SW09','USRRX02-CC-010B-SW10','USRRX02-CC-010B-SW11','USRRX02-CC-010B-SW12','USRRX02-CC-010B-SW13','USRRX02-CC-010B-SW14','USRRX02-CC-010B-SW15','USRRX02-CC-010B-SW16','USRRX02-CC-010B-SW17','USRRX02-CC-010B-SW18','USRRX02-CC-010B-SW19','USRRX02-CC-010B-SW20','USRRX02-CC-010B-SW21','USRRX02-CC-010B-SW22','USRRX02-CC-010B-SW23','USRRX02-CC-010B-SW24','USRRX02-CC-010B-SW25','USRRX02-CC-010B-SW26','USRRX02-CC-010B-SW27','USRRX02-CC-010B-SW28','USRRX02-CC-010B-SW29','USRRX02-CC-020G-SW01','USRRX02-CC-020G-SW02','USRRX02-CC-020G-SW03','USRRX02-CC-020G-SW04','USRRX02-CC-020G-SW05','USRRX02-CC-020G-SW06','USRRX02-CC-020G-SW07','USRRX02-CC-020G-SW08','USRRX02-CC-020G-SW09','USRRX02-CC-020G-SW10','USRRX02-CC-020G-SW11','USRRX02-CC-020G-SW12','USRRX02-CC-020G-SW13','USRRX02-CC-020G-SW14','USRRX02-CC-020G-SW15','USRRX02-CC-020G-SW16','USRRX02-CC-020G-SW17','USRRX02-CC-020G-SW18','USRRX02-CC-020G-SW19','USRRX02-CC-020G-SW20','USRRX02-CC-020G-SW21','USRRX02-CC-020G-SW22','USRRX2W-CC-030R-SW01','USRRX2W-CC-030R-SW02','USRRX2W-CC-030R-SW03','USRRX2W-CC-030R-SW04','USRRX2W-CC-030R-SW05','USRRX2W-CC-030R-SW06','USRRX2W-CC-030R-SW07','USRRX2W-CC-030R-SW08','USRRX2W-CC-030R-SW09','USRRX2W-CC-030R-SW10','USRRX2W-CC-030R-SW11','USRRX2W-CC-030R-SW12','USRRX2W-CC-030R-SW13','USRRX2W-CC-030R-SW14','USRRX2W-CC-030R-SW15','USRRX2W-CC-030R-SW16','USRRX2W-CC-030R-SW17','USRRX2W-CC-030R-SW18','USRRX2W-CC-030R-SW19','USRRX2W-CC-030R-SW20','USRRX2W-CC-030R-SW21','USRRX2W-CC-030R-SW22']))
    
    return site_filter # If you are not using filter, use: return nr

    




