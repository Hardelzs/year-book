/* eslint-disable react/prop-types */
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";

const Navigation = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Profile Icon to Toggle Sidebar */}
      <div className="relative flex flex-col justify-center items-center">
        <CgProfile
          size={30}
          onClick={toggleSidebar}
          className="cursor-pointer hover:text-gray-500 text-[#151a21]"
        />
        {user.name}
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed top-0 transition-all duration-75 right-0 h-full w-72 rounded-l-xl bg-[#151a21] text-white shadow-lg z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-1xl hover:text-red-500"
            onClick={toggleSidebar}
          >
            <CgClose />
          </button>

          {/* Sidebar Content */}
          <div className="mt-4 px-6">
            {/* <div className="w-64 bg-gray-800 text-white fixed top-0 right-0 h-full p-4"> */}
              <div className="flex flex-col items-center">
                <img
                  src={user.image || "https://via.placeholder.com/100"}
                  alt="User"
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p>@{user.username}</p>
                <p>{user.email}</p>
                <button
                  className="bg-red-500 mt-4 px-4 py-2 rounded hover:bg-red-600"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </div>
              <div className="mt-8">
                <button className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded">
                  Option 1
                </button>
                <button className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded">
                  Option 2
                </button>
              </div>
            </div>
          </div>
        // </div>
      )}
    </>
  );
};

export default Navigation;
