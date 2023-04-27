import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SDNOverview = () => (
  <Container className="py-3">
    <h2>SDN Overview</h2>
    <h4>What is SDN?</h4>
    <p>SDN, or Software Defined Networking, is simply a tool to manage networks. At it&apos;s core, all Software Defined Networking allows you to do is to create software that can control the forwarding happening inside a network switch. SDN has the capability for network administrators to create complex, software-based network management devices, such as routers, load balancers, and firewalls. The way that SDN is implemented on a network switch, is typically done through the use of OpenFlow, which is a communications protocol that enables interaction with the forwarding plane, the part of the switch which forwards packets to destinations [1].</p>
    <h4>Our Use of SDN</h4>
    <p>Without SDN or the enabling of OpenFlow, every time a network switch receives a packet, it will forward it to it&apos;s destination with little to no &quot;thinking&quot;. </p>
    <h4>References</h4>
    <p>[1] C. Craven, “What Is OpenFlow? Definition and How it Relates to SDN,” sdxcentral, Aug. 25, 2013. <Link to="https://www.sdxcentral.com/networking/sdn/definitions/what-the-definition-of-software-defined-networking-sdn/what-is-openflow/">https://www.sdxcentral.com/networking/sdn/definitions/what-the-definition-of-software-defined-networking-sdn/what-is-openflow/</Link> (accessed Apr. 26, 2023).</p>
  </Container>
);

export default SDNOverview;
