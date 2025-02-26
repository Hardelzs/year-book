/* eslint-disable react/prop-types */
import { useState } from "react";
import { CgClose, CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Navigation = ({ userData }) => {

  const [isOpen, setIsOpen] = useState(false);
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  // const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const navigate = useNavigate();

  return (
    <>
      {/* Profile Icon to Toggle Sidebar */}
      <div className="relative flex flex-col justify-center items-center">
        <CgProfile
          size={30}
          onClick={toggleSidebar}
          className="cursor-pointer hover:text-gray-500 text-[#151a21]"
        />
        {userData ? (
          <div>
            <p>{userData.username}</p>
          </div>
        ) : (
          <p></p>
        )}
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-72 rounded-l-xl bg-[#4e4c48] text-white shadow-lg z-50 transition-all duration-75">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-xl hover:text-red-500"
            onClick={toggleSidebar}
          >
            <CgClose />
          </button>

          {/* Sidebar Content */}
          <div className="mt-4 px-6">
            <div className="flex flex-col items-center">
              <img
                // src={userData.image || "https://via.placeholder.com/100"}
                alt="User"
                className="w-24 h-24 rounded-full mb-4"
              />
              {/* {userData ? (
                <div className="mt-4">
                  <p className="text-lg">Username: {userData.username}</p>
                  <p className="text-lg">Name: {userData.name}</p>
                  <p className="text-lg">Email: {userData.email}</p>
                  <p className="text-lg">Phone: {userData.phone}</p>
                </div>
              ) : (
                <p>Loading user data...</p>
              )} */}
            </div>

            {/* Dropdown Button */}
             <div className="mt-10 flex flex-col gap-5">



              <div
                id="dropdown"
                className={`w-full divide-y divide-gray-100 rounded-lg shadow-sm`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href=""
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => navigate("/Profile")}
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => navigate("/")}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
         </div>
      )}
    </>
  );
};

export default Navigation;
