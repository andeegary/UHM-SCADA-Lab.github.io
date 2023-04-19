import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import ZeroTrust from './ZeroTrust';
import OverallGoal from './OverallGoal';
import MLResources from './MLResources';

const MLCurriculum = () => (
  <Container className="py-3">
    <h1>Machine Learning Curriculum</h1>
    <Tabs defaultActiveKey="overallGoal">
      <Tab eventKey="overallGoal" title="Overall Goal" className="py-4">
        <OverallGoal />
      </Tab>
      <Tab eventKey="mlResources" title="Resources" className="py-4">
        <MLResources />
      </Tab>
      <Tab eventKey="zeroTrust" title="Zero Trust" className="py-4">
        <ZeroTrust />
      </Tab>
    </Tabs>
  </Container>
);

export default MLCurriculum;
