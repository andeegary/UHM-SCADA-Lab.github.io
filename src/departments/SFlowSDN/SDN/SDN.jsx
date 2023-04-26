import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LegacyControllerResearch from './LegacyControllerResearch';
import CurrentController from './CurrentController';

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
    </ul>
    <Tabs defaultActiveKey="currentController">
      <Tab eventKey="currentController" title="Current SDN Controller" className="py-4">
        <CurrentController />
      </Tab>
      <Tab eventKey="legacyControllerResearch" title="Legacy Controller Research" className="py-4">
        <LegacyControllerResearch />
      </Tab>
    </Tabs>
  </Container>
);

export default SDN;
