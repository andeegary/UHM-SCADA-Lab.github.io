import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SDNOverview = () => (
  <Container className="py-3">
    <h2>SDN Overview</h2>
    <h4>What is SDN?</h4>
    <p>SDN, or Software Defined Networking, is simply a tool to manage networks. At it&apos;s core, all Software Defined Networking allows you to do is to create software that can control the forwarding happening inside a network switch. SDN has the capability for network administrators to create complex, software-based network management devices, such as routers, load balancers, and firewalls. The way that SDN is implemented on a network switch, is typically done through the use of OpenFlow, which is a communications protocol that enables interaction with the forwarding plane, the part of the switch which forwards packets to destinations [1].</p>
    <h4>What is OpenFlow?</h4>
    <p>Without the enabling of OpenFlow, each time a network switch receives a packet, it will forward it to it&apos;s destination with little to no &quot;thinking&quot;. We want to interrupt this process. Through the use of OpenFlow, we can configure a network switch to use a &quot;flow table&quot;, which holds &quot;flows&quot;. A flow table is basically a container of flows, and flows contain criteria for a packet to &quot;match&quot; to and an action to do if the match is successful. Our HP 2920-24G network switches each contain three flow tables. &quot;Table 0&quot;, which is only capable of holding a single flow (a limitation set by the manufacturer) that matches every single packet then sends every packet to &quot;Table 100&quot;.<sup>1</sup> Table 100, by default, does not hold any flows, so every packet that is sent to Table 100, cannot be matched to any flows so the packet is dropped by the switch. Table 100 is known as the &quot;hardware table&quot; as it&apos;s switching is accomplished using the physical hardware of the switch itself. The other flow table is &quot;Table 200&quot;, which is known as the &quot;software table&quot; as it&apos;s switching is done through software running on the switch. See the &quot;Lab Configuration&quot; tab for more information about the differences between Tables 100 and 200.</p>
    <p><sup>1</sup> It is possible to have more than three flow tables, and have the flow in Table 0 send packets to a different flow table, but this configuration (which can be done through the configuration of the switch itself - see Network department) isn&apos;t needed for our purposes.</p>
    <h4>What is a Flow?</h4>
    <p>A flow is an entry in a flow table. It contains information about which fields of a network packet to &quot;match&quot; to and actions to take if a packet successfully matches to the flow. A flow can have a match field of a MAC address and an action of where to forward the packet to (can be as simple as a port number on the switch). For example, if a flow has a match field of source MAC address being &quot;b8:27:eb:3c:2d:60&quot; and an action of sending out of port number 4, then, if a packet is sent to the flow table that contains that flow, the switch will check the source MAC address of the packet to see if it matches the flow, so if the packet&apos;s source MAC address is &quot;b8:27:eb:3c:2d:60&quot;, then the packet is forwarded out of port number 4, and if it is something else, like &quot;b8:27:eb:b5:37:bf&quot;, then the packet will move on to check other flows in the flow table.</p>
    <p>TODO: pictures of a flow in the switch/flow tables</p>
    <h4>What is a Controller?</h4>
    <p>A Controller is simply a program that has methods to interact with an OpenFlow-enabled network switch through the use of the OpenFlow protocol.<sup>1</sup> A Controller can add flows to flow tables of the switch, it can delete flows in the flow tables of the switch, and much more, however we are mainly interested in being able to add and delete these flows. Here are the basic steps of how our controller interacts with a network switch:</p>
    <ol>
      <li>If OpenFlow and the Controller are both enabled in the switch<sup>1</sup>, the controller and switch will be able to complete a handshake, which will essentially create a session between the two devices.<sup>2</sup></li>
      <li>As part of this initial handshake, the Controller will add a flow into the switch&apos;s flow table 100, which will have match every single and will forward the packet to the controller.<sup>3</sup> If a packet is sent through this flow, the resulting message is known as a &quot;flow request&quot;</li>
      <li>Once this connection is established, there will be echo messages sent for the remainder of the connection, between the controller and the switch to ensure the connection is healthy.</li>
      <li>Handling flow requests...</li>
    </ol>
    <sup>1</sup> There is some configuration needed in the network switch to achieve this - see Network department.
    <br />
    <sup>2</sup> The config option &quot;max-backoff-interval 1&quot; in the switch modifies the delay at which this connection will happen. For testing purposes, it is currently set that every 1 second the switch will try to connect to the controller.
    <br />
    <sup>3</sup> We also send a message to the switch to delete all flows within Table 100 before adding the flow to the controller.
    <br /><br />
    <h4>References</h4>
    <p>[1] C. Craven, “What Is OpenFlow? Definition and How it Relates to SDN,” sdxcentral, Aug. 25, 2013. <Link to="https://www.sdxcentral.com/networking/sdn/definitions/what-the-definition-of-software-defined-networking-sdn/what-is-openflow/">https://www.sdxcentral.com/networking/sdn/definitions/what-the-definition-of-software-defined-networking-sdn/what-is-openflow/</Link> (accessed Apr. 26, 2023).</p>
  </Container>
);

export default SDNOverview;
