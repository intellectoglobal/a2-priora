import "./App.css";
import 'antd/dist/reset.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import Course from "./components/Course/Course.tsx";
import Login from "../src/AdminPage/Login/Login";
import SponserForm from "./components/SponserForm/SponserForm.tsx";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Login />} />
        {/* <Route path="/about" element={<About/>}/> */}
        {/* <Route path="/careers" element={<Careers/>}/> */}
        <Route path="/course" element={<Course />}/>
        <Route path="/sform" element={<SponserForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
