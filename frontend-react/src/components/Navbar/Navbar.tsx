import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../../src/Assets/logo.svg";
import Ripples from "react-ripples";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={Logo} alt="" />
        <h1>A2 PRIORA</h1>
      </div>
      <div className="nav-links">
        <ul>
          <Ripples>
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
          </Ripples>
          <Ripples>
            <li>
              <Link to="/course" className="links">
                Course
              </Link>
            </li>
          </Ripples>
          <Ripples>
            <li>
              <Link to="" className="links">
                About
              </Link>
            </li>
          </Ripples>
          <Ripples>
            <li>
              <Link to="" className="links">
                Career
              </Link>
            </li>
          </Ripples>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
