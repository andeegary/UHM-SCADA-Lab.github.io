import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import Overview from './Overview';
import Inventory from './Inventory';
import PiBringUp from './PiBringUp';
import MultiHoming from './MultiHoming';
import Miscellaneous from './Miscellaneous';
import WindowsServer from './WindowsServer';
import GitHubTutorial from './GitHubTutorial';
import Legacy from './Legacy';

const SystemAdmin = () => (
  <Container className="py-3">
    <h1>Linux System Admin</h1>
    <Tabs defaultActiveKey="overview">
      <Tab eventKey="overview" title="Overview" className="py-4">
        <Overview />
      </Tab>
      <Tab eventKey="inventory" title="Raspberry Pi Inventory" className="py-4">
        <Inventory />
      </Tab>
      <Tab eventKey="bringUp" title="Pi Bring Up" className="py-4">
        <PiBringUp />
      </Tab>
      <Tab eventKey="multiHoming" title="MultiHoming" className="py-4">
        <MultiHoming />
      </Tab>
      <Tab eventKey="WindowsServer" title="Windows Server" className="py-4">
        <WindowsServer />
      </Tab>
      <Tab eventKey="GitHubTutorial" title="GitHub Tutorial" className="py-4">
        <GitHubTutorial />
      </Tab>
      <Tab eventKey="Miscellaneous" title="Miscellaneous" className="py-4">
        <Miscellaneous />
      </Tab>
      <Tab eventKey="Legacy" title="Legacy" className="py-4">
        <Legacy />
      </Tab>
    </Tabs>
  </Container>
);

export default SystemAdmin;
