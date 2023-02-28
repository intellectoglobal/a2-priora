import React from "react";
import "./AdminNavBar.css";
import { Link } from "react-router-dom";
import Logo from "../../../src/Assets/logo.svg";
import Ripples from "react-ripples";

const AdminNavBar = () => {
  return (
    <>
      <div className="adminnav-container">
        <div className="logo">
          <img src={Logo} alt="" />
          <h1>A2PRIORA</h1>
        </div>
        <div className="adminnav-links">
          <ul>
            <div
              style={{
                display: "inline-flex",
                borderRadius: 25,
                overflow: "hidden",
              }}
            >
              <Ripples>
                <li>
                  <Link to="/" className="links">
                    About US
                  </Link>
                </li>
              </Ripples>
            </div>
            <div
              style={{
                display: "inline-flex",
                borderRadius: 25,
                overflow: "hidden",
              }}
            >
              <Ripples>
                <li>
                  <Link to="/course" className="links">
                    Courses
                  </Link>
                </li>
              </Ripples>
            </div>
            <div
              style={{
                display: "inline-flex",
                borderRadius: 25,
                overflow: "hidden",
              }}
            >
              <Ripples>
                <li>
                  <Link to="" className="links">
                    Careers
                  </Link>
                </li>
              </Ripples>
            </div>
            <div
              style={{
                display: "inline-flex",
                borderRadius: 25,
                overflow: "hidden",
              }}
            >
              <Ripples>
                <li>
                  <Link to="" className="links">
                    Contact
                  </Link>
                </li>
              </Ripples>
            </div>
            <div
              style={{
                display: "inline-flex",
                borderRadius: 25,
                overflow: "hidden",
              }}
            >
              <Ripples>
                <li>
                  <Link to="" className="links">
                    Trainers
                  </Link>
                </li>
              </Ripples>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminNavBar;
