import React, { useState } from "react";
import "./CashNet.css";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";
import Ripples from "react-ripples";
import { Link } from "react-router-dom";
import CashPopup from "./CashPopup/CashPopup.tsx";

function CashNet() {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <Navbar />
      <div className="cash-container">
        <div className="cash-content">
          <h1>Payment Type:Cash/Nets</h1>
          <h1>Grand Total: </h1>
        </div>
        <div className="cash-container1">
          <div className="cash-content1">
            <h2>
              You can make payment directly on the course date, to reception
              table before enter into the class.
            </h2>
            <h4 style={{ color: "red" }}>
              Note: If you reserve seat by cash payment method, your seat is
              reserved. But if you not able to attend the course, must need to
              inform us before one day. If you register and not attend the class
              and didn’t notify to us, we will ban your NRIC for next 1 Year.
            </h4>
          </div>
        </div>

        <div className="cash-buttons">
          <div
            style={{
              display: "inline-flex",
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <Ripples>
              <Link to="/payments" className="link-tab">
                <button type="submit" className="cash-btn">
                  Back
                </button>
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
              <Link to="/coursetable" className="link-tab">
                <button type="submit" className="cash-btn">
                  Cancel
                </button>
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
              <Link to="" className="link-tab">
                <button type="submit" className="cash-btn">
                  Done
                </button>
              </Link>
            </Ripples>
          </div>
        </div>
      </div>
      <div
        className="popup"
        style={{ display: popup === true ? "block" : "none" }}
      >
        {/* <CashPopup setPopup={setPopup}/> */}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default CashNet;
