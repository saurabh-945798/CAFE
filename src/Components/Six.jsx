import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

const Menu = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Pizza", image: "https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868924.jpg?t=st=1734193788~exp=1734197388~hmac=5d776f898898744cf1b2ebd5e2f52a9ebedbe9d19c6cafadda9300c339ed9242&w=740", path: "/pizza " },
    { name: "Burger", image: "https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9018.jpg?t=st=1734193862~exp=1734197462~hmac=8fef8a45bbaf02f071c3b7cb9c111efe1a0f19032d629f6eecc8f47fc258e487&w=740", path: "/" },
    { name: "Pasta", image: "https://img.freepik.com/free-psd/spaghetti-with-meatballs-tomato-sauce-bowl-closeup-shot-isolated-transparent-background_84443-1458.jpg?t=st=1734194133~exp=1734197733~hmac=3b0372d0b375544e98a3435918bf0489d83a0373d06c0cf4c2aaade1bb2ed853&w=740", path: "/" },
    { name: "Chicken", image: "https://img.freepik.com/free-psd/roasted-chicken-plate-wood-white-background_84443-1402.jpg?t=st=1734194265~exp=1734197865~hmac=0af06d19f3d096a075ba3656bb1fa4f1b9eb31ccfc2f192cf514540bf0d90eb2&w=740", path: "/" },
    { name: "Cake", image: "https://img.freepik.com/free-psd/kuchen-isolated-transparent-background_191095-40179.jpg?t=st=1734194215~exp=1734197815~hmac=2505134087ebad99b8019852635a98dc4857be1bfd83b3c2f34e644ebb9024cc&w=740", path: "/" },
    { name: "Coffee", image: "https://img.freepik.com/free-psd/delicious-coffee-cup-isolated_23-2151806499.jpg?t=st=1734194200~exp=1734197800~hmac=2b40fafefdef37f7d1a191ec4650ea26144303d665f5a12cabe28293488e61ec&w=996", path: "/" },
  ];

  const marqueeStyle = {
    display: "flex",
    gap: "1.5rem",
    animation: "marquee 15s linear infinite",
    whiteSpace: "nowrap",
  };

  const keyframesStyle = `
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }
  `;

  // Function to show "Coming Soon" alert
  const handleItemClick = (item) => {
    Swal.fire({
      title: `${item.name}`,
      text: "Coming Soon!",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="p-8">
      <style>{keyframesStyle}</style>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-2 italic">Best Of Cold Rock.</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.
        </p>
      </div>

      {/* Marquee Effect Section */}
      <div className="overflow-hidden relative">
        <div style={marqueeStyle}>
          {menuItems.concat(menuItems).map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[120px] mx-2"
              onClick={() => handleItemClick(item)} // Show alert on click
              style={{ cursor: "pointer" }} // Change cursor to pointer
            >
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-md border">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-gray-700 font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;






// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const foodItems = [
//   {
//     id: 1,
//     name: "Onion Pizza",
//     price: 150,
//     rating: 4.5,
//     tag: "Pizza",
//     description: "A delicious pizza topped with fresh onions for a delightful flavor.",
//     img: "https://content.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-13.jpg",
//   },
//   {
//     id: 2,
//     name: "Sushi Platter",
//     price: 650,
//     rating: 4.8,
//     tag: "Sushi",
//     description: "A fresh and authentic sushi platter.",
//     img: "https://images.unsplash.com/photo-1553621042-f6e147245754",
//   },
//   {
//     id: 3,
//     name: "Pasta Carbonara",
//     price: 300,
//     rating: 4.2,
//     tag: "Pasta",
//     description: "Creamy and cheesy pasta carbonara.",
//     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
//   },
//   {
//     id: 4,
//     name: "Caesar Salad",
//     price: 180,
//     rating: 4.1,
//     tag: "Salad",
//     description: "A fresh and healthy Caesar salad.",
//     img: "https://images.unsplash.com/photo-1582515073490-399813c962d2",
//   },
// ];

// function FoodCarousel({ cartItems, setCartItems }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const handleAddToCart = (item) => {
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
//     if (existingItem) {
//       const updatedCart = cartItems.map((cartItem) =>
//         cartItem.id === item.id
//           ? { ...cartItem, qty: cartItem.qty + 1 }
//           : cartItem
//       );
//       setCartItems(updatedCart);
//     } else {
//       setCartItems([...cartItems, { ...item, qty: 1 }]);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Heading */}
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//         🌟 Colrock Specials: Treat Your Taste Buds! 🌟
//       </h1>

//       {/* Carousel */}
//       <Slider {...settings}>
//         {foodItems.map((item) => (
//           <div key={item.id} className="px-2">
//             <div className="bg-white shadow-lg rounded-xl overflow-hidden relative">
//               {/* Tag */}
//               <span className="absolute top-2 left-2 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded">
//                 {item.tag}
//               </span>
//               {/* Rating */}
//               <span className="absolute top-2 right-2 bg-yellow-400 text-white text-sm font-bold px-2 py-1 rounded">
//                 ⭐ {item.rating}
//               </span>
//               {/* Image */}
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-40 object-cover rounded-t-xl"
//               />
//               {/* Content */}
//               <div className="p-4">
//                 <h2 className="text-xl font-bold">{item.name}</h2>
//                 <p className="text-gray-600 text-sm mb-2">{item.description}</p>
//                 <div className="flex items-center justify-between">
//                   <p className="text-green-500 font-bold text-lg">₹{item.price}</p>
//                   <button
//                     onClick={() => handleAddToCart(item)}
//                     className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default FoodCarousel;


















































// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const foodItems = [
//   {
//     id: 1,
//     name: "Onion Pizza",
//     price: 150,
//     rating: 4.5,
//     tag: "Pizza",
//     description: "A delicious pizza topped with fresh onions for a delightful flavor.",
//     img: "https://content.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-13.jpg",
//   },
//   {
//     id: 2,
//     name: "Sushi Platter",
//     price: 650,
//     rating: 4.8,
//     tag: "Sushi",
//     description: "A fresh and authentic sushi platter.",
//     img: "https://images.unsplash.com/photo-1553621042-f6e147245754",
//   },
//   {
//     id: 3,
//     name: "Pasta Carbonara",
//     price: 300,
//     rating: 4.2,
//     tag: "Pasta",
//     description: "Creamy and cheesy pasta carbonara.",
//     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
//   },
//   {
//     id: 4,
//     name: "Caesar Salad",
//     price: 180,
//     rating: 4.1,
//     tag: "Salad",
//     description: "A fresh and healthy Caesar salad.",
//     img: "https://images.unsplash.com/photo-1582515073490-399813c962d2",
//   },
// ];

// function FoodCarousel() {
//   const [cartItems, setCartItems] = useState(() => {
//     const savedCart = localStorage.getItem("cartItems");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     console.log("Cart items saved to localStorage:", cartItems); // Debugging statement
//   }, [cartItems]);

//   const handleAddToCart = (item) => {
//     console.log("Adding item to cart:", item); // Debugging statement
    
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    
//     if (existingItem) {
//       const updatedCart = cartItems.map((cartItem) =>
//         cartItem.id === item.id
//           ? { ...cartItem, qty: cartItem.qty + 1 }
//           : cartItem
//       );
//       setCartItems(updatedCart);
//       console.log("Updated cart:", updatedCart); // Debugging statement
//     } else {
//       const updatedCart = [...cartItems, { ...item, qty: 1 }];
//       setCartItems(updatedCart);
//       console.log("Added new item to cart:", updatedCart); // Debugging statement
//     }
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//         🌟 Colrock Specials: Treat Your Taste Buds! 🌟
//       </h1>
//       <Slider {...settings}>
//         {foodItems.map((item) => (
//           <div key={item.id} className="px-2">
//             <div className="bg-white shadow-lg rounded-xl overflow-hidden relative">
//               <span className="absolute top-2 left-2 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded">
//                 {item.tag}
//               </span>
//               <span className="absolute top-2 right-2 bg-yellow-400 text-white text-sm font-bold px-2 py-1 rounded">
//                 ⭐ {item.rating}
//               </span>
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-40 object-cover rounded-t-xl"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-bold">{item.name}</h2>
//                 <p className="text-gray-600 text-sm mb-2">{item.description}</p>
//                 <div className="flex items-center justify-between">
//                   <p className="text-green-500 font-bold text-lg">₹{item.price}</p>
//                   <button
//                     onClick={() => handleAddToCart(item)}
//                     className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default FoodCarousel;


