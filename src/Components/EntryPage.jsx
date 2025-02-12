import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EntryPage = () => {
  const navigate = useNavigate();
  const [days, setDays] = useState([
    { id: 1, icon: "🌞", text: "Day 1: A sunny start!" },
    { id: 2, icon: "☁️", text: "Day 2: Cloudy skies." },
    { id: 3, icon: "🌧️", text: "Day 3: Rainy and calm." },
  ]);

  const [activeDay, setActiveDay] = useState(null);
  const [newDay, setNewDay] = useState({ icon: "", text: "" });

  const handleDayClick = (day) => {
    setActiveDay(activeDay === day.id ? null : day.id);
  };

  const handleAddDay = () => {
    if (newDay.icon && newDay.text) {
      setDays([...days, { id: Date.now(), ...newDay }]);
      setNewDay({ icon: "", text: "" });
    }
  };

  const handleEditDay = (id, updatedDay) => {
    setDays(
      days.map((day) => (day.id === id ? { ...day, ...updatedDay } : day))
    );
  };

  const handleDeleteDay = (id) => {
    setDays(days.filter((day) => day.id !== id));
  };

  return (
    <div className="flex flex-col items-center mt-14">
      <button
        onClick={() => navigate("/")}
        className="absolutr top-5 left-5 bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 "
      >
        ↩️ Back to Yearbook
      </button>
      <h1 className="text-2xl font-bold mb-6">Year 2: {days.length} Days</h1>
      <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
        {days.map((day) => (
          <div
            key={day.id}
            className={`transition-all duration-75 cursor-pointer flex items-center justify-center rounded-lg ${
              activeDay === day.id
                ? "bg-blue-400 md:ml-96 ml-52 mt-32 w-96 h-96 absolute"
                : "bg-gray-200 w-40 h-40"
            }`}
            onClick={() => handleDayClick(day)}
          >
            {activeDay === day.id ? (
              <div>
                <input
                  value={day.text}
                  onChange={(e) =>
                    handleEditDay(day.id, { text: e.target.value })
                  }
                />
                <button onClick={() => handleDeleteDay(day.id)}>Delete</button>
              </div>
            ) : (
              <span className="text-4xl">{day.icon}</span>
            )}
          </div>
        ))}
      </div>
      <div className="top-0 absolute">
        <input
          type="text"
          placeholder="Icon"
          value={newDay.icon}
          onChange={(e) => setNewDay({ ...newDay, icon: e.target.value })}
        />
        <input
          type="text"
          placeholder="Text"
          value={newDay.text}
          onChange={(e) => setNewDay({ ...newDay, text: e.target.value })}
        />
        <button onClick={handleAddDay}>Add Day</button>
      </div>
    </div>
  );
};

export default EntryPage;
