// import { IoSearchSharp } from "react-icons/io5";
import { FaBookBookmark } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("09155682325");
  const [isEditing, setIsEditing] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const handlePhoneChange = () => {
    if (isEditing && newPhoneNumber) {
      setPhoneNumber(newPhoneNumber);
    }
    setIsEditing(!isEditing);
    setNewPhoneNumber("");
  };

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
      <button
        onClick={() => navigate("/YearBook")}
        className="absolute top-5 left-5 mt-16 bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
      >
        ⬅ Back to Yearbook
      </button>
      <div className="flex gap-20">
        <div className="fixed top-40 left-0 h-full w-72  bg-[#4e4c48] text-white shadow-lg z-50 transition-all duration-75">
          {/* Sidebar Content */}
          <div className="mt-4 px-6">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold">Your Details {}</h2>

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
              <button
                className="border border-black p-3"
                onClick={() => setActiveSection("profile")}
              >
              Profile
              </button>
            <button
              className="border border-black p-3"
              onClick={() => setActiveSection("phones")}
            >
              Phone number
            </button>
            <button
              className="border border-black p-3"
              onClick={() => setActiveSection("password")}
            >
              Password Changer
            </button>
            <button
              className="border border-black p-3"
              onClick={() => setActiveSection("details")}
            >
              Personal Details
            </button>
            <button
              className="border border-black p-3"
              onClick={() => setActiveSection("address")}
            >
              Add Address
            </button>
          </div>

          {/* Phone Number Section */}
          {activeSection === "profile" && (
            <div className="border border-black w-full  p-6 mt-10 gap-10">
              <div className="border border-black w-full px-5 p-2">
                <p className="small font-mono">Phone number</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={newPhoneNumber}
                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                    className="border border-black rounded-md text-sm bg-transparent focus:outline-none p-2 w-full"
                    placeholder="Enter new profile Name"
                  />
                ) : (
                  <p>{phoneNumber}</p>
                )}
              </div>
              <div className="rounded-sm w-full  px-5 p-2 mt-3  text-center bg-[#4e4c48]">
                <button onClick={handlePhoneChange} className="text-white w-full">
                  {isEditing ? "Save" : "Change Profile name"}
                </button>
              </div>
            </div>
          )}


          {/* Phone Number Section */}
          {activeSection === "phones" && (
            <div className="border border-black w-full  p-6 mt-10 gap-10">
              <div className="border border-black w-full px-5 p-2">
                <p className="small font-mono">Phone number</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={newPhoneNumber}
                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                    className="border border-black rounded-md text-sm bg-transparent focus:outline-none p-2 w-full"
                    placeholder="Enter new phone number"
                  />
                ) : (
                  <p>{phoneNumber}</p>
                )}
              </div>
              <div className="rounded-sm w-full  px-5 p-2 mt-3  text-center bg-[#4e4c48]">
                <button onClick={handlePhoneChange} className="text-white w-full">
                  {isEditing ? "Save" : "Change phone number"}
                </button>
              </div>
            </div>
          )}


          {/* Phone Number Section */}
          {activeSection === "password" && (
            <div className="border border-black w-full  p-6 mt-10 gap-10">
              <div className="border border-black w-full px-5 p-2">
                <p className="small font-mono">Phone number</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={newPhoneNumber}
                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                    className="border border-black rounded-md text-sm bg-transparent focus:outline-none p-2 w-full"
                    placeholder="Enter your new Password"
                  />
                ) : (
                  <p>{phoneNumber}</p>
                )}
              </div>
              <div className="rounded-sm w-full  px-5 p-2 mt-3  text-center bg-[#4e4c48]">
                <button onClick={handlePhoneChange} className="text-white w-full">
                  {isEditing ? "Save" : "Change Password"}
                </button>
              </div>
            </div>
          )}


          {/* Phone Number Section */}
          {activeSection === "details" && (
            <div className="border border-black w-full  p-6 mt-10 gap-10">
              <div className="border border-black w-full px-5 p-2">
                <p className="small font-mono">Phone number</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={newPhoneNumber}
                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                    className="border border-black rounded-md text-sm bg-transparent focus:outline-none p-2 w-full"
                    placeholder="Enter new details"
                  />
                ) : (
                  <p>{phoneNumber}</p>
                )}
              </div>
              <div className="rounded-sm w-full  px-5 p-2 mt-3  text-center bg-[#4e4c48]">
                <button onClick={handlePhoneChange} className="text-white w-full">
                  {isEditing ? "Save" : "Change your Details"}
                </button>
              </div>
            </div>
          )}


          {/* Phone Number Section */}
          {activeSection === "address" && (
            <div className="border border-black w-full  p-6 mt-10 gap-10">
              <div className="border border-black w-full px-5 p-2">
                <p className="small font-mono">Phone number</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={newPhoneNumber}
                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                    className="border border-black rounded-md text-sm bg-transparent focus:outline-none p-2 w-full"
                    placeholder="Enter new Address"
                  />
                ) : (
                  <p>{phoneNumber}</p>
                )}
              </div>
              <div className="rounded-sm w-full  px-5 p-2 mt-3  text-center bg-[#4e4c48]">
                <button onClick={handlePhoneChange} className="text-white w-full">
                  {isEditing ? "Save" : "Change your address"}
                </button>
              </div>
            </div>
          )}


        </div>
      </div>
    </div>
  );
};

export default Profile;
