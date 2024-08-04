import React from "react";
import useAuth from "../context/authContext";
import logo from "../assets/logo.png"
const Sidebar = () => {
  const {logout} = useAuth();
  return (
    <div class="relative flex  h-14 px-20 font-urbanist w-full items-center flex-row rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <div class="">
        <img className="h-8 w-8" src={logo} alt="logo" />
      </div>
      <nav class="font-urbanist text-sm w-full font-normal text-[#414141] flex justify-between">
        <div className="flex min-w-[240px] flex-row gap-1 px-2 items-center h-full pl-12 ">
          <div class="flex items-center w-full  leading-tight transition-all rounded-lg outline-none  text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            Home
          </div>
          <div class="flex items-center w-full  leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            Blogs
          </div>
          <div class="flex items-center w-full leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            Add
          </div>
        </div>
        <div className="flex min-w-[240px] flex-row gap-1 px-2 items-center h-full pl-12 ">
          <div class="flex items-center w-fit transition-all rounded-lg outline-none  text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4968 15.605L20.4965 15.6047C19.0989 14.0533 18.25 12.0012 18.25 9.75V9C18.25 7.3424 17.5915 5.75269 16.4194 4.58058C15.2473 3.40848 13.6576 2.75 12 2.75C10.3424 2.75 8.75266 3.40848 7.58056 4.58058C6.40845 5.75269 5.74997 7.3424 5.74997 9V9.74957V9.75H5.24997C5.25305 11.7892 4.49778 13.7567 3.13097 15.27L20.4968 15.605ZM20.4968 15.605C20.5241 15.6353 20.5436 15.6719 20.5536 15.7115M20.4968 15.605L20.5536 15.7115M20.5536 15.7115C20.5636 15.7511 20.5637 15.7926 20.5539 15.8322M20.5536 15.7115L20.5539 15.8322M20.5539 15.8322C20.5441 15.8719 20.5248 15.9086 20.4976 15.939M20.5539 15.8322L20.4976 15.939M20.4976 15.939C20.4704 15.9695 20.4361 15.9928 20.3978 16.007L20.4976 15.939ZM9.79683 17.402L9.27452 17.355L9.25242 17.8789C9.23678 18.2495 9.29627 18.6194 9.4273 18.9664C9.55833 19.3133 9.75819 19.6302 10.0149 19.898C10.2715 20.1657 10.5797 20.3787 10.9209 20.5243C11.262 20.6698 11.6291 20.7448 12 20.7448C12.3709 20.7448 12.7379 20.6698 13.0791 20.5243C13.4202 20.3787 13.7284 20.1657 13.9851 19.898C14.2418 19.6302 14.4416 19.3133 14.5726 18.9664C14.7037 18.6194 14.7632 18.2495 14.7475 17.8789L14.7254 17.355L14.2031 17.402C12.7373 17.5341 11.2626 17.5341 9.79683 17.402Z"
                stroke="#696778"
              />
            </svg>
          </div>
          <div class="flex items-center w-full leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            Umugwaneza Alice
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
