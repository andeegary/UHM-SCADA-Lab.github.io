import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import ZeroTrust from './ZeroTrust';

const MLCurriculum = () => (
  <Container className="py-3">
    <h1>Machine Learning Curriculum</h1>
    <h2>Current Tasks</h2>
    <p>
      None as of 9/8<br />
      John needs to get his act together and start working on this...
    </p>
    <Tabs defaultActiveKey="zeroTrust">
      <Tab eventKey="zeroTrust" title="Zero Trust" className="py-4">
        <ZeroTrust />
      </Tab>
    </Tabs>
  </Container>
);

export default MLCurriculum;
