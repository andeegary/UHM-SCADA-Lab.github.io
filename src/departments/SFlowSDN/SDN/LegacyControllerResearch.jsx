import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LegacyControllerResearch = () => (
  <Container className="py-3">
    <p> At the start of the Spring 2022 semester, everyone in the lab was assigned a controller from the list on <Link to="https://en.wikipedia.org/wiki/List_of_SDN_controller_software">this wikipedia article.</Link> As such, this table was originally filled in largely by students new to both the SCADA lab and software defined networking. Please be aware that software defined networking is a hard concept to fully understand, and this table may not have the most comprehensive information.</p>
    <h4 className="pt-4">Will Not Be Using</h4>
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
          <th>Reasoning for Pass</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link to="https://floodlight.atlassian.net/wiki/spaces/Beacon/overview?homepageId=1769491">Beacon</Link></td>
          <td>Defunct</td>
          <td>Anything that Java runs on</td>
          <td>N/A</td>
          <td>Apache 2.0</td>
          <td>Java</td>
          <td><Link to="https://beacon-opensource.bigswitch.com.s3.amazonaws.com/etc/manifest.html">Download</Link></td>
          <td>Defunct/Development moved to Floodlight Controller</td>
        </tr>
        <tr>
          <td><Link to="https://faucet.nz/">Faucet</Link></td>
          <td>Active-1.10.1</td>
          <td>Debian 10+, Raspbian 10+, Raspberry Pi OS 11+, Ubuntu 18.04+, Docker, Pip</td>
          <td>Valve/Ryu OpenFlow Controller</td>
          <td>Apache 2.0</td>
          <td>Python</td>
          <td><Link to="https://docs.faucet.nz/en/latest/tutorials/first_time.html">Download</Link></td>
          <td>-</td>
        </tr>
        <tr>
          <td><Link to="https://support.hpe.com/hpesc/public/docDisplay?docId=emr_na-c03967699#N10229">HPE VAN</Link></td>
          <td>Active</td>
          <td>Ubuntu</td>
          <td>HP</td>
          <td>-</td>
          <td>-</td>
          <td><Link to="https://support.hpe.com/hpesc/public/docDisplay?docId=emr_na-c03967699#N10229">Download</Link></td>
          <td>Requires 64 GB of storage</td>
        </tr>
        <tr>
          <td><Link to="https://github.com/noxrepo/nox">NOX</Link></td>
          <td>Defunct Feb 2014</td>
          <td>Linux/Mac OS/Windows</td>
          <td>OpenFlow</td>
          <td>GNU Public License</td>
          <td>C++/CSS/C/Python/Shell/Perl</td>
          <td><Link to="https://github.com/noxrepo/nox/archive/refs/heads/verity.zip">Download</Link></td>
          <td>Does not support Openflow V1.3</td>
        </tr>
        <tr>
          <td><Link to="https://docs.opendaylight.org/en/stable-sodium/#getting-started-with-opendaylight">OpenDaylight</Link></td>
          <td>Active-15.0.0</td>
          <td>Apache Maven 3.5.2 or later,Linux,Windows</td>
          <td>YANG Tools, NETCONF, and MD-SAL</td>
          <td>Eclipse Public License 1.0</td>
          <td>Java</td>
          <td><Link to="https://docs.opendaylight.org/en/latest/downloads.html">Download</Link></td>
          <td>Lighty-Core is a more specialized version in line with our wanted use</td>
        </tr>
        <tr>
          <td><Link to="https://www.open-kilda.org/">OpenKilda</Link></td>
          <td>Active-v1.112.0</td>
          <td>Ubuntu 18.04, Ubuntu 20.04</td>
          <td>N/A</td>
          <td>Apache 2.0</td>
          <td>Python/Java</td>
          <td><Link to="https://docs.open-kilda.org/xwiki/bin/view/Installation%20Guide%20-%20v1.1.11.27%20%28November%202018%29/">Download</Link><Link to="https://github.com/telstra/open-kilda">Github</Link></td>
          <td>Requires 256GB of storage</td>
        </tr>
        <tr>
          <td><Link to="https://www.openvswitch.org/">Open vSwitch</Link></td>
          <td>Active- current:2.16.2 LTS:2.13.6</td>
          <td>Linux, Hyper-V, FreeBSD and NetBSD</td>
          <td>N/A</td>
          <td>Apache 2.0</td>
          <td>C</td>
          <td><Link to="https://www.openvswitch.org/download/">Download</Link></td>
          <td>We are using a physical switch, not virtual.</td>
        </tr>
        <tr>
          <td>POX</td>
          <td>Active-&quot;gar&quot;</td>
          <td>Linux/Mac OS/Windows</td>
          <td>OpenFlow</td>
          <td>Apache 2.0</td>
          <td>C++/Python</td>
          <td><Link to="https://github.com/noxrepo/pox/archive/refs/heads/gar-experimental.zip">Download</Link></td>
          <td>Does not support Openflow V1.3.</td>
        </tr>
        <tr>
          <td>Project Calico</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Operates in a different layer than Openflow</td>
        </tr>
        <tr>
          <td><Link to="https://arccn.github.io/runos/docs-2.0/eng/00_RUNOS_Overview.html">RUNOS</Link></td>
          <td>Active-2.0</td>
          <td>Ubuntu 18.04 or Higher</td>
          <td>REST / OpenFlow</td>
          <td>Apache 2.0</td>
          <td>C / C++ / JS / CMake / CSS / Nix</td>
          <td><Link to="https://arccn.github.io/runos/docs-2.0/eng/01_RUNOS_Downloads.html">Download</Link></td>
          <td>Cannot easily run on a raspberry PI</td>
        </tr>
        <tr>
          <td><Link to="https://selinc.com/products/5056/">SEL-5056</Link></td>
          <td>Active</td>
          <td>Windows</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td><Link to="https://selinc.com/products/5056/">Download</Link></td>
          <td>Windows only</td>
        </tr>
        <tr>
          <td><Link to="https://fd.io/">The Fast Data Project (FD.io)</Link></td>
          <td>Active v.21.10.1</td>
          <td>Linux/Arm, x86, Power</td>
          <td>3rd Gen US Patent 7,961,636</td>
          <td>Apache 2.0</td>
          <td>-</td>
          <td><Link to="https://fd.io/gettingstarted/installing/">Download</Link></td>
          <td>Cannot easily run on a raspberry PI</td>
        </tr>
        <tr>
          <td>Tungsten</td>
          <td>Active R21.12</td>
          <td>Windows/Linux</td>
          <td>OpenContrail</td>
          <td>Apache 2.0</td>
          <td>Python/c++/Node/Go</td>
          <td><Link to="https://tungsten.io/start/">Download</Link></td>
          <td>Requires 50+GB of storage</td>
        </tr>
        <tr>
          <td><Link to="https://github.com/vneio/sdnc">vneio/sdnc</Link></td>
          <td>Defunct Apr 2016</td>
          <td>BASH</td>
          <td>Intel DPDK technology</td>
          <td>-</td>
          <td>BASH Script</td>
          <td><Link to="https://github.com/vneio/sdnc">Download</Link></td>
          <td>Written in shell, no documentation, requires docker</td>
        </tr>
      </tbody>
    </Table>
    <h4 className="pt-4">To Be Decided</h4>
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
          <th>Static IP Address</th>
          <th>Assigned To</th>
          <th>Pros</th>
          <th>Cons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link to="https://githubhelp.com/superkkt/cherry">Cherry</Link></td>
          <td>Active 0.14.2</td>
          <td>Windows/OS/Linux</td>
          <td>N/A</td>
          <td>GPL-2.0</td>
          <td>Go</td>
          <td><Link to="https://docs.docker.com/installation/">Docker</Link><Link to="https://golang.org/doc/install">Go Language</Link></td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Not well documented, requires a MySQL database, written in Go</td>
        </tr>
        <tr>
          <td><Link to="https://floodlight.atlassian.net/wiki/spaces/floodlightcontroller/overview">Floodlight</Link></td>
          <td>Active-1.2</td>
          <td>Linux, Mac OS X 10.6 or higher, Windows</td>
          <td>OpenFlow</td>
          <td>Apache 2.0</td>
          <td>Java</td>
          <td><Link to="https://github.com/floodlight/floodlight">Download</Link></td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Has a Web GUI that can write to the controller, Well documented</td>
          <td>Written in Java</td>
        </tr>
        <tr>
          <td><Link to="https://lighty.io/">Lighty-Core (lighty.io)</Link></td>
          <td>Active - 15.2.0</td>
          <td>Can run on Linux</td>
          <td>OpenDaylight</td>
          <td>EPL 1.0</td>
          <td>Java</td>
          <td><Link to="https://github.com/PANTHEONtech/lighty">Download</Link></td>
          <td>-</td>
          <td>-</td>
          <td>Chase</td>
          <td>-</td>
          <td>Written in JAVA, okay documentation (does not seem entry level)</td>
        </tr>
        <tr>
          <td><Link to="https://wiki.onosproject.org/display/ONOS/">ONOS</Link></td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Has CLI (ssh capability), has a Web GUI, very well documented</td>
          <td>Written in Java, may not work on a raspberry PI</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default LegacyControllerResearch;
