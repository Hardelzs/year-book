import { IoSearchSharp } from "react-icons/io5";
import { FaBookBookmark } from "react-icons/fa6";
import diaryData from "../Data/Data.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiOrganicmaps } from "react-icons/si";
import Navigation from "./Navigation";
import LoginForm from "./LoginForm";

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

  const currentSlide = (n) => {
    showSlides(n);
  };

  const handleSearch = () => {
    const entry = diaryData.entries.find(
      (entry, index) =>
        `Year ${index + 1}`.toLowerCase() === searchQuery.toLowerCase()
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

        {/* sidebar  */}
        <Navigation user={user} onLogout={handleLogout} />
      </div>

      {/* Diary Entries Section */}
      <div className="flex justify-center items-center mt-20">
        <div className="relative max-w-4xl mx-auto">
          {/* Diary Entry Display */}
          {diaryData.entries.map((entry, index) => (
            <div
              key={entry.id}
              className={`${
                slideIndex === index + 1 ? "block" : "hidden"
              } text-center`}
            >
              <div
                className={`flex-shrink-0 w-80 h-60 rounded-2xl bg-[#151111b7] justify-center items-center flex mx-auto cursor-pointer ${
                  slideIndex === index + 1 ? "scale-110 w-96 h-80" : ""
                }`}
                onClick={() => handleNavigation(entry)}
              >
                <h1 className="text-white font-bold text-lg">{entry.text}</h1>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            className="absolute top-40 left-24 transform -translate-y-1/2 text-[#151a21] p-2 rounded-md hover:bg-gray-500"
            onClick={() => plusSlides(-1)}
          >
            ❮
          </button>
          <button
            className="absolute top-40 right-24 transform -translate-y-1/2 text-[#151a21] p-2 rounded-md hover:bg-gray-500"
            onClick={() => plusSlides(1)}
          >
            ❯
          </button>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 md:flex justify-center mt-10 space-x-2">
            {diaryData.entries.map((entry, index) => (
              <div
                key={index}
                className={`cursor-pointer border-2 ${
                  slideIndex === index + 1
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => currentSlide(index + 1)}
              >
                <div className="w-24 h-16 rounded-xl year bg-[#151111b7] flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{`Year ${
                    index + 1
                  }`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contributors Section */}
      <div className="overflow-hidden">
        <div className="flex justify-center animate-scroll text-[#151a21] text-center mt-10 gap-32">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="flex flex-col text-center">
              <i>
                <SiOrganicmaps size={70} />
              </i>
              <p>Orlando</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YearBook;
