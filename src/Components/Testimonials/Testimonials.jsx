import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft  } from 'lucide-react';
import { assets } from '../../assets/assets';
import './Testimonials.css'

const testimonials = [
    {
        id: 1,
        name: 'Mohan',
        role: 'human',
        image: assets.mohan,
        quote: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        rating: 4.5,
    },
    {
        id: 2,
        name: 'Sultan Refai',
        role: 'human',
        image: assets.sultan,
        quote: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        rating: 5,
    },
    {
        id: 3,
        name: 'Ragapriya',
        role: 'Human',
        image: assets.ragapriya,
        quote: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        rating: 4,
    },
    {
        id: 4,
        name: 'NEERAJ',
        role: 'Human',
        image: assets.neeraj,
        quote: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        rating: 4.5,
    },
    {
        id: 5,
        name: 'IRFAN',
        role: 'human',
        image: assets.irfan,
        quote: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        rating: 5,
    },
    {
        id: 6,
        name: 'SAI PRASAD RODE',
        role: 'Human',
        image: assets.SaiPrasadRode,
        quote: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        rating: 4,
    },
    {
        id: 7,
        name: 'YAMINI',
        role: 'Human',
        image: assets.Yamini,
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        rating: 4.5,
    }
];
const TestimonialCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(3);
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const centerIndex = Math.floor(testimonials.length / 2);
        const newProfiles = testimonials.map((testimonial, index) => ({
            ...testimonial,
            size: getSize(index, centerIndex),
            position: getPosition(index, centerIndex),
        }));
        setProfiles(newProfiles);
    }, []);


    const getSize = (index, centerIndex) => {
        if (index === centerIndex) return 'xl';
        if (index === centerIndex - 1 || index === centerIndex + 1) return 'lg';
        if (index === centerIndex - 2 || index === centerIndex + 2) return 'md';
        return 'sm';
    };

    const getPosition = (index, centerIndex) => {
        const isLeft = index < centerIndex;
        const distance = Math.abs(index - centerIndex);
        if (isLeft) {
            return distance === 1 ? 'left-near' : distance === 2 ? 'left-mid' : 'left-far';
        } else if (index > centerIndex) {
            return distance === 1 ? 'right-near' : distance === 2 ? 'right-mid' : 'right-far';
        }
        return 'center';
    };

    const handleClick = (clickedIndex) => {
        const diff = clickedIndex - activeIndex;
        const newProfiles = profiles.map((profile, index) => {
            const newIndex = (index - diff + profiles.length) % profiles.length;
            return {
                ...profiles[newIndex],
                size: getSize(index, 3),
                position: getPosition(index, 3),
            };
        });
        setProfiles(newProfiles);
        setActiveIndex(3);
    };

    const handleNext = () => {
        const newIndex = (activeIndex + 1) % profiles.length;
        handleClick(newIndex);
    };

    const handlePrevious = () => {
        const newIndex = (activeIndex - 1 + profiles.length) % profiles.length;
        handleClick(newIndex);
    };

    const sizeClasses = {
        sm: 'w-8 h-8 md:w-8 md:h-8',
        md: 'w-12 h-12 md:w-16 md:h-16',
        lg: 'w-16 h-16 md:w-20 md:h-20',
        xl: 'w-24 h-24 md:w-32 md:h-32',
    };

    const positionStyles = {
        'left-far': { left: '20%', top: '50%' },
        'left-mid': { left: '5%', top: '40%' },
        'left-near': { left: '10%', top: '80%' },
        'center': { left: '50%', bottom: '-10%' },
        'right-near': { right: '5%', top: '40%' },
        'right-mid': { right: '20%', top: '50%' },
        'right-far': { right: '10%', top: '80%' },
    };

    return (
        <div className="max-w-6xl mx-auto p-4 md:my-20">
            <h2 className="text-3xl font-bold text-center mb-2">
                Heading
            </h2>
            <p className="text-center text-lg">Here's what they have to say.</p>

            <div className="relative h-[600px]">
                <div className="absolute inset-0 h-1/2 -top-20">
                    {profiles.map((profile, index) => (
                        <button
                            key={profile.id}
                            className={`profile-button
                              absolute transition-all duration-500 ease-in-out rounded-full overflow-hidden
                              ${sizeClasses[profile.size]}
                              ${index === activeIndex ? 'active z-30' : 'z-10 grayscale'}
                          `}
                            style={{
                                ...positionStyles[profile.position],
                                transform: 'translate(-50%, -50%)',
                            }}
                            onClick={() => handleClick(index)}
                        >
                            <img src={profile.image} alt={profile.name} className="w-full h-full object-cover object-top" />
                        </button>
                    ))}~
                </div>

                <div className="absolute flex flex-row items-center top-14 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-2xl">
                    <img src={assets.double} alt='' className='w-10 h-10 md:w-16 md:h-16 absolute -top-10 -left-2 md:-left-6' />
                    <ChevronLeft color='black' size={100} onClick={handlePrevious} />
                    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300">
                        <div className="relative text-center mb-4">
                            <blockquote className="text-base md:text-lg md:px-8">
                                {profiles[activeIndex]?.quote}
                            </blockquote>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-lg">{profiles[activeIndex]?.name}</h3>
                            <p className="text-gray-600">{profiles[activeIndex]?.role}</p>
                            {/* <div className="flex justify-center mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < Math.floor(profiles[activeIndex]?.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div> */}
                        </div>
                    </div>
                    <ChevronRight color='black' size={100} onClick={handleNext} />
                    <img src={assets.double} alt='' className='w-5 h-5 absolute bottom-0 right-0 rotate-180' />
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;