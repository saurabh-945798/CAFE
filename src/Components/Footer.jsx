import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-red-500 mb-3">ColdRock.</h2>
          <p className="text-sm leading-6">
            Indulge in a diverse menu crafted to delight every palate. From aromatic, handcrafted coffees to mouthwatering dishes and decadent desserts, Cold Rock Café has something for everyone. Whether you’re grabbing a quick bite or enjoying a leisurely meal, our warm atmosphere and attentive service will make every visit memorable. We’re here to elevate your dining experience with fresh ingredients, bold flavors, and a commitment to quality. Visit us today and treat yourself to something delicious!
          </p>
          <div className="flex gap-4 mt-4">
            {/* Facebook Image */}
            <a href="#" className="text-white hover:text-red-500">
              <img
                src="https://slashtraders.com/wp-content/uploads/2021/04/fb.png" // replace with actual Facebook image URL
                alt="Facebook"
                className="w-10 h-10 object-cover rounded-full"
              />
            </a>
           
            {/* Instagram Image */}
            <a href="#" className="text-white hover:text-red-500">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" // replace with actual Instagram image URL
                alt="Instagram"
                className="w-10 h-10 object-cover rounded-full"
              />
            </a>
            {/* Mail Image */}
            <a href="mailto:coldrockcafe@gmail.com" className="text-white hover:text-red-500">
              <img
                src="https://static.vecteezy.com/system/resources/previews/013/948/544/non_2x/gmail-logo-on-transparent-white-background-free-vector.jpg" // replace with actual Mail icon image URL
                alt="Mail"
                className="w-10 h-10 object-cover rounded-full"
              />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">GET IN TOUCH</h3>
          <p className="text-sm">+91-9891091796 ,9891091797</p>
          <p className="text-sm">coldrockcafe@gmail.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>Copyright 2024 &copy; ColdRock Cafe - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
