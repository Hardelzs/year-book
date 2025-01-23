import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YearBook from "./Components/YearBook";
import EntryPage from "./Components/EntryPage";
import Year1 from "./Components/Year1";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<YearBook></YearBook>} />
        <Route path="/entry" element={<EntryPage/>} />
        <Route path="/Year1" element={<Year1/>} />
        {/* same add for others */}
      </Routes>
    </Router>
  );
}

export default App;
