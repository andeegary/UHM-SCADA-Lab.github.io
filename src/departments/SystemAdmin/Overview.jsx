import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const Overview = () => (
  <span>
    <h3>Welcome</h3>
    <p>The System Administration department is responsible for the upkeep, configuration, and maintenance of Raspberry Pis and Servers. We are also responsible for assisting other departments in troubleshooting and rolling out patches to the Raspberry Pis.</p>
    <Row>
      <Col>
        <h3>Useful and Important Information</h3>
        <ul>
          <li>IP addresses ending in 100-199 are assigned by the router(DHCP)</li>
          <li>VLAN&apos;s and their IP addresses</li>
          <ul>
            <li>VLAN 1 = 10.1.1.x</li>
            <li>VLAN 2 = 10.1.88.x</li>
            <li>VLAN 3 = 10.1.44.x</li>
            <li>VLAN 4 = 10.1.66.x</li>
          </ul>
          <li>Description of Pi</li>
          <ul>
            <li>Model: Raspberry Pi 3 Model B v1.2</li>
            <li>OS: Raspian GNU/Linux 11 (bullseye)</li>
            <li>IP Range: 10.1.1.100 to 10.1.1.199</li>
          </ul>
          <li>Document Everything!</li>
        </ul>
      </Col>
      <Col>
        <h3>Current Tasks</h3>
        <ul>
          <li>Bring up servers</li>
          <ul>
            <li>Need to figure out where we left off</li>
            <li>For DHCP, each VLAN will need a server</li>
            <ul>
              <li>This is what was being worked on at the end of last semester, subject to change</li>
              <li>VLAN 1 is from the WiFi Router</li>
              <li>VLAN 2 is from the &apos;Servers&apos; pi (not fully sure)</li>
              <li>VLAN 3 is from the &apos;QTpi-4&apos; pi (from SCADA_Switch Ports/IPs/VLANs spreadsheet, I believe it was talking to &apos;Servers&apos; pi aswell)</li>
            </ul>
          </ul>
        </ul>
      </Col>
    </Row>
    <h3>Useful Commands and Resources</h3>
    <ul>
      <li>Note: Commands prefixed with # require root access, and commands prefixed with $ do not require root access.</li>
      <li>$ sudo bash: gets root access</li>
      <li># sudo bash: stacks a new instance of bash. When you # exit will jump back to previous instance</li>
      <li>$ sudo shutdown -r 0: shutdown then reboots.</li>
      <li>$ sudo shutdown -h 0: halts all processes and shuts down.</li>
      <li>$ cat /path/to/file: prints file contents to console.</li>
      <li>$ ifconfig : prints out network interfaces. (IPs assigned to PI, VLAN membership, MAC address, etc.)</li>
      <li>$ arp -a: prints out devices on network using ARP (Address resolution protocol).</li>
      <li>$ vim /path/to/file: edits file using Vim, a console-based text editor.</li>
      <ul>
        <li>$ vimtutor: program that teaches the basics of how to use Vim.</li>
      </ul>
      <li>$ function &gt; textfile.txt stores function&apos;s console output to a textfile textfile.txt</li>
      <li>
        <Link to="https://www.raspberrypi.com/">Raspberry Pi Homepage</Link>
      </li>
      <li>
        <Link to="https://www.raspberrypi.com/documentation/">Raspberry Pi Documentation</Link>
      </li>
    </ul>
  </span>
);

export default Overview;
