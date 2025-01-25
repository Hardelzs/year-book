import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Profile Icon to Toggle Sidebar */}
      <div className="relative">
        <CgProfile
          size={30}
          onClick={toggleSidebar}
          className="cursor-pointer hover:text-gray-500 text-[#151a21]"
        />
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
            <h1>Cool</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
