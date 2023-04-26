import React from 'react';
import { Link } from 'react-router-dom';

const Legacy = () => (
  <span>
    <h2>Legacy</h2>
    <p>This page contains documentation that is obsolete with the current configuration of our network.</p>
    <h2>DHCP</h2>
    <ul>
      <li>Useful commands:</li>
      <ul>
        <li>systemctl status isc-dhcp.server --lines 100: checks if DHCP server is running</li>
        <li>systemctl restart isc-dhcp.server.service: restart the DHCP server</li>
        <li>cat /var/lib/dhcp/dhcp.leases: prints out leases given by the DHCP server</li>
      </ul>
    </ul>
    <h3>Standing Up DHCP Server</h3>
    <ol>
      <li>In file /etc/default/isc-dhcp-server add interface that DHCP Server should serve requests on</li>
      <ul>
        <li>example: INTERFACES=&quot;eth0 eth 0.3&quot;</li>
      </ul>
      <li>Configure DHCP Server in the file /etc/dhcp/dhcpd.conf</li>
      <ul>
        <img src="/images/SystemAdmin/DHCPServer_dhcpd.png" alt="DHCP Server" style={{ width: '100%', maxWidth: '375px' }} />
      </ul>
      <li>
        <Link to="https://wiki.debian.org/DHCP_Server">Tutorial to Setup DHCP Server</Link>
      </li>
    </ol>
    <h3>DHCP Fixed Addressing</h3>
    <ul>
      <li>Prerequisites</li>
      <ul>
        <li>Must know Host&apos;s hostname, MAC Address, and the desired IP Address</li>
      </ul>
    </ul>
    <ol>
      <li>Add configuration in /etc/dhcp/dhcpd.conf (near the bottom)</li>
      <ul>
        <img src="/images/SystemAdmin/DHCPServer_fixedAddressing.png" alt="Fixed Addressing" style={{ width: '100%', maxWidth: '375px' }} />
      </ul>
    </ol>
    <h2>DNS (old)</h2>
    <ul>
      <li>Useful commands:</li>
      <ul>
        <li>sudo apt install bind9</li>
        <li>systemctl status isc-dhcp.server.service: checks if DHCP server is running</li>
        <li>systemctl status bind9: checks if bind9 is running</li>
        <li>systemctl reenable bind9: updates the symlink?</li>
        <li>systemctl restart bind9: restarts bind9</li>
        <li>named-checkzone scada.lab db.scada.lab: verifies the validity of zone files before resetting the configuration</li>
        <li>named-checkconf -z: verifies the syntax of the configuration files for Bind9</li>
        <li>dig @&lt;IP of DNS server&gt; &lt;target name&gt;: searches the DNS server specified and relays back lots of info. Optionally add a target name to get specific info on that domain.</li>
      </ul>
    </ul>
    <h3>Setting Up Zones</h3>
    <ol>
      <li>Add zone information to configuration file (Defining the zone)</li>
      <ul>
        <img src="/images/SystemAdmin/DNSServer_zoneConfig.png" alt="Zone Config" style={{ maxWidth: '375px' }} />
      </ul>
      <li>After saving the change, restart the service and run &apos;systemctl reload bind9&apos;</li>
      <li>Create db.&lt;zone name&gt; file</li>
      <ul>
        <img src="/images/SystemAdmin/DNSServer_zoneName.png" alt="Zone Name" style={{ maxWidth: '375px' }} />
        <p>note: The bottom of the file is the DNS records. The format of a record: hostname &lt;tab&gt; class &lt;tab&gt; DNS record type &lt;tab&gt; value</p>
      </ul>
      <li>Restart the rndc and run &apos;sudo rndc reload&apos;</li>
      <li>Check the DNS server is running properly</li>
      <li>
        <Link to="https://serverspace.io/support/help/bind9-as-a-primary-dns-server-on-ubuntu/">Tutorial to Configure Bind9 as Primary Server</Link>
      </li>
      <li>
        <Link to="https://wiki.debian.org/Bind9#Introduction">Tutorial on Bind9</Link>
      </li>
    </ol>
  </span>
);

export default Legacy;
