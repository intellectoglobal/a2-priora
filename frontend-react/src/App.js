import "./App.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Course from "./components/Course/Course.tsx";

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
