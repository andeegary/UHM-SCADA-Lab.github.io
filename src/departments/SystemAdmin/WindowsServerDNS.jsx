import React from 'react';
import { Link } from 'react-router-dom';

const WindowsServerDNS = () => (
  <span>
    <h3><u>Domain Name System (DNS) Service</u></h3>
    <p>DNS is a naming system that translates IP addresses into domain names (Reverse Lookup) and domain names into IP addresses (Forward Lookup). Because web browsers are dependent on the use of IP addresses to access the internet, it’s difficult for most people to keep track of tens to hundreds of different IP addresses that would correspond to the websites they may visit daily (i.e. typing 142.250.97.106 into the search bar instead of google.com). DNS aims to alleviate this by making it more user-friendly by having people remember the names of the websites (i.e. manoa.hawaii) and ending it with a top-level domain (i.e. .edu) instead of remembering the sequences of numbers. By using the DNS service on the Windows server, we are able to implement the same concept to the devices in our network. This means that instead of remembering the IP address of every Raspberry PI in our SCADA network, we are able to instead create a domain name that it’s more user-friendly.</p>
    <hr />
    <h4>How to manually set up DNS Lookup</h4>
    <p>DHCP should automatically set up a corresponding DHCP lookup for VLAN 3 and VLAN 4. Manual setup is needed for VLAN 1 and 2.</p>
    <h5>On Windows Server:</h5>
    <ol>
      <li>Open Server Manager.</li>
      <li>On the top right under &quot;Tools&quot;, click on DNS.</li>
      <img src="/images/SystemAdmin/WindowsServer_DNS_ManualLookup_WindowsServer_1.png" alt="Setting DNS Lookup on Windows Server step 1" style={{ maxWidth: '75%' }} />
      <li>On the left panel, right click on  WIN-SURF &gt; Forward Lookup Zones &gt; SCADA.lab</li>
      <li> Click on &quot;New Host (A or AAAA)...&quot;</li>
      <img src="/images/SystemAdmin/WindowsServer_DNS_ManualLookup_WindowsServer_2.png" alt="Setting DNS Lookup on Windows Server step 2-3" style={{ maxWidth: '75%' }} />
      <li>Under the &quot;Name&quot; parameter, enter the hostname of the device you wish to add.</li>
      <li>Under &quot;IP address&quot;, enter the IP address of the device you wish to add. </li>
      <li>Check the &quot;Create associated (PTR) record&quot;.</li>
      <li>When you’re done, click on &quot;Add Host&quot;.</li>
      <img src="/images/SystemAdmin/WindowsServer_DNS_ManualLookup_WindowsServer_3.png" alt="Setting DNS Lookup on Windows Server step 2-3" style={{ maxWidth: '25%' }} />
    </ol>
    <h5>On raspberry pi side:</h5>
    <ol>
      <li>In the pi terminal enter the command: sudo vi /etc/dhcpcd.conf</li>
      <img src="/images/SystemAdmin/WindowsServer_DNS_ManualLookup_PI_1.png" alt="Setting DNS Lookup on Windows Server step 1" style={{ maxWidth: '50%' }} />
      <li>This opens the vi text editor.  Go to the bottom of the file and add the line (change XX to the corresponding VLAN):</li>
      <li>static domain_name_servers=10.1.XX.8</li>
      <li>Exit and save the file (:x).</li>
      <img src="/images/SystemAdmin/WindowsServer_DNS_ManualLookup_PI_2.png" alt="Setting DNS Lookup on Windows Server step 2-4" style={{ maxWidth: '50%' }} />
      <li>Restart the service with the command:</li>
      <li>sudo service dhcpcd restart</li>
      <img src="/images/SystemAdmin/WindowsServer_DNS_ManualLookup_PI_3.png" alt="Setting DNS Lookup on Windows Server step 5-6" style={{ maxWidth: '50%' }} />
      <li>The pi will use the Windows server DNS service now.</li>
    </ol>
    <hr />
    <h4>DHCP Service Resources</h4>
    <ul>
      <li><Link to="https://learn.microsoft.com/en-us/windows-server/networking/dns/quickstart-install-configure-dns-server?tabs=gui"><h6>Installing and Configuring DNS</h6></Link></li>
    </ul>
  </span>
);

export default WindowsServerDNS;
