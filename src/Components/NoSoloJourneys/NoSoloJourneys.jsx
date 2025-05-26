import React from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { Dot } from 'lucide-react';



const NoSoloJourneys = ({ backgroundImageUrl }) => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen bg-contain bg-center p-8 pt-0 mb-8 bg-no-repeat"
      style={{ backgroundImage: `url(${assets.palace})` }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Heading</h1>
        <p className="text-xl text-center mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit.d.</p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mx-auto">
          {/* For Product Founders */}
          <div className="bg-blue rounded-xl shadow-lg overflow-hidden flex flex-col max-w-md w-full">
            <div className="p-6 flex-grow">
              <h2 className="text-3xl font-bold text-white mb-6 font-Inter">For Heading1</h2>
              <ul className="space-y-4 font-OpenSans flex flex-col gap-2 w-[90%]">
                {[
                  "sample text",
                  "sample text",  
                  "sample text",
                  "sample text",
                  "sample text",
                  "sample text",
                
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-yellow-400 text-3xl font-extrabold leading-none"><Dot strokeWidth={8} /></span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-400 px-4 hover:bg-yellow-500">
              <button
                className="w-full py-2 text-navy-900 font-extrabold text-lg transition-transform transform 
               hover:scale-105 active:scale-95 active:bg-yellow-400 active:shadow-md 
               active:translate-y-1 active:shadow-lg"
                onClick={() => window.location.href = 'https://youtube.com'}
              >
                Contact Now
              </button>
            </div>

          </div>

          {/* For Service Providers */}
          <div className="bg-blue rounded-xl shadow-lg overflow-hidden flex flex-col max-w-md w-full">
            <div className="p-6 flex-grow">
              <h2 className="text-3xl font-bold text-white mb-6 font-Inter">For Heading2</h2>
              <ul className="space-y-4 font-OpenSans flex flex-col gap-2 w-[84%]">
                {[
                  "sample text",
                  "sample text",
                  "sample text",
                  "sample text",
                  "sample text",
                  "sample text",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-yellow-400 text-3xl font-extrabold leading-none"><Dot strokeWidth={8} /></span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-400 px-4 hover:bg-yellow-500">
              <button className="w-full py-2 text-navy-900 font-extrabold text-lg transition-transform transform 
               hover:scale-105 active:scale-95 active:bg-yellow-400 active:shadow-md 
               active:translate-y-1 active:shadow-lg">Contact Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoSoloJourneys;