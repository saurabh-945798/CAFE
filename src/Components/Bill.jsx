import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const PrintBill = () => {
  const billRef = useRef();
  const { state } = useLocation();
  const order = state?.order;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div
        className="w-full max-w-4xl bg-white rounded-lg shadow-lg"
        id="bill-container"
      >
        {/* Header */}
        <div className="text-center py-6 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-t-lg">
          <h1 className="text-4xl font-extrabold">COLDROCK CAFE</h1>
          <p className="text-sm mt-2">123 Gourmet Street, Flavor Town</p>
          <p className="text-sm">Phone: +123 456 789</p>
        </div>

        {/* Bill Content */}
        <div
          ref={billRef}
          id="bill"
          className="p-8 bg-gray-50 rounded-b-lg"
        >
          {/* Customer Information */}
          <div className="mb-6 border-b pb-4">
            <div className="flex justify-between">
              <p>
                <span className="font-semibold">Customer:</span>{" "}
                {order?.name || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Table Number:</span>{" "}
                {order?.tableNumber || "N/A"}
              </p>
            </div>
            <p className="mt-2">
              <span className="font-semibold">Date:</span>{" "}
              {order?.timestamp
                ? new Date(order.timestamp).toLocaleString()
                : new Date().toLocaleString()}
            </p>
          </div>

          {/* Order Items */}
          <table className="w-full mb-6 text-sm border border-gray-300 rounded">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-4 text-left">Item</th>
                <th className="py-3 px-4 text-center">Qty</th>
                <th className="py-3 px-4 text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {order?.cartItems?.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-300 hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4 text-center">{item.qty}</td>
                  <td className="py-3 px-4 text-right">₹{item.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total */}
          <div className="text-right text-xl font-bold border-t border-gray-300 pt-4">
            Total: ₹{order?.totalPrice || "0.00"}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-4 bg-gray-100">
          <p className="text-sm text-gray-600">
            Thank you for dining with us! We hope to see you again soon.
          </p>
        </div>

        {/* Print Button */}
        <div className="text-center py-4 bg-white">
          <button
            onClick={handlePrint}
            className="bg-blue-600 text-white px-8 py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Print Bill
          </button>
        </div>
      </div>

      {/* Print Styles */}
      <style>
        {`
          @media print {
            body {
              margin: 0;
              padding: 0;
              background: white;
            }

            #bill-container {
              box-shadow: none;
              background: white;
              border: none;
              padding: 0;
            }

            #bill-container .rounded-lg {
              border-radius: 0 !important;
            }

            #bill-container .bg-gray-50 {
              background-color: white !important;
            }

            #bill-container .bg-gray-100 {
              background-color: white !important;
            }

            #bill-container .rounded-t-lg, #bill-container .rounded-b-lg {
              border-radius: 0 !important;
            }

            #bill-container .shadow-lg {
              box-shadow: none !important;
            }

            .hover\\:bg-gray-100 {
              background-color: white !important;
            }

            button {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PrintBill;
