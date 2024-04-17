import React from 'react';

const Offer = ({ src, link, index }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={`Offer ${index}`} />
    </a>
  );
};

export default Offer;
