import { IoSearchSharp } from "react-icons/io5";
import { FaBookBookmark } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import diaryData from "../data/data.json";
import { SiOrganicmaps } from "react-icons/si";
import LoginForm from "./LoginForm";
import Navigation from "./Navigation";


const YearBook = () => {
  const navigate = useNavigate();

  const idToComponentMap = {
    1: "/Year1",
    2: "/entry",
    3: "/sandwich",
    4: "/fun",
    5: "/diary5",
    6: "/diary6",
    7: "/diary7",
    8: "/diary8",
  };

  const handleNavigation = (entry) => {
    const route = idToComponentMap[entry.id];
    if (route) {
      navigate(route);
    } else {
      console.error(`No route found for ID: ${entry.id}`);
    }
  };

  const [slideIndex, setSlideIndex] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const showSlides = (n) => {
    if (n > diaryData.entries.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(diaryData.entries.length);
    } else {
      setSlideIndex(n);
    }
  };

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const handleSearch = () => {
    const entry = diaryData.entries.find(
      (entry, index) => `Year ${index + 1}`.toLowerCase() === searchQuery.toLowerCase()
    );
    if (entry) {
      handleNavigation(entry);
    } else {
      alert("No matching year found.");
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        plusSlides(-1);
      } else if (event.key === "ArrowRight") {
        plusSlides(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex]);

  if (!user) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 bg-opacity-80 shadow-lg text-[#151a21]">
        {/* Icon and Brand Name */}
        <div className="flex items-center gap-2 text-3xl font-bold">
          <FaBookBookmark />
          <p className="font-mono">YearBook</p>
        </div>
        {/* Search Input */}
        <div className="flex gap-2 items-center">
          <input
            type="text"
            className="border border-black bg-transparent text-[#151a21] px-3 py-1 rounded-full focus:outline-none"
            placeholder="Search Year Book"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="button"
            className="rounded-full p-3 border border-black hover:bg-gray-200"
            onClick={handleSearch}
          >
            <IoSearchSharp />
          </button>
        </div>
        {/* Profile Icon */}
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {user.name}
        </button>
      </div>

      {/* Sidebar */}
      {sidebarOpen && <Navigation user={user} onLogout={handleLogout} />}

      {/* Main Content */}
      <div className="mt-20">
        {/* Your existing code for displaying diary entries */}
      </div>
    </div>
  );
};

export default YearBook;
