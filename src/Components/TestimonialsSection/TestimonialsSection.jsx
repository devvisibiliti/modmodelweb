import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { assets } from '../../assets/assets';


const TestimonialGrid = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust the scroll speed as needed

    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; // Reset scroll when it reaches half the width for seamless looping
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const scrollInterval = setInterval(autoScroll, 20); // Controls the speed of the scroll

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="bg-blue p-4 md:py-8 my-12 relative min-h-screen h-[855px] hidden md:block overflow-hidden">
      <p className='text-base font-medium w-2/3 text-center text-white mx-auto mb-6'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim voluptate deserunt recusandae laboriosam commodi amet officia consequatur eligendi numquam placeat, consectetur quod! Vitae ratione quae eius dolore ea possimus cum.
      </p>

      <div
        className="flex overflow-x-hidden space-x-8 p-8 whitespace-nowrap"
        ref={scrollContainerRef}
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Duplicate testimonials to create seamless infinite scroll */}
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {/* Testimonial 1 */}
            <div className="w-[372px] h-[626.71px] bg-white rounded-xl border-2 border-yellow-400 flex-shrink-0">
              <img
                src= {assets.fff}
                alt="Testimonial 1"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Testimonial 2 */}
            <div className=" w-[306px] h-[580px] bg-white rounded-xl border-2 border-yellow-400 flex-shrink-0">
              <img
                src= {assets.fff}
                alt="Testimonial 2"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Testimonial 3
            <div className="w-[300px] h-[620px] bg-white rounded-xl border-2 border-yellow-400 flex-shrink-0">
              <img
                src= {assets.ln3}
                alt="Testimonial 3"
                className="w-full h-full object-cover rounded-xl"
              />
            </div> */}

            {/* Testimonial 4 */}
            <div className=" w-[312px] h-[596px]   bg-white rounded-xl border-2 border-yellow-400 flex-shrink-0">
              <img
                src={assets.fff}
                alt="Testimonial 4"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Testimonial5 */}
            <div className="w-[302px] h-[520px]  bg-white rounded-xl border-2 border-yellow-400 flex-shrink-0">
              <img
                src= {assets.fff}
                alt="Testimonial 5"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

                      
                        {/* Testimonial 7 */}
                        <div className="w-[302px] h-[598px] bg-white rounded-xl border-2 border-yellow-400 flex-shrink-0">
              <img
                src= {assets.fff}
                alt="Testimonial 5"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* <p className='font-medium text-base flex items-center text-white absolute bottom-10 left-1/2 transform -translate-x-1/2 hover:text-gray-200 cursor-pointer'>
        See More <FaArrowRight className="ml-2" />
      </p> */}
    </div>
  );
};

export default TestimonialGrid;
