import "./App.css";
 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Login from "../src/AdminPage/Login/Login";

function AdminRoute() {
  return (
      <div className="App">
          <Router>
      <Routes>
        <Route path="admin" element={<Login />} />
              </Routes>
              </Router>
       
    </div>
  );
}

export default AdminRoute;
