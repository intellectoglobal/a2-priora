import "./App.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./components/Home/Home.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Course from "./components/Course/Course.tsx";
=======
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Course from "./Components/Course/Course";
import Login from "../src/AdminPage/Login/Login";
>>>>>>> 95c5806222baa1f3a3e0d005b5592ac89575b0c4

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
