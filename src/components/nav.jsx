import React from "react";
import useAuth from "../context/authContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <div className="flex items-center w-full h-14 px-4 md:px-20 font-urbanist bg-white shadow-xl shadow-blue-gray-900/5">
      <div className="flex items-center">
        <img className="h-8 w-8" src={logo} alt="logo" />
      </div>
      <nav className="flex flex-grow justify-between items-center text-[#414141] ml-4 md:ml-12">
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="cursor-pointer hover:bg-blue-gray-50 hover:text-blue-gray-900 rounded-lg px-2 py-1 transition">
            Home
          </div>
          <div className="cursor-pointer hover:bg-blue-gray-50 hover:text-blue-gray-900 rounded-lg px-2 py-1 transition">
            Blogs
          </div>
          <div className="cursor-pointer hover:bg-blue-gray-50 hover:text-blue-gray-900 rounded-lg px-2 py-1 transition">
            Add
          </div>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          
          <div className="cursor-pointer hover:bg-blue-gray-50 hover:text-blue-gray-900 rounded-lg px-2 py-1 transition font-bold">
            Alice
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;