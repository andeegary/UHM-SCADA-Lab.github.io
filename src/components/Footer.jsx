import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Github, HouseFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

/* The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="py-3 mt-auto bg-light">
    <Container>
      <Row>
        <Col>
          <Link className="pe-3" to="https://manoa.hawaii.edu/">
            <img src="/images/Logos/UHM_Seal.png" alt="UHM Seal" style={{ maxWidth: '100px' }} />
          </Link>
          <Link to="https://ee.hawaii.edu/home/">
            <img src="/images/Logos/COE_Seal.svg" alt="COE Seal" style={{ maxWidth: '100px' }} />
          </Link>
        </Col>
        <Col className="text-white">
          University of Hawaiʻi at Mānoa <br />
          2500 Campus Road <br />
          Honolulu, HI 96822 <br />
          (808) 956-8111
        </Col>
        <Col className="text-white">
          SCADA Lab 2023 <hr />
          <Link className="footer-link" to="https://uhm-scada-lab.github.io/"><HouseFill /></Link>
          <Link className="footer-link" to="https://github.com/UHM-SCADA-Lab/"><Github /></Link>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
