import "./Navbar.css";
import React from "react";
import img from "./e-commereceWebsite/Images/website.image.png";

function Navbar() {
  return (
    <div>
            <div className="navbar">
            <ul className="navbar_flex">
               <li className="navbar_values"><img src={img} className="navbar_image" alt="website"></img>LIGHTROOM<span className="span">@GET AND CHILL</span></li>
                <li className="navbar_values">Home</li>
                <li className="navbar_values">About</li>
                <li className="navbar_values">Services</li>
                <li className="navbar_values">Logout</li>
            </ul>
            </div>
    </div>
  )
}

export default Navbar