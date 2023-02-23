import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Course from "./Components/Course/Course";
import Login from "../src/AdminPage/Login/Login";

function App() {
  return (
    <div className="App">
       
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About/>}/> */}
        {/* <Route path="/careers" element={<Careers/>}/> */}
        <Route path="/course" element={<Course />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
