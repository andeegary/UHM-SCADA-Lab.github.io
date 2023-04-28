import React from 'react';

const OverallGoal = () => (
  <span>
    <h3>Overall Goal</h3>
    <p>
      Very vaguely, we want to use some machine learning technique to interact with our lab&apos;s SDN (Software Defined Networking) controller to allow or deny network traffic flows.<br />
      <br />
      This software defined network is implemented through a protocol called Openflow, which can be used to create software-based network components, such as routers, firewalls, and load-balancers. We want to use SDN to create a firewall that doesn&apos;t use the traditional rules- or policy-based control, but rather some machine learning algorithm that can allow or deny network flow requests.<br />
      <br />
      These network flow requests come from a physical network switch, that has been configured to interact with an SDN controller, which, in our setup, is simply a Raspberry Pi running a Python script. So, whenever this controller receives a flow request from the switch, it will send it to some machine learning model that will return an ALLOW or a DENY ruling for that type of traffic.<br />
      <br />
      This machine learning algorithm will probably be a neural network, that will be trained using various data points as described in the Zero Trust tab.<br />
    </p>
  </span>
);

export default OverallGoal;
