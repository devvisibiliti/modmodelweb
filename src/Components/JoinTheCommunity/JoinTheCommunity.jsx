import React from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const JoinTheCommunity = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex my-10 flex-col items-center justify-center text-center py-12">
      {/* Background Image Container */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url(${assets.temple})` }}
      />

      {/* Main Content */}
      <div className="relative z-10  px-6 sm:px-12 lg:px-24 rounded-lg ">
        {/* Main Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-3.5xl font-bold mb-4">
            From New Things: <br />
            Contact 
          </h1>
          <p className="text-sm sm:text-base md:text-base text-gray-600 mb-4">
            Simple small text
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus voluptatum quo at autem mollitia itaque quaerat voluptas neque dolore molestiae ipsam quia, est qui veritatis, saepe ab odio tempora?
          </p>
        </div>

        {/* Join Button */}
        <div className="bg-yellow-400  hover:bg-white hover:shadow-[0_0_15px_5px_rgba(250,204,21,0.8)] transition-shadow duration-300 inline-block rounded-lg">
          <button className=" text-black font-extrabold py-3 px-6 rounded-lg shadow-lg  transition duration-300 transition-transform transform 
               hover:scale-105 active:scale-90 active:bg-yellow-400 active:shadow-md 
               active:translate-y-1 active:shadow-lg"    onClick={() => window.location.href = 'https://youtube.com'}>
            Contact Now
          </button>
        </div>

        {/* Phone Image with Chat Bubbles */}
        <div className="flex justify-center mt-8">
          <img
            src={assets.fff} // Replace with actual image of the phone and chat bubbles
            alt="Phone with chats"
            className="w-full sm:w-3/4"  // Responsive width for different screen sizes
          />
        </div>
      </div>
    </div>
  );
};

export default JoinTheCommunity;
