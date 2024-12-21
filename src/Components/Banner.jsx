import React from 'react';
import 'tailwindcss/tailwind.css';

const Banner = () => {
  return (
    <div className="relative w-full">
      {/* Banner Image */}
      <img
        src={'https://i.postimg.cc/3RXjw8v3/Black-Modern-Fried-Chicken-Ramadhan-Special-Offer-Banner-2.gif'}
        alt="Promo Banner"
        className="w-full h-auto object-cover"
      />

      {/* Optional Overlay for Styling */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20"></div>
    </div>
  );
};

export default Banner;
