// import React from "react";
// import Swal from "sweetalert2";

// const FoodCard = ({ name, price, description, image, rating, onAddToCart }) => {
//   const handleAddToCart = () => {
//     const item = { name, price, description, image, rating, id: name };
//     onAddToCart(item);

//     // Show SweetAlert when item is added to cart
//     Swal.fire({
//       icon: 'success',
//       title: `<strong>Added to Cart!</strong>`,
//       html: `
//         <div style="display: flex; align-items: center; gap: 10px;">
//           <img src="${image}" alt="${name}" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover;">
//           <span style="font-size: 16px; font-weight: 500;">${name} has been added to your cart!</span>
//         </div>
//       `,
//       showConfirmButton: false, // No confirm button for a clean look
//       background: '#f9f9f9', // Light gray background
//       timer: 3000, // Auto-close after 3 seconds
//       timerProgressBar: true, // Progress bar for better user feedback
//       position: 'Center', // Positioned at the top-right
//       toast: true, // Toast-style alert
//       customClass: {
//         popup: 'rounded-xl shadow-lg border border-gray-200', // Rounded corners and light border
//         title: 'text-lg font-bold text-gray-700', // Custom title styling
//         htmlContainer: 'text-gray-600', // Styling for the text inside the popup
//       },
//       didOpen: () => {
//         const toast = Swal.getPopup();
//         toast.style.borderColor = '#4CAF50'; // Add a green border to match success theme
//       },
//     });
    
//   };

//   return (
//     <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 border border-gray-200">
//       <div className="relative">
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 hover:scale-105"
//         />
//         <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-yellow-400 text-gray-900 text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full shadow-md">
//           ⭐ {rating}
//         </div>
//       </div>

//       <div className="p-4 sm:p-6">
//         <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{name}</h3>
//         <p className="text-gray-600 text-sm sm:text-base leading-snug sm:leading-relaxed mb-4 sm:mb-5 line-clamp-2 sm:line-clamp-3">
//           {description}
//         </p>

//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
//           <span className="text-green-600 font-extrabold text-lg sm:text-xl">₹{price}</span>
//           <button
//             onClick={handleAddToCart}
//             className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 text-sm sm:text-base"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodCard;





import React from "react";
import Swal from "sweetalert2";

const FoodCard = ({
  name,
  price,
  description,
  image,
  rating,
  category,
  onAddToCart,
}) => {
  const handleAddToCart = () => {
    const item = { name, price, description, image, rating, category, id: name };
    onAddToCart(item);

    Swal.fire({
      icon: "success",
      title: `<strong>Added to Cart!</strong>`,
      html: `
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="${image}" alt="${name}" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover;">
          <span style="font-size: 16px; font-weight: 500;">${name} has been added to your cart!</span>
        </div>
      `,
      showConfirmButton: false,
      background: "#f9f9f9",
      timer: 3000,
      timerProgressBar: true,
      position: "top-right",
      toast: true,
      customClass: {
        popup: "rounded-xl shadow-lg border border-gray-200",
        title: "text-lg font-bold text-gray-700",
        htmlContainer: "text-gray-600",
      },
    });
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-[2px] rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
      {/* Gradient Border */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 hover:scale-105"
          />
          {/* Rating Badge with Tooltip */}
          <div
            className="absolute top-3 right-3 bg-yellow-400 text-gray-900 text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-md cursor-pointer group dark:bg-yellow-500 dark:text-gray-100"
            title="Rating"
          >
            ⭐ {rating}
            <div className="absolute hidden group-hover:block bg-black text-white text-xs rounded-lg p-1 -mt-2">
              {rating} out of 5
            </div>
          </div>
          {/* Dynamic Category Badge */}
          {category && (
            <div
              className={`absolute top-3 left-3 px-2 py-1 rounded-full shadow-md text-xs font-bold ${
                category.toLowerCase() === "vegan"
                  ? "bg-green-600 text-white"
                  : "bg-green-600 text-white"
              }`}
            >
              {category}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {name}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-2 dark:text-gray-400">
            {description}
          </p>

          <div className="flex flex-row items-center justify-between mt-4">
            {/* Price */}
            <span className="text-green-600 font-extrabold text-lg sm:text-xl dark:text-green-500">
              ₹{price}
            </span>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="relative group bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              <span className="relative z-10">Add to Cart</span>
              {/* Ripple Effect */}
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-30 transition-opacity"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
