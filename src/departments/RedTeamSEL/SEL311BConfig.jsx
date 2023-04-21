import React from 'react';
import { Col, Figure, Row } from 'react-bootstrap';

const SEL311BConfig = () => (
  <span>
    <h3>SEL-311B Configuration</h3>
    <Figure>
      <Figure.Image style={{ maxWidth: '600px' }} src="/images/RedTeamSEL/SEL311BConfig.png" alt="SEL 311B Configuration" />
      <Figure.Caption className="text-center">11/2/21 Version Info</Figure.Caption>
    </Figure>
    <h3>Access Information</h3>
    <p>The 311B can be accessed using via Serial Port F using an RS-232 cable. Using a terminal source emulator such as PuTTY or the AcSELerator QuickSet application on the lab computer.</p>
    <ol>
      <li>Connect the 311B via serial port F to a terminal</li>
      <img src="/images/RedTeamSEL/serialPortF.png" alt="Serial Port F" style={{ maxWidth: '800px' }} />
      <li>Open Device Manager and identify what port is used for the device.</li>
      <img src="/images/RedTeamSEL/deviceManager.png" alt="Device Manager" style={{ maxWidth: '500px' }} />
      <li>Open PuTTY or the AcSELerator QuickSet app.</li>
      <img src="/images/RedTeamSEL/PuTTY.png" alt="PuTTY" style={{ maxWidth: '600px' }} />
      <li>Once you establish a connection you will see a &apos;=&apos;.</li>
      <img src="/images/RedTeamSEL/defaultPasswords.png" alt="Default Password" style={{ maxWidth: '500px' }} />
      <li>Enter &apos;ACC&apos;. Once entered you will be prompted for a password, in which you will enter &apos;OTTER&apos; to gain level one access</li>
      <ul>
        <li>Note: When you type commands/passwords, make sure to spell them properly (backspace doesn&apos;t work).</li>
      </ul>
      <li>To gain level two access type in &apos;2ACC&apos; then use the password &apos;TAIL&apos;.</li>
    </ol>
    <h3>AcSELerator</h3>
    <ul>
      <li>For the acSELerator app, Set communication parameters to serial, 2400 baud rate, 8 data-bits, 1 stop-bit</li>
      <Row className="align-items-center">
        <Col lg={8}>
          <img src="/images/RedTeamSEL/AcSELeratorMenu.png" alt="AcSELerator Menu" style={{ maxWidth: '750px' }} />
        </Col>
        <Col lg={4}>
          <img src="/images/RedTeamSEL/AcSELeratorParameters.png" alt="AcSELerator Parameters" style={{ maxWidth: '300px' }} />
        </Col>
      </Row>
      <li>Once you establish a connection you will see a &apos;=&apos;.</li>
      <li>Enter &apos;ACC&apos;. Once entered you will be prompted for a password, in which you will enter &apos;OTTER&apos; to gain level one access</li>
      <li>To gain level two access type in &apos;2ACC&apos; then use the password &apos;TAIL&apos;.</li>
      <img src="/images/RedTeamSEL/AcSELeratorLogin.png" alt="AcSELerator Login" style={{ maxWidth: '600px' }} />

    </ul>
    <h3>LED Circuit</h3>
    <Figure>
      <Figure.Image style={{ maxWidth: '800px' }} src="/images/RedTeamSEL/circuitDiagram.png" alt="LED Circuit Diagram" />
      <Figure.Caption className="text-center">Circuit Diagram</Figure.Caption>
    </Figure>
    <Figure>
      <Figure.Image style={{ maxWidth: '800px' }} src="/images/RedTeamSEL/circuitSimulation.png" alt="LED Circuit Simulation" />
      <Figure.Caption className="text-center">
        Circuit in Lab <br />
        When the LED is on, using the PUL OUT107 5 command turns it off for 5 seconds.
      </Figure.Caption>
    </Figure>
    <h3>Pulse LED</h3>
    <ul>
      <li>Make sure machine and LED circuit are plugged in/turned on.</li>
      <li>The pushbuttons on the front-panel have dual functions (primary/secondary). After a primary function is selected (first row), the pushbuttons revert to operating on their secondary function (second row).</li>
    </ul>
    <ol>
      <li>The corresponding front-pane pushbutton for the PUL command is the CNTRL button, which we have labeled &quot;PULSE&quot;. Press the PULSE button.</li>
      <li>Press SELECT.</li>
      <img src="/images/RedTeamSEL/manualPulse1.png" alt="Manual Pulse 1" style={{ maxWidth: '500px' }} />
      <li>If you are prompted for a password, use the left/right arrow keys to navigate which letter you want to change, and use the up/down arrow keys to navigate through the alphabet to select the letter you want. The password is &quot;EDITH_&quot; (make sure to change the last letter to a space, which comes before &apos;A&apos;). Press SELECT when you are ready to enter the password.</li>
      <ul>
        <li>Note: the password can have upper and lowercase letters, &apos;-&apos;, &apos;.&apos;, numbers 0-9, and a space. According to the manual, the default front panel timeout (FP_TO) is set to 15 min.</li>
        <img src="/images/RedTeamSEL/manualPulse2.png" alt="Manual Pulse 2" style={{ maxWidth: '500px' }} />
      </ul>
      <li>After you log in, use the up/down arrow keys to navigate to which output you want to pulse.</li>
      <li>Press SELECT</li>
      <img src="/images/RedTeamSEL/manualPulse3.png" alt="Manual Pulse 3" style={{ maxWidth: '500px' }} />
      <li>Use the right/left arrow keys to select &quot;Yes&quot;. Press SELECT</li>
      <ul>
        <li>Note: Output contacts are pulsed for only 1 second from the front panel.</li>
        <img src="/images/RedTeamSEL/manualPulse4.png" alt="Manual Pulse 4" style={{ maxWidth: '500px' }} />
      </ul>
    </ol>
  </span>
);

export default SEL311BConfig;
