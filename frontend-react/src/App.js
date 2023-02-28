import "./App.css";
import "antd/dist/reset.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.tsx";
import Course from "./Components/Course/Course.tsx";
import Login from "./AdminPage/Login/Login.tsx";
import SponserForm from "./Components/SponserForm/SponserForm.tsx";
import AdminHome from "./AdminPage/Home/AdminHome.tsx"

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/adminHome" element={<AdminHome />} />
        {/* <Route path="/about" element={<About/>}/> */}
        {/* <Route path="/careers" element={<Careers/>}/> */}
        <Route path="/course" element={<Course />} />
        <Route path="/sform/:course" element={<SponserForm/>} />
      </Routes>
    </div>
  );
}

export default App;