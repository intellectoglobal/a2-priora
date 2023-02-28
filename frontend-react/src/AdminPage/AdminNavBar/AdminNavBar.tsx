import React from "react";
import "./AdminNavBar.css";
import { Link } from "react-router-dom";
import Logo from "../../../src/Assets/logo.svg";
import Ripples from "react-ripples";
import AdminSideBar from "../AdminSideBar/AdminSideBar.tsx";

const AdminNavBar = () => {
    return (
      <>
        <div className="nav-container">
          <div className="logo">
            <img src={Logo} alt="" />
            <h1>A2PRIORA</h1>
          </div>
          <div className="nav-links">
            <ul>
              <Ripples>
                <li>
                  <Link to="/" className="links">
                    About US
                  </Link>
                </li>
              </Ripples>
              <Ripples>
                <li>
                  <Link to="/course" className="links">
                    Courses
                  </Link>
                </li>
              </Ripples>
              <Ripples>
                <li>
                  <Link to="" className="links">
                    Careers
                  </Link>
                </li>
              </Ripples>
              <Ripples>
                <li>
                  <Link to="" className="links">
                    Contact
                  </Link>
                </li>
              </Ripples>
              <Ripples>
                <li>
                  <Link to="" className="links">
                    Trainers
                  </Link>
                </li>
              </Ripples>
            </ul>
          </div>
           
        </div>
      </>
    );
};

export default AdminNavBar;
