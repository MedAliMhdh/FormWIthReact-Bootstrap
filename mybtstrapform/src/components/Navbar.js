import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="Navbar">
        <div className="NavbarContainer">
          <h1>Famous JobBoard</h1>
          <ul>
            <li>Find Job</li>
            <li>Your CV </li>
            <li>Career advice</li>
            <li>Profile</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
