import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Modal from "react-modal";

// Set the modal root for accessibility
Modal.setAppElement("#root");

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const products = [
    {
      id: 1,
      name: "Water Bottle",
      description: "Reusable water bottle to stay hydrated.",
      price: "£10.18",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      id: 2,
      name: "Veggie Lover",
      description: "Healthy veggies on your pizza.",
      price: "£14.90",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Tropicana Juice",
      description: "Fresh orange juice.",
      price: "£11.11",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Trio Cheese",
      description: "Mouth-watering cheese combo.",
      price: "£16.93",
      image: "https://images.unsplash.com/photo-1568901346375",
    },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);
      if (isProductInCart) {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setShowModal(true);
        setTimeout(() => setShowModal(false), 2000);
        return updatedCart;
      }
      const updatedCart = [...prevCart, { ...product, quantity: 1 }];
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000);
      return updatedCart;
    });
  };

  const handleQuantityChange = (value, id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(value) || 1 } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity, 0);
  };

  const tax = 0.1; // 10% tax rate
  const subtotal = calculateSubtotal();
  const total = subtotal + subtotal * tax;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-green-500 py-4 shadow-md">
        <div className="container mx-auto text-white text-2xl font-semibold text-center flex justify-between items-center px-4">
          🍕 Zomato-like Cart UI
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-200"
          >
            Cart
          </button>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        {/* Product Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md overflow-hidden bg-white p-4 hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-2 rounded-lg"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-1 mb-2">{product.description}</p>
              <button
                className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition duration-200"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Cart */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-gray-700 bg-opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="w-96 bg-white h-full shadow-lg fixed top-0 right-0 z-50 transition-transform transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b shadow-md flex justify-between items-center">
              <h2 className="text-lg font-bold mb-2">Your Cart 🛒</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-red-500 hover:text-red-600 transition duration-200"
              >
                Close
              </button>
            </div>
            <div className="p-4 space-y-4">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty!</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 object-cover"
                      />
                      <div>
                        <h3 className="text-sm font-semibold">{item.name}</h3>
                        <p className="text-gray-500 text-xs">£{item.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        className="border rounded px-1 w-12 text-center"
                        onChange={(e) => handleQuantityChange(e.target.value, item.id)}
                      />
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="p-4 border-t bg-gray-50">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax (10%)</span>
                <span>£{(subtotal * tax).toFixed(2)}</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold mt-2">
                <span>Total</span>
                <span>£{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Item Added to Cart */}
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "8px",
          },
        }}
      >
        <h3 className="text-lg font-bold text-center">✅ Item added to cart!</h3>
      </Modal>
    </div>
  );
};

export default App;
