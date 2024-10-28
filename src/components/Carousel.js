import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = ({ images, showCarousel, onClose }) => {
  if (!showCarousel) return null; // Carousel'i göstermez

  return (
    <div>
      <Carousel onHide={onClose}>
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={img}
              alt={`Slide ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
