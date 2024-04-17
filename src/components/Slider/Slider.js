import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({ start }) => {
  if (!start || !start || !Array.isArray(start) || start.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <Carousel fade>
      {start.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={`Slide ${index}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
