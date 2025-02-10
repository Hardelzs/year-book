// import { IoSearchSharp } from "react-icons/io5";
import { FaBookBookmark } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {

  const navigate = useNavigate()
  
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
      <button onClick={() => navigate("/")} className="absolute top-5 left-5 mt-16 bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400">
        ⬅ Back to Yearbook
      </button>
      <div className="flex gap-20">
        <div className="fixed top-40 left-0 h-full w-72  bg-[#4e4c48] text-white shadow-lg z-50 transition-all duration-75">
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

          {/* button for each id  */}
        <div className="ml-96">

          <div className="flex gap-10 mt-24">

            <button className="border p-3 px-10">Profile</button>
            <button className="border p-3">Phone number</button>
            <button className="border p-3">Password Changer</button>
            <button className="border p-3">Personal Details</button>
            <button className="border p-3">Add Address</button>

          </div>

          {/* Profile */}
          <div>
            Phone number
          </div>
          {/* Phone number  */}
          <dialog>
            Phone number
          </dialog>
          {/* Password Changer  */}
          <div>
            Password Changer
          </div>
          {/* Personal Details  */}
          <div>
            Persoanle details
          </div>
          {/* Add Address  */}
          <div>
            Add 
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
