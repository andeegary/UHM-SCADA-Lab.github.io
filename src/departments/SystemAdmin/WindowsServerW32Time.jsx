import React from 'react';
import { Link } from 'react-router-dom';

const WindowsServerW32Time = () => (
  <span>
    <h3><u>Windows Time Service (W32Time)</u></h3>
    <p>Windows Time Service (W32Time) is a service that allows the synchronization of time and date for all computers running the Active Directory Domain Services (AD DS). Synchronizing time across all devices in a SCADA network is important, for logging and automation purposes. For example, if a catastrophic event occurs within the network, it is important for all the device’s clock to be synchronized to a single time reference as to have a general idea of the sequence of events that might’ve led to this event, and understand its aftermaths. Additionally, a device in the network running an automation script must definitely have its time synchronized as to not create any problems in the network.</p>
    <hr />
    <h4>Getting Time from Server through timedatctl</h4>
    <ol>
      <li>Open a Terminal window on your Raspberry Pi.</li>
      <li>Type: &quot;sudo vi /etc/systemd/timesyncd.conf&quot;</li>
      <img src="/images/SystemAdmin/WindowsServer_Time_ManualSetup_1.png" alt="Setting Time step 1-2" style={{ maxWidth: '50%' }} />
      <li>In the &quot;systemd-timesyncd.conf&quot; file, uncomment the &quot;NTP&quot; line by removing the &quot;#&quot; character at the beginning of the line.</li>
      <li>Replace the default NTP server address with the IP address or domain name of the Windows time server (10.1.XX.8).</li>
      <ul>
        <li>For example: NTP= 10.1.1.8</li>
      </ul>
      <img src="/images/SystemAdmin/WindowsServer_Time_ManualSetup_2.png" alt="Setting Time step 3-4" style={{ maxWidth: '50%' }} />
      <li>Save the changes to the file and exit the editor.</li>
      <li>Type: &quot;sudo systemctl restart systemd-timesyncd.service&quot;</li>
      <li>To verify it’s working, type: &quot;sudo systemctl status systemd-timesyncd.service&quot;</li>
      <ul>
        <li>If working, it should show active (running) in green.</li>
      </ul>
      <li>For additional verification, type: &quot;timedatectl status&quot;</li>
      <img src="/images/SystemAdmin/WindowsServer_Time_ManualSetup_3.png" alt="Setting Time step 5-8" style={{ maxWidth: '50%' }} />
    </ol>
    <hr />
    <h4>W32Time Service Resources</h4>
    <ul>
      <li><Link to="https://computingforgeeks.com/how-to-configure-ntp-server-in-windows-server/"><h6>How to Install and Configure W32Time</h6></Link></li>
      <li><Link to="https://learn.microsoft.com/en-us/windows-server/networking/windows-time-service/windows-time-service-top"><h6>Microsoft&apos;s W32Time Page</h6></Link></li>
    </ul>
  </span>
);

export default WindowsServerW32Time;
