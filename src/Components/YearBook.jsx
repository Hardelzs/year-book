import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { FaBookBookmark } from "react-icons/fa6";
import diaryData from "../data/data.json";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const YearBook = () => {
  const navigate = useNavigate()

  const handleNavigation = (entry) => {
    navigate(`/entry/${entry.id}`, { state:{ entry }});
  }
  const [slideIndex, setSlideIndex] = useState(1);

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

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-center text-3xl items-center md:gap-52 p-3 bg-red-400">
        {/* Icon and Brand Name */}
        <div className="flex justify-center items-center">
          <h1>
            <FaBookBookmark />
          </h1>
          <p>YBK</p>
        </div>
        {/* Search Input */}
        <div className="flex gap-2">
          <input
            type="text"
            className="border-black border rounded-full focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full border p-2 hover:border-none"
          >
            <IoSearchSharp />
          </button>
        </div>
        {/* Profile Icon */}
        <i>
          <CgProfile />
        </i>
      </div>

      {/* Diary Entries Section */}
      <div className="flex justify-center items-center mt-60 gap-10">
        <div className="relative max-w-4xl mx-auto">
          {/* Diary Entry Display */}
          {diaryData.entries.map((entry, index) => (
            <div
              key={index}
              className={`${
                slideIndex === index + 1 ? "block" : "hidden"
              } text-center`}
            >
              <div
                className={`flex-shrink-0 w-80 h-60 bg-green-400 justify-center items-center flex mx-auto ${
                  slideIndex === index + 1 ? "scale-110 w-96 h-80" : ""
                }`}
                onClick={() => handleNavigation(index)}
              >
                <h1 className="text-white font-bold text-lg">{entry.text}</h1>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800"
            onClick={() => plusSlides(-1)}
          >
            ❮
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800"
            onClick={() => plusSlides(1)}
          >
            ❯
          </button>

          {/* Thumbnails */}
          <div className="flex justify-center mt-5 space-x-2">
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
                <div className="w-20 h-12 bg-green-300 flex items-center justify-center">
                  <span className="text-xs font-bold text-black">{`Entry ${
                    index + 1
                  }`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearBook;
