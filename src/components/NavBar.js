import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <StyledNavBar>
      <h1>
        <a id="logo" href="#">
          ASM
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About Us</a>
        </li>
        <li>
          <a href="#">2. Our Work</a>
        </li>
        <li>
          <a href="#">3. Contact Us</a>
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
  /* flex: 3; */
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    /* flex: 1; */
    display: flex;
    list-style: none;
  }
  #logo {
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
