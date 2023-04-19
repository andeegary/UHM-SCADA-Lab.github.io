import React from 'react';
import { Link } from 'react-router-dom';

const MLResources = () => (
  <span>
    <h3>Machine Learning Resources</h3>
    <p>
      On Coursera, there are multiple couple courses that are related to machine learning.<br />
      <ul>
        <li>
          This <Link to="https://www.coursera.org/learn/neural-networks-deep-learning?specialization=deep-learning">Coursera Deep Learning course</Link> is quite low-level as it gets into how neural networks fundamentally work. However, I wouldn&apos;t recommend the course for our purposes as our main focus is to learn how to use pre-made Python libraries to create a model specific to our lab. Here is a link to the notes I personally took from the video lectures. (TODO: Add in link)
        </li>
        <li>
          This <Link to="https://www.coursera.org/learn/introduction-tensorflow?specialization=tensorflow-in-practice">Coursera Tensorflow course</Link> focuses on using TensorFlow, a Python library developed by Google. I would definitely recommend going through the video lectures and following along with the provided example scripts. You don&apos;t have to buy a Coursera subscription to access the content of the course, only the assessments are locked behind the paywall. However, I did use a free trial to do the assessments, but they are essentially just copying the provided example scripts.
        </li>
        <li>
          You can access the <Link to="https://github.com/https-deeplearning-ai/tensorflow-1-public">provided example scripts</Link> for the Coursera TensorFlow course on GitHub, which is a great resource to help develop our own model for the lab.
        </li>
      </ul>
    </p>
  </span>
);

export default MLResources;
