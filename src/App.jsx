import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YearBook from "./Components/YearBook";
import EntryPage from "./Components/EntryPage";
import Year1 from "./Components/Year1";
import Profile from "./Components/Profile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<YearBook />} />
        <Route path="/entry" element={<EntryPage/>} />
        <Route path="/Year1" element={<Year1/>} />
        <Route path="/Profile" element={<Profile/>} />
        {/* same add for others */}
      </Routes>
    </Router>
  );
}

export default App;
