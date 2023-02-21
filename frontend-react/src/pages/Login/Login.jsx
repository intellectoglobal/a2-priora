import React from "react";
import LoginPageSVG from "../../components/svg/LoginPageSVG.svg";
import Teaching from "../../components/svg/Teaching.svg"
import logo from "../../assects/logo.png" 
import "./Login.css"


export default function Login() {
    return (
        <div>
            <div>
                <img className="bgimg" alt="bg" src={LoginPageSVG}/>
                <div className="titleContainer">
                    <img className="logo" alt="logo" src={logo}/>
                    <h1 className="title">A2 PRIORA</h1>
                </div>
                  <img className="bannerimg" alt="banner" src={Teaching}/>
            </div>
        </div>
    )
}