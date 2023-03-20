import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Login from './pages/Login'
const App = () => {
  return (
      <Router>
        <Navbar />
        <div className="container mx-auto px-2 text-center">
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Login" element={<Login />}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;