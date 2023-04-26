import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RYUNotes from './RYUNotes';

const CurrentController = () => (
  <Container className="py-3">
    <h3>Current SDN Controller</h3>
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
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link to="https://opendev.org/openstack/os-ken">os-ken</Link></td>
          <td>Active - Release 4.34</td>
          <td>Ubuntu (16.04 LTS or later)</td>
          <td>N/A</td>
          <td>Apache 2.0</td>
          <td>Python</td>
          <td><Link to="https://github.com/openstack/os-ken">Download</Link></td>
          <td><RYUNotes /></td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default CurrentController;
