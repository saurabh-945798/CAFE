import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, setCartItems }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const cartRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, [setCartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from your cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e63946",
      cancelButtonColor: "#457b9d",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        Swal.fire("Removed!", "The item has been removed.", "success");
      }
    });
  };

  const handleIncreaseQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleDecreaseQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleCheckout = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );

    Swal.fire({
      title: "Proceed to Checkout?",
      text: `You are about to checkout items worth ₹${totalPrice}.`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#38b000",
      cancelButtonColor: "#e63946",
      confirmButtonText: "Yes, Checkout!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/payment", { state: { cartItems, totalPrice } });
      }
    });
  };

  const handleOutsideClick = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsCartVisible(false);
    }
  };

  useEffect(() => {
    if (isCartVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isCartVisible]);

  const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <>
      {/* Background Overlay */}
      {isCartVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"></div>
      )}

      <div
        ref={cartRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[80%] lg:w-[30%] p-6 bg-white shadow-xl transform transition-transform duration-500 z-50 ${
          isCartVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setIsCartVisible(false)}
            className="text-gray-600 hover:text-red-500 text-2xl cursor-pointer transition-colors"
          />
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className="overflow-y-auto h-[60vh] space-y-4">
              {cartItems.map((food) => (
                <div
                  key={food.id}
                  className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md"
                >
                  <img
                    src={food.image }
                    alt={food.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-grow ml-3">
                    <h3 className="text-sm font-semibold text-gray-700">
                      {food.name}
                    </h3>
                    <span className="text-gray-600 text-sm">
                      ₹{food.price} x {food.qty}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDecreaseQty(food.id)}
                      className="px-2 py-1 text-gray-600 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-3">{food.qty}</span>
                    <button
                      onClick={() => handleIncreaseQty(food.id)}
                      className="px-2 py-1 text-gray-600 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(food.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Sticky Footer */}
            <div className="mt-4 border-t pt-4 sticky bottom-0 bg-white">
              <div className="flex justify-between font-bold text-gray-700">
                <span>Total:</span>
                <span>₹{totalPrice}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full mt-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-center text-gray-500">Your cart is empty</h2>
          </div>
        )}
      </div>

      {/* Floating Cart Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (cartItems.length > 0) {
              setIsCartVisible(!isCartVisible);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your cart is empty. Add items to view the cart.",
              });
            }
          }}
          className={`${
            cartItems.length === 0 ? "bg-gray-400" : "bg-green-500"
          } text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform`}
        >
          <FaShoppingCart />
          <span className="ml-2">{totalQty}</span>
        </button>
      </div>
    </>
  );
};

export default Cart;



























