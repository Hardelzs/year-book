import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import YearBook from "./Components/YearBook"
import Null from "./Components/Null"


const App = () => {
  return (
    <Router>
      {/* <nav>
        <Link to="/" className="">YearBook</Link> | <Link to="/null">Null</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<YearBook/>}></Route>
        <Route path="/null" element={<Null />}></Route>
      </Routes>
    </Router>
  )
}

export default App