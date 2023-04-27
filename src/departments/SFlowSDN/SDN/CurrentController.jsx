import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CurrentController = () => (
  <Container className="py-3">
    <h3>Current SDN Controller</h3>
    <p>We are currently using the OS-Ken SDN framework, which is a maintained fork of our previously used RYU (pronounced &quot;ree-yooh&quot;) SDN framework. The two frameworks haven&apos;t diverged much, so much so that programs using either frameworks work nearly interchangeably, save for some need to replace &quot;RYU&quot; with &quot;OS-Ken&quot;.</p>
    <h4 className="pt-4">Currently Using</h4>
    <Table striped bordered responsive="xl">
      <thead>
        <tr>
          <th>Controller Name</th>
          <th>Status</th>
          <th>OS/Platform</th>
          <th>Derived From</th>
          <th>License</th>
          <th>Developed In</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link to="https://opendev.org/openstack/os-ken">os-ken</Link></td>
          <td>Active</td>
          <td>Ubuntu (16.04 LTS or later)</td>
          <td>N/A</td>
          <td>Apache 2.0</td>
          <td>Python</td>
          <td><Link to="https://github.com/openstack/os-ken">Download</Link></td>
        </tr>
      </tbody>
    </Table>
    <p>RYU has some example programs located on <Link to="https://github.com/faucetsdn/ryu/tree/master/ryu/app">GitHub</Link>, which are great stubs for building a custom controller of our own. We initially based our programs on <Link to="https://github.com/faucetsdn/ryu/blob/master/ryu/app/simple_switch_13.py">simple_switch_13.py</Link>, which needs some slight modification to work with our physical switches in the lab. These RYU programs can work with os-ken, you will just need to rename imported methods from &quot;RYU&quot; to &quot;OS-Ken&quot;. See TODO: create new tab with changes from a base program</p>
    <p>OS-Ken has a fair amount of documentation, with links to the home page and frequently visited pages below:</p>
    <ul>
      <li><Link to="https://docs.openstack.org/os-ken/latest/#top">OS-Ken Documentation</Link></li>
      <li><Link to="https://docs.openstack.org/os-ken/latest/archive.html">Archived Contents (RYU&apos;s documentation)</Link></li>
      <li><Link to="https://docs.openstack.org/os-ken/latest/ofproto_v1_3_ref.html">OpenFlow v1.3 Messages and Structures</Link></li>
      <li><Link to="https://docs.openstack.org/os-ken/latest/library_packet_ref.html">Packet library API Reference</Link></li>
    </ul>
  </Container>
);

export default CurrentController;
