import React from 'react';

const WindowsServer = () => (
  <span>
    <h3>Windows Server</h3>
    <p>Windows Server 2022 is an Operating System we use to provide a number of services to our client devices. We decided to use this operating system as a way to centralize the configuration of the many Raspberry Pis we use in the lab. Some other advantages includes being able to create and use shared folders, easily create and manage users and groups, allow remote access to the network, and allow backups of client and server files.</p>
    <p>The services that we have currently implemented (as of May 2023) includes DHCP, DNS, and Windows Time. Other services we plant implement includes Active Directory and Single Sign-On</p>
    <h3><u>Dynamic Host Configuration Protocol (DHCP) Service</u></h3>
    <p>DHCP is a network management protocol used to automatically assign an IP address to clients in a given network. The main advantage of the DHCP service is that it offers a way to centrally manage the IP addresses in the network. This makes configuring new devices easier and makes IP address allocation more flexible. We are also able to statically assign IP addresses to devices with the use of their MAC address. This is ideal in the case where we would want reliable access to a device. For example, it would be ideal to statically assign an IP address to a database Raspberry PI, such that another device (i.e. the Machine Learning PI) would have a consistent and reliable stream of data. In the case of a power outage and restoration, the DHCP server is able to assign the same IP addresses to the devices and quickly restore the flow of data without much intervention. Additionally, we are able to edit the DHCP service configuration for each VLAN to choose which Windows services (i.e. DNS, W32Time, etc.) we would like to implement for a specific VLAN.</p>
    <h4>How to set up static ip addresses (DHCP)</h4>
    <h5>Note: DHCP is currently enabled for only VLAN 3 and VLAN 4 (as of Apr 2023). Refer to the network map for more information.</h5>
    <ol>
      <li>Open Server Manager. </li>
      <li>On the top right under &quot;Tools&quot;, click on DHCP.</li>
      <li>On the left window, navigate to: win-surf.scada.lab &gt; IPv4</li>
      <li>Double click the scope you wish to set up static IP address (i.e. 10.1.44.0).</li>
      <li>Double click on &quot;Reservations&quot;.</li>
      <li>On the rightmost window, click on &quot;More Actions&quot; and select &quot;New Reservation&quot;.</li>
      <li>Enter the hostname of the device under the &quot;Reservation name&quot; field.</li>
      <li>Enter the desired static ip address of the device you wish to add.</li>
      <li>Enter the MAC address of the device to be added (i.e. 00-B0-D0-63-C2-26).</li>
      <li>Add appropriate description of the device (If applicable).</li>
      <li>Choose &quot;DHCP&quot; under &quot;supported types&quot;.</li>
      <li>When finished, click on the &quot;Add&quot; button.</li>
      <li>Make sure to update the &quot;SCADA_Switch Ports,IPs,VLANs&quot; spreadsheet.</li>
    </ol>
    <h3><u>Domain Name System (DNS) Service</u></h3>
    <p>DNS is a naming system that translates IP addresses into domain names (Reverse Lookup) and domain names into IP addresses (Forward Lookup). Because web browsers are dependent on the use of IP addresses to access the internet, it’s difficult for most people to keep track of tens to hundreds of different IP addresses that would correspond to the websites they may visit daily (i.e. typing 142.250.97.106 into the search bar instead of google.com). DNS aims to alleviate this by making it more user-friendly by having people remember the names of the websites (i.e. manoa.hawaii) and ending it with a top-level domain (i.e. .edu) instead of remembering the sequences of numbers. By using the DNS service on the Windows server, we are able to implement the same concept to the devices in our network. This means that instead of remembering the IP address of every Raspberry PI in our SCADA network, we are able to instead create a domain name that it’s more user-friendly.</p>
    <h4>How to set up DNS Lookup</h4>
    <h5>On windows directory side:</h5>
    <ol>
      <li> Open Server Manager.</li>
      <li>On the top right under &quot;Tools&quot;, click on DNS.</li>
      <li>On the left panel, right click on  WIN-SURF &gt; Forward Lookup Zones &gt; SCADA.lab</li>
      <li> Click on &quot;New Host (A or AAAA)...&quot;</li>
      <li>Under the &quot;Name&quot; parameter, enter the hostname of the device you wish to add.</li>
      <li>Under &quot;IP address&quot;, enter the IP address of the device you wish to add. </li>
      <li>Check the &quot;Create associated (PTR) record&quot;.</li>
      <li>When you’re done, click on &quot;Add Host&quot;.</li>
    </ol>
    <h5>On raspberry pi side:</h5>
    <ol>
      <li>Setting up a raspberry pi to use the SCADA.lab DNS server.</li>
      <li>In the pi terminal enter the command: sudo nano /etc/dhcpcd.conf</li>
      <li>This opens the nano text editor.  Go to the bottom of the file and add the line:</li>
      <li>static domain_name_servers=10.1.1.8</li>
      <li>Exit and save the file by pressing ctrl + x, then y, then enter.</li>
      <li>Restart the service with the command:</li>
      <li>sudo service dhcpcd restart</li>
      <li>The pi will use the DNS server now.</li>
    </ol>
    <h3><u>Windows Time Service</u></h3>
    <p>Windows Time Service (W32Time) is a service that allows the synchronization of time and date for all computers running the Active Directory Domain Services (AD DS). Synchronizing time across all devices in a SCADA network is important, for logging and automation purposes. For example, if a catastrophic event occurs within the network, it is important for all the device’s clock to be synchronized to a single time reference as to have a general idea of the sequence of events that might’ve led to this event, and understand its aftermaths. Additionally, a device in the network running an automation script must definitely have its time synchronized as to not create any problems in the network.</p>
    <h4>Getting Time from Server through timedatctl</h4>
    <h5>Warning: Don&apos;t use ntp since it&apos;s outdated</h5>
    <ol>
      <li>Open a Terminal window on your Raspberry Pi.</li>
      <li>Type: &quot;sudo nano /etc/systemd/timesyncd.conf&quot;</li>
      <li>In the &quot;systemd-timesyncd.conf&quot; file, uncomment the &quot;NTP&quot; line by removing the &quot;#&quot; character at the beginning of the line.</li>
      <li>Replace the default NTP server address with the IP address or hostname of your Windows time server (10.1.1.8).</li>
      <ol>
        <li>For example: NTP= win-surf.scada.lab</li>
      </ol>
      <li>Save the changes to the file and exit the editor.</li>
      <li>Type: &quot;sudo systemctl restart systemd-timesyncd.service&quot;</li>
      <li>To verify it’s working, type: &quot;sudo systemctl status systemd-timesyncd.service&quot;</li>
      <ol>
        <li>If working, it should show active (running) in green.</li>
      </ol>
      <li>For additional verification, type: &quot;timedatectl status&quot;</li>
    </ol>
  </span>
);

export default WindowsServer;
