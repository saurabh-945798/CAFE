import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const carouselItems = [
  {
    id: 1,
    type: 'image',
    title: 'Annual Sports Day',
    description: "Celebrating Excellence in Sports: Where Every Athlete Shines",
    image: 'https://i.postimg.cc/x1xJ3Xpx/Black-Modern-Fried-Chicken-Ramadhan-Special-Offer-Banner.gif',
    link: '#',
  },
  {
    id: 2,
    type: 'image',
    title: 'Science Exhibition',
    description: 'Showcasing Student Innovations: Igniting Curiosity, Inspiring Tomorrow',
    image: 'https://i.postimg.cc/524rdrDH/Brown-and-White-Simple-Coffee-Banner-1.gif', // Example video URL
    link: '#',
  },
  {
    id: 3,
    type: 'image',
    title: 'Cultural Fest',
    description: 'Embracing Diversity and Creativity: Unity in Diversity, Expression in Art',
    image: 'https://i.postimg.cc/Bb3g5L08/Black-Modern-Fried-Chicken-Ramadhan-Special-Offer-Banner-1.gif',
    link: '#',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  return (
    <div className="px-4 lg:px-6 py-10 bg-white">
      <div className="relative">
        <div className="relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)] bg-black rounded-2xl dark:bg-neutral-800">
          <div className="absolute top-0 bottom-0 left-0 flex transition-transform duration-700">
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex-shrink-0 w-full h-full flex flex-col ${
                  item.type === 'image' ? 'bg-cover bg-center bg-no-repeat' : ''
                }`}
                style={
                  item.type === 'image'
                    ? {
                        backgroundImage: `url(${item.image})`,
                        transform: `translateX(-${currentIndex * 100}%)`,
                      }
                    : { transform: `translateX(-${currentIndex * 100}%)` }
                }
              >
                {item.type === 'image' ? (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : null}
                {item.type === 'image' ? null : (
                  <div className="mt-auto w-2/3 md:max-w-lg pl-5 pb-5 md:pl-10 md:pb-10">
                    <span className="block text-white">{item.title}</span>
                    <span className="block text-white text-xl md:text-3xl">{item.description}</span>
                    <div className="mt-5">
                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100"
                        href={item.link}
                      >
                        Admission Now
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={prevSlide}
          className="absolute inset-y-0 left-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-l-2xl focus:outline-none focus:bg-white/20"
          aria-label="Previous slide"
        >
          <span className="text-2xl" aria-hidden="true">
            &lt;
          </span>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute inset-y-0 right-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-r-2xl focus:outline-none focus:bg-white/20"
          aria-label="Next slide"
        >
          <span className="text-2xl" aria-hidden="true">
            &gt;
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
