import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SFlow = () => (
  <Container className="py-3">
    <h2>sFlow</h2>
    <h4>Notes</h4>
    <ul>
      <li>sFlow is a technology that monitors traffic via sampled packets of data.</li>
      <li>The goal is to configure the network switches and Raspberry Pis to use sFlow to create a database of monitored traffic that can be fed into a machine learning (ML) algorithm. That data will be fed into the ML algorithm so it can learn to tell
        the difference between normal and abnormal traffic.
      </li>
      <li>Use Netcat on Raspberry Pis to monitor the sFlow traffic (we do not need any sFlow software on Pi).</li>
      <li>XDR files are packs of sFlow data.</li>
      <li>We have to decide whether to use Python or C++ to unpack XDR files.</li>
      <li>sFlow is going to need an sFlow exporter, collector, and analyzer. (refer to &quot;sFlow Structure&quot; in &quot;Helpful Links&quot; table below.)</li>
    </ul>
    <h4 className="pt-4">Helpful Links</h4>
    <Row>
      <Col>
        <ul>
          <li><Link to="https://www.kentik.com/kentipedia/sflow-collector/#:~:text=to%20sFlow%20Collection-,What%20is%20an%20sFlow%20Collector%3F,probes%20and%20other%20network%20devices.">Components of sFlow Analysis</Link></li>
          <li><Link to="https://sflow.org/#:~:text=sFlow%C2%AE%20is%20an%20industry,and%20defense%20against%20security%20threats.">sFlow Organization Home Page</Link></li>
          <li><Link to="https://en.wikipedia.org/wiki/SFlow">sFlow Description</Link></li>
          <li><Link to="https://blog.sflow.com/2016/06/raspberry-pi-real-time-network-analytics.html">Setting up sFlow on Raspberry Pi</Link></li>
          <li><Link to="https://www.youtube.com/watch?v=VQEQp5PR86k">Accessing a Switch via CLI</Link></li>
          <li><Link to="https://techhub.hpe.com/eginfolib/networking/docs/switches/K-KA-KB/15-18/5998-8160_ssw_mcg/content/ch06s09.html">Configuring sFlow for Network Switch</Link></li>
          <li><Link to="https://en.wikipedia.org/wiki/External_Data_Representation">XDR Description</Link></li>
          <li><Link to="https://linuxhint.com/send_receive_udp_python/">UDP Client and Server Code (Python)</Link></li>
          <li><Link to="https://github.com/auspex-labs/sflow-collector">sFlow Collector Reference Code (Python)</Link></li>
          <li><Link to="https://inmon.com/technology/sflowTools.php">sFlow toolkit</Link></li>
        </ul>
      </Col>
      <Col>
        <ul>
          <li><Link to="https://inmon.com/products/sFlowTrend/help/html/introduction.gettingStarted.html">sFlowTrend Tutorial</Link></li>
          <li><Link to="https://inmon.com/products/sFlowTrend.php">sFlowTrend Download</Link></li>
          <li><Link to="https://www.computerhope.com/unix/nc.htm">Netcat Linux Command Help</Link></li>
          <li><Link to="https://blog.sflow.com/2016/05/mininet-flow-analytics.html">Mininet Flow Analytics</Link></li>
          <li><Link to="https://docs.python.org/3/library/xdrlib.html">Encode/Decode XDR Files</Link></li>
          <li><Link to="https://unix.stackexchange.com/questions/106480/how-to-copy-files-from-one-machine-to-another-using-ssh">Transferring files between systems</Link></li>
          <li><Link to="https://pypi.org/project/hexdump/">Hexdump</Link></li>
          <li><Link to="https://en.wikipedia.org/wiki/Ethernet_frame#Ethernet_II">Ethernet II</Link></li>
          <li><Link to="https://en.wikipedia.org/wiki/IPv4#Header">IPv4</Link></li>
        </ul>
      </Col>
    </Row>
    <h4 className="pt-4">Resources</h4>
    <ul>
      <li><Link to="https://blog.sflow.com/2016/06/raspberry-pi-real-time-network-analytics.html">Raspberry Pi Real Time Network Analytics</Link></li>
      <li><Link to="https://sflow.org/#:~:text=sFlow%C2%AE%20is%20an%20industry,and%20defense%20against%20security%20threats.">sFlow Security Threats</Link></li>
      <li><Link to="https://techhub.hpe.com/eginafolib/networking/docs/switches/K-KA-KB/15-18/5998-8160_ssw_mcg/content/ch06s09.html">Networking Switches</Link></li>
      <li><Link to="https://www.youtube.com/watch?v=VQEQp5PR86k">sFlow Youtube Video</Link></li>
    </ul>
    <h4 className="pt-4">Tasks</h4>
    <Table striped bordered>
      <thead>
        <tr>
          <th width="70%">Tasks</th>
          <th width="15%">Assigned To</th>
          <th width="15%">Date of Completion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Get a fresh Raspberry Pi, put it on Vlan 1, get a static IP for it, and hook it up to the sFlow configured switch</td>
          <td>-</td>
          <td>9/15/22</td>
        </tr>
        <tr>
          <td>Configure network switches to transmit sFlow traffic</td>
          <td>-</td>
          <td>9/15/22</td>
        </tr>
        <tr>
          <td>Get raspberry pis to receive sFlow traffic</td>
          <td>-</td>
          <td>9/27/22</td>
        </tr>
        <tr>
          <td>Create an sFlow packet parser using Python</td>
          <td>Chase and Andee</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
    <h4 className="pt-4">Useful Commands</h4>
    <Table striped bordered>
      <tbody>
        <tr>
          <td>sudo tcpdump -w (filename) udp port 6343</td>
          <td>writes udp traffic into a file</td>
        </tr>
        <tr>
          <td>nc -l -v -u -p6343 -k</td>
          <td>netcat that keeps listening for udp traffic from port 6343 and prints verbose output</td>
        </tr>
        <tr>
          <td>scp (sender_username)@(sender_ip):(source file location, e.g. /home/pi/sflowPython/(filename)) (destination, e.g. /C:UserscdeliDownloads)</td>
          <td>downloads a file from another computer on the same network</td>
        </tr>
      </tbody>
    </Table>
    <h4 className="pt-4">Packet Sizes</h4>
    <Table striped bordered>
      <thead>
        <tr>
          <th>Packet Type</th>
          <th>Length (bytes)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Flow</td>
          <td>160-208??</td>
        </tr>
        <tr>
          <td>Counter</td>
          <td>168</td>
        </tr>
        <tr>
          <td>Generic Interface Counter</td>
          <td>88</td>
        </tr>
        <tr>
          <td>Ethernet Interface Counter</td>
          <td>52</td>
        </tr>
      </tbody>
    </Table>
    <h4 className="pt-4">Documentation Entries</h4>
    <Table striped bordered>
      <thead>
        <tr>
          <th width="10%">Name</th>
          <th width="80%">Entry</th>
          <th width="10%">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chase</td>
          <td>
            I copied John&apos;s code for parsing sFlow packets onto
            the sFlow Rasberry Pi. The code is &quot;control.py&quot; in
            &quot;/home/pi/git-repos/packet_parser_program/&quot;. I put &quot;if&quot; statements
            in place of a match case function, because
            an older version of python on the Pi does not support it. I
            wrote for the code to only download MAC addresses and other info
            if they are not already on the Pi. I tried to make the data input
            the live sFlow packets coming in from the network switch, but there
            is a datatype error. I will start to work on Andee&apos;s and my
            packet parser instead of tyring to implement John&apos;s.
          </td>
          <td>2/14/2023</td>
        </tr>
        <tr>
          <td>Chase</td>
          <td>
            I am working on finishing the parser Andee and I started last semester.
            We only need to add functions to parse, in order of priority, TCP, ICMPv6, and ARP headers.
            Mark said we don&apos;t need too much information from ICMP. He wants our parser to say that there
            is an ICMP header. So anytime there is an ICMP header, the parser will just print that ICMP
            was detected. We use Wireshark as a reference for our code(&quot;blob(1).pcap&quot; -&gt; frame 23 for ARP,
            &quot;blob.pcap&quot; -&gt; frame 11 for ICMPv6, and &quot;blob.pcap&quot; -&gt; frame 23 for TCP).
          </td>
          <td>2/16/2023</td>
        </tr>
        <tr>
          <td>Chase</td>
          <td>
            I have code that successfully parses ARP and TCP packets. Andy taught me how to use &quot;class&quot;
            in Python, so we are implementing that into all of the header parsers. Then we will put all of
            those into the main packet parser. So far, &quot;class&quot; is working in IPv4, IPv6, Ethernet II, ARP,
            and TCP packet parsers.
          </td>
          <td>2/23/2023</td>
        </tr>
        <tr>
          <td>Chase</td>
          <td>
            I came into SCADA early today (12:00 PM). I put &quot;class&quot; into all of our parsing
            functions except for &quot;icmpv6.py&quot;. Then I have to put all of them into our main parser. Then I will ask Mark what he task he wants us to do next. I assume we&apos;ll have to tell our parser to record the parsed data into a database.
          </td>
          <td>2/28/2023</td>
        </tr>
        <tr>
          <td>Chase</td>
          <td>The parser is complete. The last thing I added was a packet parser for ICMPv6. I just have to verify that it completely parses all the information we want without any errors. It&apos;s possible that there are some unprecedented sampled packet headers for which I have to code. But if there are no errors the code should be complete. </td>
          <td>3/21/2023</td>
        </tr>
        <tr>
          <td>Chase</td>
          <td>Andy and I are trying to test everything by taking parsed files from wireshark and putting it into a text file. We do that by copying the entire sFlow packet into a Hex Stream. Then we use the &quot;bytes.fromhex&apos;&apos; function to convert it to a hex file that can be read by our parser. We can also search for specific sample headers in the filter bar on Wireshark.</td>
          <td>3/23/2023</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default SFlow;
