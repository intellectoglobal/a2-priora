import "./App.css";
import "antd/dist/reset.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.tsx";
import Course from "./Components/Course/Course.tsx";
import Login from "./AdminPage/Login/Login";
import SponserForm from "./Components/SponserForm/SponserForm.tsx";
import CourseTable from "./Components/CourseTable/CourseTable.tsx";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Login />} />
        {/* <Route path="/about" element={<About/>}/> */}
        {/* <Route path="/careers" element={<Careers/>}/> */}
        <Route path="/course" element={<Course />} />
        <Route path="/sform/:course" element={<SponserForm/>} />
        <Route path="/coursetable" element={<CourseTable/>} />
      </Routes>
    </div>
  );
}

export default App;