import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';

const SDNSetup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <span>
      <Link to="" onClick={handleShow}>SDN Setup</Link>

      <Offcanvas show={show} onHide={handleClose} style={{ maxWidth: '800px', width: '100%' }}>
        <Offcanvas.Header closeButton>
          <h1>SDN Setup</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Things You&apos;ll Need</h3>
          <ul>
            <li>Computer</li>
            <li>Micro SD Card</li>
            <li>Micro SD Card to USB Adapter</li>
            <li>Raspberry Pi</li>
          </ul>
          <h3 className="pt-4">Instructions</h3>
          <ol>
            <li>Download the <Link to="https://www.raspberrypi.com/software/">Imager</Link> for your Pi. Make sure you choose the appropriate one for your operating system.</li>
            <li>Install and run the application.</li>
            <li>Choose the Operating system based on the SDN controllers supported OS&apos;s</li>
            <li>Insert the micro SD into the micro SD to USB adapter and plug it into your computer.</li>
            <li>Select the storage micro SD as your storage device and select &quot;write&quot;.</li>
            <li>Once the SD card has been imaged, remove it from your pc and adapter and plug it into your PI. BE CAREFUL! IT WILL BE HOT! Give it a minute to cool down.</li>
            <li>Now you can boot up your pi and download the SDN directly to the pi.</li>
          </ol>
        </Offcanvas.Body>
      </Offcanvas>
    </span>
  );
};

export default SDNSetup;
