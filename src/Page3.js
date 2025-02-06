import React, { useState } from "react";

const Page3 = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const items = [
    {
      id: 1,
      img: "https://baroque.pk/cdn/shop/files/95_5cf61249-b425-4784-9840-5e1c13058fba.jpg?v=1727772400&width=1000",
      name: "Embroidered Velvet Shawl",
      price: "PKR 19,990.00",
    },
    {
      id: 2,
      img: "https://baroque.pk/cdn/shop/files/93_73698153-d24a-4cb3-89f2-c3a7c9cc3577.jpg?v=1727772808&width=1000",
      name: "Embroidered Velvet Shawl",
      price: "PKR 19,990.00",
    },
    {
      id: 3,
      img: "https://baroque.pk/cdn/shop/files/69_c21788d0-3263-46c3-9342-7b9073cd52f8.jpg?v=1727772896&width=1000",
      name: "Embroidered Velvet Shawl",
      price: "PKR 19,990.00",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gray-100">
      {/* Header Button to Toggle Cart */}
      <button
        onClick={toggleCart}
        className="fixed top-4 right-4 bg-black text-white px-4 py-2 rounded"
      >
        {isCartOpen ? "Close Cart" : "Open Cart"}
      </button>

      {/* Cart Container */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <h2 className="text-lg font-bold">My Bag</h2>
            <button onClick={toggleCart} className="text-gray-500 text-xl">
              &times;
            </button>
          </div>

          {/* Free Shipping Notice */}
          <div className="px-4 py-2 text-center text-sm text-gray-500 border-b">
            YOU ARE ELIGIBLE FOR FREE SHIPPING
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex p-4 border-b">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <p className="text-sm font-bold mb-1">{item.name}</p>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    {item.price}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded">
                      <button className="px-2">-</button>
                      <span className="px-4">1</span>
                      <button className="px-2">+</button>
                    </div>
                    <button className="text-sm text-red-500 underline">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-4 border-t">
            <div className="text-sm text-gray-500 mb-2">
              Taxes and shipping calculated at checkout
            </div>
            <button className="w-full bg-black text-white py-2 rounded">
              Checkout - PKR 59,970.00
            </button>
          </div>
        </div>
      </div>

      {/* Background Overlay (Optional for closing cart on outside click) */}
      {isCartOpen && (
        <div
          onClick={toggleCart}
          className="fixed inset-0 bg-black bg-opacity-50"
          style={{ zIndex: 999 }}
        ></div>
      )}
    </div>
  );
};

export default Page3;
