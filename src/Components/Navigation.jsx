/* eslint-disable react/prop-types */
import { useState } from "react";
import { CgClose, CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Navigation = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);


  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const navigate = useNavigate()

  return (
    <>
      {/* Profile Icon to Toggle Sidebar */}
      <div className="relative flex flex-col justify-center items-center">
        <CgProfile
          size={30}
          onClick={toggleSidebar}
          className="cursor-pointer hover:text-gray-500 text-[#151a21]"
        />
        {/* {user.username} */}
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
                // src={user.image || "https://via.placeholder.com/100"}
                alt="User"
                className="w-24 h-24 rounded-full mb-4"
              />
              {/* <h2 className="text-xl font-bold">{user.name}</h2> */}
              {/* <p>{user.username}</p> */}
              {/* <p>{user.email}</p> */}
            </div>

            {/* Dropdown Button */}
            <div className="mt-10 flex flex-col gap-5">
              <button
                aria-expanded={isDropdownOpen}
                aria-controls="dropdown"
                onClick={toggleDropdown}
                className="text-white w-full hover:ring-2 active:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex gap-12 items-center"
                type="button"
              >
                Option 1{" "}
                <svg
                  className="w-2.5 h-2.5 ml-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                id="dropdown"
                className={`z-10 ${isDropdownOpen ? "block" : "hidden"} w-full divide-y divide-gray-100 rounded-lg shadow-sm`}
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
                      onClick={onLogout}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>

              {/* Additional Option */}
              <button className="text-white w-full hover:ring-2 active:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex gap-12 items-center">
                Option 2 {" "}
              <svg
                  className="w-2.5 h-2.5 ml-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
