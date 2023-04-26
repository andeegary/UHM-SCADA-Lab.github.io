import React from 'react';
import { Col, Row } from 'react-bootstrap';

const OutputTesting = () => (
  <span>
    <h3>Output Testing</h3>
    <h5>Front Panel</h5>
    <ol>
      <li>Navigate to the Menu and enter &apos;LOCAL CONTROL&apos;</li>
      <img src="/images/RedTeamSEL/output1.png" alt="Output 1" style={{ maxWidth: '400px' }} />
      <li>Enter &apos;OUTPUT TESTING&apos;</li>
      <img src="/images/RedTeamSEL/output2.png" alt="Output 2" style={{ maxWidth: '400px' }} />
      <li>Select the Output terminal you wish to test. (Note: Polarity Dependent)</li>
      <img src="/images/RedTeamSEL/output3.png" alt="Output 3" style={{ maxWidth: '400px' }} />
      <li>Select &apos;yes&apos; to pulse the output (pulses for 1 second)</li>
      <li>Enter the Level 2 Access password (Default: TAIL)</li>
    </ol>
    <h5>Command Line</h5>
    <ol>
      <li>Enter the first access level using &apos;ACC&apos; (Default Password: OTTER)</li>
      <li>Enter the second access level using &apos;2AC&apos; (Default Password: TAIL)</li>
      <li>Enter &apos;PULSE OUT1XX #&apos; where XX corresponds to the specific output and # is the number of seconds to pulse the output for</li>
      <li>Enter &apos;Y&apos; to confirm</li>
      <Row className="align-items-center">
        <Col lg={6}>
          <img src="/images/RedTeamSEL/output4.png" alt="Output 4" style={{ maxWidth: '500px' }} />
        </Col>
        <Col lg={6}>
          <img src="/images/RedTeamSEL/output5.png" alt="Output 5" style={{ maxWidth: '500px' }} />
        </Col>
      </Row>
    </ol>
  </span>
);

export default OutputTesting;
