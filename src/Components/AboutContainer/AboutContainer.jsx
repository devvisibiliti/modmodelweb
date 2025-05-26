import React from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const AboutContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto p-8 font-sans mt-4 md:mt-20 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-4 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight font-Montserrat">
            Heading
          </h1>
          <p className="mb-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ratione tempora quidem odio repellendus magni illum, cumque natus atque placeat veniam reprehenderit eum a, consequuntur voluptas eos asperiores minus. Inventore.
          </p>
          <p className="mb-6 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed deleniti veniam voluptatum neque corrupti amet rem quasi tenetur assumenda facere consectetur nam blanditiis suscipit dolor, adipisci labore ex. Cum.
          </p>
          <div className="bg-yellow-400 px-4  hover:bg-white hover:shadow-[0_0_15px_5px_rgba(250,204,21,0.8)] transition-shadow duration-300 inline-block rounded-lg ">
            <button className="b text-black font-extrabold py-2 px-4 rounded-md transition duration-300   text-lg  transition-transform transform 
               hover:scale-105 active:scale-75 active:bg-yellow-400 active:shadow-md 
               active:translate-y-1 active:shadow-lg"
              onClick={() => navigate('/')}>
              OUR STORY
            </button>
          </div>
        </div>
        <div className=" w-full mx-auto md:w-1/2 relative">
          <div className="bg-gray-200 h-full rounded-[40px] overflow-hidden">
            <img
              src={assets.fff}
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
            <div className=" hidden sm:block absolute -bottom-24 -right-16 md:-bottom-16 md:-right-20 w-48 h-52 md:w-[236.32px] md:h-[209.47px] gap-0 rotate-[-15.78deg]">
              <img src={assets.fff} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;