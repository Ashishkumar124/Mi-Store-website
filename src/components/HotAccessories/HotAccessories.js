import React from 'react';
import HotItemCard from "../HotItemCard/HotItemCard.js";
import "./HotAccessories.css";

const HotAccessories = ({ music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifeStyle, lifeStyleCover, mobileAccessories , mobileAccessoriesCover}) => {
  if (!music && !smartDevice && !home && !lifeStyle && !mobileAccessories) {
    return <div>No accessories available</div>;
  }

  return (
    <div className="HotAccessories">
      <div className="HotAccessories-cover">
        <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="Cover" />
      </div>
      <div className="HotAccessories-items">
        {music && music.map((item, index) => (
          <HotItemCard
            key={item.image}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}

        {smartDevice && smartDevice.map((item, index) => (
          <HotItemCard
            key={item.image}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}

        {home && home.map((item, index) => (
          <HotItemCard
            key={item.image}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}

        {lifeStyle && lifeStyle.map((item, index) => (
          <HotItemCard
            key={item.image}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}
    
        {mobileAccessories && mobileAccessories.map((item, index) => (
          <HotItemCard
            key={item.image}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}

<HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>

      </div>
    </div>
  );
};

export default HotAccessories;
