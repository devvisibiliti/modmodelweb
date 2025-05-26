import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AIChatComponent = ({ heading, imgsrc }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const email = 'entrepreneursofmadras@gmail.com.';
  const tel = '+91 97107 27517';
  return (
    <section className='my-8 sm:mt-[-10rem] md:mt-[-10rem]'>
      <h2 className="text-2xl lg:text-3xl font-bold  text-center"> {/* Center text */}
        {heading}
      </h2>
      <div className="flex flex-col lg:flex-row mx-auto md:max-w-5xl items-center justify-center lg:justify-between md:gap-20 lg:px-20 p-8 lg:py-16">
        {/* Left side with image (Message Box) */}
        <div className="lg:w-1/2 md:scale-125 flex justify-center mb-8 lg:mb-0">
          <img
            src={imgsrc} // Replace with your image path
            alt="AI Chat"
            className="w-full max-w-sm"
          />
        </div>

        {/* Right side - Accordion */}
        <div className="w-[100%] lg:w-1/2 space-y-4">


          {/* Accordion Item 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div
              className={`flex justify-between items-center cursor-pointer pb-2 ${activeIndex === 0 ? 'border-b-2 border-gray-500' : ''}`}
              onClick={() => toggleAccordion(0)}
            >
              <h3 className="font-semibold text-lg">FAQ Heading</h3>
              <span>{activeIndex === 0 ? <ChevronUp className='bg-[#F9D549] rounded-full text-white' /> : <ChevronDown className='bg-[#F9D549] rounded-full text-black' />}</span>
            </div>
            {activeIndex === 0 && (
              <p className="mt-2 text-black">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatibus, quisquam facere inventore dolores perferendis eveniet cupiditate alias delectus sequi, tenetur distinctio recusandae corporis fugit dignissimos voluptate saepe. At, maiores?
              </p>
            )}
          </div>

          {/* Accordion Item 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div
              className={`flex justify-between items-center cursor-pointer pb-2 ${activeIndex === 1 ? 'border-b-2 border-gray-500' : ''}`}
              onClick={() => toggleAccordion(1)}
            >
              <h3 className="font-semibold text-lg">FAQ Heading</h3>
              <span>{activeIndex === 0 ? <ChevronUp className='bg-[#F9D549] rounded-full text-white' /> : <ChevronDown className='bg-[#F9D549] rounded-full text-black' />}</span>
            </div>
            {activeIndex === 1 && (
              <p className="mt-2 text-black">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem vel distinctio illum minus enim est libero. Nemo pariatur voluptatum fugit laudantium atque error ex! Id ab non ratione quisquam officiis.
              </p>
            )}
          </div>

          {/* Accordion Item 3 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div
              className={`flex justify-between items-center cursor-pointer pb-2 ${activeIndex === 2 ? 'border-b-2 border-gray-500' : ''}`}
              onClick={() => toggleAccordion(2)}
            >
              <h3 className="font-semibold text-lg">FAQ Headings</h3>
              <span>{activeIndex === 0 ? <ChevronUp className='bg-[#F9D549] rounded-full text-white' /> : <ChevronDown className='bg-[#F9D549] rounded-full text-black' />}</span>
            </div>
            {activeIndex === 2 && (
              <p className="mt-2 text-black">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae impedit sint consequuntur, dolores illum hic aliquam possimus corrupti, tenetur dolorem, debitis eaque aperiam esse explicabo velit a! Iusto, eaque enim.
              </p>
            )}
          </div>

          {/* Accordion Item 4 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div
              className={`flex justify-between items-center cursor-pointer pb-2 ${activeIndex === 3 ? 'border-b-2 border-gray-500' : ''}`}
              onClick={() => toggleAccordion(3)}
            >
              <h3 className="font-semibold text-lg">FAQ Headings</h3>
              <span>{activeIndex === 0 ? <ChevronUp className='bg-[#F9D549] rounded-full text-white' /> : <ChevronDown className='bg-[#F9D549] rounded-full text-black' />}</span>
            </div>
            {activeIndex === 3 && (
              <p className="mt-2 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae eos dignissimos vitae harum atque quisquam repudiandae cupiditate dolores error officiis deleniti enim itaque asperiores, corporis quas in tenetur doloremque.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIChatComponent;
