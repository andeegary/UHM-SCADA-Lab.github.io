import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const LogStash = () => (
  <Container className="py-3">
    <h1>Logstash</h1>
    <h4>Logstash Installation Procedures</h4>
    <ul>
      <p>Run the following commands to install Logstash (Full documentation from elastic is in the helpful links section)</p>
      <h6>Download and install the Public Signing Key</h6>
      <li>wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elastic-keyring.gpg</li>
      <p> </p>
      <h6>Install the apt-transport-https package on Debian</h6>
      <li>sudo apt-get install apt-transport-https</li>
      <p> </p>
      <h6>Save the repository definition to /etc/apt/sources.list.d/elastic-8.x.list</h6>
      <li>echo &quot;deb [signed-by=/usr/share/keyrings/elastic-keyring.gpg] https://artifacts.elastic.co/packages/8.x/apt stable main&quot; | sudo tee -a /etc/apt/sources.list.d/elastic-8.x.list
      </li>
      <p> </p>
      <h6>Install Logstash</h6>
      <li>sudo apt-get update && sudo apt-get install logstash
      </li>
    </ul>
    <h4>Logstash Useful Commands</h4>
    <ul>
      <h6>Start Logstash</h6>
      <p>sudo systemctl start logstash.service</p>
      <h6>Stop Logstash</h6>
      <p>sudo systemctl stop logstash.service</p>
      <h6>Check Logstash status</h6>
      <p>sudo systemctl status logstash.service</p>
    </ul>
    <h4>Logstash Useful Directories</h4>
    <ul>
      <h6>Config Files</h6>
      <p>/usr/share/logstash/bin</p>
      <h6>Logstash exe Files</h6>
      <p>/usr/share/logstash/bin</p>
      <h6>Logstash Logs</h6>
      <p>/var/log/logstash</p>
    </ul>
    <h4>Logstash Helpful Links</h4>
    <Row>
      <Col>
        <ul>
          <li><Link to="https://www.elastic.co/guide/en/logstash/current/installing-logstash.html">Installing Logstash</Link></li>
          <li><Link to="https://pypi.org/project/python-logstash/">Python logging handler for Logstash</Link></li>
          <li><Link to="https://www.youtube.com/watch?v=G2TUmPZ1slw">Logstash pipeline & input, output configurations (Video)</Link></li>
          <li><Link to="https://www.youtube.com/watch?v=wisXOgaTEU8">Real Time Python Log ingestion with Logstash & ELK | Demo (Video)</Link></li>
        </ul>
      </Col>
    </Row>
  </Container>
);

export default LogStash;
