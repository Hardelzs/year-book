import { useState } from "react";
import daysData from "../data/daysData.json";

const Year1 = () => {
  const [activeDay, setActiveDay] = useState(null); // Store the currently active (clicked) day

  const handleDayClick = (day) => {
    // Toggle the active day: if already active, set to null; otherwise, set to clicked day
    setActiveDay(activeDay === day.id ? null : day.id);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Year 1: 366 Days</h1>
      <div className="grid grid-cols-7 gap-4 grey">
        {daysData.days.map((day) => (
          <div
            key={day.id}
            className={`transition-all duration-75 cursor-pointer flex items-center justify-center rounded-lg ${
              activeDay === day.id ? "bg-blue-400 ml-96 mt-32 w-96 h-96 absolute" : "bg-gray-200 w-40 h-40 mb-[1rem]"
            }`}
            onClick={() => handleDayClick(day)}
          >
            {activeDay === day.id ? (
              <span className="text-white font-bold text-center">{day.text}</span>
            ) : (
              <span className="text-4xl">{day.icon}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Year1;
