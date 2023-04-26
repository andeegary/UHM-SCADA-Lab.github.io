import React from 'react';
import { Container, Tab, Table, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SDNSetup from './SDNSetup';
import RYUNotes from './RYUNotes';
import LegacyControllerResearch from './LegacyControllerResearch';

const SDN = () => (
  <Container className="py-3">
    <h2>SDN</h2>
    <h4>Overview</h4>
    <p>An SDN is a <Link to="https://www.youtube.com/watch?v=Z5Gi2Bpd82M">Software Defined Network</Link>. An SDN Controller is how we dictate how it behaves.</p>
    <h4 className="pt-4">Helpful Links</h4>
    <ul>
      <li><Link to="https://en.wikipedia.org/wiki/OpenFlow">Openflow Explanation</Link></li>
      <li><Link to="https://en.wikipedia.org/wiki/Software-defined_networking">SDN Explanation</Link></li>
      <li><Link to="https://opennetworking.org/">Open Networking Explanation</Link></li>
      <li><Link to="https://en.wikipedia.org/wiki/List_of_SDN_controller_software">List of SDN Platforms</Link></li>
      <li><SDNSetup /></li>
    </ul>
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
          <th>Notes</th>
          <th>Static IP Address</th>
          <th>Assigned To</th>
          <th>Secure (SSH) Control Channel</th>
          <th>Web-based UI</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link to="https://ryu-sdn.org/sdn_sflow.html">RYU Controller</Link></td>
          <td>Active - Release 4.34</td>
          <td>Ubuntu (16.04 LTS or later)</td>
          <td>N/A</td>
          <td>Apache 2.0</td>
          <td>Python</td>
          <td><Link to="https://github.com/faucetsdn/ryu">Download</Link></td>
          <td><RYUNotes /></td>
          <td>Static IP Address 10.1.88.3</td>
          <td>Eliya/John</td>
          <td>No</td>
          <td>Read only (cannot write)</td>
        </tr>
      </tbody>
    </Table>
    <Tabs defaultActiveKey="legacyControllerResearch">
      <Tab eventKey="legacyControllerResearch" title="Legacy Controller Research" className="py-4">
        <LegacyControllerResearch />
      </Tab>
    </Tabs>
  </Container>
);

export default SDN;
