import React from "react";
import styled from "styled-components";
import asmLogo from "../img/ASM-logo.jpg";
// import below So Router works
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledNavBar>
      <h1>
        <Link className="asmLogo" id="logo" to="/">
          <img src={asmLogo} alt="ASM Logo" />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  background-color: #282828;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;

  .asmLogo img {
    height: 4rem;
    /* object-fit: cover; */
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    padding-left: 1rem;
    font-size: 1.6rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 6rem;
    /* As we will be doing some animation here */
    position: relative;
  }
`;

export default NavBar;
