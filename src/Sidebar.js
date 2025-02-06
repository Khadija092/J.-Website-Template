import React from "react";

const Sidebar = () => {
  return (
    <aside className="border-r border-gray-300 p-4 min-h-screen bg-white">
      <h2 className="text-lg text-left font-semibold mb-4 border-b border-gray-300">Shopping Options</h2>
      <div>
        <div className="mb-4 border-b border-gray-300">
          <select className="w-full ">
            <option>Color Family</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="mb-4 mb-4 border-b border-gray-300">
          <select className="w-full">
            <option>Season</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="mb-4 mb-4 border-b border-gray-300">
          <select className="w-full ">
            <option>Product Category</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="mb-4 mb-4 border-b border-gray-300">
          <select className="w-full ">
            <option>Size</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="mb-4 mb-4 border-b border-gray-300">
          <select className="w-full ">
            <option>Fabric</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
