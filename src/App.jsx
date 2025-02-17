import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YearBook from "./Components/YearBook";
import Year2 from "./Components/Year2";
import Year1 from "./Components/Year1";
import Profile from "./Components/Profile";
// import Login from "./Components/LoginForm";
import LoginPage from "./Components/LoginPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage
         />} />
        <Route path="/YearBook" element={<YearBook />} />
        <Route path="/entry" element={<Year2/>} />
        <Route path="/Year1" element={<Year1/>} />
        <Route path="/Profile" element={<Profile/>} />
        {/* same add for others */}
      </Routes>
    </Router>
  );
}

export default App