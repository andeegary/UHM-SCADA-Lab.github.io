import React from 'react';

const WindowsServer = () => (
  <span>
    <h3>Windows Server</h3>
    <p>Windows Server 2022 is an Operating System we use to provide a number of services to our client devices. We decided to use this operating system as a way to centralize the configuration of the many Raspberry Pis we use in the lab. Some other advantages includes being able to create and use shared folders, easily create and manage users and groups, allow remote access to the network, and allow backups of client and server files.</p>
    <p>The services that we have currently implemented (as of May 2023) includes DHCP, DNS, and Windows Time. Other services we plant implement includes Active Directory and Single Sign-On</p>
    <h3><u>Dynamic Host Configuration Protocol (DHCP) Service</u></h3>
    <p>DHCP is a network management protocol used to automatically assign an IP address to clients in a given network. The main advantage of this is to eliminate the need to manually assign a static IP address for every device on the network. Additionally, we are able to configure each scope to choose which services (i.e. DNS, W32Time, etc.) we would like to implement for that network (i.e. VLAN 3). </p>
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
    <p>DNS is a naming system that translates IP addresses into domain names (Reverse Lookup) and domain names into IP addresses (Forward Lookup). This is important since web browsers use IP addresses to access the internet. Since it’s difficult for humans to keep track of IP addresses to every website they might visit (i.e. 142.250.97.106 for google.com), DNS allows users to input the domain name and makes the translation to IP address for the web browser to use.</p>
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
