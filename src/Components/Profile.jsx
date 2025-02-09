// import { IoSearchSharp } from "react-icons/io5";
import { FaBookBookmark } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Profile = ({ user }) => {
  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 bg-opacity-80 shadow-lg text-[#151a21]">
        {/* Icon and Brand Name */}
        <div className="flex items-center gap-2 text-3xl font-bold">
          <FaBookBookmark />
          <p className="font-mono">YearBook</p>
        </div>
        {/* Profile Icon */}
        <CgProfile
          size={30}
          className="cursor-pointer hover:text-gray-500 text-[#151a21]"
        />
      </div>

      {/* NavBar  */}
      <div className="flex gap-20">
        <div className="top-20 left-0 h-full w-72  bg-[#4e4c48] text-white shadow-lg z-50 transition-all duration-75">
          {/* Sidebar Content */}
          <div className="mt-4 px-6">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold">Your Details</h2>
            </div>

            {/* Dropdown Button */}
            <div className="mt-10 flex flex-col gap-5">
              {/* Dropdown Menu */}
              <div
                id="dropdown"
                className={`z-10  w-full divide-y divide-gray-100 rounded-lg shadow-sm`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href=""
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          green
        </div>
      </div>
    </div>
  );
};

export default Profile;
