import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SDNResources = () => (
  <Container className="py-3">
    <h2>SDN Resources</h2>
    <h4 className="pt-4">Helpful Links</h4>
    <ul>
      <li><Link to="https://en.wikipedia.org/wiki/OpenFlow">Openflow Explanation</Link></li>
      <li><Link to="https://en.wikipedia.org/wiki/Software-defined_networking">SDN Explanation</Link></li>
      <li><Link to="https://opennetworking.org/">Open Networking Explanation</Link></li>
      <li><Link to="https://en.wikipedia.org/wiki/List_of_SDN_controller_software">List of SDN Platforms</Link></li>
    </ul>
  </Container>
);

export default SDNResources;
