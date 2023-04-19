import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import ZeroTrust from './ZeroTrust';

const MLCurriculum = () => (
  <Container className="py-3">
    <h1>Machine Learning Curriculum</h1>
    <h2>Overall Goal</h2>
    <p>
      Very vaguely, we want to use some machine learning technique to interact with our lab&apos;s SDN (Software Defined Networking) controller to allow or deny network traffic flows.<br />
      <br />
      This software defined network is implemented through a protocol called Openflow, which can be used to create software-based network components, such as routers, firewalls, and load-balancers. We want to use SDN to create a firewall that doesn&apos;t use the traditional rules- or policy-based control, but rather some machine learning algorithm that can allow or deny network flow requests.<br />
      <br />
      These network flow requests come from a physical network switch, that has been configured to interact with an SDN controller, which, in our setup, is simply a Raspberry Pi running a Python script. <br />
    </p>
    <Tabs defaultActiveKey="zeroTrust">
      <Tab eventKey="zeroTrust" title="Zero Trust" className="py-4">
        <ZeroTrust />
      </Tab>
    </Tabs>
  </Container>
);

export default MLCurriculum;
