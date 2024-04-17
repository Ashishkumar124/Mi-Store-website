import React from 'react';
import Offer from "../Offer/Offer.js";
import "./Offers.css";

const Offers = ({ offer }) => {
  if (!offer) {
    // Handle case where offers is undefined
    return null;
  }

  return (
    <div className="offersSection">
      {offer.map((item, index) => (
        <Offer
          key={item.image}
          index={index}
          src={item.image}
          link={item.url}
        />
      ))}
    </div>
  );
};

export default Offers;
