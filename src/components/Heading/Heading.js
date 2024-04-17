import React from 'react';
import '../Heading/Heading.css';

const Heading = ({ text }) => {
  return (
    <div className="heading">
      <div className="heading-top"></div>
      <p className="heading-text">{text}</p>
      <div className="heading-bottom"></div>
    </div>
  );
};

export default Heading;
