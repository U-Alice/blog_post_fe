import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Search
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded">
          Create New Record
        </button>
      </div>
    </header>
  );
};

export default Header;
