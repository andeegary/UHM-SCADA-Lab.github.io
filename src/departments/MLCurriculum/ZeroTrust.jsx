import React from 'react';
import { Link } from 'react-router-dom';

const ZeroTrust = () => (
  <span>
    <h3>Using Zero-Trust techniques to administer the SCADA Lab</h3>
    <h4>Proposed Zero-Trust Criteria</h4>
    <ol>
      <li>Time</li>
      <li>SRC IP Address</li>
      <ol>
        <li>Country</li>
        <li>Block</li>
        <li>/32</li>
      </ol>
      <li>Direction</li>
      <li>Protocol/Port</li>
      <li>Client Agency Query</li>
      <li>2 Factor Authentication</li>
      <li>History of Sessions</li>
      <ol>
        <li>Duration</li>
        <li>Volume</li>
        <li>Periodicity</li>
        <li>Timeframe</li>
      </ol>
      <li>Are the lights on in the room?</li>
      <li>Is there a major event happening? (Storm, earthquake, etc.)</li>
    </ol>

    <h3>Resources</h3>
    <ul>
      <li>National Institute of Standards and Technology Special Publication 800-207 - Zero Trust Architecture, Downloaded 2 December 2021 from <Link to="https://csrc.nist.gov/publications/detail/sp/800-207/final">this website.</Link></li>
      <li><Link to="https://laulima.hawaii.edu/access/content/group/MAN.XLSEEX96mn.202310/Manuals/Zero%20Trust/NIST.SP.800-207.pdf">NIST.SP.800-207</Link></li>
    </ul>
  </span>
);

export default ZeroTrust;
