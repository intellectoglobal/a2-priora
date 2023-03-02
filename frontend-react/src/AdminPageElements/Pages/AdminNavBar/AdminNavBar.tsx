import React from "react";
import "./AdminNavBar.css";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/logo.svg";
import Ripples from "react-ripples";

const AdminNavBar = () => {
  return (
    <>
      <div className="adminnav-container">
        <div className="adminlogo">
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
                  <Link to="/" className="adminlinks">

                    About US
                </li>
                  </Link>
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
h
                <li>
                  <Link to="/course" className="adminlinks">

                    Courses
                </li>
                  </Link>
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
                  <Link to="" className="adminlinks">

                    Careers
                </li>
                  </Link>
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
                  <Link to="" className="adminlinks">

                    Contact
                </li>
                  </Link>
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
                  <Link to="" className="adminlinks">

                    Trainers
                </li>
                  </Link>
              </Ripples>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminNavBar;
