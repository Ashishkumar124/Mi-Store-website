import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = ({ banner }) => {
  if (!banner || !banner.end) {
    return <div>No end banner data available</div>;
  }
  
  return (
    <Carousel fade>
      {banner.end.map((item) => (
        <Carousel.Item key={item.image}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={`${item.name} banner`}
          />

          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.source}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
