import React, { useEffect, useRef } from 'react';
import './MarqueeImages.css'; // Import CSS for custom styles
import { assets } from '../../assets/assets';

const MarqueeImages = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft -= 1; // Decrement scroll position to move right to left
        
        // Reset to end when start of scroll is reached
        if (
          containerRef.current.scrollLeft <= 0
        ) {
          containerRef.current.scrollLeft = containerRef.current.scrollWidth / 2;
        }
      }
    };

    const interval = setInterval(scroll, 20); // Adjust the scroll speed as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

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
  ];

  return (
    <div
      className="scroll-container overflow-hidden whitespace-nowrap no-scrollbar bg-slate-100 py-8 mb-22"
      ref={containerRef}
    >
      <div className="marquee-content inline-flex space-x-6">
        {images.map((image, index) => (
          <div key={index} className="w-80 h-80 p-2 bg-white rounded-3xl shadow-md">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
        {/* Duplicate the images for smooth continuous scrolling */}
        {images.map((image, index) => (
          <div key={`dup-${index}`} className="w-80 h-80 p-2 bg-white rounded-lg shadow-md">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeImages;
