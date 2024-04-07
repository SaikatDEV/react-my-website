import React from "react";
import "../styles/navBar.scss";
import asmLogo from "../img/ASM-logo.jpg";
// import below So Router works
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <h1>
        <Link className="asmLogo" id="logo" to="/">
          <img src={asmLogo} alt="ASM Logo" />
          <h2>Saikat Barua</h2>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
