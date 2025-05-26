import React from 'react';
import { assets } from '../../assets/assets';
import './NetworkCommunity.css';
import { useNavigate } from 'react-router-dom';

const NetworkCommunity = ({ backgroundImageUrl }) => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-96 flex items-center justify-center overflow-hidden">
      
      <div
        className="hidden md:block absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${backgroundImageUrl || assets.central})`,
          backgroundSize: 'cover',
          backgroundPositionY: '-2rem',
          zIndex: 1,
          opacity: 0.3,
        }}
      />
      
      <div className="w-full max-w-6xl px-4 py-8 lg:px-0 mt-20 sm:mt-20">
        <div className="bg-[#10104b] rounded-[40px] overflow-visible w-full lg:w-3/4 mx-auto flex flex-col md:flex-row items-center p-6 lg:p-8 relative z-20">
          
      
          <div className="absolute top-0 left-0 w-full h-full flex justify-around items-center pointer-events-none z-10 opacity-60">
            <img src={assets.fff} alt="Pattern 1" className="pattern-image w-56 h-72" />
            <img src={assets.fff} alt="Pattern 2" className="pattern-image w-56 h-72" />
            <img src={assets.fff} alt="Pattern 3" className="pattern-image w-56 h-72" />
            <img src={assets.fff} alt="Pattern 4" className="pattern-image w-56 h-72" />
            <img src={assets.fff} alt="Pattern 5" className="pattern-image w-56 h-72" />
            <img src={assets.fff} alt="Pattern 6" className="pattern-image w-56 h-72" />
          </div>
          
         
          <div className="w-full z-50 md:w-1/2 relative flex justify-center lg:justify-start mb-10 md:mb-0">
            <img 
              src={assets.fff}
              alt="Woman with laptop" 
              className="w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 absolute -top-28 sm:-top-36 md:-top-48 lg:-top-52 object-cover"
              style={{ zIndex: 1 }} 
            />
          </div>

         
          <div className="text-content w-full md:w-1/2 text-white pt-20 md:pt-0 lg:-ml-36" style={{ margin: '0 auto' }}>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-6 text-center md:text-left px-4 md:px-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis earum excepturi, doloremque adipisci placeat beatae nesciunt similique aut ipsam minima animi, dolores laborum laudantium possimus nam officiis laboriosam. Laborum, non?
            </p>
            <div className="flex justify-center md:justify-start bg-[#FFD700]  hover:bg-white hover:shadow-[0_0_15px_5px_rgba(250,204,21,0.8)] transition-shadow duration-300 rounded-[10px]">
              <button className=" text-[#000033] font-extrabold px-6 py-4 rounded-lg text-sm md:text-base lg:text-base transition-transform transform 
               hover:scale-105 active:scale-90 active:bg-yellow-400 active:shadow-md 
               active:translate-y-1 active:shadow-lg"  onClick={() => window.location.href = '/'}>
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkCommunity;
