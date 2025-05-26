import React from 'react';
import './MarqueeCards.css';
import { assets } from '../../assets/assets';

const MarqueeCards = () => {
  const images = [
    assets.fff,
    assets.fff,
    assets.fff,
    assets.fff,
    assets.fff,
    assets.fff,
    assets.fff,
    assets.fff,
    assets.fff,
    assets.fff,
    assets.fff,
  ];

  return (
    <div className="overflow-hidden py-24">
      <div className="marquee">
        <div className="track">
          {images.map((image, index) => (
            <div key={index} className="card">
              <img src={image} alt={`Card ${index + 1}`} />
            </div>
          ))}
          {/* Duplicate the images within the same div to create the seamless effect */}
          {images.map((image, index) => (
            <div key={index + images.length} className="card">
              <img src={image} alt={`Card ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeCards;