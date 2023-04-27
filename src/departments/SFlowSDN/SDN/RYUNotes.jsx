import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import RYUExample from './RYUExample';
import RYU427 from './RYU427';

const RYUNotes = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <span>
      <Link to="" onClick={handleShow}>Ryu Controller Lab Notes</Link>

      <Offcanvas show={show} onHide={handleClose} style={{ maxWidth: '800px', width: '100%' }}>
        <Offcanvas.Header closeButton>
          <h1>Ryu Controller Lab Notes</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>RYU SDN Controller</h3>
          <ul>
            <li>Ryu is pronounced &quot;ree-yooh&quot;</li>
            <li>Installation location: /usr/local/lib/python3.9/dist-packages/ryu</li>
            <li><Link to="https://book.ryu-sdn.org/en/Ryubook.pdf">RYU Book</Link></li>
          </ul>
          <h3>Application Process</h3>
          <ul>
            <li>Started off copying an example program provided by Ryu. Located at &apos;~/ryu/ryu/app/simple_switch_13.py&apos;</li>
            <ul>
              <li><RYUExample /></li>
            </ul>
            <li>Ended off Spring 2022 semester with file located at &apos;~/ryu_tests/ryu427.py&apos;</li>
            <ul>
              <li><RYU427 /></li>
            </ul>
            <li>Current Progress (as of 11/17/22)</li>
            <ol>
              <li>Added a check if the source and destination port are the same, then return.</li>
              <li>Implemented a way to remove flows from switch, replacing the hard timeout that was used as a placeholder last semester.</li>
              <li>Transitioned from Ryu to OS-Ken, which is essentially an actively maintained version of Ryu. </li>
              <li>Created custom programs to parse the packet data.</li>
              <li>Determined that the following arguments cannot be used with OFPMatch (in the hardware table):
                <ul>
                  <li>in_phy_port (Switch physical input port)</li>
                  <li>eth_dst (Ethernet destination address)</li>
                  <li>arp_spa (ARP source IPv4 address)</li>
                  <li>arp_tpa (ARP target IPv4 address)</li>
                  <li>arp_op (ARP opcode)</li>
                  <li>arp_sha (ARP source hardware address)</li>
                  <li>arp_tha (ARP target hardware address)</li>
                </ul>
              </li>
            </ol>
          </ul>
          <h3>Launching RYU</h3>
          <p>In a terminal window:</p>
          <p className="fw-lighter">$ ryu-manager /path/to/application.py</p>
          <p>This launches the ryu controller application where /path/to/application.py should be replaced by the application you wish to launch. You can also pass the argument --help to see other passable arguments. Our current path to the python file is &apos;~/ryu_test/&apos;, with the current version (as of 9/13) the python file &apos;ryu913.py&apos;.</p>
          <p>To launch with GUI:</p>
          <p className="fw-lighter">$ ryu-manager --observe-links ~/ryu/ryu/app/gui_topology/gui_topology.py /path/to/application.py</p>
          <h3>Mininet</h3>
          <p>To test RYU via mininet, launch mininet as follows:</p>
          <p className="fw-lighter">
            $ sudo mn -c <br />
            $ sudo mn --controller=remote <br />
          </p>
          <p>Where the -c argument cleans mininet and is generally recommended to get rid of past flows/data. The second line launches mininet with a remote controller. We generally followed this <Link to="https://github.com/mininet/openflow-tutorial/wiki/Learn-Development-Tools">tutorial to set up mininet.</Link>
          </p>
          <hr />
          <h3>HP 2420-24G Switch</h3>
          <p>
            If you get a program working within mininet, chances are it won&apos;t immediately work with our physical switch (and vice versa). However, this is (hopefully) no need for panic.
          </p>
          <p>
            Since the default table_id for mininet (OpenvSwitch) and the <Link to="https://ryu.readthedocs.io/en/latest/ofproto_v1_3_ref.html#ryu.ofproto.ofproto_v1_3_parser.OFPFlowMod">OFPFlowMod</Link> is table_id=0, meaning that the provided example <Link to="https://github.com/faucetsdn/ryu/tree/master/ryu/app">programs</Link> should work in mininet without change.
          </p>
          <p>
            For the HP2420-24G switch, flow table 0 is defaulted to the start table, flow table 100 is the hardware table (which can only accept flows with certain <Link to="https://community.hpe.com/t5/Software-Defined-Networking/Using-Hardware-flows-table-with-hp-2920-24g/td-p/6931454#.YlypyNrMKUk">matches</Link>), and flow table 200 is the software table.
          </p>
          <p>
            To specify idle/hard timeouts in addFlow messages to the switch, the controller has to have timeouts of 0 (aka infinite) for the flow that gets created during the handshake. All other timeouts are just an integer (in seconds).
          </p>
          <h3>Programming</h3>
          <p>
            Ryu is programmed via the use of python scripts. There are a bunch of examples on the <a href="https://github.com/faucetsdn/ryu/tree/master/ryu/app">github</a>, along with pretty good <Link to="https://ryu.readthedocs.io/en/latest/index.html">documentation here</Link>.
          </p>
          <h3>Learning Switch</h3>
          <p>
            As I understand, the idea of a learning switch is: A packet arrives at a switch, the switch asks the SDN controller what to do with it.
          </p>
          <ol>
            <li>The controller creates a dictionary of the datapath and what the source Mac address and the source port is.</li>
            <li>The controller then checks if the datapath:destination Mac address port is in the previous list.</li>
            <ul>
              <li>If so, install a flow so that next time the switch doesn&apos;t bother the controller, and tell the switch to send the packet to that destination port.</li>
              <li>If not, broadcast the packet to all ports, but you already wrote down the source mac address, so eventually you will gain a dictionary of many addresses, which you will eventually auto convert to flows.</li>
            </ul>
          </ol>
        </Offcanvas.Body>
      </Offcanvas>
    </span>
  );
};

export default RYUNotes;
