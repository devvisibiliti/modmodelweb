import React, { useRef, useState, useEffect } from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { assets } from '../../assets/assets';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showControls, setShowControls] = useState(true); // Manage visibility of play/pause buttons

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hide pause button after 1 second when video is playing
  useEffect(() => {
    let timeout;
    if (isPlaying && showControls) {
      timeout = setTimeout(() => setShowControls(false), 1000);
    }
    return () => clearTimeout(timeout);
  }, [isPlaying, showControls]);

  const handlePlayPauseVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setShowControls(true); // Show controls when video plays
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseMove = () => {
    if (isPlaying) {
      setShowControls(true); // Re-show controls on mouse movement
    }
  };

  return (
    <div className="relative w-full mx-auto p-4 font-sans mb-8">
      {/* Background Image */}
      <img
        src={assets.central}
        alt="Palace Background"
        className="mt-40 reflection opacity-20 absolute inset-0 w-full h-full object-contain z-0"
      />

      <div className="relative z-10 text-center mb-16">
        <p className="text-base uppercase tracking-wide mb-5 font-OpenSans">
          Text
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-Montserrat leading-snug lg:leading-tight">
          Text<br />Text
        </h1>
        <p className="text-lg mx-auto mb-4 font-OpenSans md:max-w-[45%]">
          Text
        </p>
        <div className="bg-yellow-400 px-4 inline-block rounded-lg hover:bg-white hover:shadow-[0_0_15px_5px_rgba(250,204,21,0.8)] transition-shadow duration-300">
          <button
            className=" text-black font-extrabold py-2 px-4 rounded-md transition duration-300 text-lg transform hover:scale-105 active:scale-75 active:bg-yellow-400 active:shadow-md active:translate-y-1 active:shadow-lg"
            style={{ height: '45px' }}
            onClick={() => window.location.href = 'https://youtube.com'}
          >
            Explore Services
          </button>
        </div>
      </div>

      <div className="relative" onMouseMove={handleMouseMove}>
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
          <img src={assets.sun} className="w-28 h-28 rounded-full" alt="Sun Icon" />
        </div>

        <div onClick={handlePlayPauseVideo} className="border-4 max-w-3xl mx-auto border-black rounded-lg overflow-hidden relative">
          {/* Video Element */}
          <video
            ref={videoRef}
            src={assets.fff}
            className="w-full h-auto object-cover"
            controls={isMobile}
            poster={assets.fff}
          >
            <source src={assets.heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <img src={assets.videoimg} alt="Founders meeting" className={`w-full h-full absolute top-0 bottom-0 object-cover ${isPlaying ? 'hidden' : 'block'}`} /> */}
          {!isMobile && (
            <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-500 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
              {!isPlaying ? (
                <FaPlayCircle
                  size={64}
                  className="text-white opacity-80 hover:opacity-100 cursor-pointer"
                  onClick={handlePlayPauseVideo}
                />
              ) : (
                <FaPauseCircle
                  size={64}
                  className="text-white opacity-80 hover:opacity-100 cursor-pointer"
                  onClick={handlePlayPauseVideo}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
