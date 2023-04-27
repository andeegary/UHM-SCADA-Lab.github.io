import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import LegacyControllerResearch from './LegacyControllerResearch';
import CurrentController from './CurrentController';
import LabConfiguration from './LabConfiguration';
import SDNOverview from './SDNOverview';
import SDNResources from './SDNResources';

const SDN = () => (
  <Container className="py-3">
    <Tabs defaultActiveKey="overview">
      <Tab eventKey="overview" title="SDN Overview" className="py-4">
        <SDNOverview />
      </Tab>
      <Tab eventKey="currentController" title="Current SDN Controller" className="py-4">
        <CurrentController />
      </Tab>
      <Tab eventKey="labConfiguartion" title="Lab Configuration" className="py-4">
        <LabConfiguration />
      </Tab>
      <Tab eventKey="legacyControllerResearch" title="Legacy Controller Research" className="py-4">
        <LegacyControllerResearch />
      </Tab>
      <Tab eventKey="resources" title="SDN Resources" className="py-4">
        <SDNResources />
      </Tab>
    </Tabs>
  </Container>
);

export default SDN;
