/* eslint-disable react/prop-types */
import { useState } from "react";
import { CgProfile, CgClose } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GrDocumentText } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { GoPeople } from "react-icons/go";
import { CiSettings } from "react-icons/ci";

const Navigation = ({ userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Profile Icon to Open Sidebar */}
      <div className="relative flex flex-col justify-center items-center">
        <CgProfile
          size={30}
          onClick={toggleSidebar}
          className="cursor-pointer hover:text-gray-500 text-[#151a21]"
        />
        {userData?.username || "User"}
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full p-2 rounded-l-xl w-72 bg-[#464240] text-white shadow-lg z-50 transition-all duration-200">
          {/* Profile Section */}
          <div className="flex flex-col items-center p-4 border-b border-gray-600">
            <img
              src={userData?.image || "https://x.com/yabaleftonline/status/1895040284167221633"}
              alt="User"
              className="w-20 h-20 rounded-full border border-gray-500"
            />
            <h3 className="mt-2 text-lg font-semibold">{userData?.username || "Guest"}</h3>
            <p className="text-sm text-gray-400">{userData?.email || "No email"}</p>
          </div>

          {/* Navigation Links */}
          <ul className="py-2 rounded-sm border-b border-gray-500">
            <li className="px-4 py-3 hover:bg-[#c2c0b9] rounded-md cursor-pointer flex justify-center items-center" onClick={() => navigate("/profile")}>
              Your Profile
            </li>
            <li className="px-4 py-3 hover:bg-[#c2c0b9] rounded-md cursor-pointer flex justify-center items-center" onClick={() => navigate("/repositories")}>
              Your Repositories
            </li>
            <li className="px-4 py-3 hover:bg-[#c2c0b9] rounded-md cursor-pointer flex justify-center items-center" onClick={() => navigate("/projects")}>
              Your Projects
            </li>
            <li className="px-4 py-3 hover:bg-[#c2c0b9] rounded-md cursor-pointer flex justify-center items-center" onClick={() => navigate("/settings")}>
            <CiSettings />
              Settings
            </li>
          </ul>


          {/* Documentation  */}
          <div className="border-b border-gray-500 py-3">
          <div
            className="px-6 py-3 mt-auto hover:bg-[#c2c0b9] flex items-center rounded-md cursor-pointer"
          >
            <CgWebsite className="mr-2" />
            YearBook Website
          </div>
          <div
            className="px-6 py-3 mt-auto hover:bg-[#c2c0b9] flex items-center rounded-md cursor-pointer"
          >
            <GrDocumentText className="mr-2" />
            YearBook Docs
          </div>
          <div
            className="px-6 py-3 mt-auto hover:bg-[#c2c0b9] flex items-center rounded-md cursor-pointer"
            href="buymeacoffee.com/adewaleezee"
          >
            <GoPeople className="mr-2" />
            YearBook Support
          </div>
          </div>


          {/* Sign Out Button */}
          <div
            className="px-6 py-3 mt-auto hover:bg-red-500 flex items-center rounded-md cursor-pointer"
            onClick={() => navigate("/")}
          >
            <FaSignOutAlt className="mr-2" />
            Sign Out
          </div>

          {/* Close Button */}
          <button className="absolute top-4 right-4 text-xl hover:text-red-500" onClick={toggleSidebar}>
            <CgClose />
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;
