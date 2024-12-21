// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Slider from "./Components/Slider";
// import Six from "./Components/Six";
// import FoodGrid from "./Components/FoodGrid";
// import Footer from "./Components/Footer";
// import Cart from "./Components/Cart";
// import Pizza from "./Components/Pizza";
// import Payment from "./Components/Payment";
// import Admin from "./Components/Admin";
// import Menu from "./Components/Menu"; // Import the Menu Component
// import Checkout from "./Components/Track";
// import Bill from './Components/Bill'
// import Banner from "./Components/Banner";
// import Navbar from "./Components/Navbar";
// const App = () => {
//   const [cartItems, setCartItems] = useState([]); // State for managing cart items

//   // Function to handle adding items to the cart
//   const handleAddToCart = (item) => {
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
//     if (existingItem) {
//       setCartItems(
//         cartItems.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, qty: cartItem.qty + 1 }
//             : cartItem
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...item, qty: 1 }]);
//     }
//   };

//   return (
//     <Router>
//       <div className="bg-gray-50 min-h-screen">
//         {/* Define application routes */}
//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//               <Navbar />
//                 <Slider />
//                 <Six />
//                 <Banner />
//                 <FoodGrid onAddToCart={handleAddToCart} />
              
//               </>
//             }
//           />

//           {/* Pizza Page */}
//           <Route path="/pizza" element={<Pizza />} />

//           {/* Payment Page */}
//           <Route path="/payment" element={<Payment />} />

//           <Route path="/checkout" element={<Checkout />} />

//           {/* Admin Page */}
//           <Route path="/admin" element={<Admin />} />

//           <Route path="/bill" element={<Bill />} />

//           {/* Menu Page */}
//           <Route
//             path="/menu"
//             element={<Menu onAddToCart={handleAddToCart} />}
//           />
//         </Routes>

//         {/* Footer Component */}
//         <Footer />

//         {/* Floating Cart (always visible) */}
//         <Cart cartItems={cartItems} setCartItems={setCartItems} />
//       </div>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./Components/Slider";
import Six from "./Components/Six";
import FoodGrid from "./Components/FoodGrid";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Pizza from "./Components/Pizza";
import Payment from "./Components/Payment";
import Admin from "./Components/Admin";
import Menu from "./Components/Menu";
import Checkout from "./Components/Track";
import Bill from "./Components/Bill";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import AdminLogin from "./Components/Login";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Slider />
                <Six />
                <Banner />
                <FoodGrid onAddToCart={handleAddToCart} />
              </>
            }
          />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/bill" element={<Bill />} />
          <Route
            path="/menu"
            element={<Menu onAddToCart={handleAddToCart} />}
          />
        </Routes>
        <Footer />
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </Router>
  );
};

export default App;
