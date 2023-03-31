import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Table } from 'react-bootstrap';

const HP292024G = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <span>
      <Link to="" onClick={handleShow}>HP 2920-24G</Link>

      <Offcanvas show={show} onHide={handleClose} style={{ maxWidth: '800px', width: '100%' }}>
        <Offcanvas.Header closeButton>
          <h1>HP 2920-24G</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>HP Network Switch</h3>
          <p>Product Summary: A 24-port network switch.</p>
          <img src="/images/Equipment/HP292024G.jpeg" alt="HP 2920-24G" style={{ maxWidth: '600px', width: '100%' }} />
          <h3>Device Links</h3>
          <ul>
            <li><a href="/pdfs/HP292024G-Admin_Guide.pdf">HP OpenFlow Administrator Guide</a></li>
            <li><a href="/WB_16_10_0019.swi">WB_16_10_0019.swi</a></li>
            <li><Link to="https://support.hpe.com/connect/s/product?ismnp=1&l5oid=5354494&cep=on&kmpmoid=1009060829&tab=All&manualsAndGuidesFilter=66000014%2C66000036">Troubleshooting Manuals</Link></li>
            <li><Link to="https://support.hpe.com/connect/s/product?ismnp=1&l5oid=5354494&cep=on&kmpmoid=1009060829&tab=All&manualsAndGuidesFilter=66000013%2C66000034">Setup/Install Manuals</Link></li>
            <li><Link to="https://support.hpe.com/connect/s/product?ismnp=1&l5oid=5354494&cep=on&kmpmoid=1009060829&tab=All&manualsAndGuidesFilter=66000015%2C66000035">Management/Operations Manuals</Link></li>
            <li><Link to="https://support.hpe.com/connect/s/product?ismnp=1&l5oid=5354494&cep=on&kmpmoid=1009060829&tab=All&manualsAndGuidesFilter=66000005">Overview/Compatibility Manuals</Link></li>
            <li><Link to="https://support.hpe.com/connect/s/product?ismnp=1&l5oid=5354494&cep=on&kmpmoid=1009060829&tab=All&manualsAndGuidesFilter=6600000">Specifications</Link></li>
            <li><Link to="https://support.hpe.com/connect/s/product?ismnp=1&l5oid=5354494&cep=on&kmpmoid=1009060829&tab=All&manualsAndGuidesFilter=66000010">FAQ</Link></li>
            <li><Link to="https://support.hpe.com/connect/s/product?ismnp=1&l5oid=5354494&cep=on&kmpmoid=1009060829&tab=All&manualsAndGuidesFilter=66000006%2C66000033%2C66000008%2C66000004%2C66000002">Reference Documentation</Link></li>
            <li><Link to="https://asp.arubanetworks.com/downloads;search=j9726a;fileTypes=SOFTWARE">Software Downloads</Link></li>
          </ul>
          <h3>OpenFlow</h3>
          <p>An OpenFlow controller is configured on the switch under the OpenFlow context. Some configuration is global and other configuration is associated with an instance.</p>
          <p>OpenFlow controller traffic cannot be “in-band” or transit on a VLAN managed by OpenFlow. It must transit on a VLAN not managed by OpenFlow. OpenFlow controller traffic and OpenFlow traffic can transit on the same port, as long as they use different VLANs.</p>
          <p>The VLAN chosen for OpenFlow controller traffic depends entirely on the IP address of the controller, and no specific configuration is needed. Thus the switch must have a proper IP configuration, and the controller address must be part of a subnet that is not on an OpenFlow VLAN.</p>
          <p>Up to three OpenFlow controllers control each OpenFlow instance and each generates OpenFlow commands and data flows between an OpenFlow switch and the controller.</p>
          <h3>Configuration</h3>
          <ul>
            <li><Link to="https://github.com/UHM-SCADA-Lab/Network/blob/main/LocalSwitchConfig.txt">HP 2920-24G Current Configuration (Local)</Link></li>
            <li><Link to="https://github.com/UHM-SCADA-Lab/Network/blob/main/RemoteSwitchConfig.txt">HP 2920-24G Current Configuration (Remote)</Link></li>
            <li><Link to="https://github.com/UHM-SCADA-Lab/Network/blob/main/DefaultConfig.txt">HP 2920-24G Default Configuration</Link> - This can be compared with the current configuration to identify changes from default
            </li>
          </ul>
          <h3>Useful Commands</h3>
          <ul>
            <h5>Configure</h5>
            <li># show running-config</li>
            <li># config</li>
            <li>(config) # menu</li>
          </ul>
          <ul>
            <h5>OpenFlow</h5>
            <li># show openflow</li>
            <li># show openflow controllers</li>
            <li># show openflow flow-table</li>
            <li># show openflow instance scada_lab</li>
            <li># show openflow instance scada-lab flow-table</li>
            <li># show openflow instance scada-lab flows</li>
            <li># openflow</li>
            <li>(openflow) # openflow enable</li>
            <li>(openflow) # openflow disable</li>
          </ul>
          <ul>
            <h5>sFlow</h5>
            <li># show sflow &lt;1-3&gt; destination</li>
            <li># show sflow &lt;1-3&gt; sampling-polling</li>
            <li># config</li>
            <li># (config) sflow &lt;1-3&gt; destination &lt;IP-ADDR&gt;</li>
            <li># (config) sflow &lt;1-3&gt; polling &lt;port&gt; &lt;polling-interval&gt;</li>
            <li># (config) sflow &lt;1-3&gt; sampling &lt;port&gt; &lt;sampling-interval&gt;</li>
          </ul>
          <h3>Configuration Changelog</h3>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Date</th>
                <th>Person</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3/1/2022</td>
                <td>Jessica Jones</td>
                <td>Unpacked switch and installed in cabinet</td>
              </tr>
              <tr>
                <td>3/1/2022</td>
                <td>Mark Nelson</td>
                <td>Reset switch configuration and updated firmware</td>
              </tr>
              <tr>
                <td>3/3/2022</td>
                <td>Mark Nelson</td>
                <td>Updated Wiki configuration</td>
              </tr>
              <tr>
                <td>9/82022</td>
                <td>Cameron Canda</td>
                <td>Updated firmware on local and remote switch</td>
              </tr>
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </span>
  );
};

export default HP292024G;
