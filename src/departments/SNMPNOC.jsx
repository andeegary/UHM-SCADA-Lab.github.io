import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SNMPNOC = () => (
  <Container className="py-3">
    <h1>SNMP/NOC</h1>
    <p>The SNMP/NOC department is responsible for the realtime monitoring and management of the health and cybersecurity of the SCADA Lab network. Using SNMP, we can request monitored data from SNMP-enabled devices. If this data is considered concerning or even threatening, we can use the NOC Pi to display these errors/threats so that they may be dealt with.</p>
    {/* Screenshot of NEMS TV Dashboard */}
    <h3>SNMP Description</h3>
    <p>SNMP stands for Simple Network Management Protocol and we will be using it to monitor the statuses of devices across the SCADA network. Devices on an SNMP network are structured with managers and agents. Managers, also known as collectors, are responsible for overseeing SNMP enabled network devices, or agents. Agents can be configured to monitor a variety of things, such as system uptime, CPU temperature, and memory usage. For the SCADA network, the "NEMS" Raspberry Pi will act as our manager and the other devices, such as the raspberry pis, the network switches, and the SELs, will act as our agents.</p>
    {/* Screenshot of NEMS Adagios */}
    <p>Using OIDs, or Object Identifiers, the managers can poll agents for the monitored data. An OID is a string of numbers (like "1.3.6.1.2.1.1.3.0") and act as a pointer for values that are stored on the agent. For example, a manager can poll an agent (like a network switch) for its CPU usage. Then, the manager decides how threatening this data is and can output an OK, warning, or critical to a visual display. For the SCADA network, it'll be on the SCADA Lab TV.</p>
    {/* Screenshot of NOC Pi Display */}
    <h3>SNMP: The Goal</h3>
    <p>Ideally, we'll configure every device necessary with SNMP and be able to accurately judge the status of the network quickly. The SNMP manager should be able to determine what problems are occurring in the network and where they are.</p>
    <h3>NOC Description</h3>
    <p>NOC stands for Network Operations Center and will be our reporting/monitoring tool. Our NOC is operated from the "NOC" Raspberry Pi and will display critical network information to the SCADA Lab TV. The Pi itself is configured with i3 window manager and dmenu to aid these visuals.</p>
    <h3>Resources</h3>
    <p>For the SCADA Lab, we'll be using Nagios Enterprise Monitoring Server (NEMS) for our SNMP manager. For the raspberry pis, we'll use Net-SNMP.</p>
    <Link to="https://nemslinux.com/">NEMS Homepage</Link>
    <Link to="https://docs.nemslinux.com/en/latest/">NEMS Documentation</Link>
    <Link to="http://www.net-snmp.org/">Net-SNMP Homepage</Link>
    <Link to="https://i3wm.org/">i3 Window Manager Homepage</Link>
  </Container>
);

export default SNMPNOC;
